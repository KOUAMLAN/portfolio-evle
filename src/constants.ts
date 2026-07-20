import {
  Github,
  Linkedin,
  Mail,
  BookOpen,
  Users,
  Code
} from "lucide-react";

import {
  Project,
  Social
} from "./types";


interface Backlink {
  name: string;
  url: string;
  icon: any;
  label: string;
}



export const PERSONAL_INFO = {

  name:
  "Kouamlan Evle",

  title:
  "Développeur Full Stack JavaScript | React | TypeScript | Node.js",

  tagline:
  "Création d'applications web modernes, performantes et adaptées aux besoins des entreprises.",

  email:
  "evlekouamlanwilliams@yahoo.fr",


  socials:[
    {
      name:"GitHub",
      url:"https://github.com/KOUAMLAN",
      icon:Github
    },

    {
      name:"LinkedIn",
      url:"https://www.linkedin.com/in/kouamlan-williams-evle-a107ab180",
      icon:Linkedin
    },

    {
      name:"Email",
      url:"mailto:evlekouamlanwilliams@yahoo.fr",
      icon:Mail
    }

  ] as Social[]

};




export const BACKLINKS: Backlink[] = [

{
  name:"OpenClassrooms",
  url:"https://openclassrooms.com/fr/account",
  icon:BookOpen,
  label:"Mon profil formation"
},


{
  name:"React Lyon",
  url:"https://www.meetup.com/fr-FR/react-lyon/",
  icon:Users,
  label:"Communauté développeurs Lyon"
},


{
  name:"Portail Freelance",
  url:"https://www.portail-autoentrepreneur.fr/",
  icon:Code,
  label:"Ressources freelance"
}

];






export const ABOUT_DATA = {


act1_identity:

"Développeur Full Stack spécialisé en JavaScript, React, TypeScript et Node.js.",



act2_journey:

"Je conçois des applications web modernes qui répondent aux besoins des entreprises. J'accorde une attention particulière à la qualité du code, aux performances, à l'accessibilité et à l'expérience utilisateur.",



act3_stack:

"React, Next.js, TypeScript, JavaScript ES6+, Node.js, Express, MongoDB, PostgreSQL, Firebase, Supabase, Tailwind CSS, Docker, Git, GitHub et API REST.",



act4_impact:

"Chaque projet est développé avec une architecture propre, un référencement optimisé et des performances élevées afin de maximiser la satisfaction des utilisateurs.",



act5_approach:

"Un bon logiciel est avant tout simple, rapide, maintenable et agréable à utiliser.",



act6_ambition:

"Accompagner les entreprises dans leur transformation digitale grâce à des solutions web modernes."


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

"Tests unitaires (Jest)"

];







export const PROJECTS: Project[] = [

{
  id:1,

  title:
  "Kasa - Location Immobilière",

  description:
  "Application de location d'appartements entre particuliers développée avec React.",

  tags:[
    "React",
    "React Router",
    "Sass"
  ],

  context:
  "Projet académique de fin de parcours Front-End.",

  objectives:
  "Créer une SPA fluide, gérer les routes dynamiques et les erreurs 404.",

  results:
  "Application responsive avec architecture React modulaire.",

  improvements:
  "Ajout de tests unitaires et amélioration accessibilité clavier.",

  gains:{
    speed:
    "SPA React avec routage optimisé",

    ergonomics:
    "Navigation intuitive et fiches logement détaillées",

    mobile:
    "Interface responsive mobile tablette desktop",

    seo:
    "Structure HTML5 optimisée"
  },

  repoLink:
  "https://github.com/KOUAMLAN/kasa",

  demoLink:
  "https://kouamlan.github.io/kasa/",

  embedDemo:true,

  image:
  "/image/home-banner.png"
},



{
  id:2,

  title:
  "Argent Bank - Dashboard",

  description:
  "Application bancaire React avec Redux et authentification JWT.",

  tags:[
    "React",
    "Redux",
    "API REST",
    "Swagger"
  ],

  context:
  "Développement front-end d'une application bancaire sécurisée.",

  objectives:
  "Connexion API JWT et gestion Redux.",

  results:
  "Dashboard utilisateur fonctionnel.",

  improvements:
  "Ajout graphiques dépenses et mode sombre.",

  gains:{
    speed:
    "Redux Toolkit pour les performances",

    visibility:
    "Interface bancaire professionnelle",

    ergonomics:
    "Parcours utilisateur fluide",

    mobile:
    "Adaptation smartphone"
  },

  repoLink:
  "https://github.com/KOUAMLAN/Argent_Bank",

  demoLink:
  "https://kouamlan.github.io/Argent_Bank/",

  embedDemo:true,

  image:
  "/image/bank-tree.jpeg"
},



{
  id:3,

  title:
  "OhMyFood - Mobile First",

  description:
  "Site de commande de repas avec animations CSS avancées.",

  tags:[
    "HTML5",
    "Sass",
    "Animation CSS"
  ],

  context:
  "Intégration d'une maquette dynamique en approche Mobile First.",

  objectives:
  "Créer des animations fluides sans JavaScript et une interface responsive.",

  results:
  "Site performant avec animations CSS 60fps et architecture CSS BEM.",

  improvements:
  "Refactoring avec Tailwind CSS et ajout de fonctionnalités dynamiques.",

  gains:{
    speed:
    "Zéro JavaScript, animations CSS fluides et chargement optimisé",

    ergonomics:
    "Parcours de commande simplifié et menus lisibles",

    mobile:
    "Conception mobile-first adaptée à tous les écrans",

    seo:
    "Structure HTML sémantique optimisée",

    visibility:
    "Design moderne avec animations engageantes"
  },

  repoLink:
  "https://github.com/KOUAMLAN/Omyfood",

  demoLink:
  "https://kouamlan.github.io/Omyfood/",

  embedDemo:true,

  image:
  "/image/image-source-1.png"
},



{
  id:4,

  title:
  "Nina Carducci - Optimisation",

  description:
  "Refonte SEO et optimisation des performances d'un site de photographe.",

  tags:[
    "SEO",
    "Lighthouse",
    "Accessibilité",
    "Performance"
  ],

  context:
  "Projet d'optimisation comprenant audit, corrections et mesures des gains.",

  objectives:
  "Améliorer le référencement, la vitesse et l'accessibilité.",

  results:
  "Score Lighthouse supérieur à 90, images optimisées, balises meta et données structurées.",

  improvements:
  "Ajout d'un blog et suivi Analytics pour améliorer la visibilité.",

  gains:{
    speed:
    "Optimisation Performance avec compression WebP et lazy loading",

    seo:
    "Balises meta, Open Graph, sitemap XML et données structurées",

    ergonomics:
    "Navigation améliorée et formulaire accessible",

    mobile:
    "Interface responsive adaptée aux appareils mobiles",

    visibility:
    "Amélioration du référencement naturel"
  },

  repoLink:
  "https://github.com/KOUAMLAN/nina-carducci-optimise",

  demoLink:
  "https://kouamlan.github.io/nina-carducci-optimise/",

  embedDemo:true,

  image:
  "/image/_Header.png"
}

];

export const SOCIAL_STRATEGY_X = {


info_text: {

daily:
"Publiez régulièrement pour développer votre visibilité.",

tip:
"Variez vos contenus entre expertise technique, projets et conseils."

},





liens_promo:{


title:
"Nouveau portfolio React Full Stack 🚀",


content:
"Découvrez Kouamlan Evle : développeur React, TypeScript et Node.js spécialisé dans la création d'applications web modernes et performantes.",


link:
"https://evle-dev.fr",


hashtags:
"#ReactJS #TypeScript #FullStack #WebDevelopment #Freelance",


cta:
"Découvrez mes projets et discutons de votre futur projet web 🚀"


},






quiz_interaction:{


question:
"Quelle technologie utilisez-vous pour vos projets web ? 👇",



options:[

"React.js ⚛️",

"Vue.js",

"Angular",

"Svelte"

],



sondage:
"Quiz / Sondage interactif"


},






thread_educatif:{


hook:
"Pourquoi React + TypeScript est un excellent choix pour les applications modernes ? 🧵👇",



points:[

"1️⃣ Typage sécurisé → réduction des erreurs",

"2️⃣ Maintenance facilitée sur le long terme",

"3️⃣ Meilleure expérience développeur",

"4️⃣ Solution adaptée aux projets évolutifs"

],



hashtags:
"#ReactJS #TypeScript #DevTips #WebDevelopment"


},






preuve_sociale:{


title:
"Cas projet : Dashboard React connecté à une API sécurisée ⚡",



content:
"Application React avec gestion d'état Redux, authentification JWT et expérience utilisateur optimisée.",



hashtags:
"#ReactDeveloper #FullStack #FreelanceWeb #CaseStudy",



cta:
"Un projet web à développer ? Contactez-moi 📩"


}


};