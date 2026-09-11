import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Interval 80ms untuk pergerakan angka yang natural
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true); 
          
          // Delay penahanan 900ms
          setTimeout(onComplete, 900); 
          return 100;
        }
        // Kenaikan angka 1 sampai 4
        const increment = Math.floor(Math.random() * 4) + 1; 
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      // PENGOPTIMALAN UTAMA: Menghapus filter: blur() pada animasi exit karena sangat berat di HP
      exit={{ 
        opacity: 0, 
        scale: 1.05, 
        transition: { duration: 0.6, ease: "easeInOut" } 
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050508] text-white overflow-hidden px-4"
    >
      {/* Background Ambient Glow (Statis, hanya opacity yang berdenyut agar ringan di GPU) */}
      <motion.div 
        animate={isComplete ? { opacity: 0 } : { opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-fuchsia-600/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Flash Overlay saat 100% (Solid color, sangat ringan) */}
      <motion.div
        animate={isComplete ? { opacity: [0, 1, 0] } : { opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-0 bg-white z-20 pointer-events-none"
      />

      <motion.div 
        animate={isComplete ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative flex flex-col items-center z-10 w-full max-w-xs sm:max-w-sm px-4"
      >
        
        {/* Subtitle Katakana / Text */}
        <div className={`text-[10px] md:text-xs font-mono mb-2 tracking-[0.3em] flex items-center gap-3 transition-colors duration-300 ${isComplete ? 'text-white' : 'text-fuchsia-400/80'}`}>
          <span className={`w-8 h-[1px] transition-colors duration-300 ${isComplete ? 'bg-white' : 'bg-fuchsia-500/50'}`}></span>
          {isComplete ? 'WELCOME' : 'SELAMAT DATANG'}
          <span className={`w-8 h-[1px] transition-colors duration-300 ${isComplete ? 'bg-white' : 'bg-fuchsia-500/50'}`}></span>
        </div>

        {/* Main Title Tanpa Efek Bayangan Ganda (Mencegah Lag Teks) */}
        <div className="relative text-3xl md:text-5xl font-black tracking-widest mb-10 text-center">
          <span className={`bg-clip-text text-transparent bg-gradient-to-r transition-colors duration-500 ${isComplete ? 'from-white via-slate-200 to-white' : 'from-white via-fuchsia-200 to-indigo-500'}`}>
            MAULANA
          </span>
        </div>

        {/* Anime HUD Progress Bar (Dioptimalkan menggunakan struktur HTML dasar) */}
        <div className="w-full relative">
          {/* Sudut Siku-siku */}
          <div className={`absolute -top-2 -left-1 w-2 h-2 border-t-2 border-l-2 transition-colors duration-300 ${isComplete ? 'border-white' : 'border-fuchsia-500/50'}`} />
          <div className={`absolute -bottom-2 -right-1 w-2 h-2 border-b-2 border-r-2 transition-colors duration-300 ${isComplete ? 'border-white' : 'border-fuchsia-500/50'}`} />
          
          <div className="w-full h-[2px] bg-slate-800/80 rounded-full relative overflow-hidden">
            <motion.div
              className={`absolute top-0 left-0 h-full rounded-full transition-colors duration-300 ${isComplete ? 'bg-white' : 'bg-gradient-to-r from-indigo-500 to-fuchsia-400'}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Bagian Bawah: Angka Digital & Status */}
        <div className="w-full flex justify-between items-center mt-4 text-[10px] md:text-xs font-mono text-slate-400">
          <div className="flex flex-col">
            <span className={`transition-colors duration-300 font-bold ${isComplete ? 'text-white' : 'text-fuchsia-500'}`}>
              {isComplete ? 'SABAR' : 'MEMUAT...'}
            </span>
          </div>
          
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-light text-white">{progress}</span>
            <span className={`transition-colors duration-300 ${isComplete ? 'text-white' : 'text-fuchsia-400'}`}>%</span>
          </div>
        </div>
        
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
