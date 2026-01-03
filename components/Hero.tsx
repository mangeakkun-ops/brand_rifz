
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />
      
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=1920" 
        alt="Streetwear model" 
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter mb-6 leading-none">
          RIFZ <span className="text-zinc-500">SYSTEMS</span>
        </h1>
        <p className="text-lg md:text-2xl text-zinc-300 font-light max-w-2xl mx-auto mb-10 tracking-wide">
          Engineered for the urban environment. Minimalist aesthetics met with high-performance utility.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a 
            href="#collection" 
            className="w-full md:w-auto px-10 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all hover:scale-105"
          >
            Explore Drop 01
          </a>
          <a 
            href="#philosophy" 
            className="w-full md:w-auto px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-all"
          >
            Our Philosophy
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
