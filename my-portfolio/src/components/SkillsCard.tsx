// SkillsCard.tsx
import { motion } from 'framer-motion';

const SkillsCard = ({ group }: any) => (
  <motion.div
    whileHover={{ y: -3 }}
    className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
  >
    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
      <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-2"></span>
      {group.category}
    </h3>
    <ul className="space-y-3">
      {group.items.map((skill: string, j: number) => (
        <li key={j} className="flex items-center text-gray-700">
          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default SkillsCard;
