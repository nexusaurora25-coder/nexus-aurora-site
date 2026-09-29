import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
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
import { DPO, PRIVACY_LAST_UPDATED_ISO, privacyContent } from './privacy/privacyContent';

const mailto = (subject: string) => `mailto:${DPO.email}?subject=${encodeURIComponent(subject)}`;

const PrivacyPolicy = () => {
  const location = useLocation();
  const [lang, chooseLang] = useLegalLang();
  const t = privacyContent[lang];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useSEO({
    title: 'Privacy Policy',
    description:
      'How Nexus Aurora (M) Sdn Bhd collects, uses, shares and protects personal data under Malaysia’s PDPA 2010, and how to access, correct or withdraw consent for your data. Available in English and Bahasa Malaysia.',
    canonicalUrl: 'https://nexus-aurora.com/privacy-policy',
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', url: 'https://nexus-aurora.com' },
      { name: 'Privacy Policy', url: 'https://nexus-aurora.com/privacy-policy' }
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy - Nexus Aurora (M) Sdn Bhd",
      "description": "Personal Data Protection Notice under Malaysia's Personal Data Protection Act 2010.",
      "url": "https://nexus-aurora.com/privacy-policy",
      "inLanguage": ["en-MY", "ms-MY"],
      "dateModified": PRIVACY_LAST_UPDATED_ISO,
      "publisher": { "@id": "https://nexus-aurora.com/#organization" }
    }
  });

  return (
    <div className="pt-16 bg-white">
      <LegalTitleBand
        lang={lang}
        onLang={chooseLang}
        eyebrow={`${t.eyebrow} · PDPA 2010`}
        title={t.title}
        subtitle={t.subtitle}
        lastUpdatedLabel={t.lastUpdatedLabel}
        lastUpdated={t.lastUpdated}
        lastUpdatedIso={PRIVACY_LAST_UPDATED_ISO}
        languageLabel={t.languageLabel}
      />
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <LegalBody
        lang={lang}
        toc={<LegalToc lang={lang} label={t.tocLabel} jumpLabel={t.jumpLabel} clauses={t.clauses} />}
      >
        {/* At a glance */}
        <section aria-labelledby="glance" className="mb-14">
          <h2 id="glance" className="text-2xl font-bold text-ink mb-2">{t.glanceTitle}</h2>
          <p className="text-gray-600 mb-6 max-w-[68ch]">{t.glanceIntro}</p>

          <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-sm leading-relaxed">
              <thead className="bg-paper-alt text-left">
                <tr>
                  {t.glanceHeaders.map((header) => (
                    <th key={header} scope="col" className="px-4 py-3 font-mono text-xs tracking-wide uppercase text-primary-800 font-semibold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {t.glance.map((row) => (
                  <tr key={row.source} className="align-top">
                    <th scope="row" className="px-4 py-4 text-left font-semibold text-ink w-[20%]">{row.source}</th>
                    <td className="px-4 py-4 w-[32%]">{row.collect}</td>
                    <td className="px-4 py-4 w-[26%]">{row.purpose}</td>
                    <td className="px-4 py-4 w-[22%] text-gray-600">{row.shared}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="md:hidden space-y-3">
            {t.glance.map((row) => (
              <li key={row.source} className="rounded-2xl border border-gray-200 p-4 text-sm leading-relaxed">
                <p className="font-semibold text-ink mb-3">{row.source}</p>
                <dl className="space-y-2">
                  {[
                    [t.glanceHeaders[1], row.collect],
                    [t.glanceHeaders[2], row.purpose],
                    [t.glanceHeaders[3], row.shared],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="font-mono text-[11px] tracking-wide uppercase text-primary-700">{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </section>

        {/* Your rights */}
        <section aria-labelledby="rights" className="mb-16">
          <h2 id="rights" className="text-2xl font-bold text-ink mb-2">{t.rightsTitle}</h2>
          <p className="text-gray-600 mb-6 max-w-[68ch]">{t.rightsIntro}</p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {t.rights.map((right) => (
              <li key={right.subject} className="flex flex-col rounded-2xl bg-paper p-5 ring-1 ring-primary-100">
                <h3 className="text-lg font-semibold text-ink">{right.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-gray-600 flex-1">{right.body}</p>
                <p className="mt-4 font-mono text-[11px] text-gray-500 break-words">{right.subject}</p>
                <a
                  href={mailto(right.subject)}
                  className="mt-2 inline-flex items-center gap-2 self-start rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-300"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {t.rightsCta}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <LegalClauses
          clauses={t.clauses}
          renderExtra={(id) =>
            id === 'contact' && (
              <LegalContactCard
                role={t.contact.role}
                labels={{ email: t.contact.emailLabel, phone: t.contact.phoneLabel, address: t.contact.addressLabel }}
              >
                <div className="mt-6 pt-5 border-t border-gray-200 text-[15px]">
                  <p>{t.contact.complaint}</p>
                  <a
                    href={DPO.jpdpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-primary-700 font-medium hover:underline"
                  >
                    {t.contact.complaintLink}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </LegalContactCard>
            )
          }
        />
      </LegalBody>
    </div>
  );
};

export default PrivacyPolicy;
