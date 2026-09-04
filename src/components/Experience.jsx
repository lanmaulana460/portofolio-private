import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/experience';
import { Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950/50">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-3xl font-extrabold text-slate-100">
            Experience & Track Record
          </h3>
        </div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {experienceData.map((item, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-sky-400" />

              {/* Year Badge for Desktop */}
              <div className="hidden md:block absolute -left-36 top-1 text-xs font-bold font-mono text-sky-400 text-right w-24">
                {item.year}
              </div>

              <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                <div className="md:hidden flex items-center gap-2 text-xs font-mono text-sky-400 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.year}</span>
                </div>
                <h4 className="text-base font-bold text-slate-100">{item.title}</h4>
                <p className="text-xs font-semibold text-slate-400 mb-3">{item.subtitle}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;