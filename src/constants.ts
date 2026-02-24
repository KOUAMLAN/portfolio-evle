import { Github, Linkedin, Mail } from "lucide-react";
import { Project, Social } from "./types";

export const PERSONAL_INFO = {
  name: "Evle Kouamlan",
  title: "Développeur Full Stack Pro",
  tagline:
    "Expert React & TypeScript, je conçois des sites web modernes, accessibles et ultra‑performants.",
  email: "evlekouamlanwilliams@yahoo.fr",
  socials: [
    { name: "GitHub", url: "https://github.com/KOUAMLAN", icon: Github },
    {
      name: "LinkedIn",
      url: "https://fr.linkedin.com/in/kouamlan-williams-evle-a107ab180",
      icon: Linkedin,
    },
    { name: "Email", url: "mailto:evlekouamlanwilliams@yahoo.fr", icon: Mail },
  ] as Social[],
};

export const ABOUT_DATA = {
  act1_identity:
    "Développeur Full Stack Pro, capable de concevoir et livrer des sites web complets, du front‑end au back‑end.",
  act2_journey:
    "Passionné par la qualité logicielle, je conçois des interfaces modernes, réactives et accessibles, tout en maîtrisant la communication avec les serveurs via des APIs REST.",
  act3_stack:
    "Ma stack s’articule autour de React, TypeScript, Tailwind CSS et Redux Toolkit, avec une attention constante portée à l’optimisation des performances et à la maintenabilité du code. J’acquiers également une solide base en Node.js, Express, bases de données (MongoDB/PostgreSQL) et APIs REST, pour concevoir des applications complètes, du front‑end au back‑end.",
  act4_impact:
    "Je transforme des maquettes complexes en composants réutilisables et maintenables, en garantissant une expérience utilisateur fluide sur tous les supports.",
  act5_approach:
    "Mon approche ? Clean Code, architecture modulaire et tests rigoureux pour assurer la stabilité des applications.",
  act6_ambition:
    "Je souhaite intégrer une équipe technique ambitieuse pour contribuer au développement de produits innovants et continuer à monter en expertise.",
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
      "Créer une SPA fluide, gérer les routes dynamiques et les erreurs 404, et componentiser l'interface.",
    results:
      "Application 100% fonctionnelle et responsive, code modulaire.",
    improvements:
      "Mise en place de tests unitaires (Jest) et amélioration de l'accessibilité clavier sur les galeries.",
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
    context: "Développement du front-end d'une application bancaire sécurisée.",
    objectives:
      "Gérer l'état global avec Redux, connecter une API avec JWT et modéliser les transactions.",
    results:
      "Système d'authentification robuste et mise à jour du profil utilisateur en temps réel.",
    improvements:
      "Ajout de graphiques de visualisation des dépenses (Recharts) et mode sombre.",
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
    context: "Intégration d'une maquette dynamique en approche Mobile First.",
    objectives:
      "Réaliser des animations fluides (loaders, menus) sans JavaScript et assurer le responsive.",
    results:
      "Site performant avec animations 60fps et architecture CSS maintenable (BEM).",
    improvements:
      "Refactoring vers Tailwind CSS pour optimiser le poids du CSS et ajout d'un panier dynamique.",
    repoLink: "https://github.com/KOUAMLAN",
    demoLink: "#",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
  },
];
