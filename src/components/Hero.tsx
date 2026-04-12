import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Présentation développeur"
      className="min-h-screen flex items-center pt-24 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl -z-10 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-emerald-200/10 rounded-full blur-3xl -z-10 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <div className="hero-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              Disponible pour opportunités
            </div>

            <h1 className="hero-reveal hero-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900">
              Développeur JavaScript freelance
            </h1>

            <h2 className="hero-reveal hero-delay-2 text-xl md:text-2xl font-bold text-blue-600">
              Développeur React | Développeur Full Stack JavaScript | Développeur web freelance
            </h2>

            <div className="hero-reveal hero-delay-3 flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                React
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
                TypeScript
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold">
                JavaScript
              </span>
            </div>

            <p className="hero-reveal hero-delay-4 text-base md:text-lg text-gray-700 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Création de sites web modernes, performants et accessibles pour professionnels et PME.
            </p>

            <div className="hero-reveal hero-delay-5 flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Voir mes projets
                <ArrowRight className="ml-2" size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-gray-900 bg-white border border-gray-300 hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Me contacter
              </a>
            </div>

            <div className="hero-reveal hero-delay-5 flex justify-center md:justify-start gap-5 pt-2">
              {PERSONAL_INFO.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
                  aria-label={`Visiter mon profil ${social.name}`}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center relative py-8 md:py-0">
            <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px]">
              <img
                src="/image/hero-360w.webp"
                srcSet="/image/hero-360w.webp 360w, /image/hero-480w.webp 480w"
                sizes="(max-width: 639px) 250px, (max-width: 767px) 300px, 360px"
                alt="Evle Williams, développeur React freelance"
                width="360"
                height="360"
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />

              <span className="absolute left-1/2 -translate-x-1/2 -top-5 sm:-top-6 md:-top-8 inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white shadow-lg border border-gray-200 text-gray-900 font-semibold text-xs sm:text-sm whitespace-nowrap hero-reveal hero-delay-2">
                React
              </span>

              <span className="absolute -right-8 sm:-right-10 md:-right-12 top-1/2 -translate-y-1/2 inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-700 text-white shadow-lg font-semibold text-xs sm:text-sm whitespace-nowrap hero-reveal hero-delay-3">
                TypeScript
              </span>

              <span className="absolute left-1/2 -translate-x-1/2 -bottom-5 sm:-bottom-6 md:-bottom-8 inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-emerald-700 text-white shadow-lg font-semibold text-xs sm:text-sm whitespace-nowrap hero-reveal hero-delay-4">
                JavaScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;