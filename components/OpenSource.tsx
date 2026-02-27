
import React from 'react';

const OpenSource: React.FC = () => {
  return (
    <section id="oss" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest">
            Open Source First
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-white">Built by the community, for the community.</h2>
          <p className="text-zinc-400 text-lg leading-relaxed font-medium">
            Lume is licensed under GPL-3.0. We believe in transparency and freedom. No data mining, no hidden tracking, just pure code.
          </p>
          <div className="flex items-center gap-12 pt-4">
            <div>
              <div className="text-3xl font-black text-white">2.4k+</div>
              <div className="text-sm text-zinc-500 font-bold uppercase tracking-wider">GitHub Stars</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">400+</div>
              <div className="text-sm text-zinc-500 font-bold uppercase tracking-wider">Forks</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">50+</div>
              <div className="text-sm text-zinc-500 font-bold uppercase tracking-wider">Contributors</div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-white rounded-[2rem] blur-2xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
          <div className="relative bg-zinc-900 border border-white/5 rounded-3xl p-10 space-y-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                 <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </div>
              <h4 className="text-xl font-bold text-white">Built with Flutter</h4>
            </div>
            <p className="text-zinc-400 font-medium">
              Lume leverages Flutter's high-performance graphics engine to deliver 60FPS animations on almost any hardware.
            </p>
            <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full w-4/5 bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
