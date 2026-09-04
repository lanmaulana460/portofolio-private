import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-8 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div>
          <h4 className="text-sm font-bold text-slate-200">Maulana Developer</h4>
          <p className="text-xs text-slate-500 mt-0.5">
            © {new Date().getFullYear()} Dibuat oleh Maulana Developer. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Lanmaulana" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-400 transition">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/maulana-" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-400 transition">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="https://instagram.com/lan_maulana470" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-400 transition">
            <Instagram className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;