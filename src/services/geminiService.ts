const API_URL = import.meta.env.VITE_GEMINI_BACKEND_URL?.trim() || '';

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  // 🔥 SIMULATION si pas de backend configuré
  if (!API_URL) {
    return new Promise(resolve => {
      setTimeout(() => {
        const reponses = [
          "Evle Kouamlan : React expert, TypeScript, Tailwind CSS, Vite 🚀",
          "Portfolio responsive mobile-first avec chatbot IA intégré 💬",
          "Backend Node.js sécurisé + Gemini API proxyé 🔒",
          "De formateur FLE à développeur full-stack ✨"
        ];
        resolve(reponses[Math.floor(Math.random() * reponses.length)]);
      }, 1500);
    });
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: userMessage })
    });

    if (!res.ok) {
      let errorMsg = "Erreur lors de la réponse de l'assistant IA.";
      try {
        const data = await res.json();
        if (data && typeof data.error === "string") {
          errorMsg = data.error;
        }
      } catch {}
      return `❌ ${errorMsg}`;
    }

    const data = await res.json();
    return data.reply || "Je n'ai pas pu générer de réponse.";
  } catch (e) {
    console.error("Erreur de communication avec le backend IA:", e);
    return "Une erreur technique est survenue lors de la communication avec l'assistant. Réessayez plus tard.";
  }
};