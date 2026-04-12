import { Github, Linkedin, Mail, BookOpen, Users, Code } from 'lucide-react';
import { Project, Social } from './types';

interface Backlink {
  name: string;
  url: string;
  icon: any;
  label: string;
}

export const PERSONAL_INFO = {
  name: 'Evle Williams',
  title: 'Développeur React | Développeur Full Stack JavaScript | Développeur web freelance',
  tagline:
    'Création de sites web modernes, performants et accessibles pour professionnels et PME.',
  email: 'evlekouamlanwilliams@yahoo.fr',
  socials: [
    { name: 'GitHub', url: 'https://github.com/KOUAMLAN', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kouamlan-williams-evle-a107ab180', icon: Linkedin },
    { name: 'Email', url: 'mailto:evlekouamlanwilliams@yahoo.fr', icon: Mail },
  ] as Social[],
};

export const BACKLINKS: Backlink[] = [
  { name: 'OpenClassrooms', url: 'https://openclassrooms.com/fr/account', icon: BookOpen, label: 'Mon profil formation' },
  { name: 'React Lyon', url: 'https://www.meetup.com/fr-FR/react-lyon/', icon: Users, label: 'Communauté dev Lyon' },
  { name: 'Portail Freelance', url: 'https://www.portail-autoentrepreneur.fr/', icon: Code, label: 'Ressources freelance' },
];

export const ABOUT_DATA = {
  act1_identity:
    "Je suis Evle Williams, développeur React, développeur Full Stack JavaScript et développeur web freelance.",
  act2_journey:
    "Je conçois des sites internet sur mesure avec une approche centrée sur la performance, l’accessibilité et l’expérience utilisateur.",
  act3_stack:
    'Spécialiste React.js, TypeScript et interfaces modernes, je construis des expériences web fluides et maintenables.',
  act4_impact:
    'Compétences : HTML5, CSS3/Tailwind, JavaScript/TypeScript, React.js, Node.js, Express, API REST, MongoDB, PostgreSQL, tests Jest.',
  act5_approach:
    'Je privilégie un code propre, des interfaces sobres et des performances solides pour chaque projet.',
  act6_ambition:
    'Site vitrine, application web ou refonte : je transforme votre idée en solution fiable et efficace.',
};

export const SKILLS_LIST = [
  'HTML5 & Sémantique',
  'CSS3 / Sass / Tailwind',
  'JavaScript (ES6+)',
  'TypeScript',
  'React.js',
  'Redux Toolkit',
  'Accessibilité (WCAG)',
  'Git & GitHub',
  'Intégration Pixel-Perfect',
  'Méthode Agile',
  'Node.js',
  'Express',
  'API REST',
  'MongoDB / PostgreSQL',
  'Swagger / Documentation d’API',
  'Tests unitaires (Jest)',
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Kasa - Location Immobilière',
    description: 'Application de location d’appartements entre particuliers avec React.',
    tags: ['React', 'React Router', 'Sass'],
    context: 'Projet académique de fin de parcours front-end.',
    objectives: 'Créer une SPA fluide, gérer les routes dynamiques et les erreurs 404.',
    results: 'Application fonctionnelle, responsive et modulaire.',
    improvements: 'Ajout de tests unitaires et amélioration de l’accessibilité clavier.',
    repoLink: 'https://github.com/KOUAMLAN',
    demoLink: '#',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Argent Bank - Dashboard',
    description: 'Application bancaire avec gestion d’état global et authentification.',
    tags: ['React', 'Redux', 'API REST', 'Swagger'],
    context: 'Développement front-end d’une application bancaire sécurisée.',
    objectives: 'Gérer l’état global, la connexion API JWT et les transactions.',
    results: 'Authentification robuste et mise à jour du profil en temps réel.',
    improvements: 'Ajout de graphiques de dépenses et d’un mode sombre.',
    repoLink: 'https://github.com/KOUAMLAN',
    demoLink: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'OhMyFood - Mobile First',
    description: 'Site de commande de repas avec animations CSS avancées.',
    tags: ['HTML5', 'Sass', 'Animation CSS'],
    context: 'Intégration maquette dynamique en approche mobile first.',
    objectives: 'Créer des animations fluides sans JavaScript et responsive.',
    results: 'Site performant avec animations 60fps et architecture CSS BEM.',
    improvements: 'Refactoring avec Tailwind CSS et ajout d’un panier dynamique.',
    repoLink: 'https://github.com/KOUAMLAN',
    demoLink: '#',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
  },
];

export const SOCIAL_STRATEGY_X = {
  info_text: {
    daily: 'Publiez régulièrement pour améliorer la visibilité.',
    tip: 'Variez les formats pour garder une présence cohérente et active.',
  },
  liens_promo: {
    title: 'Nouveau portfolio React freelance ! 🚀',
    content:
      'Découvrez Evle Williams : développeur React Full Stack, expert TypeScript et Node.js.',
    link: 'https://evle-dev.fr',
    hashtags: '#ReactJS #DéveloppeurFreelance #FullStack #TypeScript #WebDev',
    cta: 'Découvrez le portfolio et boostez votre projet 🚀',
  },
  quiz_interaction: {
    question: 'Quelle technologie préférez-vous pour vos projets web ? 👇',
    options: ['React.js ⚛️', 'Vue.js', 'Angular', 'Svelte'],
    sondage: 'Quiz / Sondage interactif',
  },
  thread_educatif: {
    hook: 'Pourquoi React + TypeScript est un combo puissant en 2026 ? 🧵👇',
    points: [
      '1️⃣ Typage sécurisé → moins de bugs',
      '2️⃣ Meilleure maintenabilité long terme',
      '3️⃣ Expérience développeur optimisée',
      '4️⃣ Idéal pour les projets scalables',
    ],
    hashtags: '#ReactJS #TypeScript #DevTips #WebDevelopment',
  },
  preuve_sociale: {
    title: 'Cas client : application bancaire performante ⚡',
    content:
      'Dashboard React + Redux connecté à une API sécurisée JWT avec UX fluide.',
    hashtags: '#ReactDeveloper #FullStack #FreelanceWeb #CaseStudy',
    cta: 'Besoin d’un projet similaire ? Contactez-moi 📩',
  },
};