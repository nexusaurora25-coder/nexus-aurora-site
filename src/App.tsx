import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import QuoteModal from './components/QuoteModal';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import NexusBot from './pages/NexusBot';
import NexusBotThankYou from './pages/NexusBotThankYou';
import NexusBotSetPassword from './pages/NexusBotSetPassword';
import ITConsultancy from './pages/ITConsultancy';
import ManagedServices from './pages/ManagedServices';
import WebDevelopment from './pages/WebDevelopment';
import WebDevelopmentProcess from './pages/WebDevelopmentProcess';
import Cybersecurity from './pages/Cybersecurity';
import CloudHosting from './pages/CloudHosting';
import SystemServers from './pages/SystemServers';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden w-full">
        <Header onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nexusbot" element={<NexusBot />} />
          <Route path="/nexusbot/thank-you" element={<NexusBotThankYou />} />
          <Route path="/nexusbot/set-password" element={<NexusBotSetPassword />} />
          <Route path="/it-consultancy" element={<ITConsultancy />} />
          <Route path="/managed-services" element={<ManagedServices />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/web-development-process" element={<WebDevelopmentProcess />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/cloud-hosting" element={<CloudHosting />} />
          <Route path="/system-servers" element={<SystemServers />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <QuoteModal 
          isOpen={isQuoteModalOpen} 
          onClose={() => setIsQuoteModalOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;