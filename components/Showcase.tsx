
import React, { useEffect, useRef, useState } from 'react';

const Showcase: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="showcase" 
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className={`space-y-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1A1A1A]">
              Designed for the <span className="text-[#E63946]">Modern Artist.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              LUMA isn't just a player; it's a statement. Every pixel is crafted for immersion, ensuring that nothing stands between you and your sound.
            </p>
            <ul className="space-y-4">
              {['Smart Dynamic Playlists', 'Lossless Audio Support', 'Universal Dark Mode', 'Gesture Controls'].map((item, index) => (
                <li 
                  key={item} 
                  className={`flex items-center gap-3 text-gray-800 font-bold transition-all duration-700 delay-[${index * 150}ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  <div className="w-6 h-6 rounded-full bg-[#E63946]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#E63946]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={`relative flex justify-center transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 translate-y-8'}`}>
            {/* Background glow for phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[#E63946]/10 rounded-full blur-[100px]"></div>
            
            {/* Phone Mockup (Light theme phone) */}
            <div className="relative w-[300px] h-[600px] bg-white rounded-[3.5rem] border-[10px] border-[#E63946]/10 shadow-2xl overflow-hidden animate-float">
              {/* Camera Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-200 rounded-full z-20"></div>
              
              {/* App Screen Content (Light App UI) */}
              <div className="absolute inset-0 bg-[#FFF9F9] flex flex-col p-6 space-y-6">
                <div className="flex justify-between items-center pt-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full"></div>
                  <div className="flex-1 px-4">
                    <div className="w-full h-2 bg-gray-200 rounded-full mb-1"></div>
                    <div className="w-1/2 h-2 bg-gray-100 rounded-full"></div>
                  </div>
                </div>

                <div className="w-full aspect-square bg-gradient-to-br from-[#E63946] to-[#F1A7B1] rounded-[2.5rem] shadow-xl flex items-center justify-center">
                   <svg className="w-20 h-20 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                   </svg>
                </div>

                <div className="space-y-1">
                  <div className="w-3/4 h-6 bg-gray-800 rounded-lg"></div>
                  <div className="w-1/2 h-4 bg-gray-400 rounded-lg"></div>
                </div>

                <div className="flex-1 flex items-center justify-center space-x-6">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63a1 1 0 001.555-.832V5.998a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"/></svg>
                  </div>
                  <div className="w-16 h-16 bg-[#E63946] rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/></svg>
                  </div>
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"/></svg>
                  </div>
                </div>

                <div className="h-1 bg-gray-200 w-full rounded-full relative">
                  <div className="absolute top-0 left-0 h-full w-2/3 bg-[#E63946] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
