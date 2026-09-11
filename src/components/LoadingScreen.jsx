import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  // Durasi total loading (ms) - sesuaikan selera
  const DURATION = 1800;

  useEffect(() => {
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const t = Math.min(elapsed / DURATION, 1);
      const eased = easeOutCubic(t);
      const value = Math.round(eased * 100);

      setProgress(value);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setIsComplete(true);
        // Delay singkat biar animasi sukses terlihat, tapi tetap responsif
        setTimeout(() => onComplete?.(), 600);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at 50% 50%, #0f172a 0%, #020617 100%)',
        zIndex: 9999,
        willChange: 'opacity',
      }}
    >
      <div style={{ width: 'min(280px, 80vw)', textAlign: 'center' }}>
        {/* Logo / Icon berputar */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
          style={{
            width: 56,
            height: 56,
            margin: '0 auto 24px',
            borderRadius: '50%',
            border: '3px solid rgba(255,255,255,0.08)',
            borderTopColor: '#60a5fa',
            borderRightColor: '#a78bfa',
            willChange: 'transform',
          }}
        />

        {/* Progress Bar */}
        <div
          style={{
            height: 4,
            background: 'rgba(255,255,255,0.08)',
            borderRadius: 999,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.15, ease: 'linear' }}
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)',
              borderRadius: 999,
              willChange: 'width',
            }}
          />
        </div>

        {/* Persentase */}
        <motion.div
          key={progress}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          style={{
            marginTop: 16,
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: '0.15em',
            color: 'rgba(255,255,255,0.65)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {progress}%
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
