import React, { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { AnimatedDot } from './AnimatedIllustrations';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

// PLACEHOLDER TESTIMONIALS — replace with real client quotes before launch.
const testimonials = [
  {
    quote: "Nexus Aurora's team caught a security gap our previous IT guy missed for years. Having someone local in Kota Kinabalu who actually understands our business made all the difference.",
    name: 'Client Name',
    role: 'Operations Director',
    company: 'Sabah Manufacturing Co.',
  },
  {
    quote: "Since moving to their managed services, we haven't had a single unplanned outage. The 24/7 monitoring genuinely gives us peace of mind.",
    name: 'Client Name',
    role: 'General Manager',
    company: 'Kota Kinabalu Hospitality Group',
  },
  {
    quote: "Backed by Pioneer Infotech's experience but with a team that shows up on-site — that combination is hard to find in Sabah.",
    name: 'Client Name',
    role: 'Finance Manager',
    company: 'Regional Financial Services Firm',
  },
];

const TrustSignals = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

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

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold">
            <AnimatedDot className="h-4 w-4" />
            <span>Trusted &amp; Certified</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink">
            Proven Security, Proven Results
          </h2>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 mb-16 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
          <div className="flex items-center gap-4">
            <img
              src="/cretified_ism.png"
              alt="ISO/IEC 27001:2022 Certified"
              className="h-16 w-auto"
              loading="lazy"
              decoding="async"
            />
            <div className="text-left">
              <div className="font-bold text-ink">ISO/IEC 27001:2022 Certified</div>
              <div className="text-sm text-gray-600">Via Pioneer Infotech Singapore, certified since 2008</div>
            </div>
          </div>
        </div>

        {/*
          Client logos row intentionally omitted: the only unused image assets in public/
          (logoipsum-379.png, logoipsum-custom-logo.svg) turned out not to be generic
          placeholder marks — logoipsum-379.png is a duplicate of Nexus Aurora's own logo
          icon, and the other is an unrelated "Logoipsum" wordmark. Showing either as a
          "client logo" would misleadingly read as duplicate self-branding. Add a real
          client-logo grid here once actual client logos are available; suggested markup:
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 grayscale">
            <img src="/clients/logo-1.png" alt="Client name" className="h-8 w-auto mx-auto" loading="lazy" decoding="async" />
            ...
          </div>
        */}

        {/* Testimonial carousel */}
        <div className="max-w-3xl mx-auto scroll-animate opacity-0 translate-y-8 transition-all duration-700">
          <div className="bg-paper rounded-2xl p-8 sm:p-12 text-center relative min-h-[260px] flex flex-col justify-center">
            <Quote className="h-10 w-10 text-primary-300 mx-auto mb-6" />
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-700 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0 absolute inset-0 p-8 sm:p-12 pointer-events-none'
                }`}
              >
                <p className="text-lg sm:text-xl text-ink leading-relaxed mb-6">"{testimonial.quote}"</p>
                <div className="font-semibold text-ink">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-6 bg-primary-600' : 'w-2 bg-primary-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
