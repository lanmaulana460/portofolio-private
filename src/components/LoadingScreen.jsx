import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Interval dikembalikan ke 80ms agar bergeraknya pas (tidak terlalu ngebut, tidak terlalu lambat)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true); 
          
          // Delay penahanan akhir diatur pas di 900ms (cukup buat nikmatin animasi suksesnya)
          setTimeout(onComplete, 900); 
          return 100;
        }
        // Kenaikan angka dibuat natural (1 sampai 4)
        const increment = Math.floor(Math.random() * 4) + 1; 
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ 
        opacity: 0, 
        scale: 1.2, 
        filter: "blur(15px)", 
        transition: { duration: 0.7, ease: "easeInOut" } 
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0f] text-white overflow-hidden px-4"
    >
      {/* Flash Overlay: Berkedip putih saat 100% */}
      <motion.div
        animate={isComplete ? { opacity: [0, 0.8, 0] } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute inset-0 bg-white z-20 pointer-events-none mix-blend-overlay"
      />

      {/* Background Ambient Anime Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={isComplete ? { 
            scale: 2, 
            opacity: 0,
            transition: { duration: 0.7 } 
          } : { 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.25, 0.1],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-fuchsia-500/20 rounded-full blur-[80px] md:blur-[120px]"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={isComplete ? {
            y: -200,
            opacity: 0,
            scale: 2,
            transition: { duration: 0.7, ease: "easeOut" }
          } : {
            y: [-20, -100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0.5],
            transition: {
              duration: Math.random() * 2 + 1.5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }
          }}
          className={`absolute w-1 h-1 rounded-full ${isComplete ? 'bg-white shadow-[0_0_15px_#fff]' : 'bg-rose-400 shadow-[0_0_10px_#fb7185]'}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <motion.div 
        animate={isComplete ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative flex flex-col items-center z-10 w-full max-w-xs sm:max-w-sm px-4"
      >
        
        {/* Subtitle Katakana (Berubah saat selesai) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-[10px] md:text-xs font-mono mb-2 tracking-[0.4em] flex items-center gap-3 transition-colors duration-300 ${isComplete ? 'text-white' : 'text-fuchsia-400/80'}`}
        >
          <span className={`w-8 h-[1px] ${isComplete ? 'bg-white' : 'bg-fuchsia-500/50'}`}></span>
          {isComplete ? 'WELCOME' : 'SELAMAT DATANG'}
          <span className={`w-8 h-[1px] ${isComplete ? 'bg-white' : 'bg-fuchsia-500/50'}`}></span>
        </motion.div>

        {/* Main Title dengan Glitch/Glow Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          className="relative text-2xl sm:text-3xl md:text-5xl font-black tracking-wider sm:tracking-widest mb-10 text-center"
        >
          <span className={`bg-clip-text text-transparent bg-gradient-to-r relative z-10 transition-colors duration-300 ${isComplete ? 'from-white via-slate-200 to-white' : 'from-white via-fuchsia-200 to-indigo-500'}`}>
            MAULANA
          </span>
          <span className={`absolute left-0 top-0 bg-clip-text text-transparent blur-sm opacity-40 z-0 transition-colors duration-300 ${isComplete ? 'bg-white' : 'bg-fuchsia-500'}`}>
            MAULANA
          </span>
        </motion.div>

        {/* Anime HUD Progress Bar */}
        <div className="w-full relative">
          <div className={`absolute -top-3 -left-1 w-2 h-2 border-t-2 border-l-2 transition-colors duration-300 ${isComplete ? 'border-white' : 'border-fuchsia-500/50'}`} />
          <div className={`absolute -bottom-3 -right-1 w-2 h-2 border-b-2 border-r-2 transition-colors duration-300 ${isComplete ? 'border-white' : 'border-fuchsia-500/50'}`} />
          
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            className="w-full h-[3px] bg-slate-800/80 rounded-full relative overflow-visible"
          >
            {/* Filler Loading */}
            <motion.div
              className={`absolute top-0 left-0 h-full rounded-full transition-colors duration-300 ${isComplete ? 'bg-white shadow-[0_0_20px_#fff]' : 'bg-gradient-to-r from-indigo-600 via-fuchsia-400 to-white shadow-[0_0_15px_rgba(232,121,249,0.8)]'}`}
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            >
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-3 bg-white rounded-full shadow-[0_0_10px_#fff]" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bagian Bawah: Angka Digital & Status */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full flex justify-between items-center mt-4 text-[10px] md:text-xs font-mono text-slate-400"
        >
          <div className="flex flex-col">
            <span className={`transition-colors duration-300 font-bold ${isComplete ? 'text-white' : 'text-fuchsia-500'}`}>
              {isComplete ? 'SABAR' : 'MEMUAT...'}
            </span>
          </div>
          
          <div className="flex items-baseline gap-1">
            <span className="text-xl sm:text-2xl font-light text-white">{progress}</span>
            <span className={`transition-colors duration-300 ${isComplete ? 'text-white' : 'text-fuchsia-400'}`}>%</span>
          </div>
        </motion.div>
        
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
