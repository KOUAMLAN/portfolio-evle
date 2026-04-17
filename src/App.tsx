import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Confirmation from "./components/Confirmation";

const App: React.FC = () => {
  return (
    <BrowserRouter>
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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;