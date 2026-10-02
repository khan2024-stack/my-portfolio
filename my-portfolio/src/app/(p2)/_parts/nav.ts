/** Real routes, matching the reference's own multi-page nav (Home /
 *  About / Works / Services / Contact each their own URL) rather than
 *  anchors on one scrolling page. */
export const P2_NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;
