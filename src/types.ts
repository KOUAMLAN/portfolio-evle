import { LucideIcon } from "lucide-react";


export interface Social {
  name: string;
  url: string;
  icon: LucideIcon;
}


export interface ProjectGains {
  speed?: string;
  visibility?: string;
  ergonomics?: string;
  seo?: string;
  mobile?: string;
}


export interface Project {

  id: number;

  title: string;

  description: string;

  tags: string[];

  context: string;

  objectives: string;

  results: string;

  improvements: string;

  gains?: ProjectGains;

  repoLink: string;

  demoLink?: string;

  embedDemo?: boolean;

  image: string;

}



export interface SkillCategory {

  name: string;

  skills: string[];

}



export const hasLiveDemo = (
  link?: string
): boolean => {

  return Boolean(
    link &&
    link !== "#" &&
    link.startsWith("http")
  );

};