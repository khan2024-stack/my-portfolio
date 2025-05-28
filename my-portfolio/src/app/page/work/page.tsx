"use client";

import BasicLayout from "@/components/BasicLayout";
import { motion } from "framer-motion";
import Image from "next/image";
import { projectsInfo } from "@/app/portfolio-content/work-content";

export default function Work() {
  return (
    <BasicLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            My Recent Projects
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {`Here are some of the most recent and impactful projects I've built.`}
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {projectsInfo.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-200 flex flex-col h-full transition-all duration-300"
            >
              {/* Image Container with Video Overlay */}
              <div className="relative h-52  overflow-hidden bg-gray-50 group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                />

                {/* Clickable Video Icon Overlay */}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center z-10"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8 text-gray-800"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </a>
              </div>

              {/* Card Content */}
              <div className="flex flex-col p-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-5 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1 text-xs font-medium font-semibold  rounded-full bg-gray-100 text-gray-700 hover:bg-emerald-100 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </BasicLayout>
  );
}
