import { GoogleGenAI } from "@google/genai";
import { ABOUT_DATA, PERSONAL_INFO, PROJECTS, SKILLS_LIST } from "../constants";

const CONTEXT = `
Tu es l'assistant virtuel du portfolio d'${PERSONAL_INFO.name}.
Ton but est de répondre aux questions des recruteurs de manière professionnelle, polie et concise.

Profil d'Evle :
- Titre : ${PERSONAL_INFO.title}
- Compétences : Développeur Front-End spécialisé React, TypeScript, Accessibilité.
- Qualités : Rigueur, Créativité, Adaptabilité.

Bio détaillée :
${Object.values(ABOUT_DATA).join("\n")}

Compétences techniques : ${SKILLS_LIST.join(", ")}

Projets réalisés :
${PROJECTS.map(p => `- ${p.title} (${p.tags.join(', ')}): ${p.description}. Résultat: ${p.results}`).join("\n")}

Instructions :
1. Si on te demande ses coordonnées, donne : ${PERSONAL_INFO.email}.
2. Mets en avant sa capacité technique et son code propre.
3. Si tu ne sais pas, propose de contacter Evle directement.
`;

// RÉCUPÉRATION SÉCURISÉE DE LA CLÉ DEPUIS LE FICHIER .ENV
// Le .trim() enlève les espaces accidentels lors du copier-coller
const API_KEY = import.meta.env.VITE_API_KEY ? import.meta.env.VITE_API_KEY.trim() : "";

let ai: GoogleGenAI | null = null;

if (API_KEY && API_KEY.startsWith("AIza")) {
  try {
    ai = new GoogleGenAI({ apiKey: API_KEY });
  } catch (e) {
    console.error("Erreur d'initialisation Gemini:", e);
  }
}

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  // Vérification si la clé est absente ou malformée
  if (!API_KEY || !API_KEY.startsWith("AIza")) {
    return "⚠️ Erreur de configuration : La clé API n'est pas détectée ou incorrecte. Assurez-vous d'avoir le fichier .env à la racine avec VITE_API_KEY=... et d'avoir RELANCÉ le serveur (npm run dev).";
  }
  
  if (!ai) {
    try {
        ai = new GoogleGenAI({ apiKey: API_KEY });
    } catch {
        return "❌ Erreur interne : Impossible d'initialiser le service IA. Vérifiez votre connexion internet.";
    }
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: CONTEXT,
      },
      contents: [
        {
          role: 'user',
          parts: [{ text: userMessage }]
        }
      ]
    });

    return response.text || "Je n'ai pas pu générer de réponse.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return "Une erreur technique est survenue lors de la communication avec l'IA. Vérifiez votre connexion internet.";
  }
};