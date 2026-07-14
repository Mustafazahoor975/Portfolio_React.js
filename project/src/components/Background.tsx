import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#030014]">
      {/* Radial grid overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f1a3a_1px,transparent_1px),linear-gradient(to_bottom,#1f1a3a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" 
      />

      {/* Floating Glowing Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-700/20 blur-[120px] animate-float-slow" />
      <div className="absolute top-[20%] right-[-10%] w-[45%] h-[45%] rounded-full bg-accent-purple/15 blur-[130px] animate-float-slower" />
      <div className="absolute bottom-[-10%] left-[20%] w-[55%] h-[55%] rounded-full bg-accent-blue/15 blur-[140px] animate-float" />
      <div className="absolute bottom-[20%] right-[10%] w-[35%] h-[35%] rounded-full bg-accent-cyan/10 blur-[110px] animate-float-slow" />
      
      {/* Light spotlight from top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-gradient-to-b from-primary-500/10 to-transparent blur-[80px]" />
    </div>
  );
};

export default Background;
