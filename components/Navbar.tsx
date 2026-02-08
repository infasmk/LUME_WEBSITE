
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-red-500/10 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-[#E63946] to-[#F1A7B1] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shadow-red-500/20">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-[#1A1A1A]">LUMA</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-gray-500 hover:text-[#E63946] transition-colors tracking-wide">
              {link.label}
            </a>
          ))}
          <a href="#download" className="px-5 py-2 bg-[#E63946] text-white rounded-full text-sm font-bold transition-all hover:scale-105 hover:bg-[#D62839] shadow-md shadow-red-500/10 active:scale-95">
            Get App
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
