import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { AnimatedDot } from './AnimatedIllustrations';

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

          <div className="bg-white rounded-2xl p-4 shadow-brand-lg max-w-sm mx-auto w-full">
            <div className="flex items-center gap-3 px-2 py-2 border-b border-gray-100 mb-3">
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
            <div className="space-y-2 px-2 pb-2">
              <div className="flex justify-start">
                <div className="max-w-[85%] bg-gray-100 text-ink rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm">
                  Hi, ada stock untuk cable structured Cat6 tak?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[85%] bg-primary-600 text-white rounded-2xl rounded-br-sm px-4 py-2.5 text-sm">
                  Yes! Cat6 structured cabling is available 📦 Want pricing for your building size?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NexusBotPromo;
