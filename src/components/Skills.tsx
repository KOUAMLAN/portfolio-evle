import React from 'react';
import { SKILLS_LIST } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl font-heading font-bold mb-4 text-secondary">Compétences Techniques</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full"></div>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {SKILLS_LIST.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-6 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-primary hover:text-primary hover:shadow-md transition-all cursor-default font-medium text-gray-700 hover:-translate-y-1"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;