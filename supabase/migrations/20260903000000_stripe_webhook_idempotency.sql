-- Idempotency table for the stripe-webhook Edge Function
-- (supabase/functions/stripe-webhook/index.ts).
--
-- Stripe can and will redeliver the same event more than once. The
-- webhook inserts the incoming event.id here before doing any other
-- work; a unique-violation on that insert means "already processed" and
-- the handler returns early without re-provisioning an account or
-- re-sending an email.
--
-- Service-role only (the Edge Function's own project client) — no
-- client-facing policies, RLS enabled with no policies as
-- defense-in-depth, matching this repo's existing RLS-everywhere
-- convention (see fix_contact_submissions_rls_policy.sql /
-- fix_appointments_rls_policies.sql).

CREATE TABLE IF NOT EXISTS public.stripe_webhook_events (
  event_id text PRIMARY KEY,
  processed_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.stripe_webhook_events ENABLE ROW LEVEL SECURITY;
