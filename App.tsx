
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Features from './components/Features';
import Download from './components/Download';
import OpenSource from './components/OpenSource';
import Footer from './components/Footer';
import BackgroundGradient from './components/BackgroundGradient';
import { X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);
    
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
    return () => {
      window.removeEventListener('click', handleAnchorClick);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-white/20 selection:text-white bg-black text-white">
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

      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-md w-full bg-zinc-900 border border-white/10 rounded-3xl p-8 shadow-2xl"
            >
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <Info size={24} />
                </div>
                <h3 className="text-xl font-bold">Important Update</h3>
              </div>
              
              <p className="text-zinc-400 leading-relaxed mb-8">
                Please <span className="text-white font-semibold">delete the old Lume application</span> and install the new updated version. It features a completely redesigned UI, more features, and improved performance.
              </p>
              
              <button 
                onClick={() => setShowPopup(false)}
                className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-colors active:scale-95"
              >
                Got it, thanks!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
