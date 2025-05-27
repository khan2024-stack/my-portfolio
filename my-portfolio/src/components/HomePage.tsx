// HomePage.tsx
import React from "react";
import Image from "next/image";
import profileImg from "@/assets/profile.jpg";
import { AiOutlineDownload } from "react-icons/ai";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";

import BasicLayout from "./BasicLayout";

// Import style constants
import {
  heading,
  paragraph,
  actionBar,
  profileImage,
  imageSection,
  layout,
  button,
} from "@/lib/styles";

// ActionBar Component

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/sajjad-khan-2a150b166/",
    icon: <FiLinkedin />,
  },
  {
    href: "https://x.com/sajjad_dxb",
    icon: <FiTwitter />,
  },
  {
    href: "https://web.facebook.com/profile.php?id=100004752704097",
    icon: <FaFacebook />,
  },
];
function ActionBar() {
  return (
    <div className={actionBar.container}>
      {/* Download CV Button */}
      <a href="/cv.pdf" download className={button.downloadCV}>
        <div className="flex items-center justify-between w-full">
          <span className="flex-1 text-center">Download CV</span>
          <div className="ml-4">
            <AiOutlineDownload className="group-hover:translate-y-0.5 transition-transform duration-300" />
          </div>
        </div>
      </a>

      {/* Social Links */}
      <div className={`${layout.flex.row} ${layout.flex.gap.md}`}>
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} className={actionBar.socialLink}>
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

// Intro Section Component
function IntroSection() {
  return (
    <div
      className={`${layout.flex.col} ${layout.flex.center} ${layout.spacing.px.sm}`}
    >
      <div
        className={`${layout.flex.col} ${layout.flex.center} ${layout.flex.gap.sm} w-full max-w-2xl text-center`}
      >
        {/* Section Subtitle */}
        <h2 className={heading.section}>Full Stack Engineer</h2>

        {/* Primary Heading */}
        <h1 className={heading.primary}>{`Hello I'm`}</h1>

        {/* Name Highlight */}
        <h1 className={heading.name}>Muhammad Sajjad</h1>

        {/* Bio Paragraph */}
        <p className={`${paragraph.base} text-justify`}>
          Building Scalable, High-Performance Web Applications 7+ years of
          expertise in end-to-end development, from backend architecture
          (Python, Django, FastAPI) to modern frontends (React.js, Next.js).
          Specialized in transforming Figma/PSD designs into responsive,
          SEO-optimized websites—delivering secure, fast, and user-centric
          solutions.
        </p>
        {/* Action Bar */}
        <ActionBar />
      </div>
    </div>
  );
}

// Image Section Component
function ImageSection() {
  return (
    <div
      className={`${imageSection.wrapper} ${layout.spacing.px.sm} pt-12 pb-6 lg:py-12`}
    >
      <div className={imageSection.container}>
        {/* Glowing blurred background circle */}
        <div className={profileImage.glow}></div>

        {/* Profile image container */}
        <div className={profileImage.container}>
          <Image
            src={profileImg}
            alt="Muhammad Sajjad"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}

// Main Home Page Component
export default function HomePage() {
  return (
    <BasicLayout>
      <div className="flex flex-col-reverse lg:flex-row pt-4 mb-4 px-16">
        <IntroSection />
        <ImageSection />
      </div>
    </BasicLayout>
  );
}
