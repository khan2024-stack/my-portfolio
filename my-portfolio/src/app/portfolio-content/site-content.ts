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
import profile from "@/assets/profile.jpg";
import type { StaticImageData } from "next/image";

/* ── Identity ─────────────────────────────────────────────────────── */
export const identity = {
  shortName: "Sajjad",
  fullName: "Muhammad Sajjad",
  role: "Full Stack Engineer",
  location: "Peshawar, Pakistan",
  /* Concrete beats adjectives. "Scalable and high-performance" is what
     every developer writes; shipping on time is what clients actually
     worry about, and the record backs it up. */
  tagline: "Web applications that ship on time and hold up in production.",
  /* Anchored to the year, not a count. "Nine years" was accurate when it
     was written and quietly becomes false every January; "since 2017"
     never does — and a date a reader can check beats a round number. */
  intro:
    "Building end to end since 2017 — backend architecture in Python, Django and FastAPI, frontends in React and Next.js, and Figma or PSD designs taken all the way through to a live site.",
  portrait: profile as StaticImageData,
  cvUrl: "/cv.pdf",
};

/* ── Section headings ─────────────────────────────────────────────
   Kept here so the page's voice can be edited in one place.       */
export const sections = {
  services: {
    eyebrow: "Services",
    title: "What I build",
    lede: null,
  },
  work: {
    eyebrow: "Work",
    title: "Shipped and running",
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
export const clients = [
  { name: "Fenzacci Trading L.L.C", place: "United Arab Emirates" },
  { name: "Capital X Car Care", place: "Abu Dhabi" },
  { name: "Duomada", place: "United Kingdom" },
  { name: "UKTOP Ltd", place: "London" },
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
};

/* ⚠  THE QUOTES AND THE GOOGLE SCORE BELOW ARE INVENTED.
   Ovett & Lane, Studio Marrow, Meridian Auto Care and Bramley Digital
   do not exist. Daniel Reeve, Priya Raman, Khalid Nassar and Helen
   Marsh never said anything. The 4.9 is not from a Google profile.

   They are placeholders so the section can be seen while it waits for
   real quotes — which is why this is tied to the build mode rather than
   a boolean somebody has to remember. `npm run dev` shows them;
   `npm run build` strips them, so they cannot reach the live site by
   accident. Do not change this line to a plain `true`. */
export const SHOW_SAMPLE_TESTIMONIALS = process.env.NODE_ENV !== "production";

/* Four, because the row is four wide. Quotes are kept to about 20 words
   — the column is roughly 200px, so anything longer turns the card into
   a wall and buries the name it belongs to. */
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
  { value: 65,  unit: "%", label: "Faster page loads",  source: "On the <b>Fenzacci</b> platform, UAE" },
  { value: 40,  unit: "%", label: "Faster deployments", source: "After the <b>CI/CD</b> rollout" },
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
    body: "Commerce sites, dashboards and custom platforms — Django or FastAPI behind React and Next.js, taken from a Figma or PSD file all the way to a live, indexed, paid-for site.",
    capabilities: [
      "Django / FastAPI with React / Next.js",
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

/* Sara leads the grid — newest work, and the only one with a case study
   to open — but as an equal card. The double-width featured cell was
   tried and reverted. */
export const projects: Project[] = [
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
    body: "We talk through what you need, the constraints, and anything already built. You get a clear scope and a fixed timeline before any code.",
  },
  {
    n: 2,
    title: "Design",
    body: "Database schema, API structure and interface decisions agreed up front — so the build does not stall halfway through on a question we should have settled.",
  },
  {
    n: 3,
    title: "Build",
    body: "Weekly updates with something working you can open and click. No long silences, and no surprises at the end.",
  },
  {
    n: 4,
    title: "Launch",
    body: "Deployment, monitoring and a walkthrough with your team, followed by a support window while everything settles.",
  },
];

/* ── Resume ───────────────────────────────────────────────────────── */
export const experience = [
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
      "Optimised performance — <em>65% faster load times</em>",
      "Implemented CI/CD pipelines, <em>reducing deployment time by 40%</em>",
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
      "Award-winning academic projects",
      "Open-source contributions",
      "Full-stack bootcamp graduate",
      "<em>University of Qurtuba winner</em>",
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

export const skills = [
  { group: "Backend",     items: ["Python", "Django", "FastAPI", "REST APIs", "MySQL", "GitHub"] },
  { group: "Frontend",    items: ["JavaScript", "React.js", "Redux.js", "Next.js", "HTML5", "CSS3"] },
  { group: "AI & Voice",  items: ["Groq · Gemini", "Deepgram STT", "Cartesia · ElevenLabs TTS", "Pinecone", "Twilio", "Redis"] },
  { group: "DevOps",      items: ["Google Cloud Run", "Docker", "Nginx · Gunicorn", "Deployment automation"] },
];

export const about = {
  paragraphs: [
    "I am a full-stack engineer based in Peshawar, Pakistan, <em>building in production since 2017</em> across Python and JavaScript. I work end to end — database schema through API design to the interface a customer actually uses.",
    "I started in 2017 through a full-stack bootcamp at CodeCamp and academic project work at the University of Qurtuba. From 2019 to 2022 I worked remotely and freelance, building <em>more than fifteen web applications</em> on the Django and React stack, integrating Stripe and PayPal, and cutting client operating costs by roughly a third through automation.",
    "From 2022 to 2025 I led e-commerce development at <em>Fenzacci Trading L.L.C in the UAE</em>, where I architected a scalable backend with payment and inventory integrations, cut page load times by 65%, and reduced deployment time by 40% with CI/CD pipelines.",
    /* The story used to stop at 2025 and gesture vaguely at "more
       recently AI and voice systems" — while the Work section above it
       led with Sara and two named UK builds. A visitor reading both
       found three projects the biography never mentioned. */
    "Since 2025 I have been building AI and voice systems, most recently <em>Sara</em> — a bilingual English and Gulf Arabic phone agent taking live inbound calls for a client in Abu Dhabi. Recent UK work includes a custom commerce platform for a skylight manufacturer and a portfolio site for a London façade engineering firm.",
    "Most of my work is in e-commerce, custom APIs and design-to-code delivery. I take on remote work for clients in the UAE, the UK and beyond.",
  ],
  facts: [
    { label: "Name",        value: "Muhammad Sajjad" },
    { label: "Nationality", value: "Pakistani" },
    { label: "Phone",       value: "+92 313 932 2585" },
    { label: "WhatsApp",    value: "+971 54 761 0315" },
    { label: "Email",       value: "sajjadk546@gmail.com" },
    { label: "Freelance",   value: "Taking on select projects" },
    { label: "Languages",   value: "Fluent in English, Urdu and Pashto" },
  ],
};

/* ── Contact ──────────────────────────────────────────────────────── */
export const contact = {
  /* The form used to hardcode this address in Contact.tsx, so editing
     the details below changed what the page displayed but not where a
     submitted enquiry actually went. */
  inbox: "sajjadk546@gmail.com",
  body: "Send a short description and I will come back with how I would approach it, roughly what it takes, and when I could start.",
  details: [
    { label: "Phone", value: "+971 54 761 0315", href: "tel:+971547610315" },
    { label: "Email", value: "sajjadk546@gmail.com", href: "mailto:sajjadk546@gmail.com" },
    { label: "Based", value: "Peshawar, Pakistan", href: null },
    { label: "Works", value: "Remote · UAE · UK", href: null },
  ],
};

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sajjad-khan-2a150b166/" },
  { label: "X", href: "https://x.com/sajjad_dxb" },
];
