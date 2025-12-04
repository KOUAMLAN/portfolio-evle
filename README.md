# Portfolio Evle

Application de portfolio personnel construite avec React, TypeScript, Vite et Tailwind CSS pour présenter mes projets, compétences et informations de contact.

## Fonctionnalités

- Section Hero avec présentation et lien vers le CV.
- Sections À propos, Compétences, Projets et Contact.
- Design responsive optimisé mobile / desktop.
- Intégration d'un chatbot IA pour les visiteurs via l’API Gemini (backend Node).

## Stack technique

- React + TypeScript
- Vite
- Tailwind CSS
- ESLint / Prettier
- Backend Node.js / Express pour l’API Gemini

## Installation (front)

git clone https://github.com/KOUAMLAN/portfolio-evle.git
cd portfolio-evle
npm install
npm run dev

text

L’application sera disponible sur `http://localhost:5173`.

## Backend Gemini

Le backend dédié à l’assistant IA se trouve dans le dossier `gemini-backend` à la racine du projet.

### Configuration

Dans `gemini-backend/.env` :

GEMINI_API_KEY=VOTRE_CLE_GEMINI_ICI
PORT=4000

text

### Installation et lancement du backend

cd gemini-backend
npm install
npm start

text

Le backend expose une route `POST /api/chat` sur `http://localhost:4000/api/chat`.

## Configuration du front pour l’IA

À la racine du projet (front), créer ou compléter le fichier `.env` :

VITE_GEMINI_BACKEND_URL=http://localhost:4000/api/chat

text

Le front utilise cette URL pour communiquer avec le backend Gemini et afficher les réponses de l’assistant dans le chatbot.

## Build pour la prod

npm run build
npm run preview

text

## Sécurité

- Les clés API (comme Gemini) sont chargées via des variables d'environnement.
- Ne jamais committer les secrets dans le dépôt (`.env` est ignoré par Git).
- Le backend Node (`gemini-backend`) est responsable des appels à l’API Gemini pour éviter d’exposer la clé dans le front.

## Auteur

- **Evle Kouamlan**
- GitHub : https://github.com/KOUAMLAN