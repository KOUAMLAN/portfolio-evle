export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const lower = userMessage.toLowerCase().trim();

      // 1. Bonjour / accueil
      if (lower === '' || lower === 'bonjour' || lower.includes('salut') || lower.includes('hello')) {
        resolve(
          "Bonjour et bienvenue sur le portfolio d'Evle Kouamlan. " +
          "Je peux répondre à vos questions sur ses compétences, ses projets, son expérience et la façon dont il travaille."
        );
        return;
      }

      // 2. Compétences
      if (lower.includes('compétence') || lower.includes('skills') || lower.includes('techno')) {
        resolve(
          "Evle maîtrise React, TypeScript, Tailwind CSS et Vite pour le front-end. " +
          "Pour le back-end, il utilise Node.js, Express, MongoDB et JWT. " +
          "Il travaille aussi avec Git et GitHub pour la gestion de version et le déploiement."
        );
        return;
      }

      // 3. Projets / portfolio
      if (lower.includes('projet') || lower.includes('portfolio') || lower.includes('site')) {
        resolve(
          "Son portfolio présente plusieurs projets : une application bancaire front-end, " +
          "un site vitrine responsive et ce portfolio React avec un assistant IA. " +
          "Chaque projet met en avant le code propre, l'accessibilité et le responsive."
        );
        return;
      }

      // 4. Parcours / expérience
      if (lower.includes('expérience') || lower.includes('parcours') || lower.includes('histoire')) {
        resolve(
          "Evle a commencé comme formateur de français langue étrangère, puis s'est formé au développement web. " +
          "Il travaille aujourd'hui sur des projets front-end et full-stack en utilisant les technologies modernes du JavaScript."
        );
        return;
      }

      // 5. Tarifs / prix
      if (lower.includes('prix') || lower.includes('tarif') || lower.includes('budget') || lower.includes('combien')) {
        resolve(
          "Les tarifs dépendent du type de projet, de sa complexité et de la durée de la mission. " +
          "Evle s'aligne sur les pratiques habituelles des développeurs freelance en France et adapte son prix au besoin réel. " +
          "Pour un montant précis, il est préférable de le contacter et de lui présenter votre projet."
        );
        return;
      }

      // 6. Contact
      if (lower.includes('contact') || lower.includes('email') || lower.includes('mail') || lower.includes('joindre')) {
        resolve(
          "Pour le contacter, vous pouvez utiliser les liens indiqués sur ce portfolio, " +
          "par exemple son profil GitHub ou LinkedIn, ou le moyen de contact mentionné dans la section dédiée."
        );
        return;
      }

      // 7. Question générale
      resolve(
        "Je suis l'assistant d'Evle Kouamlan. Vous pouvez me poser des questions sur ses compétences, ses projets, " +
        "son parcours ou ses tarifs, et je vous donnerai des informations pour vous aider à mieux le connaître."
      );
    }, 1200); // délai réaliste
  });
};