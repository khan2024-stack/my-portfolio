// Resume.tsx
'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import BasicLayout from '@/components/BasicLayout';
import resumeContent from '@/app/portfolio-content/resume-content';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import ExperienceCard from '@/components/resume/ExperienceCard';
import EducationCard from '@/components/resume/EducationCard';
import SkillsCard from '@/components/resume/SkillsCard';
import AboutCard from '@/components/resume/AboutCard';

// Types
import type {
  Experience,
  Education,
  SkillGroup,
  AboutItem,
} from '@/types/resume.types';

// Styles
import { resumeStyle } from './resumeStyle';
import PageHeader from '../pagesHeader/PageHeader';

type SectionKey = keyof typeof resumeContent.sections;

const navItems: { key: SectionKey; label: string }[] = [
  { key: 'experience', label: 'Experience' },
  { key: 'education', label: 'Education' },
  { key: 'skills', label: 'Skills' },
  { key: 'about', label: 'About' },
];

export default function Resume() {
  const [activeSection, setActiveSection] = useState<SectionKey>('experience');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeSection]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -10 }
  };

  const renderContent = () => {
    const section = resumeContent.sections[activeSection];

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={sectionVariants}
          className="space-y-8"
        >
          {/* Section Header */}
          <div className={resumeStyle.sectionCard}>
            <h2 className="text-3xl font-bold text-gray-900 ">
              <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {section.title}
              </span>
            </h2>
            <p className="text-gray-600 mt-2 leading-relaxed">
              {section.summary}
            </p>
          </div>

          {/* Section Content */}
          <div className="space-y-6 w-full">
            {activeSection === 'experience' &&
              section.content.map((exp, i) => (
                <ExperienceCard key={i} exp={exp as Experience} />
              ))}

            {activeSection === 'education' &&
              section.content.map((edu, i) => (
                <EducationCard key={i} edu={edu as Education} />
              ))}

            {activeSection === 'skills' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {section.content.map((group, i) => (
                  <SkillsCard key={i} group={group as SkillGroup} />
                ))}
              </div>
            )}

            {activeSection === 'about' && (
              <AboutCard items={section.content as AboutItem[]} />
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <BasicLayout>
      <div className={resumeStyle.resumeMainWrapper}>
        {/* Page Header */}
        <PageHeader page="myResume" />

        {/* Horizontal Navbar */}
        <nav className={resumeStyle.horizentalNevbar}>
          {navItems.map(({ key, label }) => (
            <React.Fragment key={key}>
              <button
                onClick={() => setActiveSection(key)}
                className={resumeStyle.navButton(activeSection === key)}
              >
                {label}
              </button>
              {key !== navItems[navItems.length - 1].key && (
                <span className="text-gray-300">|</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Main Content */}
        <main className="mt-8 ">
          {renderContent()}
        </main>
      </div>
    </BasicLayout>
  );
}