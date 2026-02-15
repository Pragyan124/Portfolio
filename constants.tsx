
import React from 'react';
import { Project, Blog, Paper, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus Payroll',
    description: 'The Payroll Management System is designed to manage multi-company payroll operations, attendance tracking through check-in/check-out, compliance documentation, reports generation, allowances, deductions, incentives, and workflow automation. The system will support three user roles and will include payment gateway integration for financial transactions.',
    tags: ['SpringBoot', 'React', 'Docker', 'JWT', 'POSTGRES'],
    link: 'https://nexus-payroll-six.vercel.app/',
    github: 'https://github.com/Pragyan124/nexus-payroll'
  },

  {
    id: '2',
    title: 'Knowledge Ingestion Pipeline',
    description: 'An automated serverless pipeline that fetches the latest CS research papers, uses Google Gemini 2.5 AI to summarize them into "Engineering Takeaways," and pushes the insights to Discord daily.',
    tags: ['Scala', 'GITHUB ACTIONS', 'GEMINI'],
    link: 'https://github.com/Pragyan124/Knowledge_Ingestion_Pipeline',
    github: 'https://github.com/Pragyan124/Knowledge_Ingestion_Pipeline'
  },


];

export const BLOGS: Blog[] = [
  {
    id: '1',
    title: 'Are you burning cash on High-Performance CPUs?',
    excerpt: 'How choosing Funnel Sort cuts cost and latency',
    date: 'Feb 10, 2025',
    readTime: '5 min',
    category: 'Advanced Algorithms, Databases',
    link: 'https://borthakurpragyan15.substack.com?utm_source=navbar&utm_medium=web'
  },
];

export const PAPERS: Paper[] = [
  {
    id: '1',
    title: 'Latency-Aware Load Balancing in Geo-Distributed Systems',
    venue: 'IEEE Cloud Computing',
    year: '2023',
    authors: ['Your Name', 'Dr. Aris Thorne'],
    abstract: 'This paper presents a novel algorithm for reducing tail latency in globally distributed applications by predicting network congestion points.',
    link: '#'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp1',
    company: {
      src: 'Adp-Logo-PNG.png',
      alt: 'ADP Logo'
    },
    role: 'Software Engineering Intern, NAS TIME Team',
    period: 'July,2025 - Sept,2025',
    description: [
       'Engineered secure encryption/decryption workflows strengthening Global Security Operations (GSO), implementing AES-256 encryption standards to protect sensitive payroll data for 1M+ clients across enterprise systems.',
       'Optimized WOTC tax credit processor workflows by implementing data validation pipelines, reducing validation errors by 25% and improving audit traceability by 40% through enhanced logging mechanisms.',
       'Contributed to AWS migration project to seamlessly migrate enterprise client data from MongoDB on servers to DynamoDB, enabling scalablity during peak-traffic hours and resilient cloud-native architecture.'
    ],
    skills: ['.NET', 'C#', 'AWS', 'REST', 'MongoDB', 'SQLite', 'Agile Methodologies']
  }
];

export const SKILLS: Skill[] = [
  { category: 'Languages', items: ['Java', 'JavaScript', 'TypeScript', 'C#'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind'] },
  { category: 'Backend', items: ['Node.js', 'Springboot', '.NET', 'Docker'] },
  { category: 'Databases', items: ['Postgres', 'MongoDB', 'Redis', 'DynamoDB']},
  { category: 'Cloud', items: ['Amazon Web Service', 'Google Cloud Platform', 'Kubernetes', 'Terraform'] }
  
];

export const ICONS = {
  Github: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  ),
  Linkedin: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><path d="M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  External: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
  ),
  ArrowRight: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  ),
  Bot: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>
  )
};
