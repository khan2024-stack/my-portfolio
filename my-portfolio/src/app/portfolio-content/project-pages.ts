// ══════════════════════════════════════════════════════════════════════
// PROJECT PAGES — one page per project at /work/<slug>.
// Each page shows its selling images and a short summary, never full
// page captures: enough to judge the work, not enough to copy the site.
// Only features seen working on the real build are listed here.
// ══════════════════════════════════════════════════════════════════════

import type { StaticImageData } from "next/image";

import zushap from "@/assets/builds/zushap.jpg";
import zushapWide from "@/assets/builds/zushap-wide.jpg";
import zushapFeed from "@/assets/builds/zushap-feed.jpg";
import zushapStory from "@/assets/builds/zushap-story.jpg";
import vinwear from "@/assets/builds/vinwear.jpg";
import vinwearWide from "@/assets/builds/vinwear-wide.jpg";
import vinwearFeed from "@/assets/builds/vinwear-feed.jpg";
import vinwearStory from "@/assets/builds/vinwear-story.jpg";
import sara from "@/assets/builds/sara.jpg";
import saraWide from "@/assets/builds/sara-wide.jpg";
import saraFeed from "@/assets/builds/sara-feed.jpg";
import saraStory from "@/assets/builds/sara-story.jpg";
import madleen from "@/assets/builds/madleen.jpg";
import madleenWide from "@/assets/builds/madleen-wide.jpg";
import madleenFeed from "@/assets/builds/madleen-feed.jpg";
import madleenStory from "@/assets/builds/madleen-story.jpg";
import uktop from "@/assets/builds/uktop.jpg";
import uktopWide from "@/assets/builds/uktop-wide.jpg";
import uktopFeed from "@/assets/builds/uktop-feed.jpg";
import uktopStory from "@/assets/builds/uktop-story.jpg";

export type ProjectPage = {
  slug: string;
  name: string;
  label: string;
  line: string;
  summary: string;
  features: string[];
  details: { label: string; value: string }[];
  price: { headline: string; sub?: string; small?: string };
  /* Shown beside the images when they could be misread. */
  notice?: string;
  site?: { label: string; href: string };
  cta: string;
  images: {
    hero: StaticImageData;
    wide: StaticImageData;
    feed: StaticImageData;
    story: StaticImageData;
  };
  /* Each project keeps the colours of its own selling images. */
  colors: {
    hero: string;
    onHero: string;
    heroAccent: string;
    page: string;
    ink: string;
    key: string;
    band: string;
    onBand: string;
  };
};

const STORE_INCLUDED =
  "We add your branding and products, connect your payment gateway, and launch.";
const STORE_PRICE = {
  headline: "Ready-built store from $12,000",
  sub: "One-time payment. 3 months of free support from our team.",
  small: "Hosting, gateway and usage fees go to those providers.",
};
const STORE_CTA = "Tell us what you sell. We'll suggest the best fit.";

export const projectPages: ProjectPage[] = [
  {
    slug: "zushap",
    name: "ZuShap",
    label: "ZuShap, our own store build",
    line: "Already built. Your brand.",
    summary:
      "A complete online fashion shop, working from the first search to checkout, with its own admin behind it to run products, categories, banners and menus.",
    features: [
      "Live search with product pictures",
      "Filters by size and price",
      "Category pages with sub-category chips",
      "Product gallery and size choice",
      "Add to cart with slide-in mini-cart",
      "Checkout with delivery choice and cash on delivery",
      "Admin for products, categories, banners and menus",
    ],
    details: [
      { label: "What's included", value: STORE_INCLUDED },
      { label: "Tech", value: "Medusa backend and admin. Next.js storefront." },
    ],
    price: STORE_PRICE,
    cta: STORE_CTA,
    images: { hero: zushap, wide: zushapWide, feed: zushapFeed, story: zushapStory },
    colors: {
      hero: "#5b1320",
      onHero: "#f6ecdf",
      heroAccent: "#e8b4a6",
      page: "#f6ecdf",
      ink: "#2a0a10",
      key: "#8a1c30",
      band: "#2f0a12",
      onBand: "#f6ecdf",
    },
  },
  {
    slug: "vinwear",
    name: "VIN Wear",
    label: "Store we worked on",
    line: "Your product has a story. This store tells it.",
    summary:
      "A car-culture clothing store that shows how far a store can carry one idea, with a registration card and a write-your-own VIN box on the product page.",
    features: [
      "Live search suggestions as you type",
      "Category pages with a filter panel",
      "Colour, garment and size pickers",
      "Certificate of Registration card on the product page",
      "Write-your-own VIN box",
      "Add to cart with mini-cart",
      "Checkout with validation and delivery choice",
    ],
    details: [
      { label: "What's included", value: STORE_INCLUDED },
      { label: "Tech", value: "Medusa backend. Next.js storefront. Postgres." },
    ],
    price: STORE_PRICE,
    cta: STORE_CTA,
    images: { hero: vinwear, wide: vinwearWide, feed: vinwearFeed, story: vinwearStory },
    colors: {
      hero: "#12161f",
      onHero: "#eef0f5",
      heroAccent: "#8fb2ff",
      page: "#eef0f5",
      ink: "#12161f",
      key: "#1f5bd0",
      band: "#1f5bd0",
      onBand: "#ffffff",
    },
  },
  {
    slug: "sara",
    name: "Sara",
    label: "AI voice agent",
    line: "Who answers when you're closed?",
    summary:
      "Sara answers your phone calls in English and Gulf Arabic, quotes prices from your own list, remembers the call and takes bookings. The engine has 2,428 automated engine tests passing. These are automated tests, not call results.",
    features: [
      "Answers your phone calls in English and Gulf Arabic",
      "Follows the caller's language turn by turn",
      "Quotes prices from your own list",
      "Remembers the call",
      "Takes bookings",
      "Takes a message for a manager callback",
      "Daily summary for the owner",
    ],
    details: [
      { label: "What's included", value: "Built system, your brand, launch, 3 months of free support." },
      { label: "Tech", value: "Next.js console. Twilio, Deepgram, Cartesia, Hamsa, Gemini, Google Cloud Run." },
    ],
    price: {
      headline: "$20,000 one-time",
      sub: "3 months of free support from our team.",
      small: "You pay your own running costs directly: phone line and minutes, speech, AI model and hosting.",
    },
    notice: "Real interface, not a real call.",
    cta: STORE_CTA,
    images: { hero: sara, wide: saraWide, feed: saraFeed, story: saraStory },
    colors: {
      hero: "#0b0d12",
      onHero: "#e9eef5",
      heroAccent: "#ff5a3c",
      page: "#e9eef5",
      ink: "#0b0d12",
      key: "#c93a1f",
      band: "#0b0d12",
      onBand: "#e9eef5",
    },
  },
  {
    slug: "madleen",
    name: "Madleen",
    label: "Online fashion store",
    line: "We spent years. You launch in days.",
    summary:
      "An online fashion store for dresses, abayas, bags and shoes, set up for shoppers who pay cash on delivery.",
    features: [
      "Live search suggestions while typing",
      "Filters by size and offers",
      "Sub-category chips and price sorting",
      "Product gallery, size choice and stock status",
      "Add to cart with sliding mini-cart",
      "Cart page with savings shown",
      "Checkout with cash on delivery",
    ],
    details: [
      { label: "What's included", value: STORE_INCLUDED },
      { label: "Tech", value: "Next.js storefront. Medusa v2 backend. Postgres." },
    ],
    price: STORE_PRICE,
    cta: STORE_CTA,
    images: { hero: madleen, wide: madleenWide, feed: madleenFeed, story: madleenStory },
    colors: {
      hero: "#ffe600",
      onHero: "#14140f",
      heroAccent: "#1d2b9e",
      page: "#fffcee",
      ink: "#14140f",
      key: "#1d2b9e",
      band: "#14140f",
      onBand: "#ffe600",
    },
  },
  {
    slug: "uktop",
    name: "UK Top",
    label: "Custom business website",
    line: "Your best work, shown properly.",
    summary:
      "A business website for a London facade and glazing company, built to let the work speak, with a portfolio that opens into case studies and a full set of system pages.",
    features: [
      "Home hero carousel",
      "Project filter tabs",
      "Case study pages from each project card",
      "Systems index and system pages",
      "Contact page with enquiry form",
      "Layouts for desktop, tablet and phone",
    ],
    details: [
      { label: "In this build", value: "Home, projects, case studies, systems, about and contact pages." },
      { label: "Tech", value: "Next.js 16. Content kept in static files." },
    ],
    price: { headline: "Custom business websites.", sub: "Tell us what you need." },
    site: { label: "Visit site", href: "https://www.uktop.eu" },
    cta: "Tell us what you need.",
    images: { hero: uktop, wide: uktopWide, feed: uktopFeed, story: uktopStory },
    colors: {
      hero: "#1c2c44",
      onHero: "#f1f2ee",
      heroAccent: "#a8c5ff",
      page: "#f1f2ee",
      ink: "#141c28",
      key: "#1f5bd0",
      band: "#141c28",
      onBand: "#f1f2ee",
    },
  },
];
