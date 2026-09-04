import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/nexus-aurora-icon.png"
                alt="Nexus Aurora"
                className="h-16 w-16"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Empowering businesses with innovative technology solutions that drive growth and success in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1BJyzvX9Kg/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Services & Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/nexusbot" className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors">
                  NexusBot — WhatsApp AI
                  <span className="text-[10px] font-semibold bg-accent-soft text-primary-800 px-1.5 py-0.5 rounded-full">
                    New
                  </span>
                </Link>
              </li>
              {[
                { label: 'IT Consultancy Services', href: '/it-consultancy' },
                { label: 'Web Development', href: '/web-development' },
                { label: 'Mobile App Development', href: '/mobile-app-development' },
                { label: 'Cloud Hosting Services', href: '/cloud-hosting' },
                { label: 'System Servers', href: '/system-servers' },
                { label: 'Cybersecurity', href: '/cybersecurity' }
              ].map((service, index) => (
                <li key={index}>
                  {typeof service === 'object' ? (
                    <Link to={service.href} className="text-gray-400 hover:text-white transition-colors">
                      {service.label}
                    </Link>
                  ) : (
                    <span className="text-gray-400">{service}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Company</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms-of-service' }
              ].map((item, index) => (
                <li key={index}>
                  {item.href.startsWith('/') ? (
                    <Link 
                      to={item.href} 
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Lot 3 Block C 1st Floor, Lorong Bunga Inai,</p>
                  <p>Taman Land Breeze, 88200 Kota Kinabalu,</p>
                  <p>Sabah, Malaysia</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+60128859759" className="text-gray-400 hover:text-white transition-colors">
                  +60 12 885 9759
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:sales@nexus-aurora.com" className="text-gray-400 hover:text-white transition-colors">
                  sales@nexus-aurora.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Nexus Aurora (M) Sdn Bhd.(1659159-X) All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;