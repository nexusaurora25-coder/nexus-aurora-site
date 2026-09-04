import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSEO } from '../utils/seo';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQ from '../components/FAQ';
import type { FAQItem } from '../components/FAQ';
import {
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import {
  TargetIllustration,
  MonitorIllustration,
  ShieldIllustration,
  ClockIllustration,
  AlertIllustration,
  ServerIllustration,
  TeamIllustration,
  ChartIllustration,
  LightningIllustration,
  LockIllustration,
  LifeBuoyIllustration,
  GlobeIllustration,
  DatabaseIllustration,
  PhoneIllustration,
  CheckIllustration,
  AnimatedDot
} from '../components/AnimatedIllustrations';

const faqItems: FAQItem[] = [
  {
    question: 'What is a Managed Service Provider (MSP)?',
    answer: 'A Managed Service Provider (MSP) is a company that remotely manages your IT infrastructure and end-user systems on a proactive basis. Instead of waiting for things to break, we continuously monitor, maintain, and optimize your technology so your business runs smoothly 24/7.'
  },
  {
    question: 'How much do Managed IT Services cost in Malaysia?',
    answer: 'Our managed IT services pricing is based on the number of users, devices, and the level of support your business requires. We offer fixed monthly pricing so you can budget predictably without surprise IT expenses. Contact us for a customized quote based on your specific needs.'
  },
  {
    question: 'What is the difference between MSP and break-fix IT support?',
    answer: 'Break-fix IT support is reactive — you call when something breaks and pay per incident. MSP services are proactive — we continuously monitor and maintain your systems to prevent issues before they cause downtime. MSP offers predictable monthly costs, 24/7 monitoring, and strategic IT planning.'
  },
  {
    question: 'Do you provide 24/7 IT support?',
    answer: 'Yes, our managed services include 24/7 network monitoring and support. Our team, backed by Pioneer Infotech Singapore with 17 years of APAC expertise, provides round-the-clock monitoring, helpdesk support, and emergency incident response.'
  },
  {
    question: 'What industries do you serve in Malaysia?',
    answer: 'We serve businesses across multiple industries including banking, retail, logistics, hospitality, healthcare, and enterprise sectors. Our MSP solutions are tailored to meet the specific compliance and operational requirements of each industry.'
  },
  {
    question: 'What is included in your SLA (Service Level Agreement)?',
    answer: 'Our SLA includes a 99.9% uptime guarantee, defined response times for different severity levels, monthly performance reports, regular IT health assessments, and proactive maintenance schedules. We provide full transparency on our service delivery.'
  }
];

const ManagedServices = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useSEO({
    title: 'Managed IT Services (MSP) Malaysia - 24/7 IT Support & Monitoring',
    description: 'Enterprise-grade Managed IT Services from Nexus Aurora, powered by Pioneer Infotech Singapore. 24/7 monitoring, proactive maintenance, helpdesk support, and comprehensive IT management for Malaysian businesses with 99.9% uptime SLA.',
    keywords: 'managed IT services Malaysia, MSP Malaysia, managed service provider Kota Kinabalu, 24/7 IT support Malaysia, IT monitoring, proactive IT management, helpdesk support, IT outsourcing Sabah, Pioneer Infotech partner, enterprise IT services',
    canonicalUrl: 'https://nexus-aurora.com/managed-services',
    breadcrumbs: [
      { name: 'Home', url: 'https://nexus-aurora.com' },
      { name: 'Services', url: 'https://nexus-aurora.com/services' },
      { name: 'Managed IT Services', url: 'https://nexus-aurora.com/managed-services' }
    ],
    faqItems,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Managed IT Services",
      "name": "Managed IT Services (MSP) - 24/7 IT Support & Monitoring",
      "provider": {
        "@type": "Organization",
        "name": "Nexus Aurora (M) Sdn Bhd",
        "url": "https://nexus-aurora.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Malaysia"
      },
      "description": "Comprehensive Managed Service Provider (MSP) solutions including 24/7 monitoring, proactive maintenance, cybersecurity, and IT support backed by Pioneer Infotech Singapore's 17 years of expertise.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "areaServed": "Malaysia"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Managed IT Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "24/7 Network Monitoring" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Proactive Maintenance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Helpdesk Support" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cybersecurity Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Backup & Disaster Recovery" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Infrastructure Management" } }
        ]
      }
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const mspServices = [
    {
      illustration: MonitorIllustration,
      title: '24/7 Network Monitoring',
      description: 'Round-the-clock monitoring of your IT infrastructure using advanced RMM tools. We detect and resolve issues before they impact your business.',
      features: ['Real-time alerts', 'Performance tracking', 'Automated responses', 'Uptime optimization']
    },
    {
      illustration: LightningIllustration,
      title: 'Proactive Maintenance',
      description: 'Scheduled maintenance, updates, and preventive care to keep your systems running at peak performance.',
      features: ['Patch management', 'System updates', 'Performance tuning', 'Preventive diagnostics']
    },
    {
      illustration: LifeBuoyIllustration,
      title: 'Helpdesk Support',
      description: 'Dedicated support team available 24/7 to assist your employees with technical issues and questions.',
      features: ['Multi-channel support', 'Fast response times', 'Ticketing system', 'Remote assistance']
    },
    {
      illustration: ShieldIllustration,
      title: 'Cybersecurity Management',
      description: 'Comprehensive security monitoring and threat protection to safeguard your business data and systems.',
      features: ['Threat detection', 'Security patches', 'Firewall management', 'Compliance monitoring']
    },
    {
      illustration: DatabaseIllustration,
      title: 'Backup & Disaster Recovery',
      description: 'Automated backup solutions and disaster recovery planning to ensure business continuity.',
      features: ['Automated backups', 'Data recovery', 'Business continuity', 'Compliance adherence']
    },
    {
      illustration: ServerIllustration,
      title: 'Infrastructure Management',
      description: 'Complete management of your IT infrastructure including servers, networks, and cloud resources.',
      features: ['Server management', 'Network optimization', 'Cloud integration', 'Capacity planning']
    }
  ];

  const benefits = [
    {
      illustration: ChartIllustration,
      title: 'Predictable IT Costs',
      description: 'Fixed monthly pricing eliminates unexpected expenses and makes budgeting easier'
    },
    {
      illustration: TeamIllustration,
      title: 'Expert Team Access',
      description: 'Access to Pioneer Infotech\'s skilled technicians and specialists across APAC'
    },
    {
      illustration: CheckIllustration,
      title: '99.9% Uptime SLA',
      description: 'Service Level Agreement guarantees backed by 17 years of proven delivery'
    },
    {
      illustration: LockIllustration,
      title: 'Enhanced Security',
      description: 'ISO 27001:2022 certified processes and continuous security monitoring'
    },
    {
      illustration: ClockIllustration,
      title: 'Focus on Business',
      description: 'Let us handle IT while you focus on growing your core business'
    },
    {
      illustration: GlobeIllustration,
      title: 'Scalable Solutions',
      description: 'Services that grow with your business needs and support expansion'
    }
  ];

  const whyChoose = [
    {
      title: 'Backed by Pioneer Infotech Singapore',
      description: 'Benefit from 17 years of MSP expertise and proven service frameworks that have supported 500+ SME clients across banking, retail, logistics, and enterprise sectors throughout APAC.',
      illustration: TargetIllustration
    },
    {
      title: 'Enterprise-Grade Tools & Infrastructure',
      description: 'Access the same advanced monitoring, management, and security tools used by enterprise organizations, delivered through Pioneer Infotech\'s established infrastructure.',
      illustration: ServerIllustration
    },
    {
      title: 'Local Presence, Regional Strength',
      description: 'Malaysian-based support team combined with Pioneer Infotech\'s regional network ensures responsive local service backed by APAC-wide resources.',
      illustration: TeamIllustration
    },
    {
      title: 'Proactive, Not Reactive',
      description: 'Our MSP model focuses on preventing problems before they occur, reducing downtime and keeping your business running smoothly 24/7.',
      illustration: AlertIllustration
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-primary-800 via-primary-700 to-ink text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              <AnimatedDot className="h-4 w-4" />
              <span>Powered by Pioneer Infotech Singapore - 17 Years of MSP Excellence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Managed IT Services</h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade IT management for Malaysian businesses. Let us handle your technology infrastructure
              with 24/7 monitoring, proactive support, and guaranteed uptime backed by ISO 27001:2022 certified processes.
            </p>
          </div>
        </div>
      </div>

      <Breadcrumbs items={[
        { label: 'Services', href: '/services' },
        { label: 'Managed IT Services' }
      ]} />

      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-4xl font-bold text-ink mb-4">What is Managed IT Services?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              As a Managed Service Provider (MSP), we take complete responsibility for your IT infrastructure. Instead of hiring
              an in-house IT team or dealing with break-fix support, you get proactive, comprehensive IT management at a predictable
              monthly cost. We monitor, maintain, and optimize your technology so you can focus on running your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {mspServices.map((service, index) => {
              const Illustration = service.illustration;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-primary-200 hover:-translate-y-2 scroll-animate opacity-0 translate-y-8"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="h-16 w-16 bg-gradient-to-br from-primary-500 to-primary-800 rounded-2xl flex items-center justify-center mb-6">
                    <Illustration className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-ink mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 bg-primary-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mb-20">
            <div className="text-center mb-12 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-3xl font-bold text-ink mb-4">Why Choose Our Managed Services?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Partner with a proven MSP backed by Pioneer Infotech's regional expertise
              </p>
            </div>

            <div className="space-y-8">
              {whyChoose.map((item, index) => {
                const Illustration = item.illustration;
                return (
                  <div
                    key={index}
                    className="bg-paper rounded-2xl p-8 hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-x-[-50px]"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start space-x-6">
                      <div className="h-16 w-16 bg-gradient-to-br from-primary-500 to-primary-800 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Illustration className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-ink mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-3xl font-bold text-ink mb-4">Key Benefits</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Illustration = benefit.illustration;
                return (
                  <div
                    key={index}
                    className="text-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 scroll-animate opacity-0 translate-y-8"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="h-16 w-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Illustration className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-ink mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-primary-50 rounded-3xl p-12 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-ink mb-6">
                  MSP vs. Traditional IT Support
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-ink">Proactive vs. Reactive</h3>
                      <p className="text-gray-600">We prevent issues before they cause downtime, rather than just fixing problems after they occur</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-ink">Predictable Costs</h3>
                      <p className="text-gray-600">Fixed monthly pricing eliminates surprise IT expenses and emergency callout fees</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-ink">24/7 Coverage</h3>
                      <p className="text-gray-600">Continuous monitoring and support, not just 9-to-5 availability</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-ink">Strategic Partnership</h3>
                      <p className="text-gray-600">We become part of your team, understanding your business and aligning IT with your goals</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-ink mb-6">What Our MSP Includes</h3>
                <ul className="space-y-3">
                  {[
                    '24/7 Network & System Monitoring',
                    'Remote & On-site Support',
                    'Security Management & Threat Protection',
                    'Backup & Disaster Recovery',
                    'Patch Management & Updates',
                    'Helpdesk for End Users',
                    'Regular IT Health Assessments',
                    'Strategic IT Planning',
                    '99.9% Uptime SLA Guarantee',
                    'Monthly Performance Reports'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} subtitle="Common questions about our Managed IT Services" />

      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Ready to Experience Worry-Free IT Management?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Let our expert team handle your IT infrastructure while you focus on growing your business.
              Get started with a free consultation and IT assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://outlook.office.com/book/NexusAurora2@nexus-aurora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Schedule Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                Download MSP Service Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagedServices;
