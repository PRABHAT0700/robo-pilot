import type { Metadata } from "next";
import { faqs, industries, serviceNav, site } from "@/lib/content";

export const SITE_URL = "https://robopylot.com";
export const OG_IMAGE = "/hero-ai-ecosystem.png";
export const LOGO_IMAGE = "/robopilot-logo.png";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean === "/" ? "/" : clean}`;
}

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = OG_IMAGE,
  type = "website",
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
  return {
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: path },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    openGraph: {
      type,
      url,
      siteName: site.name,
      locale: "en_IN",
      title: ogTitle,
      description,
      images: [{ url: image, width: 1024, height: 682, alt: `${site.name} — ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    "@id": `${SITE_URL}/#organization`,
    name: site.name,
    legalName: site.name,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(LOGO_IMAGE),
    },
    image: absoluteUrl(OG_IMAGE),
    description: site.description,
    email: site.email,
    telephone: [site.phone, site.phoneAlt],
    foundingDate: "2026",
    address: {
      "@type": "PostalAddress",
      streetAddress: "105, AB Rd, Sector C, Slice 5, Part II, Skye Corporate Park",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      postalCode: "452010",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.7533,
      longitude: 75.8937,
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
    ],
    knowsAbout: [
      "AI agents",
      "Machine learning",
      "Data analytics",
      "Mobile app development",
      "AI consulting",
    ],
    makesOffer: serviceNav.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        url: absoluteUrl(`/services/${s.slug}`),
      },
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "sales",
        email: site.email,
        areaServed: ["IN", "GB", "US"],
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: site.name,
    description: site.description,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function webPageSchema({
  path,
  title,
  description,
  type = "WebPage",
}: {
  path: string;
  title: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "FAQPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function serviceSchema(input: {
  slug: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(`/services/${input.slug}`),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ["IN", "GB", "US"],
    serviceType: input.name,
  };
}

export function industrySchema(input: {
  slug: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${input.name} software and AI`,
    description: input.description,
    url: absoluteUrl(`/industries/${input.slug}`),
    provider: { "@id": `${SITE_URL}/#organization` },
    audience: {
      "@type": "Audience",
      audienceType: input.name,
    },
  };
}

export function softwareSchema(input: {
  slug: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: input.name,
    description: input.description,
    url: absoluteUrl(`/services/free-ai-agents/${input.slug}`),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    provider: { "@id": `${SITE_URL}/#organization` },
  };
}

export function itemListSchema(name: string, items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export const defaultKeywords = [
  "RoboPylot",
  "AI agents India",
  "AI consulting Indore",
  "machine learning development",
  "mobile app development India",
  "custom software Indore",
];
