import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Comments from './components/Comments';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initEmailJS } from './config/emailjs';

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    initEmailJS();
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-sky-500 selection:text-slate-950">
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Comments />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;