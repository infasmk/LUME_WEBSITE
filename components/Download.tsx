
import React from 'react';

const Download: React.FC = () => {
  const downloadLink = "https://github.com/infasmk/Lume_Music/releases/download/v1.0.2/LUMA.BY.INFAS.apk";
  const sourceLink = "https://github.com/infasmk/Lume_Music";

  return (
    <section id="download" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto bg-white rounded-[3.5rem] p-12 border border-red-500/5 relative overflow-hidden text-center shadow-2xl shadow-red-500/5">
        <div className="absolute inset-0 bg-radial-at-t from-[#E63946]/5 to-transparent"></div>
        
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#1A1A1A]">Ready to flow?</h2>
          <p className="text-gray-500 text-lg font-medium">Download LUMA today and rediscover your local music collection.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 bg-[#E63946] text-white font-extrabold rounded-2xl transition-all hover:scale-105 shadow-lg shadow-red-500/20 active:scale-95 flex items-center justify-center gap-3">
              Download for Android
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded text-white uppercase">APK</span>
            </a>
            <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-red-100 text-[#E63946] font-extrabold rounded-2xl transition-all hover:scale-105 hover:bg-red-50 active:scale-95">
              Source on GitHub
            </a>
          </div>

          <div className="pt-8 border-t border-gray-100 text-left">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Recent Changelog</span>
              <span className="text-xs font-mono font-bold text-[#E63946] bg-red-50 px-2 py-1 rounded">v1.2.0 • Nov 2024</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-500 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-[#E63946] mt-1.5">•</span>
                <span>Rebranded to LUMA with a fresh identity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E63946] mt-1.5">•</span>
                <span>Improved performance for heavy local libraries</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E63946] mt-1.5">•</span>
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
