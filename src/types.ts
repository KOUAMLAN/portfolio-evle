import { LucideIcon } from 'lucide-react';

export interface Social {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  context: string;
  objectives: string;
  results: string;
  improvements: string; // "Perspectives d'amélioration"
  repoLink: string;
  demoLink?: string;
  image: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}