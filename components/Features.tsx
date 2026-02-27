
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-white">Everything you need.</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-medium">Lume packs a powerful punch under a minimal hood. Experience the freedom of open source with the polish of a premium player.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="group p-8 rounded-[2rem] bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-white/5">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                <div className="text-white group-hover:text-black transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-extrabold mb-3 text-white">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
