import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSEO } from '../utils/seo';
import Breadcrumbs from '../components/Breadcrumbs';
import {
  ShieldIllustration,
  EyeIllustration,
  LockIllustration,
  FileCheckIllustration,
  MailIllustration,
  AnimatedDot,
} from '../components/AnimatedIllustrations';

const PrivacyPolicy = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useSEO({
    title: 'Privacy Policy',
    description: 'Privacy Policy for Nexus Aurora (M) Sdn Bhd. Learn how we collect, use, and protect your personal information and data in compliance with Malaysian data protection laws.',
    keywords: 'privacy policy, data protection, personal information, GDPR compliance, privacy rights, Malaysian data protection, ISO 27001 privacy',
    canonicalUrl: 'https://nexus-aurora.com/privacy-policy',
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', url: 'https://nexus-aurora.com' },
      { name: 'Privacy Policy', url: 'https://nexus-aurora.com/privacy-policy' }
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy - Nexus Aurora (M) Sdn Bhd",
      "description": "Privacy Policy explaining how Nexus Aurora collects, uses, and protects personal information.",
      "url": "https://nexus-aurora.com/privacy-policy",
      "publisher": {
        "@type": "Organization",
        "name": "Nexus Aurora (M) Sdn Bhd"
      }
    }
  });

  const sections = [
    {
      title: 'Information We Collect',
      illustration: FileCheckIllustration,
      content: [
        'Personal information you provide when contacting us or using our services',
        'Technical information about your device and how you use our website',
        'Cookies and similar tracking technologies to improve your experience',
        'Communication records when you interact with our support team'
      ]
    },
    {
      title: 'How We Use Your Information',
      illustration: EyeIllustration,
      content: [
        'To provide and improve our IT services and solutions',
        'To communicate with you about projects and support requests',
        'To analyze website usage and optimize user experience',
        'To comply with legal obligations and protect our rights'
      ]
    },
    {
      title: 'Information Sharing',
      illustration: ShieldIllustration,
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'We may share information with trusted service providers who assist our operations',
        'We may disclose information when required by law or to protect our rights',
        'Business transfers may include customer information as part of the assets'
      ]
    },
    {
      title: 'Data Security',
      illustration: LockIllustration,
      content: [
        'We implement industry-standard security measures to protect your data',
        'All sensitive information is encrypted during transmission and storage',
        'Regular security audits and updates to maintain protection standards',
        'Limited access to personal information on a need-to-know basis'
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-800 via-primary-700 to-ink text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              <AnimatedDot className="h-4 w-4" />
              <span>Privacy & Data Protection</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </div>
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed">
                At Nexus Aurora, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our services.
              </p>
            </div>

            {/* Sections */}
            {sections.map((section, index) => {
              const Illustration = section.illustration;
              return (
                <div key={index} className="bg-paper rounded-2xl p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="h-12 w-12 bg-gradient-to-br from-primary-500 to-primary-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Illustration className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-ink">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="h-2 w-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            {/* Additional Sections */}
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-ink mb-4">Your Rights</h2>
                <div className="space-y-4 text-gray-600">
                  <p>You have the right to:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Access and review your personal information</li>
                    <li>• Request corrections to inaccurate information</li>
                    <li>• Request deletion of your personal information</li>
                    <li>• Opt-out of marketing communications</li>
                    <li>• Data portability where technically feasible</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-ink mb-4">Cookies and Tracking</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, 
                    and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
                  </p>
                  <p>
                    We may use third-party analytics services like Google Analytics to help us understand how our website is used. 
                    These services may collect information about your use of our website over time.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-ink mb-4">Changes to This Policy</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, 
                    legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page 
                    and updating the "Last updated" date.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-2xl p-8 text-white text-center">
              <MailIllustration className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Questions About This Policy?</h2>
              <p className="text-primary-100 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us.
              </p>
              <div className="space-y-2">
                <p>Email: Info@nexus-aurora.com</p>
                <p>Phone: +60 12 885 9759</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;