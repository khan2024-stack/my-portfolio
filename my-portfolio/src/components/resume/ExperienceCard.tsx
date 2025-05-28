// ExperienceCard.tsx
import { FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

import type { Experience } from '@/types/resume.types';

interface ExperienceCardProps {
  exp: Experience;
}

const ExperienceCard = ({ exp }: ExperienceCardProps) => (
  <motion.div
    whileHover={{ y: -3 }}
    className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border-t-[3px] border-gray-400"
  >
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
        <p className="text-gray-600 font-medium mt-1">
          {exp.company} • {exp.location} • {exp.duration}
        </p>
      </div>
    </div>
    <ul className="mt-4 space-y-3 text-gray-700">
      {exp.achievements.map((ach: string, j: number) => (
        <li key={j} className="flex items-start">
          <FiCheckCircle className="flex-shrink-0 text-gray-500 mt-0.5 mr-3" />
          <span>{ach}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default ExperienceCard;
