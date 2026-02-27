
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Download, Music, Play, Volume2 } from 'lucide-react';

const Hero: React.FC = () => {
  const downloadLink = "https://github.com/lume-player/releases/latest/download/Lume.apk";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-black">
      {/* Animated Sound Waves Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="flex items-end gap-1 h-64">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 bg-white rounded-full"
              animate={{
                height: [40, 100, 60, 140, 80, 120, 50],
              }}
              transition={{
                duration: 1.5 + Math.random(),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-widest uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          v2.0.0 Black Edition
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter leading-tight text-white"
        >
          Feel Music, <br /> <span className="text-zinc-500">Flow Freely.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto text-lg md:text-xl text-zinc-400 font-medium leading-relaxed"
        >
          The ultimate open-source music companion. <br className="hidden md:block" />
          Modern, privacy-centric, and distraction-free playback.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-auto">
            <div className="absolute -inset-1 bg-white rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative w-full sm:w-auto px-10 py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 active:scale-95 shadow-xl cursor-pointer">
              Download APK
              <Download size={20} />
            </div>
          </a>
          <a href="https://instagram.com/lume_player" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/10 rounded-2xl text-white font-bold transition-all hover:-translate-y-1 hover:bg-white/5 flex items-center justify-center gap-2 shadow-sm">
            Follow on Instagram
            <Instagram size={20} />
          </a>
        </motion.div>
      </div>

      {/* Floating Music Icons */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 text-white/10 hidden lg:block"
      >
        <Music size={64} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-10 text-white/10 hidden lg:block"
      >
        <Volume2 size={64} />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40 text-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
