const API_URL = import.meta.env.VITE_GEMINI_BACKEND_URL?.trim() || '';

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  // 🔥 SIMULATION si pas de backend configuré pour la soutenance (ou local)
  if (!API_URL) {
    return new Promise(resolve => {
      setTimeout(() => {
        const reponses = [
          "Evle Kouamlan : React expert, TypeScript, Tailwind CSS, Vite 🚀",
          "Portfolio responsive mobile-first avec chatbot IA intégré 💬",
          "Backend Node.js sécurisé + Gemini API proxyé 🔒",
          "De formateur FLE à développeur full-stack ✨"
        ];
        // Réponse aléatoire pour simuler IA
        const randomReply = reponses[Math.floor(Math.random() * reponses.length)];
        resolve(randomReply);
      }, 1500); // délai 1.5s crédible
    });
  }

  // Sinon, appel réel au backend configuré
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: userMessage })
    });

    if (!res.ok) {
      let data = {};
      try {
        data = await res.json();
      } catch {
        data = {};
      }
      const msg =
        typeof data.error === "string"
          ? data.error
          : "Erreur lors de la réponse de l'assistant IA.";
      return `❌ ${msg}`;
    }

    const data = await res.json();
    return data.reply || "Je n'ai pas pu générer de réponse.";
  } catch (e) {
    console.error("Erreur de communication avec le backend IA:", e);
    return "Une erreur technique est survenue lors de la communication avec l'assistant. Réessayez plus tard.";
  }
};