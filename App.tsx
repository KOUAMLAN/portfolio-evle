import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AIChat = lazy(() => import('./components/AIChat'));

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-secondary font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <AIChat />
      </Suspense>
    </div>
  );
};

export default App;