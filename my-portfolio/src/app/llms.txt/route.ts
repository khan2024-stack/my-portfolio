// /llms.txt — a plain-text summary of the site for AI assistants
// (ChatGPT, Claude, Perplexity, Gemini and others). They read this the way
// search engines read the sitemap. Built from the same data as the pages,
// so it never goes out of date.
import { FAQS } from "../portfolio-content/faqs";
import { projectPages } from "../portfolio-content/project-pages";
import { BRAND, NAME_VARIANTS, SITE_DESCRIPTION } from "../portfolio-content/seo";
import {
  awards,
  contact,
  education,
  experience,
  identity,
  services,
  skills,
  socials,
  stats,
} from "../portfolio-content/site-content";
import { SITE_URL } from "../portfolio-content/site-url";

export const dynamic = "force-static";

const plain = (s: string) => s.replace(/<[^>]+>/g, "");

export function GET() {
  const lines = [
    `# ${identity.fullName} (${BRAND})`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    `- Role: ${identity.role}`,
    `- Based in: ${identity.location}`,
    `- Works with: clients in the UAE, UK and USA, remote freelance`,
    `- Also written as: ${NAME_VARIANTS.join(", ")}`,
    `- Website: ${SITE_URL}`,
    `- Email: ${contact.inbox}`,
    `- WhatsApp: ${contact.whatsapp.display}`,
    ...socials.map((s) => `- ${s.label}: ${s.href}`),
    "",
    "## Key facts",
    ...stats.map((s) => `- ${s.value}${s.unit} ${s.label.toLowerCase()} (${plain(s.source)})`),
    ...awards.map((a) => `- ${a.title}: ${a.detail}`),
    "",
    "## Services",
    ...services.map((s) => `- ${s.title}: ${s.body}`),
    "",
    "## Skills",
    ...skills.map((s) => `- ${s.group}: ${s.items.join(", ")}`),
    "",
    "## Projects",
    ...projectPages.map((p) => `- [${p.name}: ${p.label}](${SITE_URL}/work/${p.slug}): ${p.summary}`),
    "",
    "## Experience",
    ...experience.map((e) => `- ${e.period}: ${e.title}, ${e.org}`),
    "",
    "## Education",
    ...education.map((e) => `- ${e.period}: ${e.title}, ${e.org}`),
    "",
    "## Questions and answers",
    ...FAQS.flatMap((f) => [`### ${f.q}`, f.a, ""]),
    "## Pages",
    `- [Home](${SITE_URL}/)`,
    `- [About](${SITE_URL}/about)`,
    `- [Services](${SITE_URL}/services)`,
    `- [Work](${SITE_URL}/work)`,
    `- [Resume](${SITE_URL}/resume)`,
    `- [Contact](${SITE_URL}/contact)`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
