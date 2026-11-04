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
import saraAdminLaptop from "@/assets/builds/sara-admin-laptop.jpg";
import saraAdminWide from "@/assets/builds/sara-admin-wide.jpg";
import saraWide from "@/assets/builds/sara-wide.jpg";
import saraFeed from "@/assets/builds/sara-feed.jpg";
import saraStory from "@/assets/builds/sara-story.jpg";
import madleen from "@/assets/builds/madleen.jpg";
import madleenWide from "@/assets/builds/madleen-wide.jpg";
import madleenFeed from "@/assets/builds/madleen-feed.jpg";
import madleenStory from "@/assets/builds/madleen-story.jpg";
import fenzacci from "@/assets/builds/fenzacci.jpg";
import fenzacciFeed from "@/assets/builds/fenzacci-feed.jpg";
import fenzacciPhones from "@/assets/builds/fenzacci-phones.jpg";
import uktop from "@/assets/builds/uktop.jpg";
import uktopWide from "@/assets/builds/uktop-wide.jpg";
import uktopFeed from "@/assets/builds/uktop-feed.jpg";
import uktopStory from "@/assets/builds/uktop-story.jpg";

import zushapMLaptop from "@/assets/builds/zushap-m-laptop.jpg";
import zushapMTablet from "@/assets/builds/zushap-m-tablet.jpg";
import zushapMPhone from "@/assets/builds/zushap-m-phone.jpg";
import vinwearMLaptop from "@/assets/builds/vinwear-m-laptop.jpg";
import vinwearMTablet from "@/assets/builds/vinwear-m-tablet.jpg";
import vinwearMPhone from "@/assets/builds/vinwear-m-phone.jpg";
import madleenMLaptop from "@/assets/builds/madleen-m-laptop.jpg";
import madleenMTablet from "@/assets/builds/madleen-m-tablet.jpg";
import madleenMPhone from "@/assets/builds/madleen-m-phone.jpg";
import fenzacciMLaptop from "@/assets/builds/fenzacci-m-laptop.jpg";
import fenzacciMTablet from "@/assets/builds/fenzacci-m-tablet.jpg";

import zushapFlowOverview from "@/assets/builds/flow/zushap-overview.jpg";
import zushapFlow1 from "@/assets/builds/flow/zushap-step1.jpg";
import zushapFlow2 from "@/assets/builds/flow/zushap-step2.jpg";
import zushapFlow3 from "@/assets/builds/flow/zushap-step3.jpg";
import zushapFlow4 from "@/assets/builds/flow/zushap-step4.jpg";
import zushapFlow5 from "@/assets/builds/flow/zushap-step5.jpg";
import zushapFlow6 from "@/assets/builds/flow/zushap-step6.jpg";
import vinwearFlowOverview from "@/assets/builds/flow/vinwear-overview.jpg";
import vinwearFlow1 from "@/assets/builds/flow/vinwear-step1.jpg";
import vinwearFlow2 from "@/assets/builds/flow/vinwear-step2.jpg";
import vinwearFlow3 from "@/assets/builds/flow/vinwear-step3.jpg";
import vinwearFlow4 from "@/assets/builds/flow/vinwear-step4.jpg";
import vinwearFlow5 from "@/assets/builds/flow/vinwear-step5.jpg";
import vinwearFlow6 from "@/assets/builds/flow/vinwear-step6.jpg";
import madleenFlowOverview from "@/assets/builds/flow/madleen-overview.jpg";
import madleenFlow1 from "@/assets/builds/flow/madleen-step1.jpg";
import madleenFlow2 from "@/assets/builds/flow/madleen-step2.jpg";
import madleenFlow3 from "@/assets/builds/flow/madleen-step3.jpg";
import madleenFlow4 from "@/assets/builds/flow/madleen-step4.jpg";
import madleenFlow5 from "@/assets/builds/flow/madleen-step5.jpg";
import madleenFlow6 from "@/assets/builds/flow/madleen-step6.jpg";

export type ProjectPage = {
  slug: string;
  name: string;
  label: string;
  line: string;
  summary: string;
  features: string[];
  details: { label: string; value: string }[];
  /* Left out for client work in progress: no price and no sales call to action. */
  price?: { headline: string; sub?: string; small?: string };
  status?: { headline: string; sub: string };
  /* Shown beside the images when they could be misread. */
  notice?: string;
  site?: { label: string; href: string };
  cta?: string;
  /* Set when the hero does not show a laptop, tablet and phone. */
  heroAlt?: string;
  /* Set when the wide image is not a selling image. */
  wideAlt?: string;
  images: {
    hero: StaticImageData;
    /* Left out when a project has no wide selling image. */
    wide?: StaticImageData;
    feed: StaticImageData;
    story: StaticImageData;
  };
  /* Mockups for the "On every screen" section: laptop first. */
  screens?: StaticImageData[];
  /* Admin section. These images carry their own sample data label. */
  admin?: { lead: string; laptop: StaticImageData; wide: StaticImageData };
  /* Purchase flow on angled phones. Flat screens are never published. */
  flow?: { overview: StaticImageData; steps: StaticImageData[]; reel: string; poster: string };
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
  headline: "Talk to us",
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
    screens: [zushapMLaptop, zushapMTablet, zushapMPhone],
    flow: { overview: zushapFlowOverview, steps: [zushapFlow1, zushapFlow2, zushapFlow3, zushapFlow4, zushapFlow5, zushapFlow6], reel: "/flow/zushap-flow.mp4", poster: "/flow/zushap-flow.jpg" },
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
    label: "In progress for a US client",
    line: "A car-culture store, still being built.",
    summary:
      "A car-culture clothing store that shows how far a store can carry one idea, with a registration card and a write-your-own VIN box on the product page, and layouts for desktop, tablet and phone.",
    features: [
      "Live search suggestions as you type",
      "Category pages with a filter panel",
      "Colour, garment and size pickers, with size advice",
      "Certificate of Registration card on the product page",
      "Write-your-own VIN box",
      "Pinned Add to cart bar with the full price",
      "Add to cart with mini-cart",
      "Checkout with validation and delivery choice",
      "Order success page after checkout",
      "Layouts for desktop, tablet and phone",
    ],
    details: [
      { label: "In this build", value: "Product pages, live search, filters, cart, checkout and order success page." },
      { label: "Tech", value: "Medusa backend. Next.js storefront. Postgres." },
    ],
    status: { headline: "Site in progress", sub: "Being built for a client in the US." },
    images: { hero: vinwear, wide: vinwearWide, feed: vinwearFeed, story: vinwearStory },
    screens: [vinwearMLaptop, vinwearMTablet, vinwearMPhone],
    flow: { overview: vinwearFlowOverview, steps: [vinwearFlow1, vinwearFlow2, vinwearFlow3, vinwearFlow4, vinwearFlow5, vinwearFlow6], reel: "/flow/vinwear-flow.mp4", poster: "/flow/vinwear-flow.jpg" },
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
      "Admin console with analytics, call logs and bookings",
    ],
    details: [
      { label: "What's included", value: "Built system, your brand, launch, 3 months of free support." },
      { label: "Tech", value: "Next.js console. Twilio, Deepgram, Cartesia, Hamsa, Gemini, Google Cloud Run." },
    ],
    price: {
      headline: "Talk to us",
      sub: "One-time payment. 3 months of free support from our team.",
      small: "You pay your own running costs directly: phone line and minutes, speech, AI model and hosting.",
    },
    notice: "Admin: real interface, sample data. Call screens: real interface, not a real call.",
    heroAlt: "Sara admin console shown on a laptop, tablet and phone, with sample data",
    cta: STORE_CTA,
    images: { hero: sara, wide: saraWide, feed: saraFeed, story: saraStory },
    admin: {
      lead: "Analytics, call logs, bookings and contacts, all in one console. Real admin interface, sample data.",
      laptop: saraAdminLaptop,
      wide: saraAdminWide,
    },
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
      "An online fashion store for dresses, abayas, bags and shoes, set up for shoppers who pay cash on delivery, from the first search to the order placed.",
    features: [
      "Live search suggestions while typing",
      "Filters by size and offers",
      "Sub-category chips and price sorting",
      "Product gallery, size choice and stock status",
      "Add to cart with sliding mini-cart",
      "Cart page with savings shown",
      "Checkout with delivery choice and cash on delivery",
      "Order success page after checkout",
      "Phone layout from product page to order placed",
    ],
    details: [
      { label: "What's included", value: STORE_INCLUDED },
      { label: "Tech", value: "Next.js storefront. Medusa v2 backend. Postgres." },
    ],
    price: STORE_PRICE,
    cta: STORE_CTA,
    images: { hero: madleen, wide: madleenWide, feed: madleenFeed, story: madleenStory },
    screens: [madleenMLaptop, madleenMTablet, madleenMPhone],
    flow: { overview: madleenFlowOverview, steps: [madleenFlow1, madleenFlow2, madleenFlow3, madleenFlow4, madleenFlow5, madleenFlow6], reel: "/flow/madleen-flow.mp4", poster: "/flow/madleen-flow.jpg" },
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
    slug: "fenzacci",
    name: "Fenzacci",
    label: "Custom fashion store, UAE",
    line: "Built around the product.",
    summary:
      "A custom online fashion store for the UAE, with a React and Redux storefront on a Django REST API, built so the product photos do the work.",
    features: [
      "Live search suggestions while typing",
      "Category and sub-category listings",
      "Product gallery, sizes and colour swatches",
      "Add to cart with cart count",
      "Cart with quantity and totals",
      "Layout made for phones",
      "Django admin for products",
    ],
    details: [
      { label: "My role", value: "E-Commerce Development Lead, 2022 to 2025." },
      { label: "In this build", value: "Storefront, live search, cart and product admin." },
      { label: "Tech", value: "Django REST API. React and Redux storefront. MySQL." },
    ],
    price: { headline: "Custom online stores.", sub: "Tell us what you need." },
    cta: "Tell us what you need.",
    heroAlt: "Fenzacci shown on a laptop, tablet and phone",
    images: { hero: fenzacci, feed: fenzacciFeed, story: fenzacciPhones },
    screens: [fenzacciMLaptop, fenzacciMTablet],
    colors: {
      hero: "#0f3f35",
      onHero: "#f3eee3",
      heroAccent: "#d9b45b",
      page: "#f3eee3",
      ink: "#12241f",
      key: "#0f5a48",
      band: "#0f3f35",
      onBand: "#f3eee3",
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
