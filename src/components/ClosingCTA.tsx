import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Reusable closing CTA banner with an animated gradient background.
 * Self-contained (no required props) so it can be dropped onto other
 * pages later. Separate from NexusBotCtaBand.tsx, which is NexusBot-specific.
 */
const ClosingCTA = () => {
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

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-primary-700 via-primary-600 to-ink bg-[length:200%_200%] animate-gradient-shift gradient-anim text-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
        <h2 className="text-3xl md:text-5xl font-bold">
          Ready to Eliminate IT Headaches?
        </h2>
        <p className="text-xl text-primary-100 max-w-2xl mx-auto">
          Talk to our Kota Kinabalu team and see what enterprise-grade, 24/7-monitored IT looks like for your business.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://outlook.office.com/book/NexusAurora2@nexus-aurora.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white text-primary-700 px-8 py-4 rounded-full hover:bg-primary-50 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl font-semibold"
          >
            <span>Book a Free IT Consultation</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
