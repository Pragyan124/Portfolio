
import React from 'react';
import { Project, Blog, Paper, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'CloudScale Optimizer',
    description: 'An automated resource scaling engine for Kubernetes clusters that reduces cloud spend by optimizing pod placement based on real-time traffic patterns.',
    tags: ['Go', 'Kubernetes', 'AWS', 'Prometheus'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    id: '2',
    title: 'SecureAuth Protocol',
    description: 'A custom implementation of a Zero-Knowledge Proof authentication layer designed for high-security banking applications.',
    tags: ['Rust', 'Cryptography', 'Node.js', 'Redis'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    id: '3',
    title: 'DataStream Engine',
    description: 'High-throughput event processing pipeline capable of handling 500k+ events per second with sub-millisecond latency.',
    tags: ['Java', 'Kafka', 'Flink', 'Cassandra'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop',
    link: '#'
  }
];

export const BLOGS: Blog[] = [
  {
    id: '1',
    title: 'Why I Switched from REST to gRPC',
    excerpt: 'Exploring the performance benefits and trade-offs of moving to a binary protocol for internal microservices.',
    date: 'Oct 12, 2024',
    readTime: '6 min',
    category: 'Architecture',
    content: 'Full content...'
  },
  {
    id: '2',
    title: 'Testing the Untestable',
    excerpt: 'Strategies for unit testing complex asynchronous workflows in distributed systems without losing your mind.',
    date: 'Sep 24, 2024',
    readTime: '8 min',
    category: 'Engineering',
    content: 'Full content...'
  }
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
    company: 'Skale Labs',
    role: 'Senior Systems Engineer',
    period: '2021 — Present',
    description: [
      'Leading the architecture of high-performance validator nodes for the SKALE network.',
      'Implemented custom gossip protocols resulting in 30% faster consensus cycles.',
      'Optimizing node infrastructure for AI agent execution environments.'
    ],
    skills: ['Go', 'C++', 'Rust', 'Kubernetes']
  },
  {
    id: 'exp2',
    company: 'HyperFlow Systems',
    role: 'Backend Architect',
    period: '2018 — 2021',
    description: [
      'Architected a distributed event-streaming platform handling 1M+ concurrent connections.',
      'Reduced database costs by 45% through strategic migration to cockroachDB and custom caching layers.',
      'Mentored a team of 12 engineers on distributed systems best practices.'
    ],
    skills: ['Java', 'Kafka', 'Distributed Systems', 'AWS']
  }
];

export const SKILLS: Skill[] = [
  { category: 'Languages', items: ['TypeScript', 'Go', 'Rust', 'Python', 'SQL'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'] },
  { category: 'Cloud', items: ['AWS', 'GCP', 'Kubernetes', 'Terraform'] }
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
