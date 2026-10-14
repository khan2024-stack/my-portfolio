import type { MetadataRoute } from "next";
import { SITE_URL } from "./portfolio-content/site-url";

/** Every public page. Lives at /sitemap.xml and is listed in robots.txt. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [
    ["", 1],
    ["/work", 0.9],
    ["/work/sara", 0.7],
    ["/services", 0.8],
    ["/about", 0.7],
    ["/resume", 0.7],
    ["/contact", 0.8],
  ];
  return pages.map(([path, priority]) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
