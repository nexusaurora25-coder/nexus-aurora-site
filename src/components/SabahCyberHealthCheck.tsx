import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { AnimatedDot } from './AnimatedIllustrations';

const scanChecks = [
  'Email spoofing',
  'Open ports',
  'Weak logins',
  'Backup gaps',
];

const SabahCyberHealthCheck = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            setRevealed(true);
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
    <section ref={sectionRef} className="py-16 bg-gradient-to-r from-primary-50 to-accent-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[5fr_6fr] bg-white rounded-3xl border border-primary-100 shadow-brand overflow-hidden scroll-animate opacity-0 translate-y-8 transition-all duration-700">
          {/* Photo panel: the scan */}
          <div className="relative min-h-[20rem] md:min-h-[26rem] bg-primary-900">
            <img
              src="/generated/sabah-cyber-health-check.jpg"
              alt="Kota Kinabalu skyline at dusk"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/85 via-primary-900/10 to-primary-900/30" />

            <div className="absolute inset-x-0 top-[12%] bottom-[30%] overflow-hidden pointer-events-none" aria-hidden="true">
              <div className="scan-line absolute inset-x-0 top-0 h-px bg-accent shadow-[0_0_12px_2px_rgba(79,195,247,0.7)] animate-scan" />
            </div>

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[11px] tracking-wider uppercase text-white/85">
              <span>Kota Kinabalu</span>
              <span>5.98°N 116.07°E</span>
            </div>

            <div className="absolute inset-x-4 bottom-4 rounded-xl bg-primary-900/75 backdrop-blur-sm border border-white/15 p-4 font-mono text-xs text-white">
              <div className="text-accent uppercase tracking-wider mb-2.5">Checked in 15 minutes</div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                {scanChecks.map((check, i) => (
                  <li
                    key={check}
                    className={`flex items-center justify-between gap-2 transition-all duration-500 ${
                      revealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`}
                    style={{ transitionDelay: revealed ? `${400 + i * 350}ms` : '0ms' }}
                  >
                    <span>{check}</span>
                    <Check className="h-3.5 w-3.5 text-accent shrink-0" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content panel */}
          <div className="flex flex-col justify-center gap-5 p-6 sm:p-12 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold self-center md:self-start">
              <AnimatedDot className="h-4 w-4" />
              <span>Sabah SME Campaign</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Free Sabah SME Cyber Health Check
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A 15-minute exposure scan, no obligation — built for Sabah's growing businesses to find security gaps before attackers do.
            </p>
            <div className="flex flex-col items-center md:items-start gap-3 pt-1">
              <a
                href="https://outlook.office.com/book/NexusAurora2@nexus-aurora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto justify-center whitespace-nowrap bg-primary-600 text-white px-6 py-3.5 rounded-full hover:bg-primary-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-300"
              >
                <span className="font-semibold">Claim My Free Health Check</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="font-mono text-xs text-gray-500 tracking-wide">
                15 min · Free · No obligation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SabahCyberHealthCheck;
