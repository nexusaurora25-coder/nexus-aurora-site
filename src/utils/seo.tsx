import { createContext, useContext, useEffect } from 'react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  ogType?: string;
  structuredData?: object;
  breadcrumbs?: BreadcrumbItem[];
  faqItems?: FAQItem[];
  noindex?: boolean;
}

const BASE_URL = 'https://nexus-aurora.com';

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": `${BASE_URL}/#organization`,
  "name": "Nexus Aurora (M) Sdn Bhd",
  "legalName": "Nexus Aurora (M) Sdn Bhd",
  "alternateName": "Nexus Aurora",
  "url": BASE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": `${BASE_URL}/nexus-aurora-og.png`,
    "width": 1200,
    "height": 630
  },
  "image": `${BASE_URL}/nexus-aurora-og.png`,
  "description": "Enterprise-grade Managed IT Services provider in Malaysia, powered by Pioneer Infotech Singapore. Specialising in MSP, cybersecurity, cloud hosting, web development, mobile apps, and IT consultancy.",
  "telephone": "+60-12-885-9759",
  "email": "sales@nexus-aurora.com",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+60-12-885-9759",
    "email": "sales@nexus-aurora.com",
    "contactType": "customer service",
    "areaServed": "MY",
    "availableLanguage": ["English", "Malay", "Chinese"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lot 3 Block C 1st Floor, Lorong Bunga Inai, Taman Land Breeze",
    "addressLocality": "Kota Kinabalu",
    "addressRegion": "Sabah",
    "postalCode": "88200",
    "addressCountry": "MY"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 5.9804,
    "longitude": 116.0735
  },
  "areaServed": [
    { "@type": "State", "name": "Sabah", "containedInPlace": { "@type": "Country", "name": "Malaysia" } },
    { "@type": "Country", "name": "Malaysia" }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 5.9804, "longitude": 116.0735 },
    "geoRadius": "500000"
  },
  "knowsAbout": [
    "Managed IT Services", "Cybersecurity", "Cloud Hosting", "Web Development",
    "Mobile App Development", "IT Consultancy", "System Administration", "Network Infrastructure"
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "ISO 27001:2022 Information Security Management Certified",
    "credentialCategory": "certification"
  },
  "parentOrganization": {
    "@type": "Organization",
    "name": "Pioneer Infotech Pte Ltd",
    "url": "https://pioneer-infotech.com",
    "address": { "@type": "PostalAddress", "addressCountry": "SG" }
  },
  "foundingDate": "2007",
  "numberOfEmployees": { "@type": "QuantitativeValue", "value": 20 },
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/share/1BJyzvX9Kg/"
  ]
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  "name": "Nexus Aurora",
  "url": BASE_URL,
  "inLanguage": "en-MY",
  "publisher": { "@id": `${BASE_URL}/#organization` }
};

const buildBreadcrumbSchema = (breadcrumbs: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

const buildFAQSchema = (faqItems: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
});

const DEFAULT_TITLE = 'Nexus Aurora | Managed IT Services & Cybersecurity in Sabah, Malaysia';

/** Adds the brand only when the page title doesn't already carry it. */
export const buildTitle = (title?: string) => {
  if (!title) return DEFAULT_TITLE;
  return /nexus\s*aurora/i.test(title) ? title : `${title} | Nexus Aurora`;
};

type MetaTag = { name?: string; property?: string; content: string };

export interface HeadData {
  title: string;
  metaTags: MetaTag[];
  canonicalUrl?: string;
  schemas: object[];
  noindex: boolean;
}

/** One source of truth for the head, used by the client hook and by the build-time prerender. */
export const buildHead = ({
  title,
  description,
  ogImage = `${BASE_URL}/nexus-aurora-og.png`,
  canonicalUrl,
  ogType = 'website',
  structuredData,
  breadcrumbs,
  faqItems,
  noindex = false
}: SEOProps): HeadData => {
  const fullTitle = buildTitle(title);

  const metaTags: MetaTag[] = [
    { name: 'description', content: description },
    { name: 'robots', content: noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Nexus Aurora - Managed IT Services Malaysia' },
    { property: 'og:type', content: ogType },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
    { name: 'twitter:image:alt', content: 'Nexus Aurora - Managed IT Services Malaysia' }
  ];

  if (canonicalUrl) {
    metaTags.push({ property: 'og:url', content: canonicalUrl });
  }

  const schemas: object[] = [ORGANIZATION_SCHEMA, WEBSITE_SCHEMA];
  if (structuredData) schemas.push(structuredData);
  if (breadcrumbs && breadcrumbs.length > 0) schemas.push(buildBreadcrumbSchema(breadcrumbs));
  if (faqItems && faqItems.length > 0) schemas.push(buildFAQSchema(faqItems));

  return { title: fullTitle, metaTags, canonicalUrl, schemas, noindex };
};

const escapeAttr = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Serialises a page's head for the prerendered HTML. Schema scripts are marked so the client can replace them. */
export const renderHeadToString = (head: HeadData) => {
  const tags = head.metaTags.map(({ name, property, content }) =>
    name
      ? `<meta name="${name}" content="${escapeAttr(content)}" />`
      : `<meta property="${property}" content="${escapeAttr(content)}" />`
  );
  if (head.canonicalUrl) tags.push(`<link rel="canonical" href="${escapeAttr(head.canonicalUrl)}" />`);
  head.schemas.forEach((schema) => {
    tags.push(`<script type="application/ld+json" data-seo-schema>${JSON.stringify(schema).replace(/</g, '\u003c')}</script>`);
  });
  return tags.join('\n    ');
};

/**
 * During the build-time prerender a collector is provided, and useSEO records the page's props
 * while rendering (effects don't run on the server). In the browser there is no collector.
 */
export const SEOCollectorContext = createContext<SEOProps[] | null>(null);

export const useSEO = (props: SEOProps) => {
  const collector = useContext(SEOCollectorContext);
  if (collector) collector.push(props);

  const {
    title, description, keywords, ogImage, canonicalUrl, ogType, structuredData, breadcrumbs, faqItems, noindex
  } = props;

  useEffect(() => {
    const head = buildHead(props);
    document.title = head.title;

    head.metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = (name || property)!;

      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    });

    let link = document.querySelector('link[rel="canonical"]');
    if (head.canonicalUrl) {
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', head.canonicalUrl);
    } else {
      link?.remove();
    }

    // Replace whatever schema is in the head (prerendered or from the previous page).
    document.head.querySelectorAll('script[data-seo-schema]').forEach((script) => script.remove());
    const schemaScripts = head.schemas.map((schema) => {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-seo-schema', '');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      schemaScripts.forEach(script => script.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, keywords, ogImage, canonicalUrl, ogType, structuredData, breadcrumbs, faqItems, noindex]);
};
