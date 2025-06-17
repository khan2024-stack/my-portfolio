// EducationCard.tsx
import { motion } from 'framer-motion';
import type { Education } from '@/types/resume.types';

interface EducationCardProps {
  edu: Education;
}

const EducationCard = ({ edu }: EducationCardProps) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    className="relative group bg-white/70 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-all"
  >
    {/* Gradient Top Border */}
    <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-t-2xl" />

    {/* Degree and Institution Info */}
    <h3 className="text-2xl font-semibold text-gray-900">{edu.degree}</h3>
    <p className="text-sm md:text-base text-gray-600 mt-1">
      <span className="text-gray-800 font-medium">{edu.institution}</span> • {edu.location}
    </p>

    {/* Year + Grade Badge */}
    <div className="mt-4 inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
      <span>{edu.year}</span>
      <span className="text-gray-400">•</span>
      <span>{edu.grade}</span>
    </div>
  </motion.div>
);

export default EducationCard;
