import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSEO } from '../utils/seo';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQ from '../components/FAQ';
import type { FAQItem } from '../components/FAQ';
import {
  ArrowRight
} from 'lucide-react';
import {
  CodeIllustration,
  SearchIllustration,
  PaletteIllustration,
  LightningIllustration,
  ShieldIllustration,
  MonitorIllustration,
  GlobeIllustration,
  CheckIllustration,
  AnimatedDot
} from '../components/AnimatedIllustrations';

const WebDevelopmentProcess = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const faqItems: FAQItem[] = [
    {
      question: 'How long does it take to build a website?',
      answer: 'A simple brochure website typically takes 2–4 weeks. A full-featured web application can take 6–16 weeks depending on complexity, integrations, and client feedback cycles. We provide a detailed project timeline during discovery.'
    },
    {
      question: 'What information do you need to start a web project?',
      answer: 'We need your business goals, target audience, preferred design style, any existing brand guidelines, and a list of required features. A brief or mood board is helpful but not mandatory — our discovery session will guide you through the process.'
    },
    {
      question: 'Do you build mobile-responsive websites?',
      answer: 'Yes, every website we build is fully responsive and tested across desktop, tablet, and mobile devices. We follow a mobile-first approach to ensure optimal performance on all screen sizes.'
    },
    {
      question: 'What happens after my website is launched?',
      answer: 'We provide post-launch support including bug fixes, performance monitoring, and content updates. We can also arrange an ongoing maintenance retainer to keep your website secure, updated, and optimised.'
    },
    {
      question: 'Do you provide website hosting?',
      answer: 'Yes, we offer cloud hosting with a 99.9% uptime SLA through our Cloud Hosting service. Alternatively, we can deploy your website to your preferred hosting provider such as AWS, Vercel, or Netlify.'
    }
  ];

  useSEO({
    title: 'Web Development Process & Methodology | Nexus Aurora Malaysia',
    description: 'Discover our 5-step web development process: discovery, design, development, testing, and deployment. Professional web development methodology using React, TypeScript, and modern tools in Kota Kinabalu, Malaysia.',
    keywords: 'web development process Malaysia, development methodology, agile web development, web design process Kota Kinabalu, software development lifecycle, responsive web design, React web development, modern web technologies',
    canonicalUrl: 'https://nexus-aurora.com/web-development-process',
    breadcrumbs: [
      { name: 'Home', url: 'https://nexus-aurora.com' },
      { name: 'Web Development', url: 'https://nexus-aurora.com/web-development' },
      { name: 'Our Process', url: 'https://nexus-aurora.com/web-development-process' }
    ],
    faqItems,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Our 5-Step Web Development Process",
      "description": "A proven 5-step web development methodology from discovery to launch used by Nexus Aurora in Malaysia.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Discovery & Planning", "text": "Understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap." },
        { "@type": "HowToStep", "position": 2, "name": "Design & Prototyping", "text": "Creating wireframes and interactive prototypes that visualise your website before development begins." },
        { "@type": "HowToStep", "position": 3, "name": "Development", "text": "Building your website using modern technologies including React, TypeScript, and Tailwind CSS." },
        { "@type": "HowToStep", "position": 4, "name": "Testing & Optimisation", "text": "Comprehensive testing across all devices and browsers, optimised for speed, SEO, and user experience." },
        { "@type": "HowToStep", "position": 5, "name": "Launch & Support", "text": "Handling the deployment process and providing ongoing support to ensure peak performance." }
      ]
    }
  });

  const processSteps = [
    {
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and technical requirements. Our team conducts thorough research to create a comprehensive project roadmap.',
      illustration: SearchIllustration,
      color: 'from-primary-500 to-primary-600'
    },
    {
      title: 'Design & Prototyping',
      description: 'Using modern design tools, we create wireframes and interactive prototypes that visualize your website before development begins.',
      illustration: PaletteIllustration,
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Development',
      description: 'Building your website using modern technologies including React, TypeScript, and Tailwind CSS, with regular check-ins so you can track progress along the way.',
      illustration: LightningIllustration,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Testing & Optimization',
      description: 'Comprehensive testing across all devices and browsers ensures your website performs flawlessly. We optimize for speed, SEO, and user experience.',
      illustration: ShieldIllustration,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Launch & Support',
      description: 'We handle the deployment process and provide ongoing support to ensure your website continues to perform at its best.',
      illustration: CheckIllustration,
      color: 'from-sky-500 to-sky-600'
    }
  ];

  const features = [
    {
      illustration: MonitorIllustration,
      title: 'Responsive Design',
      description: 'Every website we build looks perfect on desktop, tablet, and mobile devices'
    },
    {
      illustration: LightningIllustration,
      title: 'Lightning Fast',
      description: 'Optimized for speed with modern build tools and performance best practices'
    },
    {
      illustration: ShieldIllustration,
      title: 'Secure & Reliable',
      description: 'Built with security in mind using industry-standard practices'
    },
    {
      illustration: GlobeIllustration,
      title: 'SEO Optimized',
      description: 'Search engine friendly structure and metadata for better visibility'
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
              <span>Our Development Process</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">How We Build Your Website</h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Discover our streamlined web development process using modern technologies like React and TypeScript
              to deliver exceptional websites faster than traditional methods.
            </p>
          </div>
        </div>
      </div>

      <Breadcrumbs items={[{ label: 'Web Development', href: '/web-development' }, { label: 'Our Process' }]} />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ink mb-4">Our 5-Step Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we follow a proven methodology that ensures quality results and client satisfaction
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const Illustration = step.illustration;
              return (
                <div key={index} className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className={`h-20 w-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Illustration className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 bg-paper rounded-2xl p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <h3 className="text-2xl font-bold text-ink">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ink mb-4">What You Get</h2>
            <p className="text-xl text-gray-600">
              Every website we build includes these essential features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Illustration = feature.illustration;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="h-16 w-16 bg-gradient-to-br from-primary-500 to-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Illustration className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-white">
              Ready to Start Your Web Project?
            </h3>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Experience the power of modern web development with our streamlined process and cutting-edge tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
      <FAQ items={faqItems} />
    </div>
  );
};

export default WebDevelopmentProcess;