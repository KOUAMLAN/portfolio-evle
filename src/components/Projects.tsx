import React from 'react';
import { ExternalLink, Github, TrendingUp, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-3xl font-heading font-bold mb-4 text-secondary">
            Mes Projets
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Une sélection de projets réalisés durant ma formation et mes expérimentations personnelles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full group focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
            >
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative bg-gray-200">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={project.image}
                  alt={`Aperçu du projet ${project.title}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Details Box */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg text-sm space-y-3 border border-gray-100">
                  <div className="flex gap-2 items-start">
                     <CheckCircle2 size={16} className="text-green-600 mt-0.5 shrink-0" />
                     <p><span className="font-bold text-secondary">Objectif :</span> {project.objectives}</p>
                  </div>
                  <div className="flex gap-2 items-start">
                     <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                     <p><span className="font-bold text-secondary">Résultat :</span> {project.results}</p>
                  </div>
                  
                  {/* Improvement Perspectives Section */}
                  <div className="pt-3 mt-3 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-accent font-bold mb-1">
                        <TrendingUp size={16} />
                        <span>Perspectives d'amélioration :</span>
                    </div>
                    <p className="text-gray-600 italic pl-6">{project.improvements}</p>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex gap-4 mt-auto pt-4 border-t border-gray-100">
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-secondary transition-colors text-sm font-semibold focus:outline-none focus:text-primary rounded"
                    aria-label={`Voir le code source de ${project.title}`}
                  >
                    <Github size={18} className="mr-2" />
                    Code
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-blue-700 transition-colors text-sm font-semibold ml-auto focus:outline-none focus:underline rounded"
                      aria-label={`Voir la démo de ${project.title}`}
                    >
                      Démo Live
                      <ExternalLink size={18} className="ml-2" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;