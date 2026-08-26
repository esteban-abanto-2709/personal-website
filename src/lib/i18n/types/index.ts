export type Locale = 'en' | 'es';

export interface Job {
  title: string;
  company: string;
  years: string;
  description: string;
  stack: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  year: string;
}

export interface Messages {
  navigation: {
    title: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    iam: string;
    name: string;
    title: string;
    description: string;
    viewProjects: string;
    downloadCV: string;
  };
  experience: {
    title: string;
    jobs: Job[];
  };
  projects: {
    title: string;
    viewProject: string;
    items: Project[];
  };
  stack: {
    title: string;
    categories: {
      languages: string;
      backend: string;
      frontend: string;
      databases: string;
      devops: string;
    };
    skills: {
      languages: string[];
      backend: string[];
      frontend: string[];
      databases: string[];
      devops: string[];
    };
    note: string;
  };
  contact: {
    title: string;
    description: string;
    description2: string;
    description3: string;
    copyEmail: string;
    emailCopied: string;
    sendProposal: string;
    letsTalk: string;
    connect: string;
  };
  footer: {
    madeWith: string;
  };
}