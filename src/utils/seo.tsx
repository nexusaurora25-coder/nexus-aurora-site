import { useEffect } from 'react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
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

export const useSEO = ({
  title,
  description,
  keywords,
  ogImage = `${BASE_URL}/nexus-aurora-og.png`,
  canonicalUrl,
  ogType = 'website',
  structuredData,
  breadcrumbs,
  faqItems,
  noindex = false
}: SEOProps) => {
  useEffect(() => {
    document.title = title
      ? `${title} | Nexus Aurora (M) Sdn Bhd`
      : 'Nexus Aurora (M) Sdn Bhd - Managed IT Services & MSP Solutions Malaysia';

    const metaTags = [
      { name: 'description', content: description },
      { name: 'robots', content: noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { property: 'og:title', content: title ? `${title} | Nexus Aurora (M) Sdn Bhd` : 'Nexus Aurora - Managed IT Services, Cybersecurity & Cloud Solutions Malaysia' },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Nexus Aurora - Managed IT Services Malaysia' },
      { property: 'og:type', content: ogType },
      { property: 'og:locale', content: 'en_MY' },
      { property: 'og:site_name', content: 'Nexus Aurora (M) Sdn Bhd' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title ? `${title} | Nexus Aurora (M) Sdn Bhd` : 'Nexus Aurora - Managed IT Services & Cybersecurity Malaysia' },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:image:alt', content: 'Nexus Aurora - Managed IT Services Malaysia' },
      { name: 'format-detection', content: 'telephone=no' }
    ];

    if (keywords) {
      metaTags.push({ name: 'keywords', content: keywords });
    }

    if (canonicalUrl) {
      metaTags.push({ property: 'og:url', content: canonicalUrl });
    }

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;

      let element = document.querySelector(`meta[${attribute}="${value}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value!);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });

    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonicalUrl);
    }

    const schemaScripts: HTMLScriptElement[] = [];

    const addSchema = (data: object, attr: string) => {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute(attr, 'true');
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
      schemaScripts.push(script);
    };

    // Always inject global Organization/LocalBusiness schema
    addSchema(ORGANIZATION_SCHEMA, 'data-org-schema');

    if (structuredData) {
      addSchema(structuredData, 'data-page-schema');
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
      addSchema(buildBreadcrumbSchema(breadcrumbs), 'data-breadcrumb-schema');
    }

    if (faqItems && faqItems.length > 0) {
      addSchema(buildFAQSchema(faqItems), 'data-faq-schema');
    }

    return () => {
      schemaScripts.forEach(script => script.remove());
    };
  }, [title, description, keywords, ogImage, canonicalUrl, ogType, structuredData, breadcrumbs, faqItems, noindex]);
};
