import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import Stripe from "npm:stripe@17.7.0";
import { createClient } from "npm:@supabase/supabase-js@2";

// ============================================================
// POST /functions/v1/stripe-webhook
//
// Second, independent Stripe webhook endpoint (registered separately in
// the Stripe Dashboard from wacrm-main's own /api/billing/webhook — same
// Stripe account, own signing secret, own registration). Its ONLY job is
// to bootstrap a wacrm-main account for a buyer who paid on THIS website
// before they had one. Once accounts.stripe_customer_id is set here,
// wacrm-main's own existing webhook (untouched) owns every subsequent
// lifecycle event (renewals, cancellations, payment failures) for that
// subscription — this function deliberately handles ONLY
// checkout.session.completed and nothing else.
//
// Column semantics below intentionally mirror wacrm-main's
// src/lib/billing/sync-subscription.ts::applyStripeSubscriptionToAccount
// (read there, not modified — reimplemented here since it can't be
// imported across repos/runtimes).
//
// wacrm-main is NEVER modified by this function. It only:
//   1. Calls wacrm-main's Supabase Auth Admin API (service-role key) to
//      create a user — which fires wacrm-main's own pre-existing
//      `handle_new_user()` trigger (supabase/migrations/
//      017_account_sharing.sql), auto-provisioning `accounts`+`profiles`
//      exactly as an in-app signup would.
//   2. Writes the purchased plan onto the `accounts` row that trigger
//      created, using the same columns wacrm-main's own webhook writes.
// ============================================================

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey, Stripe-Signature",
};

interface CheckoutMetadata {
  tier?: string;
  interval?: string;
}

function isKnownTier(value: unknown): value is "pro" | "business" {
  return value === "pro" || value === "business";
}

async function sendResendEmail(params: { to: string; subject: string; html: string }) {
  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) {
    console.error("[stripe-webhook] RESEND_API_KEY not configured — skipping email send");
    return;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "NexusBot <noreply@nexus-aurora.com>",
      to: [params.to],
      subject: params.subject,
      html: params.html,
    }),
  });
  if (!res.ok) {
    console.error("[stripe-webhook] Resend send failed:", res.status, await res.text());
  }
}

async function notifyInternalAlert(message: string) {
  const alertTo = Deno.env.get("BILLING_ALERT_EMAIL") ?? "sales@nexus-aurora.com";
  await sendResendEmail({
    to: alertTo,
    subject: "⚠️ NexusBot checkout needs manual attention",
    html: `<p>${message}</p>`,
  });
}

// Small retry helper — wacrm-main's handle_new_user() trigger runs
// inside the same transaction as the auth.users insert, so the
// profiles row should already exist by the time generateLink() returns.
// This retry is just insurance against replica-read lag, and against
// the trigger's own `EXCEPTION WHEN OTHERS ... RETURN NEW` swallowing a
// provisioning failure silently.
async function findAccountIdByUserId(
  wacrm: ReturnType<typeof createClient>,
  userId: string,
): Promise<string | null> {
  for (let attempt = 0; attempt < 3; attempt++) {
    const { data, error } = await wacrm
      .from("profiles")
      .select("account_id")
      .eq("user_id", userId)
      .maybeSingle();
    if (error) {
      console.error("[stripe-webhook] profiles lookup by user_id failed:", error);
    } else if (data?.account_id) {
      return data.account_id as string;
    }
    if (attempt < 2) await new Promise((r) => setTimeout(r, 300));
  }
  return null;
}

async function handleCheckoutCompleted(
  stripe: Stripe,
  wacrm: ReturnType<typeof createClient>,
  session: Stripe.Checkout.Session,
) {
  const email = session.customer_details?.email ?? session.customer_email;
  const metadata = (session.metadata ?? {}) as CheckoutMetadata;
  const tier = metadata.tier;
  const interval = metadata.interval;

  if (!email) {
    console.error("[stripe-webhook] checkout.session.completed with no buyer email", session.id);
    return;
  }
  if (!isKnownTier(tier)) {
    console.error("[stripe-webhook] checkout.session.completed with unknown tier metadata", session.id, tier);
    return;
  }

  const customerId = typeof session.customer === "string" ? session.customer : session.customer?.id;
  const subscriptionId =
    typeof session.subscription === "string" ? session.subscription : session.subscription?.id;
  if (!customerId || !subscriptionId) {
    console.error("[stripe-webhook] checkout.session.completed missing customer/subscription", session.id);
    return;
  }

  // Look up whether this email already has a wacrm-main account.
  const { data: existingProfile, error: lookupErr } = await wacrm
    .from("profiles")
    .select("user_id, account_id")
    .eq("email", email)
    .maybeSingle();
  if (lookupErr) {
    console.error("[stripe-webhook] profiles lookup by email failed:", lookupErr);
  }

  let accountId: string | null = existingProfile?.account_id ?? null;
  let isNewBuyer = false;

  if (!accountId) {
    isNewBuyer = true;
    const siteUrl = (Deno.env.get("SITE_URL") ?? "https://nexus-aurora.com").replace(/\/+$/, "");
    const { data: linkData, error: linkErr } = await wacrm.auth.admin.generateLink({
      type: "invite",
      email,
      options: { redirectTo: `${siteUrl}/nexusbot/set-password` },
    });
    if (linkErr || !linkData?.user) {
      // Someone may have signed up directly in wacrm-main between our
      // email lookup and now (or generateLink can also fail this way
      // for an email that already exists there). Re-check by email
      // before giving up.
      console.warn("[stripe-webhook] generateLink invite failed, re-checking for existing user:", linkErr);
      const { data: retryProfile } = await wacrm
        .from("profiles")
        .select("account_id")
        .eq("email", email)
        .maybeSingle();
      if (retryProfile?.account_id) {
        accountId = retryProfile.account_id as string;
        isNewBuyer = false;
      } else {
        await notifyInternalAlert(
          `Paid checkout (session ${session.id}, email ${email}) but could not create or find a wacrm-main account. Manual account creation needed.`,
        );
        return;
      }
    } else {
      accountId = await findAccountIdByUserId(wacrm, linkData.user.id);
      if (!accountId) {
        await notifyInternalAlert(
          `Paid checkout (session ${session.id}, email ${email}) — Supabase Auth user was created but no accounts/profiles row appeared after retries. wacrm-main's handle_new_user() trigger may have failed silently. Manual account creation needed.`,
        );
        return;
      }

      const actionLink = linkData.properties?.action_link;
      if (actionLink) {
        await sendResendEmail({
          to: email,
          subject: "You're in! Set your password to log into NexusBot",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
              <div style="background: linear-gradient(135deg, #1d4ed8, #0d9488); padding: 32px; border-radius: 12px 12px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 22px;">Welcome to NexusBot 🎉</h1>
              </div>
              <div style="background: #f8fafc; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
                <p>Thanks for subscribing! Your NexusBot account is ready — set a password to log in:</p>
                <p style="margin: 24px 0;">
                  <a href="${actionLink}" style="background:#1d4ed8;color:white;padding:12px 24px;border-radius:9999px;text-decoration:none;font-weight:600;">Set your password</a>
                </p>
                <p style="color:#64748b;font-size:13px;">This link is valid for a limited time. If it expires, contact us and we'll send a new one.</p>
              </div>
            </div>
          `,
        });
      }
    }
  }

  if (!accountId) {
    console.error("[stripe-webhook] no accountId resolved after all fallbacks", session.id, email);
    return;
  }

  // Fetch the full subscription for current_period_end — the Checkout
  // Session alone doesn't reliably carry it (same reason wacrm-main's
  // own webhook does this).
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  const currentPeriodEnd =
    (subscription as unknown as { current_period_end?: number }).current_period_end ??
    (subscription.items.data[0] as unknown as { current_period_end?: number } | undefined)
      ?.current_period_end;

  const { data: currentAccount } = await wacrm
    .from("accounts")
    .select("plan_tier, plan_status")
    .eq("id", accountId)
    .maybeSingle();

  // Idempotency guard #2: if this account already tracks this exact
  // subscription, skip re-writing (defense in depth alongside the
  // stripe_webhook_events table checked by the caller).
  const { data: alreadyLinked } = await wacrm
    .from("accounts")
    .select("stripe_subscription_id")
    .eq("id", accountId)
    .maybeSingle();
  if (alreadyLinked?.stripe_subscription_id === subscriptionId) {
    return;
  }

  const { error: updateErr } = await wacrm
    .from("accounts")
    .update({
      plan_tier: tier,
      plan_status: "active",
      plan_updated_at: new Date().toISOString(),
      stripe_customer_id: customerId,
      stripe_subscription_id: subscriptionId,
      current_period_end: currentPeriodEnd ? new Date(currentPeriodEnd * 1000).toISOString() : null,
      is_manual: false,
    })
    .eq("id", accountId);
  if (updateErr) {
    console.error(`[stripe-webhook] failed to update account ${accountId}:`, updateErr);
    throw updateErr;
  }

  await wacrm.from("account_plan_history").insert({
    account_id: accountId,
    old_tier: currentAccount?.plan_tier ?? "trial",
    new_tier: tier,
    old_status: currentAccount?.plan_status ?? "active",
    new_status: "active",
    changed_by_user_id: null,
    reason: "website_checkout_completed",
  });

  // Repeat purchase / upgrade from an existing account — no password
  // email needed, they already have credentials.
  if (!isNewBuyer) {
    await sendResendEmail({
      to: email,
      subject: `Your NexusBot plan is now ${tier === "pro" ? "Pro" : "Business"}`,
      html: `<p>Your NexusBot subscription has been updated to the ${tier === "pro" ? "Pro" : "Business"} plan. Log in any time to see your new limits.</p>`,
    });
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  const signature = req.headers.get("Stripe-Signature");
  const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
  const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");

  if (!webhookSecret || !stripeSecretKey) {
    console.error("[stripe-webhook] STRIPE_WEBHOOK_SECRET or STRIPE_SECRET_KEY not configured");
    return new Response("Webhook not configured", { status: 503 });
  }
  if (!signature) {
    return new Response("Missing Stripe-Signature header", { status: 400 });
  }

  const stripe = new Stripe(stripeSecretKey, {
    httpClient: Stripe.createFetchHttpClient(),
  });

  const rawBody = await req.text();
  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error("[stripe-webhook] signature verification failed:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  // This function's OWN Supabase project (auto-injected env vars —
  // every Edge Function gets these for free, no manual secret needed).
  const own = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  // Idempotency: Stripe can and will redeliver events.
  const { error: insertEventErr } = await own
    .from("stripe_webhook_events")
    .insert({ event_id: event.id });
  if (insertEventErr) {
    // Unique violation => already processed.
    if (insertEventErr.code === "23505") {
      return new Response(JSON.stringify({ received: true, duplicate: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
    console.error("[stripe-webhook] failed to record event id:", insertEventErr);
  }

  // wacrm-main's Supabase project — the app this feature provisions
  // accounts in. Never written to except via this function's explicit,
  // reviewed writes below.
  const wacrmUrl = Deno.env.get("WACRM_SUPABASE_URL");
  const wacrmServiceKey = Deno.env.get("WACRM_SUPABASE_SERVICE_ROLE_KEY");
  if (!wacrmUrl || !wacrmServiceKey) {
    console.error("[stripe-webhook] WACRM_SUPABASE_URL/WACRM_SUPABASE_SERVICE_ROLE_KEY not configured");
    return new Response("Not configured", { status: 503 });
  }
  const wacrm = createClient(wacrmUrl, wacrmServiceKey);

  try {
    if (event.type === "checkout.session.completed") {
      await handleCheckoutCompleted(stripe, wacrm, event.data.object as Stripe.Checkout.Session);
    }
    // All other event types (customer.subscription.updated/deleted,
    // invoice.paid/payment_failed, etc.) are intentionally NOT handled
    // here — see header comment. wacrm-main's own existing webhook
    // owns those once stripe_customer_id is set above.
  } catch (err) {
    console.error("[stripe-webhook] handler error:", err);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});
