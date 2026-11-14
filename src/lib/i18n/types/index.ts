export type Locale = 'en' | 'es';

export interface Highlight {
  value: string;
  label: string;
}

export interface Job {
  title: string;
  company: string;
  years: string;
  description: string;
  stack: string[];
  highlights?: Highlight[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  year: string;
  image: string;
}

export interface TvPeruPage {
  badge: string;
  title: string;
  subtitle: string;
  stats: { value: string; label: string }[];
  about: string[];
  system: { label: string; text: string }[];
  role: { title: string; body: string }[];
  tech: string[];
  impact: { title: string; desc: string }[];
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
      ai: string;
    };
    skills: {
      languages: string[];
      backend: string[];
      frontend: string[];
      databases: string[];
      devops: string[];
      ai: string[];
    };
    note: string;
  };
  tvPeru: {
    back: string;
    sections: { about: string; system: string; role: string; stack: string; impact: string };
    queGane: TvPeruPage;
    pukllaspa: TvPeruPage;
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