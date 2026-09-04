import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSEO } from '../utils/seo';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQ from '../components/FAQ';
import type { FAQItem } from '../components/FAQ';
import {
  Globe,
  Smartphone,
  Zap,
  Search,
  CheckCircle,
  ArrowRight,
  Code,
  Palette,
  Shield,
  TrendingUp
} from 'lucide-react';

const faqItems: FAQItem[] = [
  {
    question: 'What web development technologies do you use?',
    answer: 'We build websites using modern technologies including React, Next.js, TypeScript, Node.js, Tailwind CSS, and PostgreSQL. These ensure your website is fast, secure, SEO-optimized, and scalable for future growth.'
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'A standard business website typically takes 4-8 weeks from design to launch. Complex web applications with custom features may take longer. We provide detailed timelines during our initial consultation based on your specific requirements.'
  },
  {
    question: 'Do you build SEO-optimized websites?',
    answer: 'Yes, SEO optimization is built into every website from the ground up. This includes clean semantic code, fast loading speeds, mobile responsiveness, proper meta tags, structured data markup, and optimized content structure to help your site rank higher in search results.'
  },
  {
    question: 'Will my website work on mobile devices?',
    answer: 'Every website we build is fully responsive and optimized for all devices including smartphones, tablets, and desktops. We follow a mobile-first approach to ensure the best user experience across all screen sizes.'
  },
  {
    question: 'Do you provide website maintenance and support?',
    answer: 'Yes, we offer ongoing website maintenance packages that include security updates, performance monitoring, content updates, backup management, and technical support to keep your website running smoothly after launch.'
  },
  {
    question: 'How much does a custom website cost in Malaysia?',
    answer: 'Website costs vary based on complexity, features, and design requirements. We offer solutions for every budget, from simple business websites to complex web applications. Contact us for a free consultation and detailed quote tailored to your needs.'
  }
];

const WebDevelopment = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useSEO({
    title: 'Professional Web Development Malaysia - React, Next.js & Custom Websites',
    description: 'Custom website and web application development in Kota Kinabalu & Malaysia. Built with React, Next.js and TypeScript — responsive, SEO-optimised, and fast-loading for Sabah businesses.',
    keywords: 'web development Malaysia, custom website development Kota Kinabalu, React developer Malaysia, Next.js development Sabah, responsive web design Malaysia, SEO website development Malaysia, web application development, TypeScript developer Malaysia, website design Kota Kinabalu, affordable website Malaysia',
    canonicalUrl: 'https://nexus-aurora.com/web-development',
    breadcrumbs: [
      { name: 'Home', url: 'https://nexus-aurora.com' },
      { name: 'Services', url: 'https://nexus-aurora.com/services' },
      { name: 'Web Development', url: 'https://nexus-aurora.com/web-development' }
    ],
    faqItems,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Web Development",
      "provider": {
        "@type": "Organization",
        "name": "Nexus Aurora (M) Sdn Bhd",
        "url": "https://nexus-aurora.com"
      },
      "areaServed": [
        { "@type": "State", "name": "Sabah" },
        { "@type": "Country", "name": "Malaysia" }
      ],
      "description": "Professional web development services including custom websites, web applications, responsive design, and SEO optimization using modern technologies like React, Next.js, and TypeScript.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    }
  });

  const features = [
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Websites that look and work perfectly on all devices - desktop, tablet, and mobile. Your users get a consistent experience regardless of how they access your site.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Built with search engine optimization in mind from the ground up. Clean code, fast loading times, and proper structure help your site rank higher in search results.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      title: 'Fast Loading',
      description: 'Optimized for speed with modern techniques like code splitting, image optimization, and efficient caching strategies to ensure lightning-fast page loads.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Cross-browser Compatible',
      description: 'Thoroughly tested across all major browsers including Chrome, Firefox, Safari, and Edge to ensure consistent functionality and appearance.',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'PostgreSQL', category: 'Database' }
  ];

  const benefits = [
    {
      icon: Code,
      title: 'Modern Technologies',
      description: 'Built with the latest web technologies and frameworks for future-proof solutions'
    },
    {
      icon: Palette,
      title: 'Custom Design',
      description: 'Unique designs tailored to your brand identity and business requirements'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Industry-standard security practices and reliable hosting solutions'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business and handle increasing traffic and features'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-800 via-primary-700 to-ink text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              <Globe className="h-4 w-4" />
              <span>Professional Web Development</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Web Development Services</h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.
            </p>
          </div>
        </div>
      </div>

      <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Web Development' }]} />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-ink">
                Why Choose Our Web Development Services?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In today's digital landscape, your website is often the first impression customers have of your business. 
                  We create stunning, high-performance websites that not only look great but also drive results.
                </p>
                <p>
                  Our team of expert developers uses the latest technologies and best practices to build websites that 
                  are fast, secure, and optimized for search engines. Whether you need a simple business website or 
                  a complex web application, we have the expertise to bring your vision to life.
                </p>
                <p className="font-semibold text-ink">
                  We deliver websites that combine beautiful design with powerful functionality to help your business succeed online.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Web Development Services" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-ink mb-4">Key Benefits</h3>
              <p className="text-xl text-gray-600">
                Our web development approach ensures your website delivers exceptional results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center p-6 bg-paper rounded-xl hover:shadow-lg transition-shadow">
                    <div className="h-16 w-16 bg-gradient-to-br from-primary-500 to-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-ink mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-ink mb-4">Our Web Development Features</h3>
              <p className="text-xl text-gray-600">
                Every website we build includes these essential features for optimal performance
              </p>
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => {
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                    <div className="space-y-4">
                      <h4 className="text-2xl font-bold text-ink">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-ink mb-4">Technologies We Use</h3>
              <p className="text-xl text-gray-600">
                We leverage modern technologies to build robust and scalable web solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="text-center p-4 bg-paper rounded-xl hover:shadow-md transition-shadow">
                  <div className="text-lg font-bold text-ink mb-1">{tech.name}</div>
                  <div className="text-sm text-gray-600">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-white">
              Ready to Build Your Dream Website?
            </h3>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Let our expert web developers create a stunning, high-performance website that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://outlook.office.com/book/NexusAurora2@nexus-aurora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
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

export default WebDevelopment;