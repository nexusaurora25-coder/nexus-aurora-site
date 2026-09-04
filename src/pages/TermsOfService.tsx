import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSEO } from '../utils/seo';
import Breadcrumbs from '../components/Breadcrumbs';
import {
  FileCheckIllustration,
  ShieldIllustration,
  AlertIllustration,
  CheckIllustration,
  CalendarIllustration,
  MailIllustration,
  AnimatedDot,
} from '../components/AnimatedIllustrations';

const TermsOfService = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useSEO({
    title: 'Terms of Service',
    description: 'Terms of Service for Nexus Aurora (M) Sdn Bhd. Read our terms and conditions for using our managed IT services, cybersecurity, cloud hosting, and web development services.',
    keywords: 'terms of service, terms and conditions, service agreement, legal terms, usage policy, IT services agreement',
    canonicalUrl: 'https://nexus-aurora.com/terms-of-service',
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', url: 'https://nexus-aurora.com' },
      { name: 'Terms of Service', url: 'https://nexus-aurora.com/terms-of-service' }
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms of Service - Nexus Aurora (M) Sdn Bhd",
      "description": "Terms and conditions governing the use of Nexus Aurora IT services and website.",
      "url": "https://nexus-aurora.com/terms-of-service",
      "publisher": {
        "@type": "Organization",
        "name": "Nexus Aurora (M) Sdn Bhd"
      }
    }
  });

  const sections = [
    {
      title: 'Acceptance of Terms',
      illustration: CheckIllustration,
      content: [
        'By accessing and using our website and services, you accept and agree to be bound by these Terms of Service',
        'If you do not agree to these terms, please do not use our services',
        'We reserve the right to modify these terms at any time with notice',
        'Continued use of our services constitutes acceptance of any changes'
      ]
    },
    {
      title: 'Services Description',
      illustration: FileCheckIllustration,
      content: [
        'Nexus Aurora provides IT consultancy, web development, mobile app development, and related technology services',
        'Service specifications, timelines, and deliverables are defined in individual project agreements',
        'We reserve the right to modify or discontinue services with reasonable notice',
        'Service availability may be subject to maintenance windows and technical limitations'
      ]
    },
    {
      title: 'User Responsibilities',
      illustration: ShieldIllustration,
      content: [
        'Provide accurate and complete information when requesting services',
        'Maintain confidentiality of any login credentials or access information',
        'Use our services only for lawful purposes and in accordance with these terms',
        'Respect intellectual property rights and refrain from unauthorized use of our materials'
      ]
    },
    {
      title: 'Limitations and Disclaimers',
      illustration: AlertIllustration,
      content: [
        'Services are provided "as is" without warranties of any kind, express or implied',
        'We are not liable for indirect, incidental, or consequential damages',
        'Our liability is limited to the amount paid for the specific service in question',
        'Force majeure events may affect service delivery without liability'
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
              <span>Legal Terms & Conditions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              These terms govern your use of our services and establish the legal framework for our business relationship.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary-200">
              <CalendarIllustration className="h-4 w-4" />
              <span>Last updated: January 2024</span>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed">
                Welcome to Nexus Aurora. These Terms of Service ("Terms") govern your use of our website and services. 
                By engaging with our services, you agree to comply with and be bound by these terms. Please read them carefully.
              </p>
            </div>

            {/* Sections */}
            {sections.map((section, index) => {
              const Illustration = section.illustration;
              return (
                <div key={index} className="bg-paper rounded-2xl p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="h-12 w-12 bg-gradient-to-br from-gray-600 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
                <h2 className="text-2xl font-bold text-ink mb-4">Payment Terms</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Payment terms are specified in individual project agreements. Generally, we require:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Initial deposit before project commencement</li>
                    <li>• Milestone payments as outlined in project agreements</li>
                    <li>• Final payment upon project completion and delivery</li>
                    <li>• Late payment fees may apply for overdue invoices</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-ink mb-4">Intellectual Property</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Upon full payment, clients receive ownership of custom-developed solutions. However:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• We retain rights to our proprietary methodologies and frameworks</li>
                    <li>• Third-party components remain subject to their respective licenses</li>
                    <li>• We may use project experience for marketing purposes (with client consent)</li>
                    <li>• Source code and documentation are provided as specified in agreements</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-ink mb-4">Confidentiality</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We respect the confidentiality of your business information and maintain strict confidentiality standards:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• All client information is treated as confidential</li>
                    <li>• Non-disclosure agreements are available upon request</li>
                    <li>• Team members are bound by confidentiality obligations</li>
                    <li>• Secure handling and storage of all client data</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-ink mb-4">Termination</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Either party may terminate services under the following conditions:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Written notice as specified in project agreements</li>
                    <li>• Immediate termination for material breach of terms</li>
                    <li>• Payment for work completed up to termination date</li>
                    <li>• Return or destruction of confidential information as requested</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-ink mb-4">Governing Law</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction 
                    where Nexus Aurora is incorporated. Any disputes arising from these terms or our services will be 
                    resolved through binding arbitration or in the courts of competent jurisdiction.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-2xl p-8 text-white text-center">
              <MailIllustration className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
              <p className="text-primary-100 mb-6">
                If you have any questions about these Terms of Service, please don't hesitate to contact us.
              </p>
              <div className="space-y-2">
                <p>Email: sales@nexus-aurora.com</p>
                <p>Phone: +60 12 885 9759</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;