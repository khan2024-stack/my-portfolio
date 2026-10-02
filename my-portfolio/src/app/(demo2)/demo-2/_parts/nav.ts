/** Real routes, one per page — the whole demo lives under /demo-2 so it
 *  can run alongside the live portfolio at / without either shadowing
 *  the other's URLs. */
export const NAV = [
  { href: "/demo-2", label: "Home" },
  { href: "/demo-2/about", label: "About" },
  { href: "/demo-2/work", label: "Work" },
  { href: "/demo-2/services", label: "Services" },
  { href: "/demo-2/resume", label: "Resume" },
  { href: "/demo-2/contact", label: "Contact" },
] as const;
