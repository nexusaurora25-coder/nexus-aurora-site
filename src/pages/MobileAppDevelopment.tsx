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
  PhoneIllustration,
  CodeIllustration,
  LightningIllustration,
  TargetIllustration,
  GlobeIllustration,
  TeamIllustration,
  AwardIllustration,
  AnimatedDot
} from '../components/AnimatedIllustrations';

const faqItems: FAQItem[] = [
  {
    question: 'What mobile app development platforms do you support?',
    answer: 'We develop native apps for both iOS and Android, as well as cross-platform solutions using React Native and Flutter. We help you choose the best approach based on your budget, timeline, target audience, and feature requirements.'
  },
  {
    question: 'How long does it take to develop a mobile app?',
    answer: 'Development timelines vary based on complexity. A simple app may take 2-3 months, while a feature-rich application could take 4-6 months or more. During our initial consultation, we provide a detailed project timeline based on your specific requirements.'
  },
  {
    question: 'What is the difference between native and cross-platform development?',
    answer: 'Native development builds separate apps for iOS and Android using platform-specific languages, offering the best performance and access to device features. Cross-platform development (React Native, Flutter) uses a single codebase for both platforms, reducing development time and cost while maintaining near-native performance.'
  },
  {
    question: 'Do you provide App Store Optimization (ASO) services?',
    answer: 'Yes, we offer comprehensive ASO services including keyword research, app store listing optimization, visual assets creation, review management, and performance analytics to improve your apps visibility and downloads in the Apple App Store and Google Play Store.'
  },
  {
    question: 'Do you offer post-launch support and maintenance?',
    answer: 'Yes, we provide ongoing maintenance and support including bug fixes, OS compatibility updates, performance optimization, feature enhancements, and analytics monitoring to ensure your app continues to perform well after launch.'
  }
];

const MobileAppDevelopment = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useSEO({
    title: 'Mobile App Development Malaysia - iOS, Android, React Native & Flutter',
    description: 'Custom iOS and Android app development in Malaysia using React Native and Flutter. Native performance, cross-platform efficiency, and App Store Optimization (ASO) for Sabah businesses.',
    keywords: 'mobile app development Malaysia, iOS app developer Kota Kinabalu, Android app development Malaysia, React Native developer Malaysia, Flutter app development, cross-platform mobile apps, app store optimization Malaysia, mobile application development Sabah, custom app development Malaysia',
    canonicalUrl: 'https://nexus-aurora.com/mobile-app-development',
    breadcrumbs: [
      { name: 'Home', url: 'https://nexus-aurora.com' },
      { name: 'Services', url: 'https://nexus-aurora.com/services' },
      { name: 'Mobile App Development', url: 'https://nexus-aurora.com/mobile-app-development' }
    ],
    faqItems,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Mobile App Development",
      "provider": {
        "@type": "Organization",
        "name": "Nexus Aurora (M) Sdn Bhd",
        "url": "https://nexus-aurora.com"
      },
      "areaServed": [
        { "@type": "State", "name": "Sabah" },
        { "@type": "Country", "name": "Malaysia" }
      ],
      "description": "Professional mobile app development including native iOS and Android, React Native, Flutter cross-platform solutions, and App Store Optimization for Malaysian businesses.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mobile App Development Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "SoftwareApplication", "name": "Native iOS App Development", "operatingSystem": "iOS", "applicationCategory": "BusinessApplication" } },
          { "@type": "Offer", "itemOffered": { "@type": "SoftwareApplication", "name": "Native Android App Development", "operatingSystem": "Android", "applicationCategory": "BusinessApplication" } },
          { "@type": "Offer", "itemOffered": { "@type": "SoftwareApplication", "name": "React Native Cross-Platform App", "operatingSystem": "iOS, Android", "applicationCategory": "BusinessApplication" } },
          { "@type": "Offer", "itemOffered": { "@type": "SoftwareApplication", "name": "Flutter Cross-Platform App", "operatingSystem": "iOS, Android", "applicationCategory": "BusinessApplication" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "App Store Optimization (ASO)" } }
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
      title: 'iOS & Android',
      description: 'Native mobile applications built specifically for iOS and Android platforms, delivering optimal performance and user experience with platform-specific features and design guidelines.',
      illustration: PhoneIllustration,
      color: 'from-primary-500 to-primary-600',
      features: ['Native iOS Development', 'Native Android Development', 'Platform-specific UI/UX', 'App Store Guidelines', 'Device Optimization']
    },
    {
      title: 'React Native',
      description: 'Cross-platform mobile development using React Native framework, allowing you to build apps for both iOS and Android with a single codebase while maintaining native performance.',
      illustration: CodeIllustration,
      color: 'from-green-500 to-green-600',
      features: ['Cross-platform Development', 'Single Codebase', 'Native Performance', 'Hot Reloading', 'Third-party Integrations']
    },
    {
      title: 'Flutter',
      description: 'Google\'s UI toolkit for building beautiful, natively compiled applications for mobile from a single codebase. Fast development with expressive and flexible UI components.',
      illustration: LightningIllustration,
      color: 'from-teal-500 to-teal-600',
      features: ['Single Codebase', 'Fast Development', 'Beautiful UI', 'Hot Reload', 'High Performance']
    },
    {
      title: 'App Store Optimization',
      description: 'Comprehensive ASO services to improve your app\'s visibility and ranking in app stores. Increase downloads and user acquisition through strategic optimization techniques.',
      illustration: TargetIllustration,
      color: 'from-orange-500 to-orange-600',
      features: ['Keyword Research', 'App Store Listing', 'Visual Assets Optimization', 'Review Management', 'Performance Analytics']
    }
  ];

  const benefits = [
    {
      illustration: PhoneIllustration,
      title: 'Native Performance',
      description: 'Optimized apps that deliver smooth performance and excellent user experience'
    },
    {
      illustration: GlobeIllustration,
      title: 'Cross-Platform Reach',
      description: 'Reach users on both iOS and Android platforms with efficient development'
    },
    {
      illustration: TeamIllustration,
      title: 'User-Centric Design',
      description: 'Intuitive interfaces designed to engage users and drive business growth'
    },
    {
      illustration: AwardIllustration,
      title: 'App Store Success',
      description: 'Strategic optimization to maximize visibility and downloads in app stores'
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
              <span>Mobile App Development</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Mobile App Development</h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Native and cross-platform mobile applications that engage users and drive business growth.
              From iOS and Android to React Native and Flutter, we build apps that deliver exceptional user experiences.
            </p>
          </div>
        </div>
      </div>

      <Breadcrumbs items={[
        { label: 'Services', href: '/services' },
        { label: 'Mobile App Development' }
      ]} />

      {/* Main Content */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6 scroll-animate opacity-0 translate-x-[-50px] transition-all duration-700">
              <h2 className="text-4xl font-bold text-ink">
                Why Choose Mobile App Development?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In today's mobile-first world, having a powerful mobile app is essential for business success.
                  Mobile apps provide direct access to your customers, enable personalized experiences, and
                  create new opportunities for engagement and revenue generation.
                </p>
                <p>
                  Our mobile app development services cover the full spectrum from native iOS and Android apps
                  to cross-platform solutions using React Native and Flutter. We focus on creating apps that
                  not only look great but also perform exceptionally and drive real business results.
                </p>
                <p className="font-semibold text-ink">
                  Transform your business with mobile apps that engage users and accelerate growth.
                </p>
              </div>
            </div>

            <div className="relative scroll-animate opacity-0 translate-x-[50px] transition-all duration-700 delay-300">
              <img
                src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mobile App Development"
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
                Why mobile apps are essential for modern business success
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

          {/* Services Section */}
          <div>
            <div className="text-center mb-12 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-3xl font-bold text-ink mb-4">Our Mobile Development Services</h2>
              <p className="text-xl text-gray-600">
                Comprehensive mobile app solutions tailored to your business needs
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

      <FAQ items={faqItems} subtitle="Common questions about mobile app development" />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-900 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Let our mobile app development experts create a powerful app that engages your users
              and drives business growth across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://outlook.office.com/book/NexusAurora2@nexus-aurora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Start Your App Project</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                View App Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;
