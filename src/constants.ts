import { Github, Linkedin, Mail } from "lucide-react";
import { Project, Social } from "./types";

export const PERSONAL_INFO = {
  name: "Evle-Créations",
  title: "Développeur Web Freelance Expert en Création de Sites Internet",
  tagline:
    "Evle-Créations : Votre Partenaire pour des Projets Web Modernes et Performants",
  email: "evlekouamlanwilliams@yahoo.fr",
  socials: [
    { name: "GitHub", url: "https://github.com/KOUAMLAN", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/kouamlan-williams-evle-a107ab180", icon: Linkedin },
    { name: "Email", url: "mailto:evlekouamlanwilliams@yahoo.fr", icon: Mail },
  ] as Social[],
};

export const ABOUT_DATA = {
  act1_identity:
    "Faites appel à Evle-Créations, votre développeur full stack, développeur web freelance et développeur react. Expert React et TypeScript pour créer des sites web performants.",
  act2_journey:
    "Spécialisé dans la conception de sites internet sur mesure, j’allie esthétique moderne, accessibilité et performance. Mon expertise full stack me permet de maîtriser l’ensemble du processus.",
  act3_stack:
    "Spécialiste React.js, je construis des interfaces dynamiques et réactives avec TypeScript pour des applications web fluides.",
  act4_impact:
    "Compétences : HTML5, CSS3/Tailwind, JavaScript/TypeScript, React.js/Redux, Node.js/Express, API REST, MongoDB/PostgreSQL, tests Jest.",
  act5_approach:
    "Projets réalisés : Kasa (React SPA), Argent Bank (Redux + API), OhMyFood (animations CSS 60fps). Code propre, accessible et performant.",
  act6_ambition:
    "Site vitrine, application web complexe ou refonte : je mets mes compétences à votre service avec une approche centrée sur la qualité et la performance.",
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
    description:
      "Application de location d'appartements entre particuliers avec React.",
    tags: ["React", "React Router", "Sass"],
    context: "Projet académique de fin de parcours Front-End.",
    objectives:
      "Créer une SPA fluide, gérer les routes dynamiques et les erreurs 404.",
    results:
      "Application 100% fonctionnelle et responsive avec code modulaire.",
    improvements:
      "Ajout de tests unitaires (Jest) et amélioration accessibilité clavier.",
    repoLink: "https://github.com/KOUAMLAN",
    demoLink: "#",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Argent Bank - Dashboard",
    description:
      "Application bancaire avec gestion d'état global et authentification.",
    tags: ["React", "Redux", "API REST", "Swagger"],
    context:
      "Développement front-end d’une application bancaire sécurisée.",
    objectives:
      "Gestion état global Redux, connexion API JWT, modélisation transactions.",
    results:
      "Authentification robuste et mise à jour profil en temps réel.",
    improvements:
      "Ajout graphiques dépenses (Recharts) et mode sombre.",
    repoLink: "https://github.com/KOUAMLAN",
    demoLink: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "OhMyFood - Mobile First",
    description:
      "Site de commande de repas avec animations CSS avancées.",
    tags: ["HTML5", "Sass", "Animation CSS"],
    context:
      "Intégration maquette dynamique en approche Mobile First.",
    objectives:
      "Créer des animations fluides sans JavaScript et responsive.",
    results:
      "Site performant avec animations 60fps et architecture CSS BEM.",
    improvements:
      "Refactoring avec Tailwind CSS et ajout panier dynamique.",
    repoLink: "https://github.com/KOUAMLAN",
    demoLink: "#",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
  },
];

export const SOCIAL_STRATEGY_X = {
  info_text: {
    daily: "Postez quotidiennement pour visibilité maximale.",
    tip: "4 types de posts pour une stratégie originale et diversifiée.",
  },
  liens_promo: {
    title: "Nouveau portfolio React freelance ! 🚀",
    content:
      "Découvrez Evle-Créations : développeur React Full Stack expert TypeScript & Node.js. Sites web performants et modernes.",
    link: "https://evle-dev.fr",
    hashtags:
      "#ReactJS #DéveloppeurFreelance #FullStack #TypeScript #WebDev",
    cta: "Découvrez le portfolio et boostez votre projet 🚀",
  },
  quiz_interaction: {
    question: "Quelle techno préférez-vous pour vos projets web ? 👇",
    options: ["React.js ⚛️", "Vue.js", "Angular", "Svelte"],
    sondage: "Quiz / Sondage interactif",
  },
  thread_educatif: {
    hook: "Pourquoi React + TypeScript est un combo puissant en 2026 ? 🧵👇",
    points: [
      "1️⃣ Typage sécurisé → moins de bugs",
      "2️⃣ Meilleure maintenabilité long terme",
      "3️⃣ Expérience développeur optimisée",
      "4️⃣ Idéal pour projets scalables",
    ],
    hashtags: "#ReactJS #TypeScript #DevTips #WebDevelopment",
  },
  preuve_sociale: {
    title: "Cas client : Application bancaire performante ⚡",
    content:
      "Dashboard React + Redux connecté API sécurisée JWT. Authentification robuste et UX fluide.",
    hashtags: "#ReactDeveloper #FullStack #FreelanceWeb #CaseStudy",
    cta: "Besoin d’un projet similaire ? Contactez-moi 📩",
  },
};