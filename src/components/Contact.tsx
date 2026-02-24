import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-secondary text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
        />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-heading font-bold mb-8"
        >
            Me Contacter
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 mb-12 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Je suis actuellement à l'écoute de nouvelles opportunités. Que vous ayez une question technique, une proposition de mission ou simplement envie de discuter pédagogie et code, n'hésitez pas !
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-8 mb-12"
        >
          {PERSONAL_INFO.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 rounded-full hover:bg-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-secondary"
              aria-label={`Me suivre sur ${social.name}`}
            >
              <social.icon size={24} className="text-white" />
            </a>
          ))}
        </motion.div>

        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-primary/50 text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-secondary"
        >
          Envoyer un email
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;