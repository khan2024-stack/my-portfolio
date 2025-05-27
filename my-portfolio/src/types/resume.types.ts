// types/resume.types.ts

export interface Experience {
    position: string;
    company: string;
    location?: string;
    duration: string;
    achievements: string[];
  }
  
  export interface Education {
    degree: string;
    institution: string;
    year: string;
    grade: string;
    location?: string;
  }
  
  export interface SkillGroup {
    category: string;
    items: string[];
  }
  
  export interface AboutItem {
    label: string;
    value: string;
  }
  
  export interface ResumeSection<T> {
    title: string;
    summary: string;
    content: T[];
  }
  
  export interface ResumeContent {
    whyHireMe: {
      title: string;
      description: string;
    };
    sections: {
      experience: ResumeSection<Experience>;
      education: ResumeSection<Education>;
      skills: ResumeSection<SkillGroup>;
      about: ResumeSection<AboutItem>;
    };
  }