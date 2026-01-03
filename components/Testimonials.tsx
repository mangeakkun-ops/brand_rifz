
import React from 'react';
import { TESTIMONIALS, ICONS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-32 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.5em] text-zinc-500 uppercase block mb-4">User Voices</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">TRUSTED BY <span className="text-zinc-500 italic">SYSTEM USERS</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-8 bg-zinc-950 border border-white/5 rounded-sm relative group hover:border-white/20 transition-all">
              <div className="absolute top-6 right-8">
                <ICONS.Quote />
              </div>
              <p className="text-zinc-300 italic mb-8 relative z-10 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all"
                />
                <div>
                  <h4 className="text-sm font-bold tracking-tight">{t.name}</h4>
                  <p className="text-[10px] text-zinc-600 uppercase font-black tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
