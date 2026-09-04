import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import Stripe from "npm:stripe@17.7.0";

// ============================================================
// POST /functions/v1/create-checkout
//
// Creates a Stripe Checkout Session for one of the 4 NexusBot plans
// (Pro/Business x Monthly/Annual) — called from the marketing site's
// pricing page (src/components/nexusbot/NexusBotPricing.tsx).
//
// Unlike wacrm-main's in-app checkout (src/app/api/billing/checkout/
// route.ts), there is no logged-in account yet at this point — the
// buyer hasn't signed up. So this endpoint does NOT create/reuse a
// Stripe Customer or set `client_reference_id`; it just creates a bare
// subscription-mode Checkout Session and lets Stripe's own hosted page
// collect the buyer's email. `stripe-webhook` (checkout.session.
// completed) is what turns that email into a real wacrm-main account
// after payment succeeds.
//
// Same Stripe account/Price IDs as wacrm-main on purpose — see
// STRIPE_PRICE_* secrets below, copied verbatim from wacrm-main's
// .env.local so the two systems' plans never drift apart.
// ============================================================

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

type CheckoutTier = "pro" | "business";
type BillingInterval = "monthly" | "annual";

function isCheckoutTier(value: unknown): value is CheckoutTier {
  return value === "pro" || value === "business";
}

function isBillingInterval(value: unknown): value is BillingInterval {
  return value === "monthly" || value === "annual";
}

// Mirrors wacrm-main's src/lib/billing/stripe-plans.ts PRICE_ENV_VAR map
// exactly (tier+interval -> env var name), reimplemented here since it
// can't be imported across repos.
const PRICE_ENV_VAR: Record<CheckoutTier, Record<BillingInterval, string>> = {
  pro: {
    monthly: "STRIPE_PRICE_PRO_MONTHLY",
    annual: "STRIPE_PRICE_PRO_ANNUAL",
  },
  business: {
    monthly: "STRIPE_PRICE_BUSINESS_MONTHLY",
    annual: "STRIPE_PRICE_BUSINESS_ANNUAL",
  },
};

function stripePriceId(tier: CheckoutTier, interval: BillingInterval): string {
  const envVar = PRICE_ENV_VAR[tier][interval];
  const value = Deno.env.get(envVar);
  if (!value) {
    throw new Error(`${envVar} is not configured`);
  }
  return value;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const { tier, interval } = body ?? {};

    if (!isCheckoutTier(tier) || !isBillingInterval(interval)) {
      return new Response(
        JSON.stringify({ error: "tier must be 'pro'|'business' and interval must be 'monthly'|'annual'" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const secretKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!secretKey) {
      return new Response(JSON.stringify({ error: "Stripe is not configured yet" }), {
        status: 503,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    let priceId: string;
    try {
      priceId = stripePriceId(tier, interval);
    } catch (err) {
      console.error("[create-checkout]", err);
      return new Response(JSON.stringify({ error: "That plan is not configured yet" }), {
        status: 503,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const stripe = new Stripe(secretKey, {
      httpClient: Stripe.createFetchHttpClient(),
    });

    const siteUrl = (Deno.env.get("SITE_URL") ?? "https://nexus-aurora.com").replace(/\/+$/, "");

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { tier, interval, source: "nexusbot_website" },
      success_url: `${siteUrl}/nexusbot/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/nexusbot#pricing`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("[create-checkout] unexpected error:", err);
    return new Response(JSON.stringify({ error: "Something went wrong. Please try again." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
