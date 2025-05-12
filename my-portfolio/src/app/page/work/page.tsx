
'use client'; // Add this line
import BasicLayout from "@/components/BasicLayout";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from 'framer-motion';
import { projectsInfo } from "@/app/portfolio-content/work-content";

export default function Work() {
  return (
    <BasicLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            My Recent Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are the three most significant projects I've worked on recently
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsInfo.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="inline-block bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.demoUrl}
                    className="flex items-center text-emerald-600 hover:text-emerald-800 font-medium"
                  >
                    <FiExternalLink className="mr-2" />
                    Live Demo
                  </a>
                  <a 
                    href={project.codeUrl}
                    className="flex items-center text-gray-600 hover:text-gray-800 font-medium"
                  >
                    <FiGithub className="mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </BasicLayout>
  );
}