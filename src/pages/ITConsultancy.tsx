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
  SearchIllustration,
  MonitorIllustration,
  CartIllustration,
  CheckIllustration,
  ShieldIllustration,
  LightningIllustration,
  AwardIllustration,
  ClockIllustration
} from '../components/AnimatedIllustrations';

const faqItems: FAQItem[] = [
  {
    question: 'What IT consultancy services do you provide?',
    answer: 'We provide end-to-end IT consulting including infrastructure planning, technology strategy, network design (structured cabling, server rooms, wireless, PABX, IPTV), vendor management, procurement assistance, and project oversight for deployment and compliance checks.'
  },
  {
    question: 'Do you specialize in hotel IT infrastructure?',
    answer: 'Yes, we have extensive experience in hotel and hospitality IT consulting. We help hotels implement technology solutions that enhance guest experience, improve operational efficiency, and integrate systems like IPTV, PABX, wireless networks, and property management systems.'
  },
  {
    question: 'How does your IT consulting process work?',
    answer: 'Our process follows four phases: Concept and Discovery (understanding your needs), Design and Development (creating the IT blueprint), System and Vendor Review (procurement with proper specifications), and Project Construction and Completion (deployment oversight and compliance checks).'
  },
  {
    question: 'Can you help with vendor selection and procurement?',
    answer: 'Yes, we assist with creating well-defined specifications, vetting suppliers, and managing vendor relationships. This helps lower regulatory, security, privacy, and contract risks while ensuring you get the right resources at the best value.'
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, we offer ongoing IT support and maintenance after project completion. This includes 24/7 technical support, system monitoring, regular health assessments, and strategic IT planning to ensure your infrastructure continues to meet evolving business needs.'
  }
];

const ITConsultancy = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useSEO({
    title: 'IT Consultancy Services Malaysia - Hotel & Business Technology Planning',
    description: 'Expert IT consulting for hotels and businesses in Sabah & Kota Kinabalu. Infrastructure design, structured cabling, PABX, IPTV, wireless networks, vendor management, and full project oversight.',
    keywords: 'IT consultancy Malaysia, IT consulting Kota Kinabalu, hotel IT solutions Sabah, technology consulting Malaysia, IT infrastructure planning, structured cabling Malaysia, PABX IPTV setup, vendor management IT, business technology consulting Sabah',
    canonicalUrl: 'https://nexus-aurora.com/it-consultancy',
    breadcrumbs: [
      { name: 'Home', url: 'https://nexus-aurora.com' },
      { name: 'Services', url: 'https://nexus-aurora.com/services' },
      { name: 'IT Consultancy', url: 'https://nexus-aurora.com/it-consultancy' }
    ],
    faqItems,
    structuredData: {
      "@context": "https://schema.org",
      "@type": ["Service", "HowTo"],
      "name": "IT Consultancy Services Malaysia",
      "serviceType": "IT Consultancy",
      "provider": {
        "@type": "Organization",
        "name": "Nexus Aurora (M) Sdn Bhd",
        "url": "https://nexus-aurora.com"
      },
      "areaServed": [
        { "@type": "State", "name": "Sabah" },
        { "@type": "Country", "name": "Malaysia" }
      ],
      "description": "End-to-end IT consulting for hotels and businesses: infrastructure planning, structured cabling, server room, wireless, PABX, IPTV, vendor management, and project completion.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      },
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Concept and Discovery",
          "text": "We help you discover and decide on the right back-end and front-office IT structure for your business, planning for long-term scalability across physical, software, and network components."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Design and Development",
          "text": "We conceptualize the layout for your structured cabling, server room, wireless, PABX, IPTV, and network security design."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "System and Vendor Review and Procurement",
          "text": "We assist in creating well-defined specifications, vetting suppliers, and managing vendor relationships to lower regulatory, security, privacy, and contract risks."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Project Construction and Completion",
          "text": "We oversee IT system deployments including internet line activation, providing recommendations and performing compliance checks for completed work."
        }
      ]
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

  const processSteps = [
    {
      title: 'Concept and Discovery',
      description: 'We help you discover and decide on the kind of back-end and front-office IT structure your company needs. We help you think long-term so that the physical, software and network components of your infrastructure can effectively respond to ever-changing marketplace demands and consumer behaviours.',
      illustration: SearchIllustration,
      color: 'from-primary-500 to-primary-600'
    },
    {
      title: 'Design and Development',
      description: 'We conceptualize the layout for your structured cabling, server room, wireless, PABX, IPTV and network security design.',
      illustration: MonitorIllustration,
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'System and Vendor Review and Procurement',
      description: 'We assist you in coming up with well-defined specifications to ensure you get the right resources from the right vendors. Carefully vetting suppliers with you will lower regulatory, security, privacy, as well as contract risks of working with other entities.',
      illustration: CartIllustration,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Project Construction and Completion',
      description: 'We oversee IT system deployments—including the activation of internet lines—offering recommendations and assistance along the way. We also perform compliance checks for completed work.',
      illustration: CheckIllustration,
      color: 'from-sky-500 to-sky-600'
    }
  ];

  const benefits = [
    {
      illustration: ShieldIllustration,
      title: 'Enhanced Security',
      description: 'Robust security measures to protect your business and customer data'
    },
    {
      illustration: LightningIllustration,
      title: 'Improved Efficiency',
      description: 'Streamlined operations that maximize productivity and minimize costs'
    },
    {
      illustration: AwardIllustration,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge technology solutions'
    },
    {
      illustration: ClockIllustration,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services'
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
              <span>Professional IT Consulting</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">IT Consultancy Services</h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Transform your business with expert IT consulting services designed to enhance customer experience,
              maximize efficiency, and minimize costs through strategic technology implementation.
            </p>
          </div>
        </div>
      </div>

      <Breadcrumbs items={[
        { label: 'Services', href: '/services' },
        { label: 'IT Consultancy' }
      ]} />

      {/* Main Content */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6 scroll-animate opacity-0 translate-x-[-50px] transition-all duration-700">
              <h2 className="text-4xl font-bold text-ink">
                Why Choose Our IT Consultancy?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  With the rise of the digital age, hotels are increasingly turning to technology to enhance their customer experience and increase efficiency. However, without the right technology and IT expertise, hotels can easily become overwhelmed and unable to meet the needs of their guests.
                </p>
                <p>
                  This is why engaging an IT consultancy can be a great way for hotels to get the most out of their technology investments. Engaging an IT consultancy for a new hotel can help ensure that the right technology is in place to meet the needs of the guests while also helping to maximize efficiency and minimize costs.
                </p>
                <p className="font-semibold text-ink">
                  We help you achieve a secure and efficient IT infrastructure environment that allows you to utilize IT to improve your BRAND and efficiency.
                </p>
              </div>
            </div>

            <div className="relative scroll-animate opacity-0 translate-x-[50px] transition-all duration-700 delay-300">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="IT Consultancy Services"
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
                With the right technology and expertise in place, hotels can provide an enhanced customer experience and stay ahead of the competition.
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
                    <div className="h-16 w-16 bg-gradient-to-br from-primary-500 to-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Illustration className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-ink mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Process Section */}
          <div>
            <div className="text-center mb-12 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-3xl font-bold text-ink mb-4">Our IT Infrastructure Process</h2>
              <p className="text-xl text-gray-600">
                Our consultants can guide you through each phase of your IT infrastructure project—whether it's from scratch or you're going for an upgrade.
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 scroll-animate opacity-0 translate-y-8"
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-ink">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} subtitle="Common questions about IT consultancy services" />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-900 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Let our expert consultants help you build a secure, efficient, and scalable IT environment that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://outlook.office.com/book/NexusAurora2@nexus-aurora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITConsultancy;
