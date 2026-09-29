import React, { useEffect, useRef } from 'react';
import { Landmark, Factory, Hotel, HeartPulse, GraduationCap } from 'lucide-react';
import { AnimatedDot } from './AnimatedIllustrations';

const IndustriesStrip = () => {
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

  const industries = [
    { icon: Landmark, label: 'Finance', description: 'Compliance-ready security for banking & fintech' },
    { icon: Factory, label: 'Manufacturing', description: 'Uptime-critical systems for production lines' },
    { icon: Hotel, label: 'Hospitality', description: 'Guest-facing networks that never go down' },
    { icon: HeartPulse, label: 'Healthcare', description: 'Secure, compliant patient data infrastructure' },
    { icon: GraduationCap, label: 'Education', description: 'Reliable campus-wide IT for institutions' },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold">
            <AnimatedDot className="h-4 w-4" />
            <span>Industries We Serve</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink">
            Built for Your Sector's Challenges
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored IT and cybersecurity support for the industries driving Malaysia's economy
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl hover:bg-paper transition-all duration-300 scroll-animate opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-ink mb-1">{industry.label}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-tight">{industry.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesStrip;
