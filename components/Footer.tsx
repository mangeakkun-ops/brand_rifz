
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl font-extrabold tracking-tighter mb-8 italic">RIFZ.</h2>
          <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed">
            RIFZ is more than a brand. It's an exploration of form and function. Designed in Tokyo, engineered for the world.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm font-bold tracking-widest hover:text-zinc-400">INSTAGRAM</a>
            <a href="#" className="text-sm font-bold tracking-widest hover:text-zinc-400">TWITTER</a>
            <a href="#" className="text-sm font-bold tracking-widest hover:text-zinc-400">DISCORD</a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Support</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-sm hover:text-zinc-400">Shipping Policy</a></li>
            <li><a href="#" className="text-sm hover:text-zinc-400">Returns & Exchanges</a></li>
            <li><a href="#" className="text-sm hover:text-zinc-400">Sizing Guide</a></li>
            <li><a href="#" className="text-sm hover:text-zinc-400">Track Order</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Newsletter</h4>
          <p className="text-sm text-zinc-400 mb-6 italic">Join the mainframe for early access.</p>
          <div className="flex border-b border-white/20 pb-2">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="bg-transparent border-none text-xs w-full focus:outline-none placeholder:text-zinc-700 font-bold tracking-widest"
            />
            <button className="text-xs font-black hover:text-zinc-400 transition-colors">JOIN</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-8">
        <p className="text-[10px] text-zinc-600 font-bold tracking-widest uppercase">
          &copy; 2024 RIFZ SYSTEMS INC. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8 text-[10px] text-zinc-600 font-bold tracking-widest uppercase">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
