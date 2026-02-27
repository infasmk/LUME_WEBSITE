
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Music } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Music className="w-6 h-6 text-black" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white">Lume</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors tracking-wide">
              {link.label}
            </a>
          ))}
          <a href="#download" className="px-5 py-2 bg-white text-black rounded-full text-sm font-bold transition-all hover:scale-105 hover:bg-zinc-200 shadow-md active:scale-95">
            Get App
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
