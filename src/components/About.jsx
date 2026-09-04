import React from 'react';
import { motion } from 'framer-motion';
import { FolderCheck, Cpu, Award, Sparkles, Code2, GraduationCap, Target } from 'lucide-react';

const stats = [
  { icon: FolderCheck, label: 'Projects Completed', value: '10+' },
  { icon: Cpu, label: 'Technologies Used', value: '18+' },
  { icon: Award, label: 'Learning Experience', value: '4+ Years' },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-2 flex items-center justify-center gap-2"
          >
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100"
          >
            About me
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* SISI KIRI: Tempat Foto Profil & Deskripsi Utama di Bawahnya */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-slate-900/50 border border-slate-800/80 p-6 sm:p-8 rounded-3xl backdrop-blur-sm relative group hover:border-sky-500/30 transition duration-500"
          >
            {/* CONTAINER FOTO PROFIL */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-slate-800 group-hover:border-sky-500/50 transition duration-500 mb-6 shadow-2xl bg-slate-950">
              
              {/* Ganti src di bawah ini dengan lokasi/link foto kamu (contoh: '/profile.jpg') */}
              <img
                src="https://files.catbox.moe/1nxd1s.png"
                alt="Maulana Developer"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Status Badge Melayang di Atas Foto */}
              <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-bold text-slate-200">I'M WEB DEVELOPER</span>
              </div>
            </div>

            {/* DESKRIPSI DI BAWAH FOTO */}
            <div className="space-y-3">
              <div>
                <h4 className="text-xl font-extrabold text-slate-100">Maulana</h4>
                <p className="text-xs font-semibold text-sky-400">Junior Web Developer</p>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Saya adalah seorang developer yang memiliki minat besar dalam pengembangan website modern, desain UI/UX interaktif, serta teknologi 𝙁𝙪𝙡𝙡𝙨𝙩𝙖𝙘𝙠 𝙒𝙚𝙗 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧.
              </p>

              <p className="text-slate-400 text-xs leading-relaxed">
                Selalu bersemangat mempelajari ekosistem web terbaru untuk menciptakan aplikasi web yang tidak hanya estetik, tetapi juga cepat, responsif, dan memberikan pengalaman pengguna user experience terbaik.
              </p>
            </div>
          </motion.div>

          {/* SISI KANAN: Latar Belakang, Minat, Goals, & Statistics Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Card Detail Latar Belakang */}
            <div className="bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-3xl backdrop-blur-sm space-y-6">
              
              {/* Latar Belakang Pendidikan */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-2xl shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-100 mb-1">Latar Belakang Pendidikan</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Memulai perjalanan teknologi dari pendidikan vokasi SMK jurusan Rekayasa Perangkat Lunak (RPL). Mempelajari logika pemrograman dasar, pemrosesan web dengan PHP, serta pengelolaan basis data MySQL.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-800/80" />

              {/* Minat Teknologi */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-2xl shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-100 mb-1">Minat Teknologi</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Sangat menyukai pembuatan komponen UI yang dinamis dan ber-animasi menggunakan React JS, Tailwind CSS, serta Framer Motion, dikombinasikan dengan integrasi backend seperti Firebase & Supabase.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-800/80" />

              {/* Career Goals */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-2xl shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-100 mb-1">Tujuan Karir</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Bercita-cita menjadi seorang 𝙁𝙪𝙡𝙡𝙨𝙩𝙖𝙘𝙠 𝙒𝙚𝙗 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧  profesional yang handal dalam merancang produk digital skala industri dengan arsitektur kode yang bersih clean code.
                  </p>
                </div>
              </div>

            </div>

            {/* STATISTICS CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl hover:border-sky-500/40 transition group"
                  >
                    <IconComponent className="w-5 h-5 text-sky-400 mb-3 group-hover:scale-110 transition" />
                    <div className="text-2xl font-black text-slate-100">{stat.value}</div>
                    <div className="text-[11px] text-slate-400 font-medium mt-0.5">{stat.label}</div>
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

export default About;