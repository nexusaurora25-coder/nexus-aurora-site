// TODO: Confirm with stakeholder whether NexusBot should use its own dedicated
// WhatsApp number, or continue sharing the main Nexus Aurora line below.
export const NEXUSBOT_WHATSAPP_NUMBER = '60128859759';

export const nexusBotWhatsAppLink = (message: string) =>
  `https://wa.me/${NEXUSBOT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export interface NexusBotPlan {
  name: string;
  tagline: string;
  priceMonthly: number | null;
  priceAnnual: number | null;
  customPrice?: string;
  customNote?: string;
  billedNote: string;
  featured?: boolean;
  tag?: string;
  ctaLabel: string;
  features: { text: string; included: boolean }[];
  /** Set only on self-serve paid plans (Pro/Business) — Trial and
   * Enterprise omit this and fall back to the WhatsApp CTA instead.
   * When present, the pricing card's CTA creates a real Stripe Checkout
   * Session (via the create-checkout Edge Function) for this tier
   * instead of linking out to a static Payment Link. */
  checkoutTier?: 'pro' | 'business';
}

export const nexusBotPlans: NexusBotPlan[] = [
  {
    name: 'Trial',
    tagline: 'Try it before your customers notice',
    priceMonthly: 0,
    priceAnnual: 0,
    billedNote: 'No card required · 7 days',
    ctaLabel: 'Start free trial',
    features: [
      { text: '1 connected channel (WhatsApp or Telegram)', included: true },
      { text: '1 team seat', included: true },
      { text: 'Trigger-based automations', included: true },
      { text: 'Up to 300 AI auto-replies / mo', included: true },
      { text: 'Flow builder', included: false },
      { text: 'Team Chat & Broadcasts', included: false },
    ],
  },
  {
    name: 'Pro',
    tagline: 'Solo operators & small teams',
    priceMonthly: 479,
    priceAnnual: 383,
    billedNote: 'Billed monthly',
    featured: true,
    tag: 'Most popular',
    ctaLabel: 'Get started',
    checkoutTier: 'pro',
    features: [
      { text: '3 connected channels', included: true },
      { text: '2 team seats', included: true },
      { text: 'Automations + Flow builder', included: true },
      { text: 'Team Chat (shared channel + DMs)', included: true },
      { text: 'Up to 3,000 AI auto-replies / mo', included: true },
      { text: 'Broadcast & templates', included: false },
    ],
  },
  {
    name: 'Business',
    tagline: 'Growing teams & multiple branches',
    priceMonthly: 799,
    priceAnnual: 639,
    billedNote: 'Billed monthly',
    ctaLabel: 'Get started',
    checkoutTier: 'business',
    features: [
      { text: '5 connected channels', included: true },
      { text: '5 team seats', included: true },
      { text: 'Everything in Pro', included: true },
      { text: 'Broadcast & message templates', included: true },
      { text: 'Up to 15,000 AI auto-replies / mo', included: true },
      { text: 'Priority support', included: true },
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'Franchises & high-volume senders',
    priceMonthly: null,
    priceAnnual: null,
    customPrice: 'Custom',
    customNote: 'From RM 1,500 / mo',
    billedNote: '',
    ctaLabel: 'Talk to sales',
    features: [
      { text: 'Unlimited connected channels', included: true },
      { text: 'Unlimited team seats', included: true },
      { text: 'Everything in Business', included: true },
      { text: 'Unlimited AI auto-replies', included: true },
      { text: 'Custom API access & webhooks', included: true },
      { text: 'Dedicated account manager, SLA', included: true },
    ],
  },
];

export const nexusBotFaqItems = [
  {
    question: 'What counts as a "conversation"?',
    answer: 'Any customer who messages you or receives a reply within a calendar month, whether that\'s one message or fifty.',
  },
  {
    question: 'What happens if I go over my limit?',
    answer: "We'll top you up automatically at a per-conversation overage rate — no cut-offs, no surprise blocking mid-month.",
  },
  {
    question: 'Can I switch plans later?',
    answer: 'Yes, upgrade or downgrade anytime. Changes apply from your next billing cycle.',
  },
  {
    question: 'Is this only for Malaysia?',
    answer: 'NexusBot is built for the Malaysia market first, but works for any business on WhatsApp Business Platform — ask us about regional pricing.',
  },
  {
    question: 'Do you offer setup and onboarding support?',
    answer: "Yes — if you'd like our team to fully set everything up for you (connecting your channels, configuring automations, and building out your flows), that's a one-off RM2,000 setup fee. Self-serve setup on any plan remains free.",
  },
];

export type ChatMessage =
  | { type: 'in' | 'out'; text: string }
  | { type: 'typing' };

export const nexusBotChatSequence: ChatMessage[] = [
  { type: 'in', text: 'Hi, ada stock untuk cable structured Cat6 tak?' },
  { type: 'typing' },
  { type: 'out', text: 'Yes! Cat6 structured cabling is available 📦 Want me to check pricing for your building size, or connect you with our sales team?' },
  { type: 'in', text: 'Pricing pls' },
  { type: 'typing' },
  { type: 'out', text: 'Sending you our quote request form now — one of our engineers will follow up within business hours ✅' },
];
