import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  TargetIllustration,
  TeamIllustration,
  GlobeIllustration,
  PhoneIllustration,
  CloudIllustration,
  DatabaseIllustration,
  ShieldIllustration,
  AnimatedDot,
} from './AnimatedIllustrations';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
      illustration: TargetIllustration,
      title: 'Managed IT Services',
      description: 'Comprehensive managed IT services backed by Pioneer Infotech Singapore\'s 17 years of MSP expertise. We provide proactive monitoring, maintenance, and support to keep your business running smoothly 24/7, allowing you to focus on growth while we handle your technology.',
      features: ['24/7 Network Monitoring', 'Proactive Maintenance', 'Helpdesk Support', 'Patch Management', 'Backup & Recovery', 'SLA Guarantee'],
      link: '/managed-services'
    },
    {
      illustration: TeamIllustration,
      title: 'IT Consultancy Services',
      description: 'Strategic IT consulting services to help businesses plan, design, and implement technology solutions that maximize efficiency and minimize costs. Our consultants guide you through infrastructure projects with expertise backed by Pioneer Infotech\'s regional experience.',
      features: ['Concept and Discovery', 'Design and Development', 'System and Vendor Review', 'Project Construction'],
      link: '/it-consultancy'
    },
    {
      illustration: GlobeIllustration,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Cross-browser Compatible'],
      link: '/web-development-process'
    },
    {
      illustration: PhoneIllustration,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
      link: '/mobile-app-development'
    },
    {
      illustration: CloudIllustration,
      title: 'Cloud Hosting Services',
      description: 'We provide your business with the domain, website, and email hosting it needs. Solutions include a range of services, including basic web hosting for individuals and entrepreneurs, email, e-commerce, VPS server, and dedicated server hosting.',
      features: ['Shared Hosting', 'Dedicated Servers', 'Webhosting', 'Email Services', 'Backup & Disaster Recovery'],
      link: '/cloud-hosting'
    },
    {
      illustration: DatabaseIllustration,
      title: 'System Servers',
      description: 'System solutions are the foundation to any company, with a roadmap for stability and scalability as key components to the system. Our consulting approach is based on lower TCO design for our clients.',
      features: ['Server Consolidation', 'Microsoft Solution', 'Backup Solution', 'Server and Server Integration', 'Virtualization Solution'],
      link: '/system-servers'
    },
    {
      illustration: ShieldIllustration,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving cyber threats.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      link: '/cybersecurity'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold">
            <AnimatedDot className="h-4 w-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink">
            Comprehensive IT Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a full spectrum of technology services to help your business thrive in the digital landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Illustration = service.illustration;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-primary-200 hover:-translate-y-2 scroll-animate opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="space-y-6">
                  <div className="h-16 w-16 bg-gradient-to-br from-primary-500 to-primary-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Illustration className="h-8 w-8 text-white" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-ink group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 bg-primary-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.link}
                    className="group/btn inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
