import React, { useState } from 'react';
import { Check, X, MessageCircle, Loader2 } from 'lucide-react';
import { nexusBotPlans, nexusBotWhatsAppLink } from './constants';

const NexusBotPricing: React.FC = () => {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const [loadingTier, setLoadingTier] = useState<'pro' | 'business' | null>(null);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const isAnnual = billing === 'annual';

  const handleCheckout = async (tier: 'pro' | 'business') => {
    setCheckoutError(null);
    setLoadingTier(tier);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ tier, interval: billing }),
        }
      );
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Failed to start checkout');
      }
      window.location.assign(data.url);
    } catch (err) {
      setCheckoutError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
      setLoadingTier(null);
    }
  };

  return (
    <section id="pricing" className="py-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ink">Plans that grow with you</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start free for 7 days. Upgrade when your customers start replying faster than your
            team can type.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-12">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-ink' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button
            role="switch"
            aria-checked={isAnnual}
            aria-label="Toggle annual billing"
            onClick={() => setBilling(isAnnual ? 'monthly' : 'annual')}
            className={`relative h-7 w-12 rounded-full transition-colors ${
              isAnnual ? 'bg-primary-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                isAnnual ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? 'text-ink' : 'text-gray-500'}`}>
            Annual
          </span>
          <span className="text-xs font-semibold bg-accent-soft text-primary-800 px-2 py-1 rounded-full">
            Save 20%
          </span>
        </div>

        {checkoutError && (
          <div className="max-w-3xl mx-auto mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 text-center">
            {checkoutError}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nexusBotPlans.map((plan) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 flex flex-col bg-white border ${
                  plan.featured
                    ? 'border-primary-600 shadow-brand ring-1 ring-primary-600'
                    : 'border-gray-200'
                }`}
              >
                {plan.tag && (
                  <span className="absolute -top-3 left-6 text-xs font-semibold bg-primary-600 text-white px-3 py-1 rounded-full">
                    {plan.tag}
                  </span>
                )}
                <h3 className="text-xl font-bold text-ink mt-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 mt-1 mb-4">{plan.tagline}</p>

                <div className="font-mono mb-1">
                  {plan.customPrice ? (
                    <span className="text-3xl font-bold text-ink">{plan.customPrice}</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold text-ink">RM {price}</span>
                      <span className="text-sm text-gray-500"> / mo</span>
                    </>
                  )}
                </div>
                <p className="text-xs text-gray-500 mb-6">
                  {plan.customNote ||
                    (price === 0
                      ? plan.billedNote
                      : isAnnual
                        ? `RM ${(price! * 12).toLocaleString()} billed annually · save 20%`
                        : plan.billedNote)}
                </p>

                {plan.checkoutTier ? (
                  <button
                    type="button"
                    onClick={() => handleCheckout(plan.checkoutTier!)}
                    disabled={loadingTier !== null}
                    className={`w-full text-center px-4 py-3 rounded-full font-semibold transition-colors mb-6 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed ${
                      plan.featured
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                    }`}
                  >
                    {loadingTier === plan.checkoutTier && (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    )}
                    {loadingTier === plan.checkoutTier ? 'Redirecting…' : plan.ctaLabel}
                  </button>
                ) : (
                  <a
                    href={nexusBotWhatsAppLink(`Hi, I'm interested in the NexusBot ${plan.name} plan.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center px-4 py-3 rounded-full font-semibold transition-colors mb-6 ${
                      plan.featured
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                    }`}
                  >
                    {plan.ctaLabel}
                  </a>
                )}

                <ul className="space-y-3 mt-auto">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-2 text-sm">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-4 w-4 text-gray-300 shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10 space-y-4 max-w-3xl mx-auto">
          <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4">
            <MessageCircle className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">
              <strong className="text-ink">WhatsApp conversation fees from Meta are billed separately, at cost</strong>{' '}
              — no markup. Meta is changing how service-window replies are billed from October
              2026; we'll flag any impact on your plan before it takes effect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NexusBotPricing;
