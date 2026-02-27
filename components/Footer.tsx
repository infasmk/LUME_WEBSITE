
import React from 'react';
import { Music } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <Music className="w-5 h-5 text-black" />
            </div>
            <span className="text-lg font-bold text-white">Lume</span>
          </div>
          <p className="text-xs text-zinc-500 font-semibold tracking-wide">
            Created by <span className="text-white">infasmk</span>
          </p>
        </div>

        <div className="flex items-center gap-8 text-sm font-semibold text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Releases</a>
          <a href="#" className="hover:text-white transition-colors">License</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>

        <p className="text-sm text-zinc-500 font-medium">
          © {new Date().getFullYear()} Lume – Open Source Music Player
        </p>
      </div>
    </footer>
  );
};

export default Footer;
