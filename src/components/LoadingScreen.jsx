import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true); 
          setTimeout(onComplete, 800); 
          return 100;
        }
        const increment = Math.floor(Math.random() * 5) + 2; // Sedikit lebih cepat & pas
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ 
        opacity: 0, 
        transition: { duration: 0.5, ease: "easeInOut" } 
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07070a] text-white overflow-hidden px-4"
    >
      {/* Flash Overlay Sederhana yang Ringan */}
      <motion.div
        animate={isComplete ? { opacity: [0, 0.5, 0] } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-white z-20 pointer-events-none"
      />

      {/* Background Glow Ringan (Tanpa blur besar yang membebani GPU) */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        animate={isComplete ? { scale: 1.02 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative flex flex-col items-center z-10 w-full max-w-xs sm:max-w-sm"
      >
        
        {/* Subtitle Responsif */}
        <div className={`text-[10px] sm:text-xs font-mono mb-3 tracking-[0.3em] flex items-center gap-2 transition-colors duration-300 ${isComplete ? 'text-white' : 'text-fuchsia-400'}`}>
          <span className="w-6 h-[1px] bg-current opacity-50" />
          {isComplete ? 'READY' : 'LOADING SYSTEM'}
          <span className="w-6 h-[1px] bg-current opacity-50" />
        </div>

        {/* Main Title */}
        <div className="relative text-2xl sm:text-4xl md:text-5xl font-black tracking-wider sm:tracking-widest mb-8 text-center">
          <span className={`bg-clip-text text-transparent bg-gradient-to-r transition-all duration-300 ${isComplete ? 'from-white to-slate-200' : 'from-white via-fuchsia-300 to-indigo-400'}`}>
            MAULANA.DEV
          </span>
        </div>

        {/* HUD Progress Bar yang Bersih */}
        <div className="w-full relative">
          <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden p-[1px] border border-slate-800">
            <motion.div
              className={`h-full rounded-full transition-colors duration-300 ${isComplete ? 'bg-white' : 'bg-gradient-to-r from-indigo-500 to-fuchsia-500'}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Status & Persentase Bawah */}
        <div className="w-full flex justify-between items-center mt-3 text-[10px] sm:text-xs font-mono text-slate-400">
          <span className={`font-bold transition-colors ${isComplete ? 'text-white' : 'text-fuchsia-400'}`}>
            {isComplete ? 'ACCESS GRANTED' : 'INITIALIZING...'}
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl sm:text-2xl font-light text-white">{progress}</span>
            <span className="text-fuchsia-400">%</span>
          </div>
        </div>
        
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
