import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // ← RETOUR À "/" pour evle-dev.fr (custom domain)
  
  // Développement localhost (inchangé ✅)
  server: {
    port: 5173,
    open: true,  // ouvre auto le navigateur
    host: true   // permet localhost ET 127.0.0.1
  },

  // Build production (inchangé ✅)
  build: {
    outDir: "dist",
    sourcemap: true
  }
});