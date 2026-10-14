/**
 * The canonical address of the site (the apex redirects to www, so www is
 * the one search engines should index). Override with NEXT_PUBLIC_SITE_URL
 * in Vercel if the domain ever changes.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sajjad-ai-eng.site"
).replace(/\/$/, "");
