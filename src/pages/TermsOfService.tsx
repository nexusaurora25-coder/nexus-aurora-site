import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useSEO } from '../utils/seo';
import Breadcrumbs from '../components/Breadcrumbs';
import {
  LegalBody,
  LegalClauses,
  LegalContactCard,
  LegalTitleBand,
  LegalToc,
  useLegalLang,
} from '../components/legal/LegalLayout';
import type { Clause } from '../components/legal/legal';
import { TERMS_LAST_UPDATED_ISO, termsContent, type ClauseRef } from './terms/termsContent';

/** Links to one clause ("12") or a range ("14–25"), numbered by position in the document. */
const ClauseChip = ({ refId, clauses, label }: { refId: ClauseRef; clauses: Clause[]; label: string }) => {
  const [from, to] = Array.isArray(refId) ? refId : [refId, refId];
  const start = clauses.findIndex((c) => c.id === from) + 1;
  const end = clauses.findIndex((c) => c.id === to) + 1;
  const text = start === end ? `${start}` : `${start}–${end}`;
  return (
    <a
      href={`#${from}`}
      aria-label={`${label} ${text}`}
      className="inline-flex min-w-[2.25rem] justify-center rounded-md bg-white px-2 py-1 font-mono text-xs font-semibold text-primary-700 ring-1 ring-primary-200 hover:bg-primary-600 hover:text-white hover:ring-primary-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
    >
      {text}
    </a>
  );
};

const TermsOfService = () => {
  const location = useLocation();
  const [lang, chooseLang] = useLegalLang();
  const t = termsContent[lang];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useSEO({
    title: 'Terms of Service',
    description:
      'Terms of Service for Nexus Aurora (M) Sdn Bhd: website use, quotes and fees, managed IT and security testing, cloud hosting acceptable use, NexusBot subscriptions and cancellation, liability and Malaysian governing law. In English and Bahasa Malaysia.',
    canonicalUrl: 'https://nexus-aurora.com/terms-of-service',
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', url: 'https://nexus-aurora.com' },
      { name: 'Terms of Service', url: 'https://nexus-aurora.com/terms-of-service' }
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms of Service - Nexus Aurora (M) Sdn Bhd",
      "description": "Terms governing the use of the Nexus Aurora website, IT services and NexusBot subscriptions.",
      "url": "https://nexus-aurora.com/terms-of-service",
      "inLanguage": ["en-MY", "ms-MY"],
      "dateModified": TERMS_LAST_UPDATED_ISO,
      "publisher": { "@id": "https://nexus-aurora.com/#organization" }
    }
  });

  return (
    <div className="pt-16 bg-white">
      <LegalTitleBand
        lang={lang}
        onLang={chooseLang}
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        lastUpdatedLabel={t.lastUpdatedLabel}
        lastUpdated={t.lastUpdated}
        lastUpdatedIso={TERMS_LAST_UPDATED_ISO}
        languageLabel={t.languageLabel}
      />
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

      <LegalBody
        lang={lang}
        toc={<LegalToc lang={lang} label={t.tocLabel} jumpLabel={t.jumpLabel} clauses={t.clauses} />}
      >
        {/* Which terms apply to you */}
        <section aria-labelledby="applies" className="mb-16">
          <h2 id="applies" className="text-2xl font-bold text-ink mb-2">{t.appliesTitle}</h2>
          <p className="text-gray-600 mb-6 max-w-[68ch]">{t.appliesIntro}</p>

          <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-sm leading-relaxed">
              <thead className="bg-paper-alt text-left">
                <tr>
                  {t.appliesHeaders.map((header) => (
                    <th key={header} scope="col" className="px-4 py-3 font-mono text-xs tracking-wide uppercase text-primary-800 font-semibold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {t.applies.map((row) => (
                  <tr key={row.who} className="align-top">
                    <th scope="row" className="px-4 py-4 text-left font-semibold text-ink w-[30%]">{row.who}</th>
                    <td className="px-4 py-4 w-[44%]">{row.covers}</td>
                    <td className="px-4 py-4 w-[26%]">
                      <div className="flex flex-wrap gap-1.5">
                        {row.clauses.map((ref) => (
                          <ClauseChip key={String(ref)} refId={ref} clauses={t.clauses} label={t.clauseLabel} />
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="md:hidden space-y-3">
            {t.applies.map((row) => (
              <li key={row.who} className="rounded-2xl border border-gray-200 p-4 text-sm leading-relaxed">
                <p className="font-semibold text-ink">{row.who}</p>
                <p className="mt-1 text-gray-600">{row.covers}</p>
                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-[11px] tracking-wide uppercase text-primary-700 mr-1">{t.appliesHeaders[2]}</span>
                  {row.clauses.map((ref) => (
                    <ClauseChip key={String(ref)} refId={ref} clauses={t.clauses} label={t.clauseLabel} />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <LegalClauses
          clauses={t.clauses}
          renderExtra={(id) => {
            if (id === 'data-protection') {
              return (
                <Link
                  to={lang === 'ms' ? '/privacy-policy?lang=ms' : '/privacy-policy'}
                  className="group mt-4 inline-flex items-center gap-2 font-semibold text-primary-700 hover:text-primary-800"
                >
                  {t.privacyLink}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              );
            }
            if (id === 'law') {
              return (
                <LegalContactCard
                  role={t.contact.role}
                  labels={{ email: t.contact.emailLabel, phone: t.contact.phoneLabel, address: t.contact.addressLabel }}
                />
              );
            }
            return null;
          }}
        />
      </LegalBody>
    </div>
  );
};

export default TermsOfService;
