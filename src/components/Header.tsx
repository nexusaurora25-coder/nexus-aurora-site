import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 10) {
        setIsVisible(true);
      } else if (delta > 5) {
        setIsVisible(false);
      } else if (delta < -5) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300 ease-in-out ${
        isVisible || isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center" onClick={handleNavClick}>
            <img
              src="/nexus-aurora-logo.png"
              alt="Nexus Aurora"
              className="h-12 w-auto"
            />
          </Link>

          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              onClick={handleNavClick}
              className={`transition-colors font-medium ${
                isActive('/') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Home
            </Link>
            <div className="relative group">
              <Link 
                to="/services"
                onClick={handleNavClick}
                className="flex items-center transition-colors font-medium text-gray-700 hover:text-primary-600"
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <Link to="/managed-services" onClick={handleNavClick} className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded transition-colors">
                    Managed IT Services
                  </Link>
                  <Link to="/it-consultancy" onClick={handleNavClick} className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded transition-colors">
                    IT Consultancy Services
                  </Link>
                  <Link to="/cybersecurity" onClick={handleNavClick} className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded transition-colors">
                    Cybersecurity
                  </Link>
                  <Link to="/cloud-hosting" onClick={handleNavClick} className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded transition-colors">
                    Cloud Hosting Services
                  </Link>
                  <Link to="/system-servers" onClick={handleNavClick} className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded transition-colors">
                    System Servers
                  </Link>
                  <Link to="/web-development" onClick={handleNavClick} className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded transition-colors">
                    Web Development
                  </Link>
                  <Link to="/mobile-app-development" onClick={handleNavClick} className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded transition-colors">
                    Mobile App Development
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/nexusbot"
              onClick={handleNavClick}
              className={`flex items-center transition-colors font-medium ${
                isActive('/nexusbot') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              NexusBot
              <span className="ml-1.5 text-[10px] font-semibold bg-accent-soft text-primary-800 px-1.5 py-0.5 rounded-full">
                New
              </span>
            </Link>
            <Link
              to="/about"
              onClick={handleNavClick}
              className={`transition-colors font-medium ${
                isActive('/about') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={handleNavClick}
              className={`transition-colors font-medium ${
                isActive('/contact') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Contact
            </Link>
              <button
                onClick={onOpenQuoteModal}
                className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors font-medium"
              >
                Get Quote
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
            <nav className="px-4 py-4 space-y-2">
              <Link 
                to="/" 
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  isActive('/') 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-paper'
                }`}
                onClick={handleNavClick}
              >
                Home
              </Link>
              
              <Link 
                to="/services" 
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  isActive('/services') 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-paper'
                }`}
                onClick={handleNavClick}
              >
                Services
              </Link>
              
              <div className="pl-4 space-y-1">
                <Link
                  to="/managed-services"
                  className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-paper rounded transition-colors"
                  onClick={handleNavClick}
                >
                  Managed IT Services
                </Link>
                <Link
                  to="/it-consultancy"
                  className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-paper rounded transition-colors"
                  onClick={handleNavClick}
                >
                  IT Consultancy Services
                </Link>
                <Link
                  to="/cybersecurity"
                  className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-paper rounded transition-colors"
                  onClick={handleNavClick}
                >
                  Cybersecurity
                </Link>
                <Link
                  to="/cloud-hosting"
                  className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-paper rounded transition-colors"
                  onClick={handleNavClick}
                >
                  Cloud Hosting Services
                </Link>
                <Link
                  to="/system-servers"
                  className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-paper rounded transition-colors"
                  onClick={handleNavClick}
                >
                  System Servers
                </Link>
                <Link
                  to="/web-development"
                  className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-paper rounded transition-colors"
                  onClick={handleNavClick}
                >
                  Web Development
                </Link>
                <Link
                  to="/mobile-app-development"
                  className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-paper rounded transition-colors"
                  onClick={handleNavClick}
                >
                  Mobile App Development
                </Link>
              </div>

              <Link
                to="/nexusbot"
                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive('/nexusbot')
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-paper'
                }`}
                onClick={handleNavClick}
              >
                NexusBot
                <span className="ml-1.5 text-[10px] font-semibold bg-accent-soft text-primary-800 px-1.5 py-0.5 rounded-full">
                  New
                </span>
              </Link>

              <Link
                to="/about"
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  isActive('/about')
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-paper'
                }`}
                onClick={handleNavClick}
              >
                About
              </Link>
              
              <Link 
                to="/contact" 
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  isActive('/contact') 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-paper'
                }`}
                onClick={handleNavClick}
              >
                Contact
              </Link>
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    onOpenQuoteModal();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium text-center text-base"
                >
                  Get Quote
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;