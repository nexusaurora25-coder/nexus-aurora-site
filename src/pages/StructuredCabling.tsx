import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSEO } from '../utils/seo';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQ from '../components/FAQ';
import type { FAQItem } from '../components/FAQ';
import { ArrowRight } from 'lucide-react';
import {
  NetworkIllustration,
  ServerIllustration,
  HardDriveIllustration,
  CheckIllustration,
  TargetIllustration,
  DatabaseIllustration,
  ShieldIllustration,
  ClockIllustration,
  TeamIllustration,
  AnimatedDot,
} from '../components/AnimatedIllustrations';

const faqItems: FAQItem[] = [
  {
    question: 'What is structured cabling?',
    answer: 'Structured cabling is a standardized network cabling infrastructure (data, voice, and video) designed around a consistent architecture rather than ad-hoc point-to-point wiring. It uses standardized cable types, connectors, and layouts so your network is reliable, easy to troubleshoot, and simple to expand as your business grows.'
  },
  {
    question: 'What is the difference between Cat6 and Cat6A cabling?',
    answer: 'Cat6 supports speeds up to 1 Gbps (10 Gbps over short distances up to ~55m), while Cat6A supports 10 Gbps over the full 100m run with better shielding against interference. Cat6A costs more but is the safer long-term choice for server rooms and high-bandwidth environments; Cat6 remains a solid, cost-effective choice for standard office workstations.'
  },
  {
    question: 'Do you certify and test cabling after installation?',
    answer: 'Yes. Every structured cabling project we deliver is tested and certified against TIA/EIA standards using professional cable certification tools, and you receive a full test report documenting performance for every run — giving you documented proof of a compliant, reliable installation.'
  },
  {
    question: 'Do you handle server room and rack cabling?',
    answer: 'Yes, we design and install server rack cabling, patch panels, and cable management systems for server rooms and data centers, alongside our System Servers and Managed IT Services offerings, so your physical infrastructure and your managed services come from one accountable team.'
  },
  {
    question: 'How long does an office cabling project take?',
    answer: 'Timelines depend on office size and existing infrastructure, but a typical SME office (10-50 drops) is usually completed within 3-7 working days, scheduled around your business hours to minimize disruption. We provide a clear project timeline after an on-site assessment.'
  },
  {
    question: 'Do you provide structured cabling outside Kota Kinabalu?',
    answer: 'Our home base is Kota Kinabalu, Sabah, and that\'s where we provide the fastest on-site response. We also take on structured cabling projects elsewhere in Malaysia — contact us with your location and project scope for availability.'
  }
];

const cablingServices = [
  {
    illustration: NetworkIllustration,
    title: 'Cat6 / Cat6A Installation',
    description: 'Standards-compliant copper cabling for office workstations, VoIP phones, and access points, sized to your bandwidth needs today and tomorrow.',
    features: ['Cat6 & Cat6A runs', 'Patch panel termination', 'Wall & floor outlets', 'Structured pathways']
  },
  {
    illustration: TargetIllustration,
    title: 'Fiber Optic Installation',
    description: 'Single-mode and multi-mode fiber for backbone links, inter-building runs, and high-bandwidth server connections.',
    features: ['Backbone fiber runs', 'Fusion splicing', 'Fiber patch panels', 'Long-distance links']
  },
  {
    illustration: ServerIllustration,
    title: 'Server Rack & Data Center Cabling',
    description: 'Clean, labeled rack cabling and patch management that keeps your server room organized, cool, and easy to maintain.',
    features: ['Rack & cabinet cabling', 'Cable management arms', 'Hot/cold aisle friendly', 'Structured labeling']
  },
  {
    illustration: CheckIllustration,
    title: 'Cable Testing & Certification',
    description: 'Every run is tested and certified to TIA/EIA standards, with a documented performance report handed over on project completion.',
    features: ['TIA/EIA certification', 'Performance test reports', 'Fault diagnostics', 'Warranty-backed testing']
  },
  {
    illustration: DatabaseIllustration,
    title: 'Office & Campus Network Cabling',
    description: 'End-to-end cabling for new fit-outs, office relocations, or campus-wide network expansions.',
    features: ['New office fit-outs', 'Office relocations', 'Multi-floor / campus runs', 'Minimal business disruption']
  },
  {
    illustration: HardDriveIllustration,
    title: 'Cable Management & Labeling',
    description: 'Structured, clearly labeled cabling so your team (or ours) can troubleshoot and expand your network with confidence.',
    features: ['Consistent labeling scheme', 'As-built documentation', 'Future-proof pathways', 'Tidy, inspection-ready runs']
  }
];

const whyChoose = [
  {
    title: 'TIA/EIA Standards Compliant',
    description: 'Every installation follows recognized TIA/EIA structured cabling standards, so your network is reliable, supportable, and ready for future upgrades.',
    illustration: ShieldIllustration
  },
  {
    title: 'Tested & Certified Installs',
    description: 'We don\'t just install and leave — every cable run is tested, certified, and documented before we call the job done.',
    illustration: CheckIllustration
  },
  {
    title: 'Minimal Business Disruption',
    description: 'Projects are scheduled around your operating hours, with clear timelines, so cabling work doesn\'t interrupt your day-to-day business.',
    illustration: ClockIllustration
  },
  {
    title: 'Backed by Pioneer Infotech',
    description: 'The same regional MSP expertise and quality standards behind our managed services extends to every cabling project we deliver.',
    illustration: TeamIllustration
  }
];

const StructuredCabling = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useSEO({
    title: 'Structured Cabling in Kota Kinabalu: Cat6 & Fiber',
    description: 'Professional structured cabling in Kota Kinabalu, Sabah, powered by Pioneer Infotech Singapore. TIA/EIA-standard Cat6/Cat6A and fiber optic installation, server rack cabling, and cable testing & certification for Malaysian businesses.',
    keywords: 'structured cabling Malaysia, Cat6 cabling Kota Kinabalu, Cat6A installation Sabah, fiber optic installation Malaysia, network cabling Kota Kinabalu, server rack cabling, cable certification testing, office network cabling Sabah',
    canonicalUrl: 'https://nexus-aurora.com/structured-cabling',
    breadcrumbs: [
      { name: 'Home', url: 'https://nexus-aurora.com' },
      { name: 'Services', url: 'https://nexus-aurora.com/services' },
      { name: 'Structured Cabling', url: 'https://nexus-aurora.com/structured-cabling' }
    ],
    faqItems,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Structured Cabling",
      "name": "Structured Cabling Services - Cat6/Cat6A & Fiber Optic Installation",
      "provider": {
        "@type": "Organization",
        "name": "Nexus Aurora (M) Sdn Bhd",
        "url": "https://nexus-aurora.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Malaysia"
      },
      "description": "Professional structured cabling solutions for offices, server rooms, and data centers, built to TIA/EIA standards, backed by Pioneer Infotech Singapore's 17 years of expertise.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "areaServed": "Malaysia"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Structured Cabling",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cat6 / Cat6A Installation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fiber Optic Installation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Server Rack Cabling" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cable Testing & Certification" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Network Cabling" } }
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

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-primary-800 via-primary-700 to-ink text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              <AnimatedDot className="h-4 w-4" />
              <span>Powered by Pioneer Infotech Singapore - 17 Years of MSP Excellence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Structured Cabling</h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              TIA/EIA-standard network cabling for offices, server rooms, and data centers — installed, tested,
              and certified for reliable, future-proof infrastructure across Malaysia.
            </p>
          </div>
        </div>
      </div>

      <Breadcrumbs items={[
        { label: 'Services', href: '/services' },
        { label: 'Structured Cabling' }
      ]} />

      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-4xl font-bold text-ink mb-4">What is Structured Cabling?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Structured cabling is the standardized, organized backbone of your network — planned around consistent
              cable types, connectors, and layouts instead of ad-hoc wiring. It's what lets your network scale,
              stay easy to troubleshoot, and support new equipment for years without a rewire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {cablingServices.map((service, index) => {
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
              <h2 className="text-3xl font-bold text-ink mb-4">Why Choose Our Cabling Services?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Certified installations backed by Pioneer Infotech's regional expertise
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
        </div>
      </section>

      <FAQ items={faqItems} subtitle="Common questions about our Structured Cabling services" />

      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Ready for Network Infrastructure That Just Works?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Get a certified structured cabling installation for your office, server room, or data center —
              start with a free on-site assessment.
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StructuredCabling;
