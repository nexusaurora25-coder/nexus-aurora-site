import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  TeamIllustration,
  AwardIllustration,
  ChartIllustration,
} from './AnimatedIllustrations';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden w-full">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="IT Server Room Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-ink/85 to-ink/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Prevent Business Downtime
              <span className="bg-gradient-to-r from-primary-300 to-accent bg-clip-text text-transparent">
                {' '}From Cyber Attacks{' '}
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl break-words">
              Continuous monitoring & protection for growing companies in Malaysia
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://outlook.office.com/book/NexusAurora2@nexus-aurora.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span className="font-semibold">Get Free Cyber Exposure Check</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center gap-x-10 gap-y-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary-500/20 rounded-lg flex items-center justify-center shrink-0">
              <TeamIllustration className="h-5 w-5 text-primary-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-gray-300">Protected Businesses</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary-500/20 rounded-lg flex items-center justify-center shrink-0">
              <AwardIllustration className="h-5 w-5 text-primary-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">Zero</div>
              <div className="text-gray-300">Breaches</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary-500/20 rounded-lg flex items-center justify-center shrink-0">
              <ChartIllustration className="h-5 w-5 text-primary-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-gray-300">Threat Detection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
