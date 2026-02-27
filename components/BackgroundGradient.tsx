
import React from 'react';

const BackgroundGradient: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-white/5 rounded-full gradient-blur animate-slow-spin"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-white/5 rounded-full gradient-blur animate-slow-spin" style={{ animationDirection: 'reverse' }}></div>
      <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] bg-white/5 rounded-full gradient-blur opacity-30"></div>
    </div>
  );
};

export default BackgroundGradient;
