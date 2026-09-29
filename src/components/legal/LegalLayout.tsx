import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY, type Clause, type ClauseBlock, type Lang } from './legal';

// Building blocks shared by the Privacy Policy and Terms of Service pages.

const LANGS: { id: Lang; label: string }[] = [
  { id: 'en', label: 'English' },
  { id: 'ms', label: 'Bahasa Malaysia' },
];

/**
 * English in the prerendered HTML; `?lang=ms` switches after load so hydration stays in sync.
 * Switching uses replaceState rather than router navigation, so it doesn't scroll to the top.
 */
export const useLegalLang = () => {
  const location = useLocation();
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    if (new URLSearchParams(location.search).get('lang') === 'ms') setLang('ms');
  }, [location.search]);

  const chooseLang = (next: Lang) => {
    setLang(next);
    const url = new URL(window.location.href);
    if (next === 'ms') url.searchParams.set('lang', 'ms');
    else url.searchParams.delete('lang');
    window.history.replaceState(window.history.state, '', url);
  };

  return [lang, chooseLang] as const;
};

interface TitleBandProps {
  lang: Lang;
  onLang: (lang: Lang) => void;
  eyebrow: string;
  title: string;
  subtitle: string;
  lastUpdatedLabel: string;
  lastUpdated: string;
  lastUpdatedIso: string;
  languageLabel: string;
}

export const LegalTitleBand = ({
  lang, onLang, eyebrow, title, subtitle, lastUpdatedLabel, lastUpdated, lastUpdatedIso, languageLabel,
}: TitleBandProps) => (
  <div className="bg-gradient-to-br from-primary-800 via-primary-700 to-ink text-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
      <div className="space-y-4 max-w-2xl" lang={lang}>
        <p className="font-mono text-xs tracking-wider uppercase text-accent">{eyebrow}</p>
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="text-lg text-primary-100 leading-relaxed">{subtitle}</p>
        <p className="font-mono text-sm text-primary-200">
          {lastUpdatedLabel}{' '}
          <time dateTime={lastUpdatedIso} className="text-white">{lastUpdated}</time>
        </p>
      </div>
      <div role="group" aria-label={languageLabel} className="inline-flex self-start lg:self-auto rounded-full bg-white/10 p-1 ring-1 ring-white/20">
        {LANGS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            lang={id}
            aria-pressed={lang === id}
            onClick={() => onLang(id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              lang === id ? 'bg-white text-primary-800' : 'text-white hover:bg-white/10'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  </div>
);

interface TocProps {
  lang: Lang;
  label: string;
  jumpLabel: string;
  clauses: Clause[];
}

export const LegalToc = ({ lang, label, jumpLabel, clauses }: TocProps) => (
  <nav aria-label={label} className="mb-10 lg:mb-0" lang={lang}>
    <details className="lg:hidden rounded-xl border border-gray-200 bg-paper">
      <summary className="cursor-pointer px-4 py-3 font-semibold text-ink">{jumpLabel}</summary>
      <ol className="px-4 pb-4 space-y-2 text-sm">
        {clauses.map((clause, i) => (
          <li key={clause.id}>
            <a href={`#${clause.id}`} className="text-gray-700 hover:text-primary-700">
              <span className="font-mono text-primary-600 mr-2">{i + 1}</span>{clause.title}
            </a>
          </li>
        ))}
      </ol>
    </details>
    <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
      <p className="font-mono text-xs tracking-wider uppercase text-gray-500 mb-4">{label}</p>
      <ol className="space-y-2.5 text-sm">
        {clauses.map((clause, i) => (
          <li key={clause.id}>
            <a
              href={`#${clause.id}`}
              className="group flex gap-3 text-gray-600 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 rounded"
            >
              <span className="font-mono text-gray-400 group-hover:text-primary-600 w-5 shrink-0">{i + 1}</span>
              <span>{clause.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  </nav>
);

/** Two-column page body: table of contents on the left, the document on the right. */
export const LegalBody = ({ lang, toc, children }: { lang: Lang; toc: React.ReactNode; children: React.ReactNode }) => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-14">
    {toc}
    <article lang={lang} className="min-w-0 text-[17px] leading-[1.7] text-gray-700">
      {children}
    </article>
  </div>
);

const ClauseBody = ({ blocks }: { blocks: ClauseBlock[] }) => (
  <div className="space-y-4">
    {blocks.map((block, i) =>
      Array.isArray(block) ? (
        <ul key={i} className="space-y-2 pl-5 list-disc marker:text-primary-400">
          {block.map((item) => (
            <li key={item} className="pl-1">{item}</li>
          ))}
        </ul>
      ) : (
        <p key={i}>{block}</p>
      )
    )}
  </div>
);

export const LegalClauses = ({
  clauses,
  renderExtra,
}: {
  clauses: Clause[];
  renderExtra?: (clauseId: string) => React.ReactNode;
}) => (
  <ol className="space-y-12">
    {clauses.map((clause, i) => (
      <li key={clause.id} id={clause.id} className="scroll-mt-24 sm:grid sm:grid-cols-[3rem_minmax(0,1fr)]">
        <span className="block font-mono text-sm text-primary-600 pt-1.5 mb-1 sm:mb-0" aria-hidden="true">
          {String(i + 1).padStart(2, '0')}
        </span>
        <div className="max-w-[68ch]">
          <h2 className="text-xl md:text-2xl font-bold text-ink mb-4">
            <span className="sr-only">{i + 1}. </span>{clause.title}
          </h2>
          <ClauseBody blocks={clause.body} />
          {renderExtra?.(clause.id)}
        </div>
      </li>
    ))}
  </ol>
);

/** Company contact card used at the end of both legal documents. */
export const LegalContactCard = ({
  role,
  labels,
  children,
}: {
  role: string;
  labels: { email: string; phone: string; address: string };
  children?: React.ReactNode;
}) => (
  <div className="mt-6 rounded-2xl border border-gray-200 p-6">
    <p className="font-semibold text-ink">{role}</p>
    <p className="text-sm text-gray-500 mb-4">{COMPANY.company}</p>
    <ul className="space-y-3 text-[15px]">
      <li className="flex gap-3">
        <Mail className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" aria-hidden="true" />
        <span className="sr-only">{labels.email}: </span>
        <span><a href={`mailto:${COMPANY.email}`} className="text-primary-700 font-medium hover:underline">{COMPANY.email}</a></span>
      </li>
      <li className="flex gap-3">
        <Phone className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" aria-hidden="true" />
        <span className="sr-only">{labels.phone}: </span>
        <span><a href={`tel:${COMPANY.phoneHref}`} className="text-primary-700 font-medium hover:underline">{COMPANY.phone}</a></span>
      </li>
      <li className="flex gap-3">
        <MapPin className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" aria-hidden="true" />
        <span className="sr-only">{labels.address}: </span>
        <span>{COMPANY.address}</span>
      </li>
    </ul>
    {children}
  </div>
);
