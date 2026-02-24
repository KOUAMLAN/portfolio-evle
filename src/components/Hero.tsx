import React from 'react';
import { ArrowRight, Atom, Github, Linkedin, BookOpen, Users } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Content - rankingCoach MOTS-CLÉS ICI */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-sm font-semibold">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Disponible pour opportunités
          </div>
          
          {/* H1 rankingCoach - MOT-CLÉS EXACTS */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-secondary leading-tight tracking-tight">
            Développeur full stack | Développeur web freelance | Développeur react
          </h1>

          {/* H2 rankingCoach - 1er mot-clé */}
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary">
            Evle-Créations : développeur full stack expert 
          </h2>
          
          {/* H3 rankingCoach - 2ème mot-clé */}
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
            Développeur web freelance React/Node.js
          </h3>
          
          {/* Paragraphe 3ème mot-clé */}
          <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
            Spécialiste développeur react pour sites vitrines , applications fullstack . 
            Lighthouse 95+ garanti.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-blue-700 transition-all shadow-lg hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Voir mes projets
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-secondary bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            >
              Me contacter
            </a>
          </div>

          {/* ✅ BACKLINKS SOCIAUX - rankingCoach */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-6 pb-4">
            {PERSONAL_INFO.socials.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1 p-3 bg-white/50 hover:bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary/50"
                aria-label={`Visiter mon profil ${social.name}`}
              >
                <social.icon size={28} className="text-gray-600 group-hover:text-primary transition-colors" />
                <span className="text-xs font-medium text-gray-700 group-hover:text-primary">{social.name}</span>
              </a>
            ))}
          </div>

          {/* ✅ BACKLINKS ÉDUCATIFS - OpenClassrooms + Communauté */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <a 
              href="https://openclassrooms.com/fr/members/6723456" 
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 rounded-lg text-sm font-medium hover:shadow-md transition-all border border-green-200 hover:border-green-300"
            >
              <BookOpen size={18} />
              OpenClassrooms RNCP
            </a>
            <a 
              href="https://www.meetup.com/fr-FR/react-lyon/" 
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 rounded-lg text-sm font-medium hover:shadow-md transition-all border border-purple-200 hover:border-purple-300"
            >
              <Users size={18} />
              React Lyon Meetup
            </a>
          </div>
        </motion.div>
        
        {/* Image / Avatar Area - INCHANGÉ */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center relative py-10 md:py-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
            
            <img 
               src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop" 
               alt={`Portrait de ${PERSONAL_INFO.name}`}
               className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl z-10"
               loading="eager"
            />

            {/* Badges inchangés */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 md:top-0 md:-left-8 bg-white p-3 rounded-xl shadow-lg z-20 flex items-center gap-2 border border-blue-100"
            >
              <div className="text-blue-500 bg-blue-50 p-1.5 rounded-lg">
                  <Atom size={20} />
              </div>
              <span className="font-bold text-secondary text-sm">React & TS</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-10 -right-8 md:top-20 md:-right-12 bg-white p-3 rounded-xl shadow-lg z-20 flex items-center gap-2 border border-green-100"
            >
              <div className="text-green-600 bg-green-50 p-1.5 rounded-lg">
                  <span className="font-bold text-lg">Aa</span>
              </div>
              <span className="font-bold text-secondary text-sm">Accessibilité</span>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 border border-gray-100"
            >
              <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <Atom size={20} />
              </div>
              <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Expertise</p>
                  <p className="text-sm font-bold text-secondary">React.js</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
