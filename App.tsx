
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Philosophy Section */}
        <section id="philosophy" className="py-32 px-6 border-y border-white/5 bg-zinc-950/30">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-xs font-bold tracking-[0.5em] text-zinc-500 uppercase">Architecture of Style</span>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight">
                LESS BUT <span className="text-zinc-700 italic">BETTER.</span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed font-light">
                Every RIFZ piece is designed with surgical precision. We prioritize modular utility, durable materials, and silhouettes that defy transient trends.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="font-bold mb-2">01. Utility</h4>
                  <p className="text-sm text-zinc-500">Weather-tested materials for every condition.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">02. Ethics</h4>
                  <p className="text-sm text-zinc-500">100% organic cotton and recycled synthetic fibers.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square">
              <img 
                src="https://picsum.photos/seed/detail/1000/1000" 
                alt="Fabric detail" 
                className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-white/20" />
            </div>
          </div>
        </section>

        <ProductSection />

        {/* Sustainability Banner */}
        <section id="sustainability" className="relative py-48 overflow-hidden">
          <div className="absolute inset-0 bg-white text-black flex items-center">
            <div className="whitespace-nowrap animate-infinite-scroll flex gap-20 items-center">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="text-8xl md:text-[12rem] font-black tracking-tighter uppercase">
                  Sustainability Focused • Carbon Neutral • RIFZ Standard •
                </span>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes infinite-scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .animate-infinite-scroll {
              animation: infinite-scroll 40s linear infinite;
            }
          `}</style>
        </section>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
