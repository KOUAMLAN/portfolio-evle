// Priorité SIMULATION si pas d'URL explicite
const API_URL = import.meta.env.VITE_GEMINI_BACKEND_URL?.trim();

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  // 🔥 SIMULATION FORCÉE si pas d'URL backend (mobile/soutenance)
  if (!API_URL || API_URL === '') {
    console.log('🔥 Mode simulation IA (mobile/soutenance)');
    return new Promise(resolve => {
      setTimeout(() => {
        const reponses = [
          "Evle Kouamlan : React + TypeScript + Tailwind CSS + Vite 🚀",
          "Portfolio 100% responsive mobile-first avec chatbot IA 💬",
          "Backend Node.js + Gemini API (proxy sécurisé en prod) 🔒",
          "De formateur FLE à développeur full-stack React ✨"
        ];
        resolve(reponses[Math.floor(Math.random() * 4)]);
      }, 1500);
    });
  }

  // Backend réel uniquement si URL explicite
  try {
    console.log('🌐 Appel backend réel:', API_URL);
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage })
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      return `❌ Backend: ${data.error || 'Erreur serveur'}`;
    }

    const data = await res.json();
    return data.reply || "Pas de réponse";
  } catch (e) {
    console.error("Backend erreur:", e);
    return "Backend inaccessible → simulation active";
  }
};
