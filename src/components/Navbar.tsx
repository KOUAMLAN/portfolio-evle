import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2 sm:py-3"
          : "bg-white/80 backdrop-blur-sm py-3 sm:py-5"
      }`}
    >

      <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full box-border">

        <div className="flex justify-between items-center gap-2 min-w-0">


          {/* LOGO EC CONSERVÉ */}
          <a
            href="#hero"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            aria-label="Retour à l'accueil"
          >

            <span
              className="
                w-9
                h-9
                sm:w-10
                sm:h-10
                shrink-0
                rounded-lg
                bg-accent
                text-white
                font-heading
                font-extrabold
                text-sm
                sm:text-base
                flex
                items-center
                justify-center
                shadow-md
              "
            >
              EC
            </span>


            {/* Evle.dev SUPPRIMÉ */}

          </a>



          {/* MENU DESKTOP */}
          <div className="hidden md:flex space-x-8 items-center">

            {navLinks.map((link) => (

              <a
                key={link.name}
                href={link.href}
                className="
                  text-secondary
                  hover:text-primary
                  font-medium
                  text-sm
                  uppercase
                  tracking-wide
                  transition-colors
                "
              >
                {link.name}
              </a>

            ))}

          </div>



          {/* MENU MOBILE */}
          <div className="md:hidden flex items-center shrink-0">

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                text-secondary
                hover:text-primary
                p-2
                min-w-[44px]
                min-h-[44px]
                flex
                items-center
                justify-center
              "
              aria-label={
                isOpen
                  ? "Fermer le menu"
                  : "Ouvrir le menu"
              }
            >

              {isOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}

            </button>

          </div>


        </div>

      </nav>



      {isOpen && (

        <div
          className="
            md:hidden
            bg-white
            border-t
            border-gray-100
            absolute
            w-full
            shadow-lg
          "
        >

          <div
            className="
              px-3
              py-3
              space-y-1
              flex
              flex-col
            "
          >

            {navLinks.map((link) => (

              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  block
                  px-4
                  py-3
                  text-secondary
                  hover:text-primary
                  hover:bg-gray-50
                  rounded-lg
                  text-base
                  font-medium
                  min-h-[44px]
                "
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