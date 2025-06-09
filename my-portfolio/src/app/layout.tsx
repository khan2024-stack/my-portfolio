
// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Toaster } from 'react-hot-toast'; 

import Navbar from "@/components/nevbar/Navbar";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Muhammad Sajjad | Senior Full-Stack Engineer",
  description: "Building Scalable, High-Performance Web Applications 7+ years of expertise in end-to-end development, from backend architecture (Python, Django, FastAPI) to modern frontends (React.js, Next.js). Specialized in transforming Figma/PSD designs into responsive, SEO-optimized websites—delivering secure, fast, and user-centric solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Navbar />
      {children}
      <Toaster/>
    </body>
  </html>
);

}
