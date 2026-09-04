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
  AnimatedDot,
  CloudIllustration,
  ServerIllustration,
  GlobeIllustration,
  MailIllustration,
  ShieldIllustration,
  LightningIllustration,
  TeamIllustration,
  AwardIllustration,
  ClockIllustration
} from '../components/AnimatedIllustrations';

const faqItems: FAQItem[] = [
  {
    question: 'What types of hosting services do you offer in Malaysia?',
    answer: 'We offer shared hosting, dedicated servers, VPS hosting, web hosting, professional email hosting, and backup solutions. Each plan includes free SSL certificates, 24/7 technical support, and a 99.9% uptime guarantee.'
  },
  {
    question: 'What is the difference between shared hosting and dedicated servers?',
    answer: 'Shared hosting means your website shares server resources with other sites, making it cost-effective for smaller businesses. Dedicated servers provide exclusive resources for your business, offering maximum performance, security, and control — ideal for high-traffic websites and applications.'
  },
  {
    question: 'Do you provide email hosting with custom domains?',
    answer: 'Yes, we offer professional email hosting with your custom domain (e.g., yourname@yourbusiness.com). Our email services include spam and virus protection, mobile device sync, large mailbox storage, and email forwarding capabilities.'
  },
  {
    question: 'What uptime guarantee do you provide?',
    answer: 'We guarantee 99.9% uptime across all our hosting plans. Our infrastructure includes redundant systems, automated failover, and 24/7 monitoring to ensure your website and email services are always accessible.'
  },
  {
    question: 'Do you offer backup and disaster recovery for hosted services?',
    answer: 'Yes, all our hosting plans include automated daily backups with one-click restore options. We also offer offsite storage, version control, and comprehensive disaster recovery planning to ensure your data is always protected.'
  }
];

const CloudHosting = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useSEO({
    title: 'Cloud Hosting Malaysia - Web Hosting, VPS & Dedicated Servers | 99.9% Uptime',
    description: 'Reliable web hosting, VPS, and dedicated server solutions in Kota Kinabalu & Malaysia. Free SSL, professional email hosting, daily backups, and 99.9% uptime SLA for your business.',
    keywords: 'cloud hosting Malaysia, web hosting Kota Kinabalu, VPS hosting Malaysia, dedicated server Malaysia, shared hosting Sabah, email hosting Malaysia, business email hosting, SSL certificate Malaysia, 99.9 uptime hosting, affordable hosting Malaysia, website hosting Sabah',
    canonicalUrl: 'https://nexus-aurora.com/cloud-hosting',
    breadcrumbs: [
      { name: 'Home', url: 'https://nexus-aurora.com' },
      { name: 'Services', url: 'https://nexus-aurora.com/services' },
      { name: 'Cloud Hosting', url: 'https://nexus-aurora.com/cloud-hosting' }
    ],
    faqItems,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Cloud Hosting",
      "provider": {
        "@type": "Organization",
        "name": "Nexus Aurora (M) Sdn Bhd",
        "url": "https://nexus-aurora.com"
      },
      "areaServed": [
        { "@type": "State", "name": "Sabah" },
        { "@type": "Country", "name": "Malaysia" }
      ],
      "description": "Professional cloud hosting services including shared hosting, VPS, dedicated servers, and email hosting with 99.9% uptime SLA, free SSL, and 24/7 support.",
      "offers": {
        "@type": "AggregateOffer",
        "availability": "https://schema.org/InStock",
        "offerCount": 4,
        "offers": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shared Web Hosting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "VPS Hosting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dedicated Server Hosting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Professional Email Hosting" } }
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
      title: 'Shared Hosting',
      description: 'Cost-effective hosting solution perfect for small businesses and personal websites. Share server resources with other websites while maintaining excellent performance and reliability.',
      illustration: GlobeIllustration,
      color: 'from-primary-500 to-primary-600',
      features: ['99.9% Uptime Guarantee', 'Free SSL Certificate', 'One-Click WordPress Install', 'Email Accounts Included', '24/7 Technical Support']
    },
    {
      title: 'Dedicated Servers',
      description: 'Complete server resources dedicated exclusively to your business. Maximum performance, security, and control for high-traffic websites and applications.',
      illustration: ServerIllustration,
      color: 'from-teal-500 to-teal-600',
      features: ['Full Root Access', 'Custom Server Configuration', 'High-Performance Hardware', 'Advanced Security Features', 'Managed Server Options']
    },
    {
      title: 'Web Hosting',
      description: 'Professional web hosting solutions designed to keep your website fast, secure, and always accessible. Perfect for businesses of all sizes.',
      illustration: CloudIllustration,
      color: 'from-green-500 to-green-600',
      features: ['SSD Storage', 'Free Domain Registration', 'Website Builder Tools', 'Multiple PHP Versions', 'Database Support']
    },
    {
      title: 'Email Services',
      description: 'Professional email hosting with your custom domain. Secure, reliable email communication for your business with advanced spam protection.',
      illustration: MailIllustration,
      color: 'from-orange-500 to-orange-600',
      features: ['Custom Domain Email', 'Spam & Virus Protection', 'Mobile Device Sync', 'Large Mailbox Storage', 'Email Forwarding']
    },
    {
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions to protect your data and ensure business continuity. Automated backups with quick recovery options.',
      illustration: ShieldIllustration,
      color: 'from-red-500 to-red-600',
      features: ['Automated Daily Backups', 'One-Click Restore', 'Offsite Storage', 'Version Control', 'Disaster Recovery Planning']
    }
  ];

  const benefits = [
    {
      illustration: LightningIllustration,
      title: 'High Performance',
      description: 'Lightning-fast servers with SSD storage and optimized configurations'
    },
    {
      illustration: ShieldIllustration,
      title: 'Enterprise Security',
      description: 'Advanced security measures including firewalls, DDoS protection, and SSL certificates'
    },
    {
      illustration: TeamIllustration,
      title: 'Expert Support',
      description: '24/7 technical support from certified hosting professionals'
    },
    {
      illustration: AwardIllustration,
      title: 'Proven Reliability',
      description: '99.9% uptime guarantee with redundant infrastructure and monitoring'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-800 via-primary-700 to-ink text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              <AnimatedDot />
              <span>Cloud Hosting Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Cloud Hosting Services</h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              We provide your business with the domain, website, and email hosting it needs. Solutions include a range of services,
              including basic web hosting for individuals and entrepreneurs, email, e-commerce, VPS server, and dedicated server hosting.
            </p>
          </div>
        </div>
      </div>

      <Breadcrumbs items={[
        { label: 'Services', href: '/services' },
        { label: 'Cloud Hosting' }
      ]} />

      {/* Main Content */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6 scroll-animate opacity-0 translate-x-[-50px] transition-all duration-700">
              <h2 className="text-4xl font-bold text-ink">
                Why Choose Our Cloud Hosting?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In today's digital world, reliable hosting is crucial for business success. Our cloud hosting solutions
                  provide the perfect balance of performance, security, and affordability to keep your online presence
                  running smoothly 24/7.
                </p>
                <p>
                  Whether you're launching your first website or managing enterprise-level applications, our hosting
                  infrastructure scales with your needs. We offer everything from shared hosting for startups to
                  dedicated servers for high-traffic websites.
                </p>
                <p className="font-semibold text-ink">
                  Experience the difference with our enterprise-grade hosting solutions backed by expert support.
                </p>
              </div>
            </div>

            <div className="relative scroll-animate opacity-0 translate-x-[50px] transition-all duration-700 delay-300">
              <img
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cloud Hosting Services"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-12 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-3xl font-bold text-ink mb-4">Key Benefits</h2>
              <p className="text-xl text-gray-600">
                Why thousands of businesses trust our hosting solutions
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
                    <div className="h-16 w-16 bg-gradient-to-br from-primary-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
              <h2 className="text-3xl font-bold text-ink mb-4">Our Hosting Services</h2>
              <p className="text-xl text-gray-600">
                Complete hosting solutions tailored to your business needs
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

      <FAQ items={faqItems} subtitle="Common questions about cloud hosting services" />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-900 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Ready to Host Your Website?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Get started with our reliable hosting solutions today. Choose the perfect plan for your business
              and experience the difference of professional hosting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://outlook.office.com/book/NexusAurora2@nexus-aurora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center space-x-2"
              >
                <span>View Hosting Plans</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://outlook.office.com/book/NexusAurora2@nexus-aurora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Contact Sales Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudHosting;
