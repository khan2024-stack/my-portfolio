import React from 'react';
import Image from 'next/image';
import profileImg from '@/assets/profile.jpg';
import { AiOutlineDownload } from "react-icons/ai";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import BasicLayout from './BasicLayout';

function ActionBar() {

  const socialLinkStyles = {
    className: "p-2 rounded-full bg-white shadow hover:shadow-md text-gray-700 transition-all hover:-translate-y-1 text-lg sm:text-xl",
  };

  const socialLinks = [
    { href: "#", icon: <FiLinkedin />, hoverColor: "hover:text-blue-600" },
    { href: "#", icon: <FiTwitter />, hoverColor: "hover:text-blue-400" },
    { href: "#", icon: <FiInstagram />, hoverColor: "hover:text-pink-600" },
    { href: "#", icon: <FiGithub />, hoverColor: "hover:text-gray-900" },
  ];

  return (
    <div className="mt-4 sm:mt-10 flex  sm:flex-row justify-center sm:justify-between items-center w-full max-w-lg mx-auto gap-4 sm:gap-5 md:gap-0">
      <a
        href="/cv.pdf"
        download
        className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group text-sm"
        style={{
          color: '#ffffff',
          background: 'linear-gradient(to right, #10b981, #0d9488)',
        }}
      >
        <span className="font-medium text-white">Download CV</span>
        <AiOutlineDownload className="text-lg sm:text-xl group-hover:translate-y-0.5 transition-transform text-white" />
      </a>
      <div className="flex space-x-4 sm:space-x-5">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} className={`${socialLinkStyles.className} ${link.hoverColor}`}>
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
    <div className="flex-1 flex items-center justify-center p-4 ">
      <div className="flex flex-col items-center justify-center pt-4  w-full h-full text-center ">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide md:mb-4 sm:mb-2 font-bold text-gray-700">
          Full Stack Engineer
        </h2>

        <h1 className="sm:text-4xl md:text-4.5xl lg:text-5xl xl:text-5xl  font-bold tracking-wide md:mb-2 text-gray-800">
          Hello I'm
        </h1>

        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3.5xl xl:text-4xl 2xl:text-5xl font-extrabold text-emerald-600 mb-4 2 tracking-wide drop-shadow">
          Muhammad Sajjad
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed text-justify  px-3 ">
          Senior Full-Stack Developer with 7+ years of experience building scalable, high-performance web apps. Backend: Python (Django, FastAPI).
          Frontend: React.js, Next.js. Also skilled in converting Figma/PSD designs into responsive, SEO-friendly websites—from concept to deployment.
        </p>
        <ActionBar />
      </div>
    </div>
  );
}

// Image Section Component
function ImageSection() {
  return (
    <div className="flex-1 flex items-center justify-center pt-12">
      <div className="relative p-10 w-full h-full text-center flex items-center justify-center">

        {/* Glowing blurred background circle */}
        <div className="absolute rounded-full blur-3xl opacity-30 z-0 animate-pulse
                        w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] xl:w-[32rem] xl:h-[32rem] 2xl:w-[36rem] 2xl:h-[36rem]
                        bg-emerald-300">
        </div>

        {/* Profile image container with animated border */}
        <div className="relative rounded-full overflow-hidden shadow-2xl border-4 border-emerald-500 z-10 animate-border-glow
                        w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] xl:w-[28rem] xl:h-[28rem] 2xl:w-[30rem] 2xl:h-[30rem]">
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
   <div className="flex flex-col-reverse lg:flex-row pt-4 mb-4">
        <IntroSection />
        <ImageSection />
      </div>
    </BasicLayout>
  );
}


