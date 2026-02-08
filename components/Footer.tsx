
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-red-500/5 bg-white/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#E63946] to-[#F1A7B1] rounded-lg flex items-center justify-center shadow-sm">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <span className="text-lg font-bold text-[#1A1A1A]">LUMA</span>
          </div>
          <p className="text-xs text-gray-400 font-semibold tracking-wide">
            Created by <span className="text-[#E63946]">infasmk</span>
          </p>
        </div>

        <div className="flex items-center gap-8 text-sm font-semibold text-gray-400">
          <a href="#" className="hover:text-[#E63946] transition-colors">GitHub</a>
          <a href="#" className="hover:text-[#E63946] transition-colors">Releases</a>
          <a href="#" className="hover:text-[#E63946] transition-colors">License</a>
          <a href="#" className="hover:text-[#E63946] transition-colors">Privacy</a>
        </div>

        <p className="text-sm text-gray-400 font-medium">
          © {new Date().getFullYear()} LUMA – Open Source Music Player
        </p>
      </div>
    </footer>
  );
};

export default Footer;
