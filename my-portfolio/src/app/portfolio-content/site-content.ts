// ══════════════════════════════════════════════════════════════════════
// SITE CONTENT
// Every piece of copy on the page lives here. Components read from it,
// so text changes never require touching a component.
// ══════════════════════════════════════════════════════════════════════

import profile from "@/assets/portrait-studio.jpg";
import type { StaticImageData } from "next/image";
import { projectPages } from "./project-pages";

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
    "Full-stack engineer building e-commerce platforms, AI voice agents and automation for clients in the UAE, UK and USA. Python and TypeScript, from database schema to the screen your customer uses — in production since 2017.",
  portrait: profile as StaticImageData,
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
    title: "Real builds, ready to look through",
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
  /* Role and company are shown under the name when both are given;
     otherwise the card shows "project · country". */
  role?: string;
  company?: string;
  country?: string;
  project?: string;
  /* Optional. Month and year is enough — a full date on a two-year-old
     quote just draws attention to its age. */
  date?: string;
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
const realTestimonials: Testimonial[] = [
  {
    quote:
      "Exceptional work on our AI voice agent! The conversational logic is incredibly natural, and the seamless integration into our existing business workflows has saved us countless hours. Highly professional, communicative, and deeply understands complex AI implementation.",
    name: "Khalid",
    country: "UAE",
    project: "AI Voice Agent",
    stars: 5,
  },
  {
    quote:
      "A fantastic experience from start to finish. The e-commerce platform was built with excellent attention to detail, ensuring a smooth user experience and robust technical performance. Delivered on time, handled all technical complexities beautifully, and exceeded our expectations.",
    name: "Majed",
    country: "UAE",
    project: "E-commerce Development",
    stars: 5,
  },
  {
    quote:
      "Outstanding web development skills. The transition from initial development to final production deployment was completely flawless. The website is fast, fully responsive, and built with clean, maintainable code. Great communication and problem-solving throughout the entire project.",
    name: "Petar Zlatarev",
    country: "UK",
    project: "Web Development",
    stars: 5,
  },
  {
    quote:
      "Absolutely transformed our Shopify store. The automation workflows they set up have streamlined our daily operations significantly, and the third-party technical integrations work flawlessly. A true expert in e-commerce automation. I highly recommend their services!",
    name: "Ted Alvendia",
    country: "USA",
    project: "E-commerce & Shopify Automation",
    stars: 5,
  },
];

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
  (SHOW_SAMPLE_TESTIMONIALS && realTestimonials.length === 0
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
    title: "Web Platforms",
    sub: "Design through to deployment",
    body: "Commerce sites, dashboards and custom platforms — Django, FastAPI or Node.js behind React, Next.js and TypeScript, on PostgreSQL or MySQL — taken from a design file to a live, indexed site that takes payments.",
    capabilities: [
      "Django, FastAPI or Node.js with React, Next.js and TypeScript",
      "Figma, XD and PSD to production",
      "Payment, shipping and third-party APIs",
      "Admin dashboards and role permissions",
      "SEO-optimised performance",
      "Cloud deployment and tuning",
    ],
  },
  {
    title: "AI & Voice Systems",
    sub: "Built for live conversation",
    body: "Phone and chat agents with streaming speech, answers grounded in your own data, and memory across the whole call.",
    capabilities: [
      "Real-time voice over Twilio",
      "Streaming STT and TTS",
      "LLM routing with fallback",
      "Answers grounded in your own data",
      "In-call memory and persona control",
      "Automated quality assertions",
    ],
  },
  {
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
  {
    title: "Management & Support",
    sub: "Looked after once it is live",
    body: "Ongoing care for what is already running — monitoring, updates, fixes and one accountable person to call. Releases, backups and incidents are handled for you, and a project can be staffed with a small team when it needs more hands.",
    capabilities: [
      "Uptime monitoring and incident response",
      "Security, dependency and framework updates",
      "Bug fixes and small feature requests",
      "Release management with safe rollbacks",
      "Managed hosting, deployments and backups",
      "Project management with written status updates",
      "A small team brought in when a project needs it",
    ],
  },
];

/* ── Pricing ──────────────────────────────────────────────────────
   Starting prices, so a visitor can tell if the budget fits, then a
   conversation. `price: null` means no figure is published. */
export type PriceTier = {
  title: string;
  sub: string;
  price: string | null;
  note: string;
  includes: string[];
  featured?: boolean;
};

export const pricing: PriceTier[] = [
  {
    title: "E-commerce Store",
    sub: "Ready-built, launched with your brand",
    price: "$12,000",
    note: "One-time payment",
    includes: [
      "Live search and filters",
      "Cart and checkout",
      "Full admin panel",
      "Your branding and products added",
      "3 months of free support",
    ],
  },
  {
    title: "AI Voice Agent",
    sub: "Answers your phone calls",
    price: "$20,000",
    note: "One-time payment",
    includes: [
      "English and Gulf Arabic",
      "Quotes prices from your own list",
      "Remembers the call",
      "Takes bookings",
      "3 months of free support",
    ],
    featured: true,
  },
  {
    title: "Custom Work",
    sub: "When ready-built is not the right fit",
    price: null,
    note: "Quoted per written scope",
    includes: [
      "Web platforms and business websites",
      "AI and automation projects",
      "Remote work with your team",
      "Ongoing management and support",
    ],
  },
];

export const pricingSmallPrint =
  "Hosting, gateway and usage fees go to those providers. With the voice agent, you pay your own running costs directly: phone line and minutes, speech, AI model and hosting.";

/* ── Projects ─────────────────────────────────────────────────────
   `status: "pending"` renders the card dimmed with a hatched image
   bed — used for work that has no detail or screenshot yet.        */
type Project = {
  title: string;
  category: string;
  body: string;
  tech: string;
  image: StaticImageData | null;
  /* Alt text when the image is not a screenshot of a site (Sara's is
     an illustration). Defaults to describing the live site. */
  imageAlt?: string;
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

/* One card per project page. Card text and image come from the page data,
   so a card and its page cannot disagree. */
const cardMeta: Record<string, { category: string; tech: string }> = {
  zushap: { category: "Online store · Our own build", tech: "Medusa · Next.js" },
  vinwear: { category: "Site in progress · US client", tech: "Medusa · Next.js" },
  sara: { category: "AI voice agent · English and Gulf Arabic", tech: "FastAPI · Gemini · Deepgram" },
  madleen: { category: "Online fashion store", tech: "Medusa · Next.js" },
  uktop: { category: "Business website · UK", tech: "Next.js 16" },
};

export const projects: Project[] = projectPages.map((p) => ({
  title: p.name,
  category: cardMeta[p.slug].category,
  body: p.summary,
  tech: cardMeta[p.slug].tech,
  image: p.images.hero,
  imageAlt: `${p.name} shown on a laptop, tablet and phone`,
  href: `/work/${p.slug}`,
  linkLabel: "View project",
  status: "shipped",
}));

/* Earlier work: text only. */
export const earlierWork: { title: string; category: string; body: string; href?: string }[] = [
  {
    title: "VIN Wear Automations",
    category: "Shopify automation · USA",
    body: "A Python service that turns each paid Shopify order into a Printful draft with the numbered tag on the sleeve, in about 15 seconds.",
  },
  {
    title: "Duomada Skylights",
    category: "E-commerce platform · UK",
    body: "A full custom build for a UK skylight and roof lantern company, with a size and colour variant matrix and its own admin dashboard.",
    href: "https://duomada.co.uk",
  },
  {
    title: "Headless Commerce Platform",
    category: "E-commerce platform · Django and React",
    body: "A Django REST API behind a React and Redux storefront, with product management, an admin dashboard, transactional email and a payment gateway.",
  },
  {
    title: "Multi-Filter Retail Store",
    category: "E-commerce store · Django",
    body: "Built around filtering by colour and size, with cart, wishlist, order management, payments and email notifications behind a full admin panel.",
  },
  {
    title: "PSD-to-Production Storefront",
    category: "E-commerce storefront · Design to code",
    body: "A custom PSD taken to a responsive frontend in hand-written HTML and CSS, then wired to a Django backend for products, cart and authentication.",
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
    org: "VIN Wear · United States · Remote freelance",
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
      "Built <em>Sara</em>, a bilingual English and Gulf Arabic phone agent for inbound sales calls on FastAPI",
      "Designed the conversation pipeline end to end — intent, routing, price lookup, generation and persona control",
      "Backed by <em>2,428 automated engine tests</em> passing as of August 2026",
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
    points: ["<em>Gold medalist</em> — first position in class", "Graded <em>A1 — 84%</em>", "Award-winning academic project work"],
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
   machine — Duomada alone covers Pydantic, JWT and
   OAuth on the API side and TypeScript, React 19, Tailwind 4 and Framer
   Motion on the storefront. Dropped: "GitHub", "HTML5", "CSS3" — table
   stakes that read junior next to the rest — and "JavaScript", which
   "TypeScript" supersedes. */
export const skills = [
  { group: "Backend",     items: ["Python", "Django", "FastAPI", "Node.js", "PostgreSQL", "MySQL", "Pydantic", "JWT · OAuth"] },
  { group: "Frontend",    items: ["TypeScript", "React 19", "Next.js 15 App Router", "Redux.js", "Tailwind CSS 4", "Framer Motion"] },
  { group: "AI & Voice",  items: ["Groq · Gemini", "Deepgram STT", "Cartesia · ElevenLabs TTS", "Pinecone", "Twilio", "Redis"] },
  { group: "DevOps",      items: ["Google Cloud Run", "Docker", "Nginx · Gunicorn", "CI/CD pipelines", "DigitalOcean"] },
];

export const about = {
  paragraphs: [
    /* The hero already says "database schema to the screen"; this one
       carries the history instead — three roles, each in the experience
       list: Fenzacci (UAE), Sara (Abu Dhabi), VIN Wear (Shopify). */
    "Full-stack engineer based in Peshawar, <em>in production since 2017</em>. I led e-commerce development for a UAE trading company, built an AI voice agent for inbound sales calls, and automate a US Shopify store from paid order to print-ready draft. Available for freelance projects.",
    "I started in 2017 through the CodeCamp bootcamp and academic work at Qurtuba University, where I took <em>first position</em> at the project exhibition. From 2019 to 2022 I freelanced remotely — <em>fifteen-plus Django and React builds</em>, Stripe and PayPal integrations, and automation that cut client operating costs by about a third.",
    "From 2022 to 2025 I led e-commerce development at <em>Fenzacci Trading L.L.C in the UAE</em> — a scalable backend with payment and inventory integrations, <em>90% faster page loads</em>, and deployments 80% quicker on CI/CD.",
    /* The story used to stop at 2025 and gesture vaguely at "more
       recently AI and voice systems" — while the Work section above it
       led with Sara and two named UK builds. A visitor reading both
       found three projects the biography never mentioned. */
    "Since 2025 the frontier is AI and voice. <em>Sara</em>, a bilingual English and Gulf Arabic phone agent, quotes from a price list, remembers the call and takes bookings. In the UK, a skylight manufacturer sells through my <em>FastAPI and MySQL platform behind a Next.js 15 TypeScript storefront</em>, and a London façade engineering firm runs its site on Next.js and Tailwind.",
    "The core of my work: e-commerce, custom APIs, AI voice agents and design-to-code delivery — with a React Native (Expo) workshop-booking app in development. Remote clients in the UAE, the UK and beyond.",
  ],
  facts: [
    { label: "Name",        value: "Muhammad Sajjad" },
    { label: "Nationality", value: "Pakistani" },
    { label: "Phone",       value: "+92 313 932 2585" },
    { label: "WhatsApp",    value: "+92 322 9830466" },
    { label: "Email",       value: "connect.sajjadaie@gmail.com" },
    { label: "Freelance",   value: "Available for freelance projects" },
    { label: "Languages",   value: "Fluent in English, Urdu and Pashto" },
  ],
};

/* ── Contact ──────────────────────────────────────────────────────── */
export const contact = {
  /* The form used to hardcode this address in Contact.tsx, so editing
     the details below changed what the page displayed but not where a
     submitted enquiry actually went. */
  inbox: "connect.sajjadaie@gmail.com",
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
    { label: "Email", value: "connect.sajjadaie@gmail.com", href: "mailto:connect.sajjadaie@gmail.com" },
    { label: "Based", value: "Peshawar, Pakistan", href: null },
    { label: "Works", value: "Remote freelance for clients based in the UAE, UK and USA", href: null },
  ],
};

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sajjad-ai-eng/" },
  { label: "X", href: "https://x.com/sajjad_dxb" },
];
