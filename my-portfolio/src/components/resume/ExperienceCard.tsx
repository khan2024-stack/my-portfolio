// ExperienceCard.tsx
import { FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import type { Experience } from '@/types/resume.types';

interface ExperienceCardProps {
  exp: Experience;
}

const ExperienceCard = ({ exp }: ExperienceCardProps) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    className="group relative bg-white/70 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-all"
  >
    {/* Gradient Top Border */}
    <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-2xl" />

    {/* Header Section */}
    <div className="mb-4">
      <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">{exp.position}</h3>
      <p className="text-sm md:text-base text-gray-600 font-medium mt-1">
        <span className="text-gray-800">{exp.company}</span> • {exp.location} • {exp.duration}
      </p>
    </div>

    {/* Achievements */}
    <ul className="space-y-3 text-gray-700 text-sm md:text-base">
      {exp.achievements.map((ach: string, j: number) => (
        <li key={j} className="flex items-start">
          <FiCheckCircle className="mt-1 text-blue-500 flex-shrink-0 mr-3" />
          <span>{ach}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default ExperienceCard;
