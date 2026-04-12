import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-heading font-bold mb-8">Me contacter</h2>

        <p className="text-slate-300 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
          Je suis actuellement à l'écoute de nouvelles opportunités. Que vous ayez une question technique, une proposition de mission ou simplement envie d'échanger, n'hésitez pas !
        </p>

        <div className="flex justify-center gap-8 mb-12">
          {PERSONAL_INFO.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 rounded-full hover:bg-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              aria-label={`Me suivre sur ${social.name}`}
            >
              <social.icon size={24} className="text-white" />
            </a>
          ))}
        </div>

        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-primary/50 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          Envoyer un email
        </a>
      </div>
    </section>
  );
};

export default Contact;