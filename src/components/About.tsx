import React, { useEffect, useRef } from 'react';
import {
  ClockIllustration,
  GlobeIllustration,
  AwardIllustration,
  TeamIllustration,
  ShieldIllustration,
  HeartIllustration,
  LightningIllustration,
  PinIllustration,
  AnimatedDot,
} from './AnimatedIllustrations';

const About = () => {
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

  const stats = [
    { illustration: ClockIllustration, label: 'Years Experience', value: '17+' },
    { illustration: GlobeIllustration, label: 'APAC Markets', value: '10+' },
    { illustration: AwardIllustration, label: 'ISO Certified', value: '27001:2022' },
    { illustration: TeamIllustration, label: 'SME Clients', value: '500+' }
  ];

  const values = [
    {
      illustration: ShieldIllustration,
      title: 'Security First',
      description: 'Everything we do is designed with compliance, resilience, and protection in mind.'
    },
    {
      illustration: HeartIllustration,
      title: 'Customer Partnership',
      description: 'We believe in long-term relationships built on trust, transparency, and results.'
    },
    {
      illustration: LightningIllustration,
      title: 'Agility & Growth',
      description: 'We move fast, adapt quickly, and scale responsibly with your business.'
    },
    {
      illustration: PinIllustration,
      title: 'Regional Depth, Global Thinking',
      description: 'With local insight and global standards, we deliver tailored solutions for complex markets.'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 scroll-animate opacity-0 translate-x-[-50px] transition-all duration-700">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold">
                <AnimatedDot className="h-4 w-4" />
                <span>Powered by Pioneer Infotech Singapore</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-ink">
                Enterprise-Grade MSP Services for Malaysian Businesses
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Nexus Aurora brings Pioneer Infotech Singapore's 17 years of proven Managed Service Provider (MSP) expertise to Malaysia. As Pioneer Infotech's regional expansion partner, we deliver the same enterprise-grade IT management services, cybersecurity solutions, and proactive support that have served 500+ SME clients across APAC.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                We operate as Pioneer Infotech's dedicated Malaysian arm, sharing their robust service frameworks, skilled regional teams, and proven MSP methodologies. This means you get access to enterprise-level managed services, vendor partnerships, and support infrastructure typically available only to much larger organizations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Since 2008, Pioneer Infotech has been delivering trusted Managed IT Services to SME clients across diverse sectors including banking, shipping, retail, logistics and enterprise operations throughout Singapore and ASEAN. Their ISO/IEC 27001:2022 certification and commitment to operational excellence now extends to Malaysian businesses through Nexus Aurora.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Illustration = stat.illustration;
                return (
                  <div key={index} className="text-center p-3 sm:p-6 bg-white rounded-xl shadow-sm">
                    <div className="h-10 w-10 bg-gradient-to-br from-primary-500 to-primary-800 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Illustration className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-xl sm:text-3xl font-bold text-ink mb-1 break-words">{stat.value}</div>
                    <div className="text-gray-600 text-xs sm:text-sm leading-tight">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-8 scroll-animate opacity-0 translate-x-[50px] transition-all duration-700 delay-300">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-ink mb-6">The Power of Pioneer Infotech Behind Us</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                As Pioneer Infotech's Malaysian operations, we leverage their comprehensive MSP infrastructure, including remote monitoring tools, NOC capabilities, vendor relationships, and established service frameworks. This partnership ensures you receive proven, enterprise-grade managed services with the local presence and understanding of Malaysian business needs.
              </p>
              <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-xl p-6 text-white">
                <h4 className="text-lg font-semibold mb-2">What This Partnership Means for You</h4>
                <p className="text-primary-100">
                  You get the best of both worlds: Pioneer Infotech's 17 years of MSP excellence, regional support network, and ISO 27001:2022 certified processes, combined with Nexus Aurora's local Malaysian presence, dedicated support team, and understanding of your market. We bring enterprise-level IT management to Malaysian SMEs at accessible pricing.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-ink">Our Core Values</h3>
              <div className="space-y-4">
                {values.map((value, index) => {
                  const Illustration = value.illustration;
                  return (
                    <div key={index} className="flex space-x-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Illustration className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-ink">{value.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
