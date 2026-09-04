import React from 'react';
import { useSEO } from '../utils/seo';
import AboutComponent from '../components/About';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQ from '../components/FAQ';
import type { FAQItem } from '../components/FAQ';
import { Users, Award, Globe, Clock } from 'lucide-react';

const faqItems: FAQItem[] = [
  {
    question: 'How long has Nexus Aurora been in business?',
    answer: 'Nexus Aurora is powered by Pioneer Infotech Singapore, which has over 17 years of proven experience delivering IT solutions across the Asia Pacific region. We combine this deep regional expertise with local presence in Kota Kinabalu, Sabah.'
  },
  {
    question: 'Is Nexus Aurora ISO certified?',
    answer: 'Yes, we are ISO/IEC 27001:2022 certified for information security management. This certification demonstrates our commitment to maintaining the highest standards of data security and operational integrity for our clients.'
  },
  {
    question: 'What areas does Nexus Aurora serve?',
    answer: 'We serve businesses across Malaysia with our base in Kota Kinabalu, Sabah. Through our parent organization Pioneer Infotech Singapore, we also support clients throughout the Asia Pacific region including Singapore, Brunei, and other ASEAN markets.'
  },
  {
    question: 'What types of businesses do you work with?',
    answer: 'We work with SMEs and enterprises across multiple industries including banking, retail, logistics, hospitality, and healthcare. Our solutions are tailored to meet the specific compliance and operational requirements of each sector.'
  }
];

const About = () => {
  useSEO({
    title: 'About Nexus Aurora - ISO 27001 Certified IT Company Malaysia | 17+ Years APAC Experience',
    description: 'Learn about Nexus Aurora (M) Sdn Bhd, an ISO/IEC 27001:2022 certified IT company in Kota Kinabalu, Sabah. Powered by Pioneer Infotech Singapore with 17+ years delivering managed IT services, cybersecurity, and web development across APAC.',
    keywords: 'about Nexus Aurora, IT company Malaysia, ISO 27001 certified, Pioneer Infotech Singapore, Kota Kinabalu IT company, technology partner APAC, Malaysian IT solutions, Sabah IT services',
    canonicalUrl: 'https://nexus-aurora.com/about',
    breadcrumbs: [
      { name: 'Home', url: 'https://nexus-aurora.com' },
      { name: 'About Us', url: 'https://nexus-aurora.com/about' }
    ],
    faqItems,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Nexus Aurora (M) Sdn Bhd",
      "description": "ISO/IEC 27001:2022 certified IT company in Malaysia with 17+ years of APAC experience, powered by Pioneer Infotech Singapore.",
      "url": "https://nexus-aurora.com/about",
      "mainEntity": {
        "@type": "Organization",
        "name": "Nexus Aurora (M) Sdn Bhd",
        "foundingDate": "2007",
        "numberOfEmployees": { "@type": "QuantitativeValue", "value": 20 },
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Nexus Aurora</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            A Trusted Technology Partner in APAC with over 17 years of proven experience
          </p>
        </div>
      </div>
      <Breadcrumbs items={[{ label: 'About Us' }]} />
      <AboutComponent />
      
      {/* Additional About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ink mb-4">Why Choose Nexus Aurora?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With a clear mission to bridge regional expertise with global technologies, we accelerate success for technology providers, channel partners, and businesses across Asia Pacific region
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-paper rounded-xl">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2">Proven Experience</h3>
              <p className="text-gray-600">17+ years of delivering trusted IT solutions across APAC</p>
            </div>
            
            <div className="text-center p-6 bg-paper rounded-xl">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2">Regional Expertise</h3>
              <p className="text-gray-600">Deep understanding of APAC markets and compliance requirements</p>
            </div>
            
            <div className="text-center p-6 bg-paper rounded-xl">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2">Trusted by SMEs</h3>
              <p className="text-gray-600">500+ SME clients across banking, retail, logistics sectors</p>
            </div>
            
            <div className="text-center p-6 bg-paper rounded-xl">
              <div className="flex items-center justify-center mx-auto mb-4">
                <img
                  src="/cretified_ism.png"
                  alt="ISO/IEC 27001 Information Security Management Certified"
                  className="h-20 w-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2">ISO Certified</h3>
              <p className="text-gray-600">ISO/IEC 27001:2022 certified for information security</p>
            </div>
          </div>
        </div>
      </section>
      <FAQ items={faqItems} />
    </div>
  );
};

export default About;