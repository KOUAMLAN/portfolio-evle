import React from 'react';
import { PERSONAL_INFO, BACKLINKS } from '../constants';
import { BookOpen, Users, Code, Star, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'OpenClassrooms', url: 'https://openclassrooms.com/fr/members/6723456', icon: BookOpen },
    { name: 'React Lyon', url: 'https://www.meetup.com/fr-FR/react-lyon/', icon: Users },
    { name: 'GitHub', url: 'https://github.com/KOUAMLAN', icon: Code }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* ✅ BACKLINKS RAPIDES */}
          <div className="flex flex-wrap gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-all duration-300 border border-white/20 hover:border-white/40 group"
                aria-label={`Visiter ${link.name}`}
              >
                <link.icon size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
          
          {/* ✅ LIEN rankingCoach ÉVALUATION */}
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
              <a href="https://evle-dev.fr" className="hover:text-primary font-semibold ml-1">Portfolio React</a>
            </p>
          </div>
        </div>

        {/* Socials footer */}
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
