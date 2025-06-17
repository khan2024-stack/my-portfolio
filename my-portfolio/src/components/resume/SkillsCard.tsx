// SkillsCard.tsx
import { motion } from 'framer-motion';
import type { SkillGroup } from '@/types/resume.types';

const SkillsCard = ({ group }: { group: SkillGroup }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    className="relative bg-white/70 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-all"
  >
    {/* Gradient Top Border */}
    <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-t-2xl" />

    {/* Skill Category Title */}
    <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
      <span className="w-2.5 h-2.5 bg-gray-600 rounded-full mr-3"></span>
      {group.category}
    </h3>

    {/* Skill Items List */}
    <ul className="space-y-3 text-sm md:text-base text-gray-700">
      {group.items.map((skill: string, j: number) => (
        <li key={j} className="flex items-center">
          <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></span>
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default SkillsCard;
