import React, { useEffect, useRef } from 'react';
import {
  ClockIllustration,
  AwardIllustration,
  TeamIllustration,
  PinIllustration,
  AnimatedDot,
} from './AnimatedIllustrations';
import { useCountUp } from '../hooks/useCountUp';

const WhyNexusAurora = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const years = useCountUp<HTMLSpanElement>(17, { suffix: '+' });

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

  const reasons = [
    {
      illustration: ClockIllustration,
      value: '24/7',
      label: 'Support & Monitoring',
    },
    {
      illustration: AwardIllustration,
      value: '99.9%',
      label: 'Uptime SLA',
    },
    {
      illustration: TeamIllustration,
      value: <span ref={years.ref}>{years.value}</span>,
      label: 'Years of Pioneer Infotech Expertise',
    },
    {
      illustration: PinIllustration,
      value: 'Local',
      label: 'Sabah-Based Team',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold">
            <AnimatedDot className="h-4 w-4" />
            <span>Why Nexus Aurora</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink">
            Enterprise Reliability, Local Reach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneer Infotech's proven MSP framework, delivered by a team that actually shows up in Kota Kinabalu
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Illustration = reason.illustration;
            return (
              <div
                key={index}
                className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-14 w-14 bg-gradient-to-br from-primary-500 to-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Illustration className="h-7 w-7 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-ink mb-2">{reason.value}</div>
                <div className="text-gray-600 text-sm sm:text-base leading-tight">{reason.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyNexusAurora;
