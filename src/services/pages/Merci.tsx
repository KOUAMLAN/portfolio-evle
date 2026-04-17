import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Confirmation from "./components/Confirmation";
import Merci from "./services/pages/Merci";

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/portfolio-evle/">
      <div className="min-h-screen bg-background text-secondary font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </main>
            }
          />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/merci" element={<Merci />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
Fichier Merci.tsx complet
tsx
import React from "react";
import { Link } from "react-router-dom";

const Merci: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 px-4 text-white">
      <div className="max-w-xl text-center">
        <div className="w-24 h-24 mx-auto mb-8 bg-green-500/20 rounded-2xl flex items-center justify-center">
          <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
          Merci pour votre message !
        </h1>

        <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-lg mx-auto">
          Votre demande a bien été transmise. Je vous répondrai dans les plus brefs délais.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-blue-600 text-white text-lg font-semibold hover:from-blue-600 hover:to-primary transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
};

export default Merci;