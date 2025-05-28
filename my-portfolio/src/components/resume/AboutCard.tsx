import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGlobe, FiMessageSquare, FiUser, FiCheckCircle } from 'react-icons/fi';
import React from 'react';

type IconMapType = {
  [key: string]: React.ReactNode;
};

const iconMap: IconMapType = {
  'Name': <FiUser className="text-gray-500" />,
  'Phone Number': <FiPhone className="text-gray-500" />,
  'WhatsApp': <FiMessageSquare className="text-gray-500" />,
  'Nationality': <FiGlobe className="text-gray-500" />,
  'Email': <FiMail className="text-gray-500" />,
  'Freelance': <FiCheckCircle className="text-gray-500" />,
  'Languages Known': <FiGlobe className="text-gray-500" />
};

interface AboutItem {
  label: string;
  value: string;
}

interface AboutCardProps {
  items: AboutItem[];
}

const AboutCard: React.FC<AboutCardProps> = ({ items }) => {
  // Split items into two columns
  const midPoint = Math.ceil(items.length / 2);
  const leftColumn = items.slice(0, midPoint);
  const rightColumn = items.slice(midPoint);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-gray-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          {leftColumn.map((item, i) => (
            <motion.div
              key={`left-${i}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0 mt-1 mr-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full">
                  {iconMap[item.label] || <FiUser className="text-gray-500" />}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">{item.label}</h4>
                <p className="text-gray-600 mt-1 leading-relaxed">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {rightColumn.map((item, i) => (
            <motion.div
              key={`right-${i}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (i + midPoint) * 0.05 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0 mt-1 mr-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full">
                  {iconMap[item.label] || <FiUser className="text-gray-500" />}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">{item.label}</h4>
                <p className="text-gray-600 mt-1 leading-relaxed">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutCard;