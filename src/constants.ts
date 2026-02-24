import { Github, Linkedin, Mail } from "lucide-react";
import { Project, Social } from "./types";

export const PERSONAL_INFO = {
  name: "Evle-Créations",
  title: "Développeur Web Freelance Expert en Création de Sites Internet",
  tagline: "Evle-Créations : Votre Partenaire pour des Projets Web Modernes et Performants",
  email: "evlekouamlanwilliams@yahoo.fr",
  socials: [
    { name: "GitHub", url: "https://github.com/KOUAMLAN", icon: Github },
    { name: "LinkedIn", url: "https://fr.linkedin.com/in/kouamlan-williams-evle-a107ab180", icon: Linkedin },
    { name: "Email", url: "mailto:evlekouamlanwilliams@yahoo.fr", icon: Mail },
  ] as Social[],
};

export const ABOUT_DATA = {
  act1_identity: "Faites appel à Evle-Créations, votre développeur web freelance. Expert en tant que développeur full stack et développeur react pour créer des sites web performants.",
  act2_journey: "En tant que développeur web freelance, je suis spécialisé dans la conception de sites internet sur mesure, alliant esthétique moderne, accessibilité et performance. Mon expertise en tant que développeur full stack me permet de maîtriser l'ensemble du processus de création.",
  act3_stack: "Spécialiste de la technologie React.js, je construis des interfaces utilisateur dynamiques et réactives. En tant que développeur react, je transforme vos idées en applications web fluides et interactives avec TypeScript.",
  act4_impact: "Mon savoir-faire couvre HTML5, CSS3/Tailwind, JavaScript/TypeScript, React.js/Redux, Node.js/Express, API REST, MongoDB/PostgreSQL, tests Jest. Sites vitrines, applications web complexes, refontes.",
  act5_approach: "Kasa (React SPA), Argent Bank (Redux + API), OhMyFood (animations CSS 60fps). Code propre, accessible, performant. Services de développement web professionnels.",
  act6_ambition: "Que vous ayez besoin d'un site vitrine, d'une application web complexe ou d'une refonte, je mets mes compétences à votre service avec une approche centrée sur la qualité du code.",
};

export const SKILLS_LIST = [
  "HTML5 & Sémantique",
  "CSS3 / Sass / Tailwind",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Redux Toolkit",
  "Accessibilité (WCAG)",
  "Git & GitHub",
  "Intégration Pixel-Perfect",
  "Méthode Agile",
  "Node.js",
  "Express",
  "API REST",
  "MongoDB / PostgreSQL",
  "Swagger / Documentation d'API",
  "Tests unitaires (Jest)",
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Kasa - Location Immobilière",
    description: "Application de location d'appartements entre particuliers avec React.",
    tags: ["React", "React Router", "Sass"],
    context: "Projet académique de fin de parcours Front-End.",
    objectives: "Créer une SPA fluide, gérer les routes dynamiques et les erreurs 404.",
    results: "Application 100% fonctionnelle et responsive, code modulaire.",
    improvements: "Tests unitaires (Jest) et accessibilité clavier galeries.",
    repoLink: "https://github.com/KOUAMLAN",
    demoLink: "#",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Argent Bank - Dashboard",
    description: "Application bancaire avec gestion d'état global et authentification.",
    tags: ["React", "Redux", "API REST", "Swagger"],
    context: "Développement front-end application bancaire sécurisée.",
    objectives: "Gestion état global Redux, connexion API JWT, modélisation transactions.",
    results: "Authentification robuste, mise à jour profil temps réel.",
    improvements: "Graphiques dépenses (Recharts), mode sombre.",
    repoLink: "https://github.com/KOUAMLAN",
    demoLink: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "OhMyFood - Mobile First",
    description: "Site de commande de repas avec animations CSS avancées.",
    tags: ["HTML5", "Sass", "Animation CSS"],
    context: "Intégration maquette dynamique approche Mobile First.",
    objectives: "Animations fluides sans JavaScript, responsive.",
    results: "Site performant animations 60fps, architecture CSS BEM.",
    improvements: "Refactoring Tailwind CSS, panier dynamique.",
    repoLink: "https://github.com/KOUAMLAN",
    demoLink: "#",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
  },
];