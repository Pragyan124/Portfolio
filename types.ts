
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
  impact?: string;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  link: string;
}

export interface Paper {
  id: string;
  title: string;
  venue: string;
  year: string;
  authors: string[];
  abstract: string;
  link: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  company: string | { src: string; alt: string };
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export enum Section {
  Home = 'home',
  Projects = 'projects',
  Blogs = 'blogs',
  // Papers = 'papers',
  Experience = 'experience',
  Contact = 'contact'
}
