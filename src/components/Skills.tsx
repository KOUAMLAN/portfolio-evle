import React from 'react';
import Reveal from './Reveal';
import { SKILLS_LIST } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-3xl font-heading font-bold mb-4 text-secondary">Compétences Techniques</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />
        </Reveal>

        <Reveal delay={150}>
          <div className="flex flex-wrap justify-center gap-4">
            {SKILLS_LIST.map((skill) => (
              <div
                key={skill}
                className="px-6 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-primary hover:text-primary hover:shadow-md transition-all cursor-default font-medium text-gray-700 hover:-translate-y-1"
              >
                {skill}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;