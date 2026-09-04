import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSEO } from '../utils/seo';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQ from '../components/FAQ';
import NexusBotHero from '../components/nexusbot/NexusBotHero';
import NexusBotPricing from '../components/nexusbot/NexusBotPricing';
import NexusBotCtaBand from '../components/nexusbot/NexusBotCtaBand';
import { nexusBotFaqItems } from '../components/nexusbot/constants';

const NexusBot = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useSEO({
    title: 'NexusBot — WhatsApp AI for Malaysian SMEs | Nexus Aurora',
    description: "NexusBot answers, qualifies and books your customers on WhatsApp in Bahasa or English. Plans from a free 7-day trial to Enterprise. Built by Nexus Aurora for Malaysian SMEs.",
    keywords: 'WhatsApp AI Malaysia, WhatsApp chatbot SME, WhatsApp automation Malaysia, AI customer service WhatsApp, NexusBot, Nexus Aurora WhatsApp bot',
    canonicalUrl: 'https://nexus-aurora.com/nexusbot',
    breadcrumbs: [
      { name: 'Home', url: 'https://nexus-aurora.com' },
      { name: 'NexusBot', url: 'https://nexus-aurora.com/nexusbot' }
    ],
    faqItems: nexusBotFaqItems,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "NexusBot",
      "brand": { "@type": "Brand", "name": "Nexus Aurora" },
      "description": "WhatsApp AI assistant that answers, qualifies, and books customers for Malaysian SMEs, in Bahasa or English.",
      "offers": [
        { "@type": "Offer", "name": "Trial", "price": "0", "priceCurrency": "MYR" },
        { "@type": "Offer", "name": "Pro", "price": "479", "priceCurrency": "MYR" },
        { "@type": "Offer", "name": "Business", "price": "799", "priceCurrency": "MYR" },
        {
          "@type": "Offer",
          "name": "Enterprise",
          "priceSpecification": { "@type": "PriceSpecification", "minPrice": "1500", "priceCurrency": "MYR" }
        }
      ]
    }
  });

  return (
    <div>
      <NexusBotHero />
      <Breadcrumbs items={[{ label: 'NexusBot' }]} />
      <NexusBotPricing />
      <FAQ title="Common questions" items={nexusBotFaqItems} />
      <NexusBotCtaBand />
    </div>
  );
};

export default NexusBot;
