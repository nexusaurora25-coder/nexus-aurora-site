import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, MessageCircle } from 'lucide-react';
import { useSEO } from '../utils/seo';
import { nexusBotWhatsAppLink } from '../components/nexusbot/constants';

const NexusBotThankYou = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useSEO({
    title: 'Payment Successful | NexusBot',
    description: 'Thank you for subscribing to NexusBot.',
    canonicalUrl: 'https://nexus-aurora.com/nexusbot/thank-you',
    noindex: true,
  });

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-paper px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-brand p-8 sm:p-10 text-center space-y-6">
        <div className="mx-auto h-16 w-16 rounded-full bg-success/10 flex items-center justify-center">
          <CheckCircle className="h-9 w-9 text-success" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-ink">Payment successful. Welcome to NexusBot!</h1>
          <p className="text-gray-600 leading-relaxed">
            Thanks for subscribing. A confirmation and receipt have been sent to your email by Stripe.
            Within the next few minutes, you'll also get a separate email with a link to set your password
            and log into your NexusBot account. Our team will reach out on WhatsApp shortly too, to help you
            connect your first channel and get set up.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <a
            href={nexusBotWhatsAppLink("Hi, I've just subscribed to NexusBot and would like help getting set up.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Message us on WhatsApp
          </a>
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NexusBotThankYou;
