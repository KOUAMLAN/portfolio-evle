/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // Bleu confiance
        secondary: "#1E293B", // Gris sombre pro
        accent: "#F59E0B", // Orange énergie
        background: "#F8FAFC", // Gris très clair
        "argent-green": "#00bc77",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}