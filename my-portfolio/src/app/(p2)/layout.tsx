// app/(p2)/layout.tsx — root layout for the North-template design.
//
// Its own root layout, not nested: this design has its own header,
// footer and card language and would inherit the wrong ground if it
// sat inside another route group's <body>.
//
// 2026-11-15 professional redesign: the same type as the project pages
// and the selling images (Bricolage Grotesque headings, Instrument Serif
// italic accents, Inter body) on warm paper with oxblood and soft rose.
// The earlier lime look is saved as git tag `design-lime-green-classic`.
//
// Reference: templatekit.kitprostudio.com/north — read from computed
// styles on the live page, not the screenshot. Every number in p2.css
// says where it came from.
import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans, Geist, Geist_Mono, Instrument_Serif, Inter, Space_Grotesk } from "next/font/google";

import { SITE_URL } from "@/app/portfolio-content/site-url";
import { identity } from "@/app/portfolio-content/site-content";
import { BRAND, KEYWORDS, SITE_DESCRIPTION, SITE_TITLE, siteJsonLd } from "@/app/portfolio-content/seo";
import P2Header from "./_parts/Header";
import P2Footer from "./_parts/Footer";
import WhatsAppFab from "./_parts/WhatsAppFab";
import TabBar from "./_parts/TabBar";
import "../globals.css";
import "./p2.css";
import "./theme-pro.css";   // the pro design system (2026-11-15); remove this line to go back
import "./theme-pop.css";   // colour, type and spacing lift (2026-11-17); remove this line to go back

/* Their pair, confirmed on the rendered page: Space Grotesk carries
   every heading at weight 500 (medium, not bold — the H1 computed
   font-weight: 500 at 64px), Inter carries body copy and the nav at
   16px weight 600. */
const p2Display = Bricolage_Grotesque({
  variable: "--p2-display",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});
const tGeist = Geist({ variable: "--t-geist", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });
/* The site fonts (chosen 2026-11-17): Space Grotesk for headings and titles, DM Sans for text. */
const fGrotesk = Space_Grotesk({ variable: "--f-grotesk", subsets: ["latin"], weight: ["500", "600"], display: "swap" });
const fDmSans = DM_Sans({ variable: "--f-dmsans", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });
const tGeistMono = Geist_Mono({ variable: "--t-geist-mono", subsets: ["latin"], weight: ["400", "500"], display: "swap" });
const p2Serif = Instrument_Serif({
  variable: "--p2-serif-face",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});
const p2Body = Inter({
  variable: "--p2-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/* Tints the phone browser's address bar to match the header. */
export const viewport: Viewport = {
  themeColor: "#f7f7f4",
  width: "device-width",
  initialScale: 1,
};

/* This is the site now — the old layout at (site)/ is gone, so the
   noindex guard that kept the draft design out of search is gone too.
   Names, spellings and search phrases live in portfolio-content/seo.ts. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  /* Google Search Console (HTML-tag method; the DNS TXT is the other). */
  verification: { google: "lC0_wE-qi2oeskyu2iV2OMk9Nd68qg-DvlMKtIqOVGU" },
  alternates: { canonical: "/" },
  title: {
    default: SITE_TITLE,
    template: `%s | ${identity.fullName}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: BRAND,
  keywords: KEYWORDS,
  authors: [{ name: identity.fullName, url: SITE_URL }],
  creator: identity.fullName,
  publisher: identity.fullName,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: `${identity.fullName} · ${BRAND}`,
    type: "profile",
    firstName: "Muhammad",
    lastName: "Sajjad",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: SITE_TITLE, description: SITE_DESCRIPTION },
};

export default function P2RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`p2-root ${p2Display.variable} ${p2Serif.variable} ${p2Body.variable} ${tGeist.variable} ${tGeistMono.variable} ${fGrotesk.variable} ${fDmSans.variable}`}>
        <a className="p2-skip" href="#main">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <div className="p2">
          <P2Header />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <P2Footer />
          <TabBar />
          <WhatsAppFab />
        </div>
      </body>
    </html>
  );
}
