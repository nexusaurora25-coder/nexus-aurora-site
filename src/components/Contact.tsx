import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  MailIllustration,
  PhoneCallIllustration,
  PinIllustration,
  ClockIllustration,
  CalendarIllustration,
  ChatIllustration,
  SendIllustration,
  AnimatedDot,
} from './AnimatedIllustrations';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ type: 'contact', ...formData }),
        }
      );

      if (!res.ok) throw new Error('Failed to send');

      setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' });
      setStatus('success');
      setTimeout(() => setStatus('idle'), 6000);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold">
            <AnimatedDot className="h-4 w-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8 scroll-animate opacity-0 translate-x-[-50px] transition-all duration-700">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-ink">Get Started Today</h3>
              <p className="text-gray-600 leading-relaxed">
                We're here to help bring your vision to life. Whether you need a simple website or a complex enterprise solution, our team is ready to deliver exceptional results.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MailIllustration className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-ink mb-1">Email Us</h4>
                  <p className="text-gray-600 mb-1">Send us an email anytime</p>
                  <a href="mailto:sales@nexus-aurora.com" className="text-primary-600 hover:text-primary-700 font-medium">
                    sales@nexus-aurora.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PhoneCallIllustration className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-ink mb-1">Call Us</h4>
                  <p className="text-gray-600 mb-1">Mon-Fri from 8am to 6pm</p>
                  <a href="tel:+60128859759" className="text-primary-600 hover:text-primary-700 font-medium">
                    +60 12-885 9759
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PinIllustration className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-ink mb-1">Visit Us</h4>
                  <p className="text-gray-600 mb-1">Come say hello at our office</p>
                  <p className="text-primary-600">
                    Lot 3 Block C 1st Floor, Lorong Bunga Inai, <br />
                    Taman Land Breeze, 88200 Kota Kinabalu, Sabah, Malaysia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ClockIllustration className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-ink mb-1">Business Hours</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <CalendarIllustration className="h-8 w-8" />
                <div>
                  <h4 className="text-xl font-bold">Free Consultation</h4>
                  <p className="text-primary-100">Book a 30-minute strategy session</p>
                </div>
              </div>
              <a
                href="https://outlook.office.com/book/NexusAurora2@nexus-aurora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors w-full block text-center"
              >
                Schedule Meeting
              </a>
            </div>
          </div>

          <div className="bg-paper rounded-2xl p-8 scroll-animate opacity-0 translate-x-[50px] transition-all duration-700 delay-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">-- Select a service --</option>
                    <option value="it-consultancy">IT Consultancy Services</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="cloud-hosting">Cloud Hosting Services</option>
                    <option value="system-servers">System Servers</option>
                    <option value="cybersecurity">Cybersecurity</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="10k-25k">RM 10,000 - RM 25,000</option>
                  <option value="25k-50k">RM 25,000 - RM 50,000</option>
                  <option value="50k-100k">RM 50,000 - RM 100,000</option>
                  <option value="100k+">RM 100,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                />
              </div>

              {status === 'success' && (
                <div className="flex items-start space-x-3 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm font-medium">Message sent successfully! We'll get back to you shortly.</p>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-start space-x-3 bg-danger-soft border border-danger/30 text-danger px-4 py-3 rounded-lg">
                  <svg className="h-5 w-5 text-danger flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm font-medium">Something went wrong. Please try again or email us directly.</p>
                </div>
              )}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <SendIllustration className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
