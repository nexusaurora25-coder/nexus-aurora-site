import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import WhatsAppChatDemo from './WhatsAppChatDemo';
import { nexusBotWhatsAppLink } from './constants';

const NexusBotHero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-ink text-white pt-16 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary-400 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wide uppercase bg-white/10 text-accent px-3 py-1.5 rounded-full">
              WhatsApp AI · Made for Malaysia SMEs
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your WhatsApp, working{' '}
              <span className="text-accent">while you're not.</span>
            </h1>
            <p className="text-lg text-primary-100 leading-relaxed max-w-xl">
              NexusBot answers, qualifies and books your customers on WhatsApp in Bahasa or
              English — so your team spends less time typing and more time closing.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={scrollToPricing}
                className="group inline-flex items-center gap-2 bg-white text-primary-800 px-6 py-3.5 rounded-full font-semibold hover:bg-primary-50 transition-colors"
              >
                Compare plans
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={nexusBotWhatsAppLink('Hi, I would like to know more about NexusBot.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Chat with our team
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-primary-800 rounded-[28px] p-5 shadow-brand-lg border border-white/10">
              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
                  <img
                    src="/nexusbot-logo.jpeg"
                    alt="NexusBot"
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-ink text-sm">NexusBot</div>
                    <div className="text-xs text-gray-500">typically replies instantly</div>
                  </div>
                </div>
                <div className="p-4">
                  <WhatsAppChatDemo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NexusBotHero;
