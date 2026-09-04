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
  ShieldIllustration,
  SearchIllustration,
  BugIllustration,
  FileCheckIllustration,
  AlertIllustration,
  LockIllustration,
  EyeIllustration,
  AwardIllustration,
  ClockIllustration,
  AnimatedDot
} from '../components/AnimatedIllustrations';

const faqItems: FAQItem[] = [
  {
    question: 'What cybersecurity services do you offer in Malaysia?',
    answer: 'We offer comprehensive cybersecurity services including security audits, penetration testing, compliance management (GDPR, HIPAA, ISO 27001, PCI-DSS), 24/7 incident response, and continuous security monitoring. Our services protect businesses from data breaches, ransomware, and other cyber threats.'
  },
  {
    question: 'How often should a business conduct security audits?',
    answer: 'We recommend conducting comprehensive security audits at least annually, with vulnerability scans performed quarterly. However, businesses in highly regulated industries or those handling sensitive data should consider more frequent assessments. Any significant infrastructure change should also trigger an audit.'
  },
  {
    question: 'What is penetration testing and why is it important?',
    answer: 'Penetration testing (pen testing) is an authorized simulated cyber attack performed to evaluate the security of your systems. It identifies vulnerabilities that could be exploited by malicious attackers, providing actionable insights to strengthen your defenses before a real attack occurs.'
  },
  {
    question: 'Do you help with compliance requirements like ISO 27001?',
    answer: 'Yes, we help businesses achieve and maintain compliance with major frameworks including ISO 27001, GDPR, HIPAA, and PCI-DSS. We are ISO/IEC 27001:2022 certified ourselves, ensuring we apply the same rigorous standards to our clients security implementations.'
  },
  {
    question: 'What should I do if my business experiences a cyber attack?',
    answer: 'Contact our 24/7 incident response team immediately. Our experts will help contain the threat, perform forensic analysis to understand the breach, minimize damage, and develop a recovery plan. We also help implement measures to prevent future incidents.'
  }
];

const Cybersecurity = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useSEO({
    title: 'Cybersecurity Services Malaysia - ISO 27001 Certified | Pen Testing & Security Audits',
    description: 'ISO/IEC 27001:2022 certified cybersecurity services in Sabah & Malaysia. Security audits, penetration testing, GDPR/HIPAA compliance, and 24/7 incident response to protect your business.',
    keywords: 'cybersecurity Malaysia, ISO 27001 certified Malaysia, penetration testing Malaysia, security audit Sabah, cyber security services Kota Kinabalu, GDPR compliance Malaysia, HIPAA compliance, PCI-DSS Malaysia, incident response, ransomware protection Malaysia, network security Sabah',
    canonicalUrl: 'https://nexus-aurora.com/cybersecurity',
    breadcrumbs: [
      { name: 'Home', url: 'https://nexus-aurora.com' },
      { name: 'Services', url: 'https://nexus-aurora.com/services' },
      { name: 'Cybersecurity', url: 'https://nexus-aurora.com/cybersecurity' }
    ],
    faqItems,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Cybersecurity Services",
      "provider": {
        "@type": "Organization",
        "name": "Nexus Aurora (M) Sdn Bhd",
        "url": "https://nexus-aurora.com",
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "name": "ISO/IEC 27001:2022 Information Security Management System",
          "credentialCategory": "certification",
          "recognizedBy": { "@type": "Organization", "name": "ISO - International Organization for Standardization" }
        }
      },
      "areaServed": [
        { "@type": "State", "name": "Sabah" },
        { "@type": "Country", "name": "Malaysia" }
      ],
      "description": "ISO/IEC 27001:2022 certified cybersecurity services including security audits, penetration testing, GDPR/HIPAA/PCI-DSS compliance management, and 24/7 incident response.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cybersecurity Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Audits & Vulnerability Assessment" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Penetration Testing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ISO 27001 Compliance Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GDPR & HIPAA Compliance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "24/7 Incident Response" } }
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

  const services = [
    {
      title: 'Security Audits',
      description: 'Comprehensive evaluation of your IT infrastructure to identify vulnerabilities and security gaps. Our expert team conducts thorough assessments of your systems, networks, and applications to ensure they meet industry security standards.',
      illustration: SearchIllustration,
      color: 'from-primary-500 to-primary-600',
      features: ['Network Security Assessment', 'Application Security Review', 'Infrastructure Analysis', 'Risk Assessment Report']
    },
    {
      title: 'Penetration Testing',
      description: 'Ethical hacking services that simulate real-world cyber attacks to test your defenses. We identify weaknesses before malicious actors do, providing detailed reports and remediation strategies.',
      illustration: BugIllustration,
      color: 'from-red-500 to-red-600',
      features: ['Web Application Testing', 'Network Penetration Testing', 'Social Engineering Tests', 'Wireless Security Testing']
    },
    {
      title: 'Compliance',
      description: 'Ensure your organization meets regulatory requirements and industry standards. We help you achieve and maintain compliance with frameworks like GDPR, HIPAA, PCI-DSS, and ISO 27001.',
      illustration: FileCheckIllustration,
      color: 'from-green-500 to-green-600',
      features: ['GDPR Compliance', 'HIPAA Compliance', 'PCI-DSS Certification', 'ISO 27001 Implementation']
    },
    {
      title: 'Incident Response',
      description: 'Rapid response services for security breaches and cyber incidents. Our 24/7 incident response team helps contain threats, minimize damage, and restore normal operations quickly.',
      illustration: AlertIllustration,
      color: 'from-orange-500 to-orange-600',
      features: ['24/7 Emergency Response', 'Forensic Analysis', 'Threat Containment', 'Recovery Planning']
    }
  ];

  const benefits = [
    {
      illustration: LockIllustration,
      title: 'Advanced Protection',
      description: 'Multi-layered security approach to protect against sophisticated cyber threats'
    },
    {
      illustration: EyeIllustration,
      title: 'Continuous Monitoring',
      description: '24/7 security monitoring and threat detection to identify risks in real-time'
    },
    {
      illustration: AwardIllustration,
      title: 'Expert Team',
      description: 'Certified security professionals with extensive experience in cybersecurity'
    },
    {
      illustration: ClockIllustration,
      title: 'Rapid Response',
      description: 'Quick incident response to minimize impact and restore operations'
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
              <span>Cybersecurity Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Cybersecurity Services</h1>
            <p className="text-xl text-red-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive security solutions to protect your business from evolving cyber threats.
              Safeguard your digital assets with our expert cybersecurity services.
            </p>
          </div>
        </div>
      </div>

      <Breadcrumbs items={[
        { label: 'Services', href: '/services' },
        { label: 'Cybersecurity' }
      ]} />

      {/* Main Content */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6 scroll-animate opacity-0 translate-x-[-50px] transition-all duration-700">
              <h2 className="text-4xl font-bold text-ink">
                Why Cybersecurity Matters
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In today's digital landscape, cyber threats are constantly evolving and becoming more sophisticated.
                  Businesses of all sizes are at risk of data breaches, ransomware attacks, and other cyber incidents
                  that can cause significant financial and reputational damage.
                </p>
                <p>
                  Our comprehensive cybersecurity services provide multi-layered protection to safeguard your business
                  from these threats. We combine cutting-edge technology with expert knowledge to create robust security
                  frameworks tailored to your specific needs.
                </p>
                <p className="font-semibold text-ink">
                  Don't wait for a security incident to happen. Protect your business with proactive cybersecurity measures.
                </p>
              </div>
            </div>

            <div className="relative scroll-animate opacity-0 translate-x-[50px] transition-all duration-700 delay-300">
              <img
                src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cybersecurity Services"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-12 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-3xl font-bold text-ink mb-4">Key Benefits</h2>
              <p className="text-xl text-gray-600">
                Protect your business with our comprehensive cybersecurity approach
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Illustration = benefit.illustration;
                return (
                  <div
                    key={index}
                    className="text-center p-6 bg-paper rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 scroll-animate opacity-0 translate-y-8"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="h-16 w-16 bg-gradient-to-br from-red-500 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Illustration className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-ink mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Services Section */}
          <div>
            <div className="text-center mb-12 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-3xl font-bold text-ink mb-4">Our Cybersecurity Services</h2>
              <p className="text-xl text-gray-600">
                Comprehensive security solutions tailored to protect your business
              </p>
            </div>

            <div className="space-y-8">
              {services.map((service, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 scroll-animate opacity-0 translate-y-8"
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-ink">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {service.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} subtitle="Common questions about cybersecurity services" />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-900 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Don't leave your business vulnerable to cyber threats. Contact our cybersecurity experts
              to discuss how we can protect your digital assets and ensure business continuity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://outlook.office.com/book/NexusAurora2@nexus-aurora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-danger-soft transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Security Assessment</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://outlook.office.com/book/NexusAurora2@nexus-aurora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                Contact Security Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;
