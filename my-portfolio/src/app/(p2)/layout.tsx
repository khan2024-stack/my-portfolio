// app/(p2)/layout.tsx — root layout for the North-template design.
//
// Its own root layout, not nested: this design has its own header,
// footer and card language (hairline black borders, lime accent,
// Space Grotesk display face) and would inherit the wrong ground if it
// sat inside another route group's <body>.
//
// Reference: templatekit.kitprostudio.com/north — read from computed
// styles on the live page, not the screenshot. Every number in p2.css
// says where it came from.
import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";

import P2Header from "./_parts/Header";
import P2Footer from "./_parts/Footer";
import WhatsAppFab from "./_parts/WhatsAppFab";
import "../globals.css";
import "./p2.css";

/* Their pair, confirmed on the rendered page: Space Grotesk carries
   every heading at weight 500 (medium, not bold — the H1 computed
   font-weight: 500 at 64px), Inter carries body copy and the nav at
   16px weight 600. */
const p2Display = Space_Grotesk({
  variable: "--p2-display",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});
const p2Body = Inter({
  variable: "--p2-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/* Tints the phone browser's address bar to match the header. */
export const viewport: Viewport = {
  themeColor: "#f5f3ec",
  width: "device-width",
  initialScale: 1,
};

/* This is the site now — the old layout at (site)/ is gone, so the
   noindex guard that kept the draft design out of search is gone too. */
export const metadata: Metadata = {
  title: {
    default: "Muhammad Sajjad | Full Stack & AI Engineer",
    template: "%s | Muhammad Sajjad",
  },
  description:
    "Full stack and AI engineer building in production since 2017 — Python backends in Django and FastAPI, typed React and Next.js frontends in TypeScript, and AI voice agents on live phone lines.",
  openGraph: {
    title: "Muhammad Sajjad | Full Stack & AI Engineer",
    description:
      "Web platforms and AI voice agents in production. Django, FastAPI, TypeScript, React and Next.js.",
    type: "website",
  },
};

export default function P2RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`p2-root ${p2Display.variable} ${p2Body.variable}`}>
        <div className="p2">
          <P2Header />
          <main>{children}</main>
          <P2Footer />
          <WhatsAppFab />
        </div>
      </body>
    </html>
  );
}
