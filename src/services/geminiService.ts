export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    const response = await fetch("http://localhost:4000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();

    if (!response.ok) {
      return data?.error || "Une erreur est survenue.";
    }

    return data?.reply || "Je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Erreur côté frontend:", error);
    return "Impossible de joindre le serveur IA.";
  }
};