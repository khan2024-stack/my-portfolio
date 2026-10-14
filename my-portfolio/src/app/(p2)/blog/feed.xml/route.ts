import { sortedPosts } from "@/app/portfolio-content/posts";
import { SITE_URL } from "@/app/portfolio-content/site-url";

export const dynamic = "force-static";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET() {
  const items = sortedPosts()
    .map(
      (p) => `<item><title>${esc(p.title)}</title><link>${SITE_URL}/blog/${p.slug}</link><guid>${SITE_URL}/blog/${p.slug}</guid><pubDate>${new Date(p.date).toUTCString()}</pubDate><description>${esc(p.description)}</description></item>`,
    )
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Muhammad Sajjad — Notes from production</title><link>${SITE_URL}/blog</link><description>AI voice agents, automation and commerce platforms.</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
