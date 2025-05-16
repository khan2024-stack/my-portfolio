
'use client'; // Add this line
import BasicLayout from "@/components/BasicLayout";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { projectsInfo } from "@/app/portfolio-content/work-content";

export default function Work() {
  return (
    <BasicLayout>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center m-4"
        >
          <h1 className="text-4xl font-bold text-gray-900 m-4">
            My Recent Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto pb-6">
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
              className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative w-full h-62 object-contain overflow-hidden border-b rounded-t-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
             className="object-cover transition-transform duration-500"

                />
              </div>
              <div className="p-4 pb-10">
                <h3 className="text-x font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-block bg-emerald-50 text-emerald-600 mt-2 p-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Demo Link */}
              <div className="absolute bottom-4 right-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-emerald-600 hover:text-emerald-800 text-sm font-medium"
                >
                  <FiExternalLink className="mr-2" />
                  Live Demo
                </a>
              </div>
            </motion.div>

          ))}
        </div>

      </div>
    </BasicLayout>
  );
}