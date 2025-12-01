# Portfolio Développeur - Evle Kouamlan

Ce projet est le portfolio de fin de parcours Intégrateur Web. Il a été réalisé avec React, TypeScript et Tailwind CSS.

## 🚀 Installation

1. Cloner le projet :
   ```bash
   git clone https://github.com/votre-username/portfolio-evle.git
   cd portfolio-evle
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Lancer en local :
   ```bash
   npm run dev
   ```

## 🛠️ Technologies
- React (Vite)
- TypeScript
- Tailwind CSS
- Framer Motion (Animations)
- Google Gemini API (Chatbot IA)

## 🌐 Déploiement

Ce projet est optimisé pour être déployé sur **Vercel** ou **Netlify**.

### Option 1 : Vercel (Recommandé)
1. Poussez votre code sur GitHub.
2. Créez un compte sur [Vercel](https://vercel.com).
3. Cliquez sur "Add New Project" et sélectionnez votre dépôt GitHub.
4. Dans "Environment Variables", ajoutez votre `GEMINI_API_KEY` si vous utilisez le chatbot.
5. Cliquez sur "Deploy".

### Option 2 : GitHub Pages
1. Installez le paquet `gh-pages` : `npm install gh-pages --save-dev`.
2. Ajoutez `"homepage": "https://votre-username.github.io/portfolio-evle"` dans `package.json`.
3. Ajoutez les scripts de déploiement dans `package.json`.
4. Lancez `npm run deploy`.

## ✅ Checklist Qualité
- [x] HTML Sémantique (Header, Main, Footer, Article, Section)
- [x] Accessibilité (Focus visible, Aria-labels, navigation clavier)
- [x] Responsive Design (Mobile First)
- [x] Performance (Lazy loading des images, code splitté)
