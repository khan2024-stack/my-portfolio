// ══════════════════════════════════════════════════════════════════════
// SITE CONTENT
// Every piece of copy on the page lives here. Components read from it,
// so text changes never require touching a component.
// ══════════════════════════════════════════════════════════════════════

import fenzacci from "@/assets/fenzacci.jpg";
import fenz from "@/assets/fenz.jpg";
import madleen from "@/assets/madleen.jpg";
import duomada from "@/assets/duomada.jpg";
import uktop from "@/assets/uktop.jpg";
import vinwear from "@/assets/vinwear.jpg";
import profile from "@/assets/portrait-studio.jpg";
import type { StaticImageData } from "next/image";

/* ── Identity ─────────────────────────────────────────────────────── */
export const identity = {
  shortName: "Sajjad",
  fullName: "Muhammad Sajjad",
  /* "& AI" is earned, not aspirational: Sara answers live phone calls,
     and the current resume role is AI Voice Systems Engineer. */
  role: "Full Stack & AI Engineer",
  location: "Peshawar, Pakistan",
  /* Concrete beats adjectives. "Scalable and high-performance" is what
     every developer writes; shipping on time is what clients actually
     worry about, and the record backs it up. */
  /* Short enough to land in one breath. "That ship" carries the whole
     old line — on time, in production, still running. */
  /* "Ship" is table stakes — every developer says it. "Stay live" is the
     claim only a record can back: VIN Wear and Sara are running in
     production today, and the section below is titled the same way. */
  tagline: "Web platforms and AI agents that stay live.",
  /* Anchored to the year, not a count. "Nine years" was accurate when it
     was written and quietly becomes false every January; "since 2017"
     never does — and a date a reader can check beats a round number.
     One clause per discipline, nothing twice — design-to-code lives in
     Services, so it no longer pads this line. */
  intro:
    /* Context only — the proof figures (90%, 80%, 15+ apps) live in the
       hero's solid strip, see `heroProof` in Sections.tsx. Still anchored
       to "since 2017", never a running count of years. */
    "Full-stack engineer building e-commerce platforms, AI voice agents and automation for clients in the USA, UAE and UK. Python and TypeScript, from database schema to the screen your customer uses — in production since 2017.",
  portrait: profile as StaticImageData,
  cvUrl: "/cv.pdf",
};

/* ── Section headings ─────────────────────────────────────────────
   Kept here so the page's voice can be edited in one place.       */
export const sections = {
  services: {
    eyebrow: "Services",
    title: "What I build, end to end",
    lede: null,
  },
  work: {
    eyebrow: "Work",
    title: "Shipped, live and still running",
    lede: null,
  },
  process: {
    eyebrow: "Process",
    title: "From brief to launch",
    lede: null,
  },
  resume: {
    eyebrow: "Resume",
    title: "Track record",
    lede: null,
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "In their words",
    lede: null,
  },
  contact: {
    eyebrow: "Contact",
    /* The strongest line moves up to become the section title, so this
       section opens the same way as every other one. No full stop: it
       was the only one of the six titles that carried one. */
    title: "Tell me what you're building",
    lede: null,
  },
};

/* ── Clients ──────────────────────────────────────────────────────
   Real names only, and every one of them already appears elsewhere on
   this page — in the resume, the stats or the work grid. This is not a
   substitute for a testimonial: it says who trusted you, not what they
   thought. It exists because with no quotes on the page, every claim a
   visitor reads is you describing yourself.                         */
/* `tag` is the kind of work done for them — shown as a small label on the
   hero's "Worked with" chips, so the voice agent (Capital X Car Care) and
   the Shopify automation (VIN Wear) read as what they are, not just names. */
export const clients: {
  name: string;
  region: "USA" | "UAE" | "UK";
  place: string;
}[] = [
  { name: "VIN Wear", region: "USA", place: "United States" },
  { name: "Capital X Car Care", region: "UAE", place: "Abu Dhabi" },
  { name: "Fenzacci Trading", region: "UAE", place: "United Arab Emirates" },
  { name: "Duomada", region: "UK", place: "United Kingdom" },
  { name: "UKTOP", region: "UK", place: "London" },
];

/* ── Testimonials ─────────────────────────────────────────────────
   Real quotes only, and only with the person's permission to publish.
   The whole section returns null while this array is empty and there
   is no rating, so the page never shows an empty shelf — add one
   entry and the section appears on its own.

   Each needs: their exact words, their name, their role, and the
   company. Two or three strong ones beat six weak ones.            */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  /* Shown under the role. Month and year is enough — a full date on a
     two-year-old quote just draws attention to its age. */
  date: string;
  /* Out of 5. Half values render as a part-filled star, so 4.5 is
     honest rather than rounded up to a clean row. */
  stars: number;
  /* Optional profile picture: a file under /public, e.g.
     "/clients/jane-doe.jpg", square, 200px or more. Only the person's
     own photo, and only with their permission. Leave it out and the
     card shows their initials instead — the invented samples below
     never get a face, so a placeholder cannot pass for a client. */
  photo?: string;
};

/* ⚠  THE QUOTES AND THE GOOGLE SCORE BELOW ARE INVENTED.
   Ovett & Lane, Studio Marrow, Meridian Auto Care, Bramley Digital,
   Halden Retail Group, Northbridge Labs and Hollow & Fen do not exist.
   Daniel Reeve, Priya Raman, Khalid Nassar, Helen Marsh, Tom Whitfield,
   Amira El-Sayed and Marcus Bell never said anything. The 4.9 is not
   from a Google profile.

   They are placeholders so the section can be seen while it waits for
   real quotes — which is why this is tied to the build mode rather than
   a boolean somebody has to remember. `npm run dev` shows them;
   `npm run build` strips them, so they cannot reach the live site by
   accident. Do not change this line to a plain `true`. */
export const SHOW_SAMPLE_TESTIMONIALS = process.env.NODE_ENV !== "production";

/* Seven — one hero quote plus two full rows of three below it, rather
   than a row with an orphaned last card. Quotes are kept to about 20
   words — the column is roughly 200px, so anything longer turns the
   card into a wall and buries the name it belongs to. */
const sampleTestimonials: Testimonial[] = [
  {
    quote:
      "Rebuilt our storefront on Django and React. Pages that took four seconds now open instantly.",
    name: "Daniel Reeve",
    role: "Founder",
    company: "Ovett & Lane",
    date: "March 2025",
    stars: 5,
  },
  {
    quote:
      "We sent a PSD and got back a site that matched it exactly, down to the spacing.",
    name: "Priya Raman",
    role: "Creative Director",
    company: "Studio Marrow",
    date: "November 2024",
    stars: 5,
  },
  {
    quote:
      "The voice agent takes our calls in English and Arabic. Most callers never work out it is software.",
    name: "Khalid Nassar",
    role: "Operations Manager",
    company: "Meridian Auto Care",
    date: "January 2025",
    stars: 4.5,
  },
  {
    quote:
      "Clear scope, weekly builds we could actually click, and no surprises at the end of it.",
    name: "Helen Marsh",
    role: "Product Lead",
    company: "Bramley Digital",
    date: "June 2025",
    stars: 5,
  },
  {
    quote:
      "Migrated our checkout to a new gateway with zero downtime. Customers didn't notice a thing.",
    name: "Tom Whitfield",
    role: "Operations Director",
    company: "Halden Retail Group",
    date: "August 2025",
    stars: 5,
  },
  {
    quote:
      "Deployments used to be a Friday-afternoon risk. Now they're a five-minute non-event.",
    name: "Amira El-Sayed",
    role: "CTO",
    company: "Northbridge Labs",
    date: "May 2025",
    stars: 4.5,
  },
  {
    quote:
      "Answered every question the same day, even outside working hours. Never had to chase a status update.",
    name: "Marcus Bell",
    role: "Founder",
    company: "Hollow & Fen",
    date: "September 2025",
    stars: 5,
  },
];

/* ── PUT REAL QUOTES HERE ──
   Add one object per client and it takes over immediately — real
   entries always beat the placeholders, in dev and in production, so
   there is no flag to remember when the first one arrives.

   Each needs: quote, name, role, company, date, stars (0–5, halves
   allowed), and the person's permission to publish it. */
const realTestimonials: Testimonial[] = [];

export const testimonials: Testimonial[] =
  realTestimonials.length > 0
    ? realTestimonials
    : SHOW_SAMPLE_TESTIMONIALS
      ? sampleTestimonials
      : [];

/* True while the quotes on screen are the invented dev-only samples —
   the reviews sections use it to print a visible warning, so a sample
   can never be mistaken for a shipped quote. */
export const testimonialsAreSamples =
  realTestimonials.length === 0 && testimonials.length > 0;

/* ── Google rating ────────────────────────────────────────────────
   Only real numbers from a real Google Business Profile. `score` is
   out of 5, `count` is how many reviews it is averaged from, `href`
   points at the profile so the claim is one click from being checked.
   Leave this null until all three are true — an unverifiable rating
   costs more credibility than no rating at all.                    */
export type Rating = { score: number; count: number; href: string };

/* Put the real one here when the profile exists — it overrides the
   placeholder in every build, same as the quotes above. */
const realRating: Rating | null = null;

export const rating: Rating | null =
  realRating ??
  (SHOW_SAMPLE_TESTIMONIALS
    ? { score: 4.9, count: 23, href: "#" } /* ⚠ invented — see the note above */
    : null);

/* ── Navigation ───────────────────────────────────────────────────
   Testimonials only appears when there is something to scroll to, so
   the nav can never point at a section that returned null. Process was
   removed with its section — see the note in app/page.tsx.           */
export const navLinks = [
  { id: "top", label: "Home" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  ...(testimonials.length > 0 || rating
    ? [{ id: "testimonials", label: "Testimonials" }]
    : []),
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

/* ── Headline figures ─────────────────────────────────────────────
   Each names its source — an unsourced number reads as marketing.

   `value` stays an explicit number rather than being computed from the
   current year: Hero renders these on the server before the count-up
   starts, so a date computed in the browser would disagree with the
   server HTML every January and trip a hydration mismatch. The caption
   carries the anchor year instead, which makes a stale figure obvious
   — if the first one ever reads 9 in 2027, the "since 2017" beside it
   gives it away. One edit, each January.                            */
export const stats = [
  { value: 9,   unit: "+", label: "Years experience",   source: "Building continuously since <b>2017</b>" },
  /* Was "Django and React, 2019 — 2022". That end date sat four years
     in the past and read as the year the work stopped — with Fenzacci,
     Sara, Duomada and UKTOP all after it. "Since 2019" is the same
     claim without the false full stop. */
  { value: 15,  unit: "+", label: "Applications built", source: "Django, React and Next.js since <b>2019</b>" },
  /* 90 is Sajjad's own figure (Aug 2026) — the CV carries no percentage
     ("fast load times", no number), so his statement is the only source
     there is. The bio and resume bullets quote the same number so the
     site never argues with itself. */
  { value: 90,  unit: "%", label: "Faster page loads",  source: "On the <b>Fenzacci</b> platform, UAE" },
  /* 80 is Sajjad's own figure (Oct 2026); it read 40 before. The bio and the
     resume bullet quote the same number, so the site never argues with itself. */
  { value: 80,  unit: "%", label: "Faster deployments", source: "After the <b>CI/CD</b> rollout" },
];

/* ── Services ─────────────────────────────────────────────────────
   Three, not six. Full-Stack, Python API and Design-to-Code were three
   cards describing one job — all three listed Django and React, and a
   client reading them could not tell which one to ask for. Spreadsheet
   Automation and DevOps were likewise both "make it run without me".
   Three confident offers read more senior than six that blur, and it
   drops the section from two rows to one.

   `sub` sets above the title, so keep it under ~30 characters or it
   wraps and throws the cards out of rhythm with each other.

   Six capabilities now rather than four — the merged cards have more
   ground to cover, and the list is what a client scans for their own
   problem.                                                          */
export const services = [
  {
    no: "01",
    title: "Web Platforms",
    sub: "Design through to deployment",
    body: "Commerce sites, dashboards and custom platforms — Django or FastAPI behind React, Next.js and TypeScript, taken from a design file to a live, indexed, paid-for site.",
    capabilities: [
      "Django / FastAPI with React, Next.js and TypeScript",
      "Figma, XD and PSD to production",
      "Payment, shipping and third-party APIs",
      "Admin dashboards and role permissions",
      "SEO-optimised performance",
      "Cloud deployment and tuning",
    ],
  },
  {
    no: "02",
    title: "AI & Voice Systems",
    sub: "Built for live conversation",
    body: "Real-time phone and chat agents with streaming speech, grounded answers and a latency budget tight enough that callers do not work out they are talking to software.",
    capabilities: [
      "Real-time voice over Twilio",
      "Streaming STT and TTS",
      "LLM routing with fallback",
      "Retrieval grounding (Pinecone)",
      "In-call memory and persona control",
      "Automated quality assertions",
    ],
  },
  {
    no: "03",
    title: "Automation & Infrastructure",
    sub: "Runs without you watching",
    body: "The work that removes the manual step — spreadsheets turned into systems, reports that write themselves, and pipelines that put releases live without downtime.",
    capabilities: [
      "Apps Script and API connectors",
      "Scheduled reporting and validation",
      "CI/CD pipelines",
      "Docker and Nginx configuration",
      "AWS / GCP deployment",
      "Zero-downtime releases",
    ],
  },
];

/* ── Pricing ──────────────────────────────────────────────────────
   One tier per service above — `service` indexes into `services`, so
   the card's name and capability list always match the real offering.

   ⚠ `price` IS NULL ON PURPOSE. No real rates have been set, and the
   pricing section never shows an invented number: a null renders as
   "Custom · quoted per scope". Put a real figure in as a string
   ("$1,200") and it takes the slot; `per` only shows alongside a real
   price. `featured` is visual emphasis only — the reference's "BEST
   SELLER" tag is a sales claim we cannot verify, so it is not
   reproduced. */
export type PriceTier = {
  service: number;
  price: string | null;
  per: string;
  featured?: boolean;
};

export const pricing: PriceTier[] = [
  { service: 0, price: null, per: "/project" },
  { service: 1, price: null, per: "/project", featured: true },
  { service: 2, price: null, per: "/project" },
];

/* ── Projects ─────────────────────────────────────────────────────
   `status: "pending"` renders the card dimmed with a hatched image
   bed — used for work that has no detail or screenshot yet.        */
type Project = {
  title: string;
  category: string;
  body: string;
  tech: string;
  image: StaticImageData | null;
  /* For work with no public site to screenshot. Draws a CSS mark in the
     image bed instead of the "Image · 16:10" caption, so the card reads
     as designed rather than as one waiting for an upload. */
  plate?: "signal";
  href: string | null;
  /* Defaults to "Watch demo". A link to a live shop is not a demo, so
     that card says "Visit site" instead. */
  linkLabel?: string;
  status: "shipped" | "pending";
  /* Client work with no public demo — honest, and reads as senior. */
  note?: string;
};

/* VIN Wear leads — the newest work, still in progress. Sara is next and
   the only one with a case study to open. All cards are equal size; the
   double-width featured cell was tried and reverted. The first four
   feed the home page picker, the rest show on /work. */
export const projects: Project[] = [
  /* VIN Wear — vin-wear.com. Public facts only: what the store sells and
     what the service does, taken from the project README. The server
     address, keys, config and folder layout stay out of the page. The
     work is ongoing (a Custom VIN feature is in progress), so the body
     says "live since" rather than "finished". */
  {
    title: "VIN Wear Automations",
    category: "Automation · Shopify · USA",
    body: "The automation behind a car-culture apparel store where every garment carries its own registration number. A Python service turns each paid Shopify order into a Printful draft with the numbered tag on the sleeve in about 15 seconds — live since September 2026, custom VINs in progress.",
    tech: "Python · Shopify API · Printful",
    image: vinwear as StaticImageData,
    href: "https://vin-wear.com",
    linkLabel: "Visit store",
    status: "shipped",
  },
  {
    title: "Sara — AI Voice Phone Agent",
    category: "Voice AI · Abu Dhabi",
    body: "A bilingual English and Gulf Arabic phone agent on live inbound calls — 19 priced services, in-call memory, and 95% quality across 255 automated tests.",
    /* Back to three names: six wrapped to a second line in a 333px card
       and threw the row's rhythm out. */
    tech: "FastAPI · Groq · Deepgram",
    /* No public site to photograph — it answers a phone line. The
       waveform is drawn in CSS rather than faking a screenshot. */
    image: null,
    plate: "signal",
    /* Internal route, so no target="_blank" — Work.tsx checks for a
       leading slash. */
    href: "/work/sara",
    linkLabel: "Read the case study",
    status: "shipped",
  },
  /* Three commerce builds — titled by what makes each distinct, since
     "E-Commerce Platform" three times tells a visitor nothing. */
  {
    title: "Headless Commerce Platform",
    category: "Django REST · React",
    body: "A decoupled build — Django REST API behind a React and Redux storefront, with product management, authentication, an admin dashboard, transactional email and a payment gateway handling live orders.",
    tech: "Django · DRF · React · Redux",
    image: fenzacci as StaticImageData,
    href: "https://youtu.be/3T1kOxwXhK4",
    status: "shipped",
  },
  /* Duomada — duomada.co.uk. Public facts only: the shop is live, so
     the stack and the feature set are all observable from outside.
     Nothing about the server, its address or any credential belongs in
     a page anyone can read. */
  {
    title: "Duomada Skylights",
    category: "Commerce · United Kingdom",
    body: "A full custom build for a UK skylight and roof lantern company — FastAPI and MySQL behind a Next.js 15 storefront, with a size and colour variant matrix, nested categories and its own admin dashboard.",
    tech: "FastAPI · Next.js 15 · MySQL",
    image: duomada as StaticImageData,
    href: "https://duomada.co.uk",
    linkLabel: "Visit site",
    status: "shipped",
  },
  {
    title: "Multi-Filter Retail Store",
    category: "Django · DigitalOcean",
    body: "Built around dynamic filtering by colour and size, with cart, wishlist, order management, payments and email notifications behind a full admin panel — deployed and maintained on a DigitalOcean server.",
    tech: "Django · DRF · HTML · CSS",
    image: fenz as StaticImageData,
    href: "https://youtu.be/31XaR1myFYI",
    status: "shipped",
  },
  {
    title: "PSD-to-Production Storefront",
    category: "Design to code",
    body: "A custom PSD taken to a responsive frontend in hand-written HTML and CSS at full design fidelity, then wired to a Django backend for products, cart and authentication.",
    tech: "Django · HTML · CSS · PSD to HTML",
    image: madleen as StaticImageData,
    href: "https://youtu.be/sHmwNgrbGqs",
    status: "shipped",
  },
  /* UKTOP Ltd — uktop.eu. Public facts only again: the site is live, so
     the stack and the structure are visible from outside. The mail
     credentials, the recipient address and the repo paths are not. */
  {
    title: "UKTOP Façade & Glazing",
    category: "Glazing · London",
    body: "A marketing and portfolio site for a London façade engineering firm — Next.js 16 with Tailwind 4, six architectural case studies and four product ranges, all driven from typed content files rather than a CMS.",
    tech: "Next.js 16 · React 19 · Tailwind 4",
    image: uktop as StaticImageData,
    href: "https://www.uktop.eu",
    linkLabel: "Visit site",
    status: "shipped",
  },
];

/* ── Process ──────────────────────────────────────────────────────── */
/* Named `processSteps`, not `process` — a module-scope export called
   `process` shadows Node's global, so anything in this file reaching for
   `process.env` silently resolved to this array instead. */
export const processSteps = [
  {
    n: 1,
    title: "Discovery",
    body: "We talk through what you need and what already exists. You get a clear scope and a fixed timeline before any code.",
  },
  {
    n: 2,
    title: "Design",
    body: "Schema, API structure and interface decisions settled up front — so the build never stalls on a question we should have answered.",
  },
  {
    n: 3,
    title: "Build",
    body: "Weekly updates you can open and click. No long silences, no surprises at the end.",
  },
  {
    n: 4,
    title: "Launch",
    body: "Deployment, monitoring and a team walkthrough — then a support window while everything settles.",
  },
];

/* ── Resume ───────────────────────────────────────────────────────── */
export const experience = [
  {
    /* About two months in as of Oct 2026. The README names the project
       and the store, not an employment arrangement — confirm the org line
       (client, freelance or own venture) before this goes in a CV. */
    period: "Aug 2026 — Present",
    duration: "Current",
    title: "Shopify & Automation Engineer",
    org: "VIN Wear · vin-wear.com · Remote",
    points: [
      "Built the order automation behind <em>VIN Wear</em>, a Shopify store whose garments each carry a registration number on the sleeve — the number is placed on every order with no manual step",
      "Python service on the Shopify and Printful APIs: from <em>paid order to tag on a Printful draft in about 15 seconds</em>, with signed webhooks and three retries before a human alert",
      "Live since <em>17 September 2026</em> on its own Ubuntu server behind Caddy; eleven step-by-step tests, and a Custom VIN feature currently in progress",
      "Set up the store's transactional emails, product reviews and star ratings alongside the automation",
    ],
  },
  {
    /* Confirm the start date — dated from the end of the Fenzacci role. */
    period: "2025 — Present",
    duration: "Current",
    title: "AI Voice Systems Engineer",
    org: "Capital X Car Care · Abu Dhabi, United Arab Emirates",
    points: [
      "Built <em>Sara</em>, a bilingual English and Gulf Arabic phone agent handling live inbound sales calls on FastAPI",
      "Designed the conversation pipeline end to end — intent, routing, Pinecone retrieval, generation and persona control",
      "Reached <em>95% quality across 255 automated assertions</em>, with 100% on real-conversation scenarios",
      "Deployed on Google Cloud Run with Twilio media streaming, Redis session state and streaming STT and TTS",
    ],
  },
  {
    period: "2022 — 2025",
    duration: "Three years",
    title: "E-Commerce Development Lead",
    org: "Fenzacci Trading L.L.C · United Arab Emirates",
    points: [
      "Led full lifecycle development of an e-commerce platform in Django and React",
      "Architected a scalable backend with payment and inventory integrations",
      "Optimised performance — <em>90% faster load times</em>",
      "Implemented CI/CD pipelines, <em>reducing deployment time by 80%</em>",
    ],
  },
  {
    period: "2019 — 2022",
    duration: "Three years",
    title: "Full Stack Developer — Remote & Freelance",
    org: "Various clients and agencies · Pakistan / Remote",
    points: [
      "Built <em>15+ web applications</em> on the Django and React stack",
      "Integrated payment systems including Stripe and PayPal",
      "Deployed on AWS and Heroku with <em>100% uptime</em>",
      "Reduced client operational costs by <em>30%</em> through automation",
    ],
  },
  {
    period: "2017 — 2019",
    duration: "Two years",
    title: "Intern / Trainee Developer",
    org: "CodeCamp & academic projects · Peshawar, Pakistan",
    points: [
      "<em>1st position</em> at the University of Qurtuba project exhibition (2019)",
      "Award-winning academic projects across the degree",
      "Open-source contributions",
      "Full-stack bootcamp graduate",
    ],
  },
];

export const education = [
  {
    period: "2020",
    duration: "Master's degree",
    title: "Master's Degree in Computer Science",
    org: "Qurtuba University of Science & IT · Khyber Pakhtunkhwa, Pakistan",
    points: ["Graded <em>A1 — 84%</em>", "Award-winning academic project work"],
  },
  {
    period: "2016",
    duration: "Bachelor's degree",
    title: "Bachelor's Degree in Computer Science",
    org: "University of Peshawar · Pakistan",
    /* The grade is gone deliberately. Nobody hiring a nine-year engineer
       asks for an undergraduate percentage, and printing a weak one
       draws attention to it for free. The degree still stands. */
    points: ["Computer Science · four years"],
  },
  {
    period: "2014",
    duration: "Diploma",
    title: "Diploma of Associate Engineer (DAE)",
    org: "Government College of Technology · Peshawar, Pakistan",
    points: ["First Division — <em>60%</em>"],
  },
  {
    period: "2017 — 2019",
    duration: "Bootcamp",
    title: "Full-Stack Development Bootcamp",
    org: "CodeCamp · Peshawar, Pakistan",
    points: [
      "<em>Graduated</em> the full-stack programme",
      "Open-source contributions alongside the course",
    ],
  },
];

/* Every item is evidenced by a shipped project or the repos on this
   machine — Duomada alone covers SQLAlchemy/Alembic, Pydantic, JWT and
   OAuth on the API side and TypeScript, React 19, Tailwind 4 and Framer
   Motion on the storefront. Dropped: "GitHub", "HTML5", "CSS3" — table
   stakes that read junior next to the rest — and "JavaScript", which
   "TypeScript" supersedes. */
export const skills = [
  { group: "Backend",     items: ["Python", "Django", "FastAPI", "SQLAlchemy · Alembic", "Pydantic", "MySQL", "JWT · OAuth"] },
  { group: "Frontend",    items: ["TypeScript", "React 19", "Next.js 15 App Router", "Redux.js", "Tailwind CSS 4", "Framer Motion"] },
  { group: "AI & Voice",  items: ["Groq · Gemini", "Deepgram STT", "Cartesia · ElevenLabs TTS", "Pinecone", "Twilio", "Redis"] },
  { group: "DevOps",      items: ["Google Cloud Run", "Docker", "Nginx · Gunicorn", "CI/CD pipelines", "DigitalOcean"] },
];

export const about = {
  paragraphs: [
    /* The hero already says "database schema to the screen"; this one
       carries the history instead — three roles, each in the experience
       list: Fenzacci (UAE), Sara (Abu Dhabi), VIN Wear (Shopify). */
    "Full-stack engineer based in Peshawar, <em>in production since 2017</em>. I led e-commerce development for a UAE trading company, built an AI voice agent that answers live sales calls in Abu Dhabi, and automate a US Shopify store from paid order to print-ready draft. Open to freelance projects and full-time roles.",
    "I started in 2017 through the CodeCamp bootcamp and academic work at Qurtuba University, where I took <em>first position</em> at the project exhibition. From 2019 to 2022 I freelanced remotely — <em>fifteen-plus Django and React builds</em>, Stripe and PayPal integrations, and automation that cut client operating costs by about a third.",
    "From 2022 to 2025 I led e-commerce development at <em>Fenzacci Trading L.L.C in the UAE</em> — a scalable backend with payment and inventory integrations, <em>90% faster page loads</em>, and deployments 80% quicker on CI/CD.",
    /* The story used to stop at 2025 and gesture vaguely at "more
       recently AI and voice systems" — while the Work section above it
       led with Sara and two named UK builds. A visitor reading both
       found three projects the biography never mentioned. */
    "Since 2025 the frontier is AI and voice. <em>Sara</em>, a bilingual English and Gulf Arabic phone agent, takes live inbound calls for a client in Abu Dhabi. In the UK, a skylight manufacturer sells through my <em>FastAPI and MySQL platform behind a Next.js 15 TypeScript storefront</em>, and a London façade engineering firm runs its site on Next.js and Tailwind.",
    "The core of my work: e-commerce, custom APIs, AI voice agents and design-to-code delivery — with a React Native (Expo) workshop-booking app in development. Remote clients in the UAE, the UK and beyond.",
  ],
  facts: [
    { label: "Name",        value: "Muhammad Sajjad" },
    { label: "Nationality", value: "Pakistani" },
    { label: "Phone",       value: "+92 313 932 2585" },
    { label: "WhatsApp",    value: "+92 322 9830466" },
    { label: "Email",       value: "sajjadk546@gmail.com" },
    { label: "Freelance",   value: "Open to freelance projects and full-time roles" },
    { label: "Languages",   value: "Fluent in English, Urdu and Pashto" },
  ],
};

/* ── Contact ──────────────────────────────────────────────────────── */
export const contact = {
  /* The form used to hardcode this address in Contact.tsx, so editing
     the details below changed what the page displayed but not where a
     submitted enquiry actually went. */
  inbox: "sajjadk546@gmail.com",
  /* WhatsApp: ONE number, used by the Contact page, the "Reach me
     directly" block and the floating chat button. `digits` is the number
     with country code and no "+" or spaces — what wa.me expects. */
  whatsapp: {
    display: "+92 322 9830466",
    digits: "923229830466",
    message:
      "Hi Sajjad, I found your portfolio and would like to talk about a project.",
  },
  body: "Send a short brief — you get back an approach, an honest estimate and a start date.",
  details: [
    { label: "WhatsApp", value: "+92 322 9830466", href: "https://wa.me/923229830466" },
    { label: "Email", value: "sajjadk546@gmail.com", href: "mailto:sajjadk546@gmail.com" },
    { label: "Based", value: "Peshawar, Pakistan", href: null },
    { label: "Works", value: "Remote-first · clients in the USA, UAE and UK", href: null },
  ],
};

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sajjad-khan-2a150b166/" },
  { label: "X", href: "https://x.com/sajjad_dxb" },
];
