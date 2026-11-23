// ══════════════════════════════════════════════════════════════════════
// SEARCH (SEO)
// One place for everything search engines read: the name and its
// spellings, the search phrases, and the shared page metadata.
// ══════════════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import shareCard from "@/app/(p2)/opengraph-image.jpg";
import { awards, contact, education, identity, socials } from "./site-content";
import { SITE_URL } from "./site-url";

/** The name people search for, matching the domain and the LinkedIn handle. */
export const BRAND = "Sajjad AI Eng";

/** Other ways people type the name. Search engines read these as the same
 *  person (schema.org `alternateName`); none of them is shown as a list on
 *  the page. */
export const NAME_VARIANTS = [
  "Sajjad",
  "Sajad",
  "Sajid",
  "Sajjad AI",
  "Sajad AI",
  "Sajjad AI Eng",
  "Sajad AI Eng",
  "Sajad Eng",
  "Sajjad AI Engineer",
  "Muhammad Sajad",
  "Mohammad Sajjad",
  "M. Sajjad",
];

/** Phrases a client would type. Used for the keywords tag (Bing and
 *  others still read it) and kept honest: every one is on the site. */
export const KEYWORDS = [
  "Muhammad Sajjad",
  ...NAME_VARIANTS,
  "Sajjad full stack developer",
  "Sajjad AI engineer Peshawar",
  "Sajjad developer Pakistan",
  "full stack developer Peshawar",
  "AI engineer Pakistan",
  "freelance full stack developer",
  "freelance AI engineer",
  "AI voice agent developer",
  "RAG developer",
  "e-commerce developer",
  "Shopify automation developer",
  "Django developer",
  "FastAPI developer",
  "Next.js developer",
  "React developer",
  "Node.js developer",
  "hire developer Pakistan",
  "developer for UAE UK USA clients",
];

export const SITE_TITLE = `${identity.fullName} (${BRAND}) | ${identity.role}`;

export const SITE_DESCRIPTION =
  "Muhammad Sajjad (Sajjad AI Eng) is a full stack and AI engineer in Peshawar, Pakistan, in production since 2017. E-commerce platforms, AI voice agents and automation for clients in the UAE, UK and USA. Available for freelance projects.";

/** Metadata for one page: its own title, description, address and the
 *  matching social-share card (without this every page shared the home
 *  page's card title). */
export function pageMeta({
  title,
  description,
  path,
  image = shareCard,
}: {
  title: string;
  description: string;
  path: string;
  /** The picture shown when the page is shared; the site card by default. */
  image?: StaticImageData;
}): Metadata {
  const full = `${title} | ${identity.fullName}`;
  const images = [{ url: image.src, width: image.width, height: image.height, alt: full }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: full,
      description,
      url: path,
      siteName: `${identity.fullName} · ${BRAND}`,
      type: "website",
      locale: "en_US",
      images,
    },
    twitter: { card: "summary_large_image", title: full, description, images },
  };
}

const PERSON_ID = `${SITE_URL}/#person`;
const SITE_ID = `${SITE_URL}/#website`;

/** Who the site is about, in the form search engines read. Built from the
 *  same data the pages show, so it cannot drift from them. */
export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: identity.fullName,
      givenName: "Muhammad",
      familyName: "Sajjad",
      alternateName: NAME_VARIANTS,
      jobTitle: identity.role,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      /* The portrait itself. The old address (/opengraph-image.jpg) did not
         exist on the live site. */
      image: `${SITE_URL}${identity.portrait.src}`,
      email: `mailto:${contact.inbox}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Peshawar",
        addressRegion: "Khyber Pakhtunkhwa",
        addressCountry: "PK",
      },
      knowsAbout: [
        "Full stack development",
        "Artificial intelligence",
        "AI voice agents",
        "Retrieval-augmented generation (RAG)",
        "E-commerce",
        "Automation",
        "Django",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "React",
        "Next.js",
        "Shopify",
      ],
      alumniOf: education.slice(0, 2).map((e) => ({
        "@type": "CollegeOrUniversity",
        name: e.org.split(" · ")[0],
      })),
      award: awards.map((a) => `${a.title}: ${a.detail}`),
      hasOccupation: {
        "@type": "Occupation",
        name: identity.role,
        occupationLocation: { "@type": "Country", name: "Pakistan" },
        skills: "Python, TypeScript, Django, FastAPI, Node.js, PostgreSQL, React, Next.js, RAG, AI voice agents",
      },
      sameAs: socials.map((s) => s.href),
    },
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      url: SITE_URL,
      name: `${identity.fullName} · ${BRAND}`,
      alternateName: [BRAND, "Sajjad AI", identity.fullName],
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: `${BRAND} · ${identity.fullName}`,
      url: SITE_URL,
      image: `${SITE_URL}${identity.portrait.src}`,
      description:
        "Freelance full stack and AI engineering: e-commerce and web platforms, AI voice agents, automation, and ongoing management and support.",
      founder: { "@id": PERSON_ID },
      email: contact.inbox,
      telephone: `+${contact.whatsapp.digits}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Peshawar",
        addressRegion: "Khyber Pakhtunkhwa",
        addressCountry: "PK",
      },
      areaServed: ["AE", "GB", "US", "PK"],
    },
  ],
};

/** Breadcrumb trail for a page, e.g. Home › Work › Sara. */
export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "" }, ...trail].map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path}`,
    })),
  };
}

export { PERSON_ID };
