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

export interface Skill {
  name: string;
  level: string;
  percentage: number;
}

export interface StackCategory {
  gamedev: Skill[];
  software: Skill[];
  backend: Skill[];
  frontend: Skill[];
  cloud: Skill[];
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
      gamedev: string;
      software: string;
      backend: string;
      frontend: string;
      cloud: string;
    };
    levels: {
      senior: string;
      midSenior: string;
      mid: string;
      juniorMid: string;
      junior: string;
    };
    skills: StackCategory;
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