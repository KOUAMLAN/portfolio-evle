import React, { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


// Lazy loading des sections secondaires
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const AIChat = lazy(() => import("./components/AIChat"));



const LoadingSection = () => (

  <div
    className="
      min-h-[200px]
      flex
      items-center
      justify-center
      text-gray-400
    "
  >

    Chargement...

  </div>

);



const App: React.FC = () => {


  return (

    <div
      className="
        min-h-screen
        bg-background
        text-secondary
        font-sans
        selection:bg-primary
        selection:text-white
        overflow-x-hidden
        w-full
        max-w-[100vw]
      "
    >


      <Navbar />


      <main>


        {/* Chargement immédiat = LCP */}
        <Hero />



        <Suspense fallback={<LoadingSection />}>

          <About />

          <Skills />

          <Projects />

          <Contact />

        </Suspense>


      </main>



      <Footer />



      <Suspense fallback={null}>

        <AIChat />

      </Suspense>



    </div>

  );

};



export default App;