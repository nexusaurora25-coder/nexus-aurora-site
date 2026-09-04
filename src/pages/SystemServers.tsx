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
  ServerIllustration,
  DatabaseIllustration,
  ShieldIllustration,
  NetworkIllustration,
  HardDriveIllustration,
  LightningIllustration,
  AwardIllustration,
  ClockIllustration,
  TeamIllustration,
  AnimatedDot
} from '../components/AnimatedIllustrations';

const faqItems: FAQItem[] = [
  {
    question: 'What server management services do you provide?',
    answer: 'We provide server consolidation, Microsoft server solutions (Windows Server, Active Directory, Exchange, SharePoint), backup and disaster recovery, server integration, and virtualization solutions using VMware and Hyper-V.'
  },
  {
    question: 'What is server consolidation and how does it save money?',
    answer: 'Server consolidation combines multiple underutilized servers into fewer, more powerful systems. This reduces hardware costs, energy consumption, physical space requirements, and management complexity while improving overall performance and reliability.'
  },
  {
    question: 'Do you support virtualization technologies like VMware and Hyper-V?',
    answer: 'Yes, we implement and manage both VMware and Hyper-V virtualization environments. Virtualization transforms physical servers into virtual environments for better resource utilization, flexibility, high availability, and significant cost savings.'
  },
  {
    question: 'What Microsoft server solutions do you offer?',
    answer: 'We provide comprehensive Microsoft solutions including Windows Server implementation, Active Directory services, Exchange Server setup for email, SharePoint for collaboration, and Microsoft licensing management. We help businesses leverage the full Microsoft ecosystem.'
  },
  {
    question: 'How do you ensure data protection with your backup solutions?',
    answer: 'Our backup solutions include automated scheduling, offsite storage, rapid recovery systems, data integrity verification, and comprehensive disaster recovery planning. We ensure your critical business data is always protected and quickly recoverable.'
  }
];

const SystemServers = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useSEO({
    title: 'Server Management Malaysia - Consolidation, VMware, Hyper-V & Microsoft Server',
    description: 'Expert server consolidation, VMware & Hyper-V virtualization, Microsoft server solutions, and network infrastructure management in Sabah & Malaysia. Reduce costs and boost performance.',
    keywords: 'server management Malaysia, server consolidation Kota Kinabalu, VMware Malaysia, Hyper-V virtualization Sabah, Microsoft Windows Server Malaysia, Active Directory setup Malaysia, Exchange Server Malaysia, server optimization Sabah, IT infrastructure Malaysia, database management Malaysia, network infrastructure Kota Kinabalu',
    canonicalUrl: 'https://nexus-aurora.com/system-servers',
    breadcrumbs: [
      { name: 'Home', url: 'https://nexus-aurora.com' },
      { name: 'Services', url: 'https://nexus-aurora.com/services' },
      { name: 'System Servers', url: 'https://nexus-aurora.com/system-servers' }
    ],
    faqItems,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "System & Server Management",
      "provider": {
        "@type": "Organization",
        "name": "Nexus Aurora (M) Sdn Bhd",
        "url": "https://nexus-aurora.com"
      },
      "areaServed": [
        { "@type": "State", "name": "Sabah" },
        { "@type": "Country", "name": "Malaysia" }
      ],
      "description": "Comprehensive system and server management: consolidation, VMware/Hyper-V virtualization, Microsoft Windows Server/Active Directory/Exchange, database management, and network infrastructure optimization.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "System & Server Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Server Consolidation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "VMware Virtualization" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hyper-V Virtualization" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Microsoft Windows Server" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Active Directory & Exchange Server" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Backup & Disaster Recovery" } }
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
      title: 'Server Consolidation',
      description: 'Optimize your IT infrastructure by consolidating multiple servers into fewer, more powerful systems. Reduce hardware costs, energy consumption, and management complexity while improving performance and reliability.',
      illustration: ServerIllustration,
      color: 'from-primary-500 to-primary-600',
      features: ['Hardware Cost Reduction', 'Energy Efficiency', 'Simplified Management', 'Improved Performance', 'Space Optimization']
    },
    {
      title: 'Microsoft Solution',
      description: 'Comprehensive Microsoft server solutions including Windows Server, Active Directory, Exchange Server, and SharePoint. Leverage the power of Microsoft ecosystem for seamless integration and productivity.',
      illustration: DatabaseIllustration,
      color: 'from-green-500 to-green-600',
      features: ['Windows Server Implementation', 'Active Directory Services', 'Exchange Server Setup', 'SharePoint Solutions', 'Microsoft Licensing']
    },
    {
      title: 'Backup Solution',
      description: 'Robust backup and disaster recovery solutions to protect your critical business data. Automated backup schedules, offsite storage, and rapid recovery capabilities ensure business continuity.',
      illustration: ShieldIllustration,
      color: 'from-orange-500 to-orange-600',
      features: ['Automated Backup Scheduling', 'Offsite Storage Options', 'Rapid Recovery Systems', 'Data Integrity Verification', 'Disaster Recovery Planning']
    },
    {
      title: 'Server and Server Integration',
      description: 'Seamless integration of new servers with existing infrastructure. Ensure compatibility, optimize performance, and maintain security across your entire server environment.',
      illustration: NetworkIllustration,
      color: 'from-teal-500 to-teal-600',
      features: ['Infrastructure Assessment', 'Compatibility Testing', 'Performance Optimization', 'Security Integration', 'Migration Services']
    },
    {
      title: 'Virtualization Solution',
      description: 'Transform your physical servers into virtual environments for better resource utilization, flexibility, and cost savings. Implement VMware, Hyper-V, or other virtualization technologies.',
      illustration: HardDriveIllustration,
      color: 'from-red-500 to-red-600',
      features: ['VMware Implementation', 'Hyper-V Solutions', 'Resource Optimization', 'Virtual Machine Management', 'High Availability Setup']
    }
  ];

  const benefits = [
    {
      illustration: LightningIllustration,
      title: 'Enhanced Performance',
      description: 'Optimized server configurations for maximum performance and efficiency'
    },
    {
      illustration: ShieldIllustration,
      title: 'Robust Security',
      description: 'Enterprise-grade security measures to protect your server infrastructure'
    },
    {
      illustration: TeamIllustration,
      title: 'Expert Support',
      description: '24/7 technical support from certified server administrators'
    },
    {
      illustration: AwardIllustration,
      title: 'Lower TCO',
      description: 'Reduced Total Cost of Ownership through optimized design and implementation'
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
              <span>System Server Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">System Servers</h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              System solutions are the foundation to any company, with a roadmap for stability and scalability
              as key components to the system. Our consulting approach is based on lower TCO design for our clients.
            </p>
          </div>
        </div>
      </div>

      <Breadcrumbs items={[
        { label: 'Services', href: '/services' },
        { label: 'System Servers' }
      ]} />

      {/* Main Content */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6 scroll-animate opacity-0 translate-x-[-50px] transition-all duration-700">
              <h2 className="text-4xl font-bold text-ink">
                Why System Servers Matter
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In today's digital business environment, reliable server infrastructure is the backbone of
                  organizational success. Our system server solutions provide the stability, scalability,
                  and performance your business needs to thrive.
                </p>
                <p>
                  We understand that every organization has unique requirements. Our approach focuses on
                  designing cost-effective solutions that not only meet your current needs but also provide
                  a clear path for future growth and expansion.
                </p>
                <p className="font-semibold text-ink">
                  Build a solid foundation for your business with our expert system server solutions.
                </p>
              </div>
            </div>

            <div className="relative scroll-animate opacity-0 translate-x-[50px] transition-all duration-700 delay-300">
              <img
                src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="System Server Solutions"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-12 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-3xl font-bold text-ink mb-4">Key Benefits</h2>
              <p className="text-xl text-gray-600">
                Why businesses choose our system server solutions
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
                    <div className="h-16 w-16 bg-gradient-to-br from-gray-600 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
              <h2 className="text-3xl font-bold text-ink mb-4">Our System Server Solutions</h2>
              <p className="text-xl text-gray-600">
                Comprehensive server solutions designed for stability and scalability
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

      <FAQ items={faqItems} subtitle="Common questions about system server management" />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-900 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Ready to Optimize Your Server Infrastructure?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Let our server experts design a solution that provides stability, scalability,
              and cost-effectiveness for your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://outlook.office.com/book/NexusAurora2@nexus-aurora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-paper transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Server Assessment</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://outlook.office.com/book/NexusAurora2@nexus-aurora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-700 transition-colors"
              >
                Contact Server Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemServers;
