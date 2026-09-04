import React from 'react';
import { useSEO } from '../utils/seo';
import Hero from '../components/Hero';
import Services from '../components/Services';
import NexusBotPromo from '../components/NexusBotPromo';
import About from '../components/About';
// import Technologies from '../components/Technologies';
import Contact from '../components/Contact';

const Home = () => {
  useSEO({
    title: 'Nexus Aurora - Managed IT Services, Cybersecurity & Cloud Solutions Malaysia',
    description: 'Nexus Aurora — ISO 27001:2022 certified MSP in Kota Kinabalu, powered by Pioneer Infotech Singapore. 24/7 IT monitoring, cybersecurity, cloud hosting, web development & IT consultancy for Sabah & Malaysian businesses.',
    keywords: 'managed IT services Malaysia, MSP Malaysia, IT support Kota Kinabalu, managed service provider Sabah, 24/7 IT monitoring Malaysia, cybersecurity Malaysia, cloud hosting Sabah, web development Kota Kinabalu, IT consultancy Malaysia, Pioneer Infotech partner, ISO 27001 certified Malaysia, IT outsourcing Sabah, enterprise IT services Malaysia',
    canonicalUrl: 'https://nexus-aurora.com',
    breadcrumbs: [
      { name: 'Home', url: 'https://nexus-aurora.com' }
    ],
    faqItems: [
      {
        question: 'Where is Nexus Aurora based?',
        answer: 'Nexus Aurora (M) Sdn Bhd is based in Kota Kinabalu, Sabah, Malaysia, serving businesses across Sabah and throughout Malaysia. We are powered by Pioneer Infotech Singapore, bringing 17 years of APAC MSP expertise to Malaysian businesses.'
      },
      {
        question: 'What IT services does Nexus Aurora offer?',
        answer: 'We offer a full suite of IT services including Managed IT Services (MSP), Cybersecurity (ISO 27001:2022 certified), Cloud Hosting, Web Development, Mobile App Development, IT Consultancy, and System & Server Management.'
      },
      {
        question: 'Is Nexus Aurora ISO 27001 certified?',
        answer: 'Yes, Nexus Aurora is ISO/IEC 27001:2022 certified, demonstrating our commitment to the highest standards of information security management. This certification ensures your data is protected using industry-recognized best practices.'
      }
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Nexus Aurora (M) Sdn Bhd - Managed IT Services & MSP Solutions Malaysia",
      "description": "ISO 27001:2022 certified Managed Service Provider powered by Pioneer Infotech Singapore. 24/7 IT management, cybersecurity, cloud hosting, web development, and IT consultancy for Malaysian businesses.",
      "url": "https://nexus-aurora.com",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".hero-description"]
      },
      "about": {
        "@type": "Organization",
        "name": "Nexus Aurora (M) Sdn Bhd",
        "url": "https://nexus-aurora.com"
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "IT Services by Nexus Aurora",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Managed IT Services", "url": "https://nexus-aurora.com/managed-services" },
          { "@type": "ListItem", "position": 2, "name": "Cybersecurity Services", "url": "https://nexus-aurora.com/cybersecurity" },
          { "@type": "ListItem", "position": 3, "name": "Cloud Hosting", "url": "https://nexus-aurora.com/cloud-hosting" },
          { "@type": "ListItem", "position": 4, "name": "Web Development", "url": "https://nexus-aurora.com/web-development" },
          { "@type": "ListItem", "position": 5, "name": "Mobile App Development", "url": "https://nexus-aurora.com/mobile-app-development" },
          { "@type": "ListItem", "position": 6, "name": "IT Consultancy", "url": "https://nexus-aurora.com/it-consultancy" },
          { "@type": "ListItem", "position": 7, "name": "System & Server Management", "url": "https://nexus-aurora.com/system-servers" }
        ]
      }
    }
  });

  return (
    <div>
      <Hero />
      <Services />
      <NexusBotPromo />
      <About />
      {/* <Technologies /> */}
      <Contact />
    </div>
  );
};

export default Home;