import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // domaine custom evle-dev.fr ✅ CORRECT
  
  // Développement localhost (corrige http://localhost:5173)
  server: {
    port: 5173,
    open: true,  // ouvre auto le navigateur
    host: true   // permet localhost ET 127.0.0.1
  },

  // Build production (GitHub Pages)
  build: {
    outDir: "dist",
    sourcemap: true
  }
});