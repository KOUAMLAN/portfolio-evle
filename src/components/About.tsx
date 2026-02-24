import React from 'react';
import { ABOUT_DATA } from '../constants';
import { BookOpen, Code, Lightbulb, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">À Propos</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid gap-8">
          
          {/* Section 1: Identity & Journey */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-blue-50 p-8 rounded-2xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg text-primary shadow-sm hidden sm:block">
                    <BookOpen size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-primary mb-3 font-heading">Mon Parcours</h3>
                    <p className="mb-4 font-medium text-secondary text-lg">{ABOUT_DATA.act1_identity}</p>
                    <p className="text-gray-600 leading-relaxed">{ABOUT_DATA.act2_journey}</p>
                </div>
            </div>
          </motion.div>

          {/* Section 2: Stack & Impact */}
          <div className="grid md:grid-cols-2 gap-8">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:border-primary/30 transition-colors"
             >
                <div className="flex items-center gap-3 mb-4 text-accent">
                    <Code size={24} />
                    <h3 className="text-lg font-bold text-secondary">Stack Technique</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{ABOUT_DATA.act3_stack}</p>
             </motion.div>
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:border-primary/30 transition-colors"
             >
                <div className="flex items-center gap-3 mb-4 text-green-600">
                    <Rocket size={24} />
                    <h3 className="text-lg font-bold text-secondary">Impact</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{ABOUT_DATA.act4_impact}</p>
             </motion.div>
          </div>

          {/* Section 3: Vision */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-white/10 rounded-lg text-yellow-300 hidden sm:block">
                    <Lightbulb size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-3 font-heading">Ma Vision</h3>
                    <p className="mb-4 italic text-gray-300 border-l-2 border-primary pl-4">"{ABOUT_DATA.act5_approach}"</p>
                    <p className="font-semibold text-white pt-2">{ABOUT_DATA.act6_ambition}</p>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;