// The questions on the Contact and Work pages. Kept outside the component
// so the same list also feeds the FAQ data search engines and AI
// assistants read (see contact/page.tsx) and /llms.txt.
//
// Every answer is assembled from data that already exists in
// site-content, so there is one source of truth.
import { about, contact, identity, services, skills } from "./site-content";

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Where are you based?",
    a: `${identity.location}. ${
      contact.details.find((d) => d.label === "Works")?.value ?? ""
    }.`,
  },
  {
    q: "Are you available for hire?",
    a: "Yes — I work freelance, remotely, with clients in the UAE, UK and USA. Every project is scoped and quoted in writing before it starts: send a short brief and you’ll get an approach, an honest estimate and a start date.",
  },
  {
    q: "How do we work together?",
    a: "Remote-first. You send a short brief, I reply with an approach, an honest estimate and a start date, and scope and timeline are agreed before any code is written. Progress is shown in builds you can open, not status reports.",
  },
  {
    q: "What do you build?",
    a: `${services.map((s) => s.title).join(", ")} — taken end to end, from schema and API design through to the interface a customer actually uses.`,
  },
  {
    q: "What do you work in?",
    a: skills.map((s) => `${s.group}: ${s.items.join(" · ")}`).join(". ") + ".",
  },
  {
    q: "What languages do you work in?",
    a:
      about.facts.find((f) => f.label === "Languages")?.value ??
      "English, Urdu and Pashto.",
  },
];
