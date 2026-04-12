import React from 'react';
import { ABOUT_DATA } from '../constants';
import { BookOpen, Code, Lightbulb, Rocket } from 'lucide-react';
import Reveal from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">À propos</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </Reveal>

        <div className="grid gap-8">
          <Reveal delay={150}>
            <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg text-primary shadow-sm hidden sm:block">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">Mon parcours</h3>
                  <p className="mb-4 font-medium text-slate-800 text-lg">{ABOUT_DATA.act1_identity}</p>
                  <p className="text-slate-700 leading-relaxed">{ABOUT_DATA.act2_journey}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={200}>
              <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-4 text-accent">
                  <Code size={24} />
                  <h3 className="text-lg font-bold text-slate-900">Stack technique</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">{ABOUT_DATA.act3_stack}</p>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-4 text-green-600">
                  <Rocket size={24} />
                  <h3 className="text-lg font-bold text-slate-900">Impact</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">{ABOUT_DATA.act4_impact}</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-white/10 rounded-lg text-yellow-300 hidden sm:block">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 font-heading">Ma vision</h3>
                  <p className="mb-4 italic text-slate-300 border-l-2 border-primary pl-4">
                    "{ABOUT_DATA.act5_approach}"
                  </p>
                  <p className="font-semibold text-white pt-2">{ABOUT_DATA.act6_ambition}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
