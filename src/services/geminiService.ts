export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  const lower = userMessage.toLowerCase().trim();

  if (lower === '' || lower === 'bonjour' || lower.includes('salut') || lower.includes('hello')) {
    return "Bonjour et bienvenue sur le portfolio d'Evle Kouamlan. Je peux répondre à vos questions sur ses compétences, ses projets, son expérience et la façon dont il travaille.";
  }

  if (lower.includes('compétence') || lower.includes('skills') || lower.includes('techno')) {
    return "Evle maîtrise React, TypeScript, Tailwind CSS et Vite pour le front-end. Pour le back-end, il utilise Node.js, Express, MongoDB et JWT. Il travaille aussi avec Git et GitHub pour la gestion de version et le déploiement.";
  }

  if (lower.includes('projet') || lower.includes('portfolio') || lower.includes('site')) {
    return "Son portfolio présente plusieurs projets : une application bancaire front-end, un site vitrine responsive et ce portfolio React avec un assistant IA. Chaque projet met en avant le code propre, l'accessibilité et le responsive.";
  }

  if (lower.includes('expérience') || lower.includes('parcours') || lower.includes('histoire')) {
    return "Evle a commencé comme formateur de français langue étrangère, puis s'est formé au développement web. Il travaille aujourd'hui sur des projets front-end et full-stack en utilisant les technologies modernes du JavaScript.";
  }

  if (lower.includes('prix') || lower.includes('tarif') || lower.includes('budget') || lower.includes('combien')) {
    return "Les tarifs dépendent du type de projet, de sa complexité et de la durée de la mission. Evle s'aligne sur les pratiques habituelles des développeurs freelance en France et adapte son prix au besoin réel. Pour un montant précis, il est préférable de le contacter et de lui présenter votre projet.";
  }

  if (lower.includes('contact') || lower.includes('email') || lower.includes('mail') || lower.includes('joindre')) {
    return "Pour le contacter, vous pouvez utiliser les liens indiqués sur ce portfolio, par exemple son profil GitHub ou LinkedIn, ou le moyen de contact mentionné dans la section dédiée.";
  }

  return "Je suis l'assistant d'Evle Kouamlan. Vous pouvez me poser des questions sur ses compétences, ses projets, son parcours ou ses tarifs, et je vous donnerai des informations pour vous aider à mieux le connaître.";
};