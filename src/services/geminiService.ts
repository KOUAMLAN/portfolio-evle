
// src/services/geminiService.ts
export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const lower = userMessage.toLowerCase().trim();

      // 1. Message de bienvenue / premier contact
      if (lower === '' || lower === 'bonjour' || lower.includes("salut") || lower.includes("hello")) {
        resolve(
          "Bonjour et bienvenue sur le portfolio d'Evle Kouamlan. " +
          "Je peux répondre à vos questions sur ses compétences, ses projets, son expérience et ses tarifs."
        );
        return;
      }

      // 2. Compétences techniques
      if (lower.includes('compétence') || lower.includes('skills') || lower.includes('techno')) {
        resolve(
          "Evle maîtrise principalement React, TypeScript, Tailwind CSS, Vite pour le front-end, " +
          "et Node.js avec MongoDB et JWT pour le back-end. Il utilise Git et GitHub pour la gestion de version et le déploiement."
        );
        return;
      }

      // 3. Projets / portfolio
      if (lower.includes('projet') || lower.includes('portfolio') || lower.includes('site')) {
        resolve(
          "Son portfolio présente plusieurs projets, dont une application bancaire front-end, " +
          "un site vitrine responsive et ce portfolio React avec un assistant IA intégré. " +
          "Vous pouvez les consulter directement sur les sections Projets du site."
        );
        return;
      }

      // 4. Parcours / expérience
      if (lower.includes('expérience') || lower.includes('parcours') || lower.includes('histoire')) {
        resolve(
          "Evle a commencé comme formateur de français langue étrangère, puis s'est reconverti en développeur web. " +
          "Il s'est formé aux technologies modernes du web et travaille aujourd'hui sur des projets front-end et full-stack."
        );
        return;
      }

      // 5. Tarifs et fonctionnement
      if (lower.includes('prix') || lower.includes('tarif') || lower.includes('budget') || lower.includes('combien')) {
        resolve(
          "Les tarifs d'Evle dépendent du type de projet, de sa complexité et de la durée de la mission. " +
          "Il s'appuie sur les pratiques habituelles des développeurs freelance en France pour proposer des tarifs justes et cohérents. " +
          "Pour un devis précis adapté à votre besoin, le mieux est de le contacter directement via les informations de contact du portfolio."
        );
        return;
      }

      // 6. Contact
      if (lower.includes('contact') || lower.includes('email') || lower.includes('mail') || lower.includes('joindre')) {
        resolve(
          "Pour le contacter, vous pouvez utiliser les liens disponibles sur son portfolio, " +
          "comme GitHub ou LinkedIn, ou le formulaire de contact si celui-ci est présent sur le site."
        );
        return;
      }

      // 7. Question générale non reconnue
      resolve(
        "Je suis l'assistant d'Evle Kouamlan. Posez-moi vos questions sur ses compétences, ses projets, son parcours " +
        "ou la manière dont il travaille et fixe ses tarifs, et je vous donnerai des précisions."
      );
    }, 1200); // délai réaliste d'environ 1,2 seconde
  });
};