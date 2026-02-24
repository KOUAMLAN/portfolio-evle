import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("❌ GEMINI_API_KEY manquante dans .env");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

const buildContext = () => `
Tu es l'assistant virtuel du portfolio d'Evle Kouamlan.
Réponds de manière professionnelle, claire et concise.
`;

app.post("/api/chat", async (req, res) => {
  try {
    const userMessage = req.body?.message;
    if (!userMessage || typeof userMessage !== "string") {
      return res.status(400).json({ error: "Message invalide." });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      config: { systemInstruction: buildContext() },
      contents: [
        {
          role: "user",
          parts: [{ text: userMessage }]
        }
      ]
    });

    const text = response.text || "Je n'ai pas pu générer de réponse.";
    res.json({ reply: text });
  } catch (err) {
    console.error("Erreur Gemini backend:", err);

    const status = err?.error?.status;
    const message = err?.error?.message;

    if (status === "PERMISSION_DENIED") {
      return res.status(403).json({
        error: "Accès à l'API Gemini refusé. Clé révoquée ou permissions insuffisantes."
      });
    }

    res.status(500).json({
      error: "Erreur interne du serveur IA. Réessayez plus tard."
    });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`✅ Gemini backend en écoute sur http://localhost:${port}`);
});