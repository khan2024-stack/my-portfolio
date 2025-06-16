// Resume.tsx
'use client';
import { useState, useEffect } from 'react';
import BasicLayout from '@/components/BasicLayout';
import resumeContent from '@/app/portfolio-content/resume-content';
import { AnimatePresence, motion } from 'framer-motion';
import ExperienceCard from '@/components/resume/ExperienceCard';
import EducationCard from '@/components/resume/EducationCard';
import SkillsCard from '@/components/resume/SkillsCard';
import AboutCard from '@/components/resume/AboutCard';
import Sidebar from '@/components/resume/Sidebar';
import PageHeader from '@/components/pagesHeader/PageHeader';

import type {
  Experience,
  Education,
  SkillGroup,
  AboutItem,
} from '@/types/resume.types';

type SectionKey = keyof typeof resumeContent.sections;

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
          <div className="backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm">
            <PageHeader page="myResume"/>
            <h2 className="text-3xl font-bold text-gray-900">
              <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {section.title}
              </span>
            </h2>
            <p className="text-gray-600 mt-2 max-w-3xl leading-relaxed">
              {section.summary}
            </p>
          </div>

          <div className="space-y-6">
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
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8  from-gray-50 to-gray-100/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            isAnimating={isAnimating}
          />

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}
