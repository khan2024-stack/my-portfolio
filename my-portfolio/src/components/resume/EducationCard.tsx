// EducationCard.tsx
import { motion } from 'framer-motion';

import type { Education } from '@/types/resume.types';

interface educationCardProbs {
  edu:Education
}

const EducationCard = ({ edu }: educationCardProbs) => (
  <motion.div
    whileHover={{ y: -3 }}
    className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border-t-[3px] border-emerald-400"
  >
    <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
    <p className="text-gray-600 mt-1">
      {edu.institution} • {edu.location}
    </p>
    <div className="mt-3 inline-flex items-center bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
      <span>{edu.year}</span>
      <span className="mx-1">•</span>
      <span>{edu.grade}</span>
    </div>
  </motion.div>
);

export default EducationCard;

