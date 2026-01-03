
import React, { useState } from 'react';
import { NAV_LINKS, ICONS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="text-2xl font-extrabold tracking-tighter text-white">RIFZ</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-2 bg-white text-black text-sm font-bold uppercase tracking-wider rounded-full hover:bg-zinc-200 transition-colors">
            Cart (0)
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ICONS.X /> : <ICONS.Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 px-6 py-8 space-y-6">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="block text-xl font-medium text-zinc-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full">
            Cart (0)
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
