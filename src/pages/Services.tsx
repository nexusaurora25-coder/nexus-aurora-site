import React from 'react';
import { useSEO } from '../utils/seo';
import ServicesComponent from '../components/Services';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQ from '../components/FAQ';
import type { FAQItem } from '../components/FAQ';

const faqItems: FAQItem[] = [
  {
    question: 'What IT services does Nexus Aurora offer?',
    answer: 'We offer a full spectrum of IT services: Managed IT Services (MSP) with 24/7 monitoring, ISO 27001-certified Cybersecurity, Cloud Hosting with 99.9% uptime SLA, Web Development, Mobile App Development, IT Consultancy, and System Server Management.'
  },
  {
    question: 'Do you provide IT services across all of Malaysia?',
    answer: 'Yes. While our primary office is in Kota Kinabalu, Sabah, we serve businesses across Malaysia and the broader APAC region through our parent company Pioneer Infotech Singapore.'
  },
  {
    question: 'How quickly can you respond to IT issues?',
    answer: 'Our managed services clients benefit from 24/7 monitoring and defined SLA response times. For critical issues, we aim to respond within 1 hour. Standard requests are typically resolved within 4 business hours.'
  },
  {
    question: 'Can I bundle multiple IT services together?',
    answer: 'Absolutely. We offer bundled IT packages that combine managed services, cybersecurity, and cloud hosting at competitive rates. Contact us for a customised multi-service proposal tailored to your business needs.'
  }
];
// import Technologies from '../components/Technologies';

const Services = () => {
  useSEO({
    title: 'IT Services Malaysia - MSP, Cybersecurity, Cloud, Web & Mobile Development',
    description: 'Comprehensive IT services for Malaysian businesses: Managed IT (MSP), ISO 27001 Cybersecurity, Cloud Hosting, Web Development, Mobile App Development, and IT Consultancy. Powered by Pioneer Infotech Singapore with 17+ years APAC expertise.',
    keywords: 'IT services Malaysia, managed IT services, MSP Malaysia, cybersecurity Malaysia, cloud hosting Malaysia, web development Malaysia, mobile app development, IT consultancy Sabah, Pioneer Infotech, Kota Kinabalu IT company',
    canonicalUrl: 'https://nexus-aurora.com/services',
    breadcrumbs: [
      { name: 'Home', url: 'https://nexus-aurora.com' },
      { name: 'Services', url: 'https://nexus-aurora.com/services' }
    ],
    faqItems,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "IT Services",
      "description": "Comprehensive IT solutions and technology services",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Service",
            "name": "Managed IT Services",
            "url": "https://nexus-aurora.com/managed-services"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "name": "IT Consultancy",
            "url": "https://nexus-aurora.com/it-consultancy"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Service",
            "name": "Cybersecurity",
            "url": "https://nexus-aurora.com/cybersecurity"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Service",
            "name": "Cloud Hosting",
            "url": "https://nexus-aurora.com/cloud-hosting"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Service",
            "name": "System Servers",
            "url": "https://nexus-aurora.com/system-servers"
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "Service",
            "name": "Web Development",
            "url": "https://nexus-aurora.com/web-development"
          }
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {
            "@type": "Service",
            "name": "Mobile App Development",
            "url": "https://nexus-aurora.com/mobile-app-development"
          }
        }
      ]
    }
  });

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-primary-800 via-primary-700 to-ink text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>Powered by Pioneer Infotech Singapore</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Managed IT Services & Solutions</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Enterprise-grade managed services and comprehensive IT solutions backed by 17 years of proven expertise across APAC
          </p>
        </div>
      </div>
      <Breadcrumbs items={[{ label: 'Services' }]} />
      <ServicesComponent />
      <FAQ items={faqItems} />
    </div>
  );
};

export default Services;