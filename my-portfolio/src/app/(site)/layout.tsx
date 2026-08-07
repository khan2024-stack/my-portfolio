// app/(site)/layout.tsx — root layout.
import type { Metadata } from "next";
import { Barlow_Semi_Condensed, Public_Sans, JetBrains_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ScrollFx from "@/components/site/ScrollFx";
import "../globals.css";

/**
 * Fallback webfonts. On Windows the design renders in Bahnschrift,
 * Segoe UI Variable and Cascadia Code — these sit behind them in the
 * stack (see globals.css) so every other platform gets a close match
 * rather than Arial.
 */
/* Prefixed `--nf-*` deliberately: Tailwind v4 already defines --font-mono
   and --font-sans in its own theme at :root, and a next/font variable of
   the same name silently loses to it. */
const display = Barlow_Semi_Condensed({
  variable: "--nf-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const body = Public_Sans({
  variable: "--nf-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--nf-mono",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Sajjad | Full Stack Engineer",
  description:
    "Full stack engineer with 9+ years building scalable, high-performance web applications — backend architecture in Python, Django and FastAPI, modern frontends in React and Next.js, and Figma or PSD designs taken through to production.",
  openGraph: {
    title: "Muhammad Sajjad | Full Stack Engineer",
    description:
      "9+ years building scalable web applications. Django, FastAPI, React and Next.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        <ScrollFx />
        <Header />
        {children}
        <Footer />
        {/* The toast is the only dark surface left now the contact block
            is light, so it is what the --on-dark tokens exist for. These
            were four hard-coded hexes duplicating values already in
            :root — inline styles resolve var() fine. */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "var(--dark)",
              color: "var(--on-dark)",
              border: "1px solid var(--line-dark)",
              borderRadius: "var(--r-sm)",
              fontSize: ".875rem",
            },
          }}
        />
      </body>
    </html>
  );
}
