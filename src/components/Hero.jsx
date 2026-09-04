import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Github, 
  Linkedin, 
  Instagram,
  Terminal,
  ShieldCheck
} from 'lucide-react';
import { 
  SiReact, 
  SiTailwindcss, 
  SiVuedotjs, 
  SiNodedotjs, 
  SiLaravel 
} from 'react-icons/si';

// Data Floating Badges (Melayang di luar card)
const floatingBadges = [
  { 
    name: 'React JS', 
    icon: SiReact, 
    color: '#61DAFB', 
    spin: true,
    pos: '-top-6 -left-8', 
    delay: 0 
  },
  { 
    name: 'Tailwind CSS', 
    icon: SiTailwindcss, 
    color: '#06B6D4', 
    spin: false,
    pos: 'top-1/4 -right-12', 
    delay: 0.4 
  },
  { 
    name: 'Vue.js', 
    icon: SiVuedotjs, 
    color: '#4FC08D', 
    spin: false,
    pos: 'bottom-20 -left-12', 
    delay: 0.8 
  },
  { 
    name: 'Laravel', 
    icon: SiLaravel, 
    color: '#FF2D20', 
    spin: false,
    pos: '-bottom-6 right-2', 
    delay: 1.2 
  },
];

const roles = [
  "Junior Web Developer",
  "Frontend Developer",
  "React Developer",
  "Creative Developer"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          currentRole.substring(0, isDeleting ? displayText.length - 1 : displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[380px] h-[380px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* SISI KIRI: Teks & Identitas */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-100 tracking-tight leading-tight">
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400">
              Maulana Developer
            </span>
          </h1>

          <div className="h-8 text-lg sm:text-xl font-medium text-slate-300 flex items-center justify-center lg:justify-start gap-1">
            <span>I am a</span>
            <span className="text-sky-400 font-semibold underline decoration-sky-500/40 decoration-2">
              {displayText}
            </span>
            <span className="animate-pulse text-sky-400">|</span>
          </div>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Seorang developer modern yang berfokus membangun antarmuka web interaktif, responsif, dan estetis dengan teknologi React JS & Tailwind CSS.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 hover:scale-[1.02] transition"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800 text-slate-300 font-semibold text-sm flex items-center justify-center hover:bg-slate-800 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-slate-400">
            <a href="https://github.com/Lanmaulana" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:text-sky-400 hover:border-sky-500/40 transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/maulana-" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:text-sky-400 hover:border-sky-500/40 transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/lan_maulana470" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:text-sky-400 hover:border-sky-500/40 transition">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* SISI KANAN: ID CARD AESTHETIC WITH DROP & SWING ANIMATION */}
        <div className="lg:col-span-5 flex justify-center relative pt-8 pb-10">
          
          {/* CONTAINER UTAMA (TALI + CARD) BER-ANIMASI JATUH & BERAYUN */}
          <motion.div
            initial={{ y: -700, rotate: -22, opacity: 0 }}
            animate={{ 
              y: 0, 
              rotate: [ -22, 14, -8, 4, 0 ],
              opacity: 1 
            }}
            transition={{
              y: { type: "spring", stiffness: 70, damping: 14, mass: 1.2 },
              rotate: { duration: 2.2, ease: "easeOut" },
              opacity: { duration: 0.4 }
            }}
            whileHover={{ 
              rotate: [0, -2, 2, 0],
              transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative flex flex-col items-center origin-top cursor-pointer max-w-[270px] sm:max-w-[290px] w-full"
          >

            {/* TALI LANYARD KAIN BER-TEKSTUR */}
            <div className="w-6 h-36 bg-gradient-to-b from-sky-500 via-sky-700 to-slate-900 border-x border-sky-400/30 flex flex-col items-center justify-around overflow-hidden shadow-2xl shrink-0">
              <span className="rotate-90 text-[8px] font-mono font-black text-sky-200 tracking-widest whitespace-nowrap opacity-60">
                MAULANA DEVELOPER
              </span>
            </div>

            {/* PENGAIT LOGAM STAINLESS STEEL */}
            <div className="flex flex-col items-center z-20 -mt-1 shrink-0">
              <div className="w-5 h-5 rounded-full border-2 border-slate-400 bg-slate-700 shadow-md" />
              <div className="w-3.5 h-5 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-500 rounded-sm shadow-lg border border-slate-600 -mt-2" />
            </div>

            {/* BADGE HOLDER AKRILIK MIKA (SLEEVE) */}
            <div className="w-full p-3 bg-slate-900/80 border border-white/20 rounded-[28px] backdrop-blur-xl shadow-2xl shadow-sky-500/20 relative overflow-visible -mt-1">
              
              {/* Slot Lubang Gantungan Oval */}
              <div className="w-12 h-3.5 bg-slate-950 border border-slate-700 rounded-full mx-auto mb-3 flex items-center justify-center shadow-inner">
                <div className="w-8 h-1 bg-slate-800 rounded-full" />
              </div>

              {/* BODI ID CARD KACA INTI (MINIMALIS & CLEAN) */}
              <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-slate-800/80 rounded-[20px] p-3.5 relative overflow-hidden shadow-inner">
                
                {/* Hologram Iridescent Glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-pink-500/20 via-amber-400/20 to-cyan-400/20 rounded-full blur-xl opacity-70 pointer-events-none" />

                {/* Header Tipis ID Card */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-300">
                      MAULANA DEVELOPER
                    </span>
                  </div>
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400 opacity-80" />
                </div>

                {/* FOTO PROFIL UTAMA PORTRAIT */}
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-lg">
                  <img
                    src="https://files.catbox.moe/7ajc0g.JPG"
                    alt="Maulana Developer"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  
                  {/* Overlay Gradasi Hitam */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
                  
                  {/* Nama & Role Overlay di Bawah Foto */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <span className="text-[9px] font-mono text-sky-400 block font-semibold leading-none mb-0.5">DEV ID</span>
                      <span className="text-sm font-black text-white leading-none">MAULANA</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] font-mono text-slate-400 block font-semibold leading-none mb-0.5">ROLE</span>
                      <span className="text-[11px] font-bold text-sky-300 leading-none">Junior Web Developer</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Kilau Pantulan Kaca Plastik Mika */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-t-[28px]" />

              {/* FLOATING FRAMEWORK BADGES (MELAYANG DI LUAR ID CARD) */}
              {floatingBadges.map((badge, idx) => {
                const IconComp = badge.icon;
                return (
                  <motion.div
                    key={idx}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3 + idx * 0.5,
                      ease: "easeInOut",
                      delay: badge.delay
                    }}
                    className={`absolute ${badge.pos} z-30 bg-slate-900/90 border border-white/20 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-xl flex items-center gap-2 group pointer-events-auto hover:scale-110 transition duration-300`}
                  >
                    <motion.div
                      animate={badge.spin ? { rotate: 360 } : {}}
                      transition={badge.spin ? { repeat: Infinity, duration: 8, ease: "linear" } : {}}
                      className="p-1 rounded-lg bg-slate-950 border border-slate-800"
                    >
                      <IconComp className="w-3.5 h-3.5" style={{ color: badge.color }} />
                    </motion.div>
                    <span className="text-[11px] font-bold text-slate-200 tracking-wide whitespace-nowrap">
                      {badge.name}
                    </span>
                  </motion.div>
                );
              })}

            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;