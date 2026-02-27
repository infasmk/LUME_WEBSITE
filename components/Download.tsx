
import React from 'react';

const Download: React.FC = () => {
  const downloadLink = "https://github.com/infasmk/Lume_Music/releases/download/v1.0.0/LUME-V1.01.apk";
  const sourceLink = "https://github.com/luma-player/luma-app";

  return (
    <section id="download" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-[3.5rem] p-12 border border-white/5 relative overflow-hidden text-center shadow-2xl">
        <div className="absolute inset-0 bg-radial-at-t from-white/5 to-transparent"></div>
        
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">Ready to flow?</h2>
          <p className="text-zinc-400 text-lg font-medium">Download Lume today and rediscover your local music collection.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 bg-white text-black font-extrabold rounded-2xl transition-all hover:scale-105 shadow-lg active:scale-95 flex items-center justify-center gap-3">
              Download for Android
              <span className="text-xs bg-black/10 px-2 py-0.5 rounded text-black uppercase font-bold">APK</span>
            </a>
            <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/10 text-white font-extrabold rounded-2xl transition-all hover:scale-105 hover:bg-white/5 active:scale-95">
              Source on GitHub
            </a>
          </div>

          <div className="pt-8 border-t border-white/5 text-left">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Recent Changelog</span>
              <span className="text-xs font-mono font-bold text-black bg-white px-2 py-1 rounded">v2.0.0 • Feb 2026</span>
            </div>
            <ul className="space-y-2 text-sm text-zinc-400 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-white mt-1.5">•</span>
                <span>Rebranded to Lume with a fresh identity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1.5">•</span>
                <span>Improved performance for heavy local libraries</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1.5">•</span>
                <span>Added beautiful fluid animations to player</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
