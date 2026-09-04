import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950/60 relative overflow-hidden">
      {/* Ambient Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-slate-100"
          >
            Technological Skills & Tools
          </motion.h3>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillsData.map((cat, catIdx) => (
            <div key={catIdx}>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                {cat.category}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.skills.map((skill, skillIdx) => {
                  const IconComponent = skill.icon;

                  return (
                    <motion.div
                      key={skillIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIdx * 0.05 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="bg-slate-900/50 border border-slate-800/80 p-5 rounded-2xl backdrop-blur-sm relative group overflow-hidden transition-all duration-300"
                    >
                      {/* Ambient Brand Color Glow on Hover */}
                      <div 
                        className="absolute -right-10 -bottom-10 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                        style={{ backgroundColor: skill.color }}
                      />

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3.5">
                          
                          {/* Container Border/Background (TETAP DIAM) */}
                          <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-center relative shadow-inner group-hover:border-slate-700 transition">
                            
                            {/* Khusus Ikon di dalamnya yang BERGERAK / BERANIMASI */}
                            <motion.div
                              animate={skill.spin ? { rotate: 360 } : { y: [0, -4, 0] }}
                              transition={
                                skill.spin
                                  ? { repeat: Infinity, duration: 10, ease: "linear" }
                                  : { repeat: Infinity, duration: 3, ease: "easeInOut", delay: skillIdx * 0.2 }
                              }
                              className="flex items-center justify-center"
                            >
                              <IconComponent 
                                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
                                style={{ color: skill.color }} 
                              />
                            </motion.div>

                          </div>

                          <div>
                            <span className="text-sm font-bold text-slate-200 block group-hover:text-white transition">
                              {skill.name}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono">
                              Proficiency
                            </span>
                          </div>
                        </div>

                        <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-sky-400 transition">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800/50">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                          className="h-full rounded-full transition-all duration-300"
                          style={{
                            background: `linear-gradient(90deg, #0ea5e9, ${skill.color})`
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;