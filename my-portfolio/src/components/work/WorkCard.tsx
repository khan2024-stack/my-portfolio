
import Image from "next/image";
import type { StaticImageData } from 'next/image';
import { workCardStyle } from "./workCardStyle";


interface Project {
    image: StaticImageData;
    title: string;
    description: string;
    demoUrl: string;
    tags: string[];
}

interface Project {
  image: StaticImageData;
  title: string;
  description: string;
  demoUrl: string;
  tags: string[];
}

export const WorkCard = ({ project }: { project: Project }) => {
  return (
    <div className={workCardStyle.cardMainWrapper}>
      {/* Image Container with Video Overlay */}
      <div className={workCardStyle.imageContainer}>
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
      <div className={workCardStyle.cardContent}>
        <h3 className={workCardStyle.title}>
          {project.title}
        </h3>
        <p className={workCardStyle.description}>
          {project.description}
        </p>

        {/* Tags */}
        <div className={workCardStyle.tagsContainer}>
          {project.tags.map((tag, i) => (
            <span key={i} className={workCardStyle.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};