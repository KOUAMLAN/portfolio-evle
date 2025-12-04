import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Typographique Minimaliste - Evle.dev */}
          <div className="flex-shrink-0">
            <a 
              href="#hero" 
              className="font-heading font-extrabold text-2xl tracking-tighter text-primary hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1"
              aria-label="Evle.dev - Retour à l'accueil"
            >
                Evle.dev
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-secondary hover:text-primary font-medium text-sm uppercase tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-md transition-colors"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 py-4 space-y-2 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-secondary hover:text-primary hover:bg-gray-50 rounded-lg text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;