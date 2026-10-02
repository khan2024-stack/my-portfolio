import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * The site used to be four separate pages under /page/*. They are now
   * five sections on one page, so those URLs redirect to the matching
   * anchor rather than 404 — anything already linking or ranking for
   * them keeps working, and 308 tells search engines the move is
   * permanent so the ranking transfers instead of being dropped.
   *
   * Order matters: Next matches these top down, so the catch-all has
   * to come last or it would swallow the four specific routes.
   */
  async redirects() {
    return [
      { source: "/page/services", destination: "/#services", permanent: true },
      { source: "/page/work", destination: "/#work", permanent: true },
      { source: "/page/resume", destination: "/#resume", permanent: true },
      { source: "/page/contact", destination: "/#contact", permanent: true },
      { source: "/page", destination: "/", permanent: true },
      { source: "/page/:path*", destination: "/", permanent: true },
      /* The North design lived at /portfolio-2 while the old layout held
         the root. It IS the root now, so the old paths follow it — the
         sub-pages map one-to-one (/portfolio-2/about → /about). */
      { source: "/portfolio-2", destination: "/", permanent: true },
      { source: "/portfolio-2/:path*", destination: "/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
