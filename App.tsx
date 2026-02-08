
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Features from './components/Features';
import Download from './components/Download';
import OpenSource from './components/OpenSource';
import Footer from './components/Footer';
import BackgroundGradient from './components/BackgroundGradient';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior for internal links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('click', handleAnchorClick);
    return () => window.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-[#E63946]/10 selection:text-[#E63946]">
      <BackgroundGradient />
      <Navbar />
      
      <main>
        <Hero />
        <Showcase />
        <Features />
        <Download />
        <OpenSource />
      </main>

      <Footer />
    </div>
  );
};

export default App;
