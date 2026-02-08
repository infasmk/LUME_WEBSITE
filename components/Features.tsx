
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A]">Everything you need.</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">LUMA packs a powerful punch under a minimal hood. Experience the freedom of open source with the polish of a premium player.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="group p-8 rounded-[2rem] bg-white border border-red-500/5 hover:border-[#E63946]/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-red-500/5">
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#E63946] transition-all duration-300">
                <div className="text-[#E63946] group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-extrabold mb-3 text-[#1A1A1A]">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
