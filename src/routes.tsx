import React from 'react';
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
import StructuredCabling from './pages/StructuredCabling';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

/** Every page on the site. The build-time prerender writes one HTML file per path. */
export const routes: { path: string; element: React.ReactElement }[] = [
  { path: '/', element: <Home /> },
  { path: '/services', element: <Services /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/nexusbot', element: <NexusBot /> },
  { path: '/nexusbot/thank-you', element: <NexusBotThankYou /> },
  { path: '/nexusbot/set-password', element: <NexusBotSetPassword /> },
  { path: '/it-consultancy', element: <ITConsultancy /> },
  { path: '/managed-services', element: <ManagedServices /> },
  { path: '/web-development', element: <WebDevelopment /> },
  { path: '/web-development-process', element: <WebDevelopmentProcess /> },
  { path: '/cybersecurity', element: <Cybersecurity /> },
  { path: '/cloud-hosting', element: <CloudHosting /> },
  { path: '/system-servers', element: <SystemServers /> },
  { path: '/structured-cabling', element: <StructuredCabling /> },
  { path: '/mobile-app-development', element: <MobileAppDevelopment /> },
  { path: '/privacy-policy', element: <PrivacyPolicy /> },
  { path: '/terms-of-service', element: <TermsOfService /> },
];
