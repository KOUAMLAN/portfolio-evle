import React from 'react';
import { ArrowRight, Atom } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
  id="hero"
  className="min-h-[100dvh] flex items-center pt-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden w-full max-w-[100vw]"
>
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 w-full box-border flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 w-full min-w-0 text-center md:text-left space-y-4 sm:space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs sm:text-sm font-semibold max-w-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse shrink-0" />
            <span className="truncate">Disponible pour opportunités</span>
          </div>

          <div className="w-full min-w-0 space-y-3">
            <div
              className="w-12 h-12 sm:w-16 sm:h-16 mx-auto md:mx-0 shadow-lg rounded-lg bg-primary text-white flex items-center justify-center font-heading font-extrabold text-lg sm:text-2xl"
              aria-hidden="true"
            >
              EC
            </div>

            <h1 className="font-heading font-extrabold text-secondary leading-snug tracking-tight text-center md:text-left break-words [overflow-wrap:anywhere] text-[1.2rem] min-[360px]:text-[1.35rem] sm:text-2xl md:text-4xl lg:text-5xl max-w-full">
              <span className="block">Développeur full stack</span>
              <span className="block text-primary text-[1.05rem] min-[360px]:text-[1.2rem] sm:text-xl md:text-3xl lg:text-4xl mt-1">
                Web freelance · React
              </span>
            </h1>
          </div>

          <h2 className="text-sm min-[360px]:text-base sm:text-xl md:text-2xl font-heading font-bold text-primary break-words leading-snug">
            Evle-Créations : expert full stack
          </h2>

          <h3 className="text-xs min-[360px]:text-sm sm:text-lg md:text-xl font-semibold text-gray-700 break-words">
            Développeur web freelance React/Node.js
          </h3>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Sites vitrines et applications fullstack performantes. Lighthouse 95+ garanti.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start pt-2 sm:pt-4 w-full">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-5 py-3 text-sm sm:text-base font-medium rounded-lg text-white bg-primary hover:bg-blue-700 transition-all shadow-lg min-h-[44px] w-full sm:w-auto"
            >
              Voir mes projets
              <ArrowRight className="ml-2 shrink-0" size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 text-sm sm:text-base font-medium rounded-lg text-secondary bg-white border border-gray-300 hover:bg-gray-50 transition-colors min-h-[44px] w-full sm:w-auto"
            >
              Me contacter
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-5 pt-2">
            {PERSONAL_INFO.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label={`Visiter mon profil ${social.name}`}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 w-full flex justify-center relative py-4 sm:py-10 md:py-0 overflow-hidden"
        >
          <div className="relative w-[11rem] h-[11rem] min-[360px]:w-48 min-[360px]:h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 max-w-[80vw] mx-auto shrink-0">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />

            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
              alt={`Portrait de ${PERSONAL_INFO.name}`}
              className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl z-10"
              loading="eager"
            />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 left-0 sm:-left-6 bg-white p-2 rounded-xl shadow-lg z-20 hidden sm:flex items-center gap-2 border border-blue-100"
            >
              <div className="text-blue-500 bg-blue-50 p-1.5 rounded-lg">
                <Atom size={18} />
              </div>
              <span className="font-bold text-secondary text-xs sm:text-sm">React & TS</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-8 -right-2 sm:top-16 sm:-right-8 bg-white p-2 rounded-xl shadow-lg z-20 hidden md:flex items-center gap-2 border border-green-100"
            >
              <div className="text-green-600 bg-green-50 p-1.5 rounded-lg">
                <span className="font-bold text-base">Aa</span>
              </div>
              <span className="font-bold text-secondary text-xs sm:text-sm">Accessibilité</span>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-2 right-0 sm:-bottom-4 sm:-right-4 bg-white p-2 sm:p-3 rounded-xl shadow-xl z-20 hidden sm:flex items-center gap-2 border border-gray-100"
            >
              <div className="bg-primary/10 p-1.5 rounded-full text-primary">
                <Atom size={18} />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase">Expertise</p>
                <p className="text-xs sm:text-sm font-bold text-secondary">React.js</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
