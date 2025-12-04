// src/services/geminiService.ts

const API_URL =
  import.meta.env.VITE_GEMINI_BACKEND_URL?.trim() || "http://localhost:4000/api/chat";

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: userMessage })
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
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