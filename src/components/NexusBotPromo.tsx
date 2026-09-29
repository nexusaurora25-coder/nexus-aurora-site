import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { AnimatedDot } from './AnimatedIllustrations';
import WhatsAppChatDemo from './nexusbot/WhatsAppChatDemo';

const bullets = [
  '24/7 replies — never miss a customer message again',
  'Trilingual: answers in English, Bahasa Malaysia or Chinese',
  'Qualifies leads and books appointments automatically',
];

const NexusBotPromo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
              <AnimatedDot className="h-4 w-4" />
              <span>New · WhatsApp AI</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Introducing NexusBot — your WhatsApp, working while you're not.
            </h2>
            <ul className="space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-primary-100">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="font-mono">
                <span className="text-2xl font-bold">From RM 479</span>
                <span className="text-primary-200">/mo</span>
              </div>
              <Link
                to="/nexusbot"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group inline-flex items-center gap-2 bg-white text-primary-800 px-6 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors"
              >
                Explore NexusBot
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <WhatsAppChatDemo compact />
        </div>
      </div>
    </section>
  );
};

export default NexusBotPromo;
