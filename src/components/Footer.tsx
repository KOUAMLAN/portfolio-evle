import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Star, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="text-slate-400 text-sm">
            Développeur Full Stack React - Sites web performants et modernes
          </div>
          
          <div className="text-center md:text-right space-y-2">
            <div className="flex items-center justify-end gap-2 text-xs bg-green-500/20 p-3 rounded-lg border border-green-500/30">
              <Star size={16} className="text-yellow-400 animate-pulse" />
              <a 
                href="https://goshort.io/_32a7b1b7934d3b43c831eadc54a3925c"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-yellow-300 transition-colors group"
              >
                ⭐ Évaluer mon service
                <ExternalLink size={12} className="inline ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <p className="text-slate-400 text-sm font-sans">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. Tous droits réservés. | 
              <a href="#hero" className="hover:text-primary font-semibold ml-1">Portfolio React</a>
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-end gap-6 pb-4 pt-6 border-t border-slate-800">
          {PERSONAL_INFO.socials.map((social, index) => (
            <a 
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg group"
              aria-label={`Visiter mon profil ${social.name}`}
            >
              <social.icon size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
