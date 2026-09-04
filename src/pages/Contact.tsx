import React from 'react';
import { useSEO } from '../utils/seo';
import ContactComponent from '../components/Contact';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQ from '../components/FAQ';
import type { FAQItem } from '../components/FAQ';

const faqItems: FAQItem[] = [
  {
    question: 'Where is Nexus Aurora located?',
    answer: 'Our office is at Lot 3 Block C 1st Floor, Lorong Bunga Inai, Taman Land Breeze, Kota Kinabalu, Sabah 88200, Malaysia. We also serve clients remotely throughout Malaysia and APAC.'
  },
  {
    question: 'What are your business hours?',
    answer: 'We are open Monday to Friday, 9:00 AM to 6:00 PM (MYT). For managed services clients, our 24/7 monitoring system ensures any critical issues are detected and responded to around the clock.'
  },
  {
    question: 'How do I get a quote for IT services?',
    answer: 'You can contact us by phone at +60 12 885 9759, email us at sales@nexus-aurora.com, fill in the contact form on this page, or use the WhatsApp button for a quick response. We typically respond within 1 business day.'
  },
  {
    question: 'Do you offer free IT consultations?',
    answer: 'Yes, we offer a complimentary initial consultation to understand your business needs and recommend the most suitable IT solutions. Contact us to schedule your free consultation with our team.'
  }
];

const Contact = () => {
  useSEO({
    title: 'Contact Nexus Aurora - IT Services Kota Kinabalu, Sabah Malaysia',
    description: 'Contact Nexus Aurora (M) Sdn Bhd for managed IT services, cybersecurity, cloud hosting, and web development in Malaysia. Office in Kota Kinabalu, Sabah. Call +60-12-885-9759 or email sales@nexus-aurora.com for a free consultation.',
    keywords: 'contact Nexus Aurora, IT company Malaysia contact, Kota Kinabalu IT services, managed IT services contact, cybersecurity Malaysia contact, web development contact, technology services Malaysia, free IT consultation',
    canonicalUrl: 'https://nexus-aurora.com/contact',
    breadcrumbs: [
      { name: 'Home', url: 'https://nexus-aurora.com' },
      { name: 'Contact Us', url: 'https://nexus-aurora.com/contact' }
    ],
    faqItems,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Nexus Aurora (M) Sdn Bhd",
      "description": "Get in touch with our IT experts for managed services, cybersecurity, cloud hosting, and web development in Malaysia.",
      "url": "https://nexus-aurora.com/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "Nexus Aurora (M) Sdn Bhd",
        "telephone": "+60-12-885-9759",
        "email": "sales@nexus-aurora.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Lot 3 Block C 1st Floor, Lorong Bunga Inai, Taman Land Breeze",
          "addressLocality": "Kota Kinabalu",
          "addressRegion": "Sabah",
          "postalCode": "88200",
          "addressCountry": "MY"
        }
      }
    }
  });

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-primary-800 via-primary-700 to-ink text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Ready to transform your IT infrastructure? Get in touch for a free consultation today.
          </p>
        </div>
      </div>
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />
      <ContactComponent />
      <FAQ items={faqItems} />
    </div>
  );
};

export default Contact;