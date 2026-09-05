import React from 'react';
import { NEXUSBOT_LOGIN_URL } from './constants';

const NexusBotCtaBand: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-800 to-ink text-white text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Let your WhatsApp do the first reply</h2>
        <p className="text-primary-100 text-lg">
          7 days free. No commitment. Set up takes less than a day.
        </p>
        <a
          href={NEXUSBOT_LOGIN_URL}
          className="inline-block bg-white text-primary-800 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-colors"
        >
          Start free trial
        </a>
      </div>
    </section>
  );
};

export default NexusBotCtaBand;
