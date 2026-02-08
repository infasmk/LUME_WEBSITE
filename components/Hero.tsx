
import React from 'react';

const Hero: React.FC = () => {
  const downloadLink = "#";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-radial-at-t from-[#E63946]/5 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-[#E63946] text-xs font-bold tracking-widest uppercase animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E63946] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E63946]"></span>
          </span>
          v1.2.0 Red Edition
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight text-[#1A1A1A]">
          Feel Music, <br /> <span className="text-[#E63946]">Flow Freely.</span>
        </h1>

        <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
          The ultimate open-source music companion. <br className="hidden md:block" />
          Modern, privacy-centric, and distraction-free playback.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#E63946] to-[#F1A7B1] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-full sm:w-auto px-10 py-4 bg-[#E63946] text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-red-500/20 cursor-pointer">
              Download APK
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
          </a>
          <a href="https://github.com/luma-player" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-10 py-4 bg-white border border-red-100 rounded-2xl text-[#E63946] font-bold transition-all hover:-translate-y-1 hover:bg-red-50/50 flex items-center justify-center gap-2 shadow-sm">
            View on GitHub
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40 text-[#E63946]">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
