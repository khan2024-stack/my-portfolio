import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import resumeContent from '@/app/portfolio-content/resume-content';

type SectionKey = keyof typeof resumeContent.sections;

interface SidebarProps {
  activeSection: SectionKey;
  setActiveSection: (key: SectionKey) => void;
  isAnimating: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection, isAnimating }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100"
  >
    <h2 className="text-2xl font-bold text-gray-900 mb-3">
      <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
        {resumeContent.whyHireMe.title}
      </span>
    </h2>
    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
      {resumeContent.whyHireMe.description}
    </p>

    <div className="space-y-2">
      {(Object.keys(resumeContent.sections) as SectionKey[]).map((key) => (
        <motion.button
          key={key}
          whileTap={{ scale: 0.98 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => !isAnimating && setActiveSection(key)}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
            activeSection === key
              ? 'bg-gray-500 text-white shadow-sm'
              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:text-gray-700 hover:border-gray-200'
          }`}
        >
          <span className="truncate">{resumeContent.sections[key].title}</span>
          {activeSection === key && (
            <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          )}
        </motion.button>
      ))}
    </div>
  </motion.div>
);

export default Sidebar;