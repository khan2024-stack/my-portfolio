import { motion } from 'framer-motion';
import {
  FiMail, FiPhone, FiGlobe, FiMessageSquare, FiUser, FiCheckCircle,
} from 'react-icons/fi';
import React from 'react';

type IconMapType = {
  [key: string]: React.ReactNode;
};

const iconMap: IconMapType = {
  'Name': <FiUser className="text-blue-500" />,
  'Phone Number': <FiPhone className="text-green-500" />,
  'WhatsApp': <FiMessageSquare className="text-emerald-500" />,
  'Nationality': <FiGlobe className="text-yellow-500" />,
  'Email': <FiMail className="text-purple-500" />,
  'Freelance': <FiCheckCircle className="text-pink-500" />,
  'Languages Known': <FiGlobe className="text-orange-500" />,
};

interface AboutItem {
  label: string;
  value: string;
}

interface AboutCardProps {
  items: AboutItem[];
}

const AboutCard: React.FC<AboutCardProps> = ({ items }) => {
  const midPoint = Math.ceil(items.length / 2);
  const leftColumn = items.slice(0, midPoint);
  const rightColumn = items.slice(midPoint);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="relative bg-white/70 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-all"
    >
      {/* Gradient Accent Border */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-500 rounded-t-2xl" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[leftColumn, rightColumn].map((column, colIdx) => (
          <div key={colIdx} className="space-y-4">
            {column.map((item, i) => (
              <motion.div
                key={`${colIdx}-${i}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (i + colIdx * midPoint) * 0.05 }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 mt-1 mr-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-white shadow-inner rounded-full">
                    {iconMap[item.label] || <FiUser className="text-gray-500" />}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-base md:text-lg">{item.label}</h4>
                  <p className="text-gray-700 text-sm md:text-base mt-1 leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutCard;
