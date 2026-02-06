# Portfolio Evle

Application de portfolio personnel construite avec **React**, **TypeScript**, **Vite** et **Tailwind CSS** pour présenter mes projets, compétences et informations de contact.

## Fonctionnalités

- Section Hero avec présentation et lien vers le CV
- Sections À propos, Compétences, Projets et Contact
- Design responsive optimisé mobile / desktop
- **Chatbot IA** pour les visiteurs via l'API Gemini (backend Node.js)

## Stack technique

- **React + TypeScript**
- **Vite** (build ultra-rapide)
- **Tailwind CSS** (design moderne)
- **ESLint / Prettier** (code propre)
- **Backend Node.js / Express** pour l'API Gemini

## 🚀 Installation rapide (front)

git clone https://github.com/KOUAMLAN/portfolio-evle.git
cd portfolio-evle
npm install
npm run dev

text

L'application sera disponible sur `http://localhost:5173`.

## 🤖 Backend Gemini (IA Chatbot)

Le backend dédié à l'assistant IA se trouve dans le dossier **`gemini-backend`** à la racine.

### Configuration

Dans `gemini-backend/.env` :

GEMINI_API_KEY=VOTRE_CLE_GEMINI_ICI
PORT=4000

text

### Lancement backend

cd gemini-backend
npm install
npm start

text

**Route exposée** : `POST /api/chat` sur `http://localhost:4000/api/chat`

## 🔌 Connexion front ↔ backend

Dans `.env` à la racine (front) :

VITE_GEMINI_BACKEND_URL=http://localhost:4000/api/chat

text

## ⚡ Déploiement production

npm run build # Génère dist/
gh-pages -d dist # Déploie sur GitHub Pages

text

**Site live** : https://evle-dev.fr

## 🔒 Sécurité

- ✅ Clés API en variables d'environnement (`.env` ignoré par Git)
- ✅ Backend Node proxy pour Gemini (clé jamais exposée côté front)
- ✅ Pas de secrets dans le code source

## 👨‍💻 Auteur

**Evle Kouamlan**  
** développeur full stack junior **  
[GitHub](https://github.com/KOUAMLAN) | [Portfolio](https://evle-dev.fr)
