// Resume.tsx
"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BasicLayout from "@/components/BasicLayout";
import resumeContent from "@/app/portfolio-content/resume-content";

// Components
import ExperienceCard from "@/components/resume/ExperienceCard";
import EducationCard from "@/components/resume/EducationCard";
import SkillsCard from "@/components/resume/SkillsCard";
import AboutCard from "@/components/resume/AboutCard";
import PageHeader from "@/components/pagesHeader/PageHeader";

// Types
import type {
  Experience,
  Education,
  SkillGroup,
  AboutItem,
} from "@/types/resume.types";
import { resumeStyle } from "@/components/resume/resumeStyle";

type SectionKey = keyof typeof resumeContent.sections;

const navItems: { key: SectionKey; label: string }[] = [
  { key: "experience", label: "Experience" },
  { key: "education", label: "Education" },
  { key: "skills", label: "Technical Skills" },
  { key: "about", label: "About Me" },
];

export default function Resume() {
  const [activeSection, setActiveSection] = useState<SectionKey>("experience");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [activeSection]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: { opacity: 0, y: -10 },
  };

  const renderSectionContent = () => {
    const section = resumeContent.sections[activeSection];

    switch (activeSection) {
      case "experience":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(section.content as Experience[]).map((exp, i) => (
              <ExperienceCard key={i} exp={exp} />
            ))}
          </div>
        );
      case "education":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(section.content as Education[]).map((edu, i) => (
              <EducationCard key={i} edu={edu} />
            ))}
          </div>
        );
      case "skills":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(section.content as SkillGroup[]).map((group, i) => (
              <SkillsCard key={i} group={group} />
            ))}
          </div>
        );
      case "about":
        return <AboutCard items={section.content as AboutItem[]} />;
      default:
        return null;
    }
  };

  return (
    <BasicLayout>
      <div className="flex flex-col items-center min-h-screen">
        {/* Page Header */}
        <PageHeader page="myResume" />

        {/* Horizontal Navigation */}
        <nav className={resumeStyle.horizentalNevbar}>
          <div className="flex items-center justify-center w-full ml-8 md:ml-0 md:max-w-4xl ">
            {navItems.map(({ key, label }) => (
              <React.Fragment key={key}>
                <button
                  onClick={() => setActiveSection(key)}
                  className={resumeStyle.navButton(activeSection === key)}
                >
                  {label}
                </button>
                {key !== navItems[navItems.length - 1].key && (
                  <span className="text-gray-300 mx-1">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </nav>

        {/* Main Content Area */}
        <div
          className={`${resumeStyle.resumeMainWrapper} w-full max-w-6xl px-2`}
        >
          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={sectionVariants}
                className="space-y-4"
              >
                {/* Section Header */}
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900">
                    <span>
                      {resumeContent.sections[activeSection].title}
                    </span>
                  </h2>
                  <p className="text-gray-600 mt-2 leading-relaxed max-w-3xl mx-auto">
                    {resumeContent.sections[activeSection].summary}
                  </p>
                </div>

                {/* Section Content */}
                <div className={resumeStyle.sectionCard}>
                  {renderSectionContent()}
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </BasicLayout>
  );
}
