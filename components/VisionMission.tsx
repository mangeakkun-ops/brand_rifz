
import React from 'react';

const VisionMission: React.FC = () => {
  return (
    <section id="vision" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="sticky top-32">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
              OUR <br />
              <span className="text-zinc-800">IDENTITY.</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light max-w-md leading-relaxed">
              RIFZ lahir dari persimpangan antara teknologi material masa depan dan estetika minimalis urban.
            </p>
          </div>

          <div className="space-y-20">
            <div>
              <div className="flex items-center gap-6 mb-6">
                <span className="text-4xl font-black text-white italic opacity-20">01</span>
                <h3 className="text-2xl font-bold tracking-tight uppercase">Vision</h3>
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                Menjadi katalisator dalam evolusi pakaian urban, di mana setiap jahitan tidak hanya melayani estetika, tetapi juga fungsionalitas ekstrem dan keberlanjutan jangka panjang. Kami membayangkan dunia di mana pakaian adalah perisai sekaligus pernyataan diri yang abadi.
              </p>
            </div>

            <div className="border-t border-white/10 pt-16">
              <div className="flex items-center gap-6 mb-6">
                <span className="text-4xl font-black text-white italic opacity-20">02</span>
                <h3 className="text-2xl font-bold tracking-tight uppercase">Mission</h3>
              </div>
              <ul className="space-y-8">
                <li className="flex gap-6">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
                  <p className="text-zinc-400 font-light leading-relaxed">
                    <strong className="text-white block mb-1">Inovasi Material</strong>
                    Terus mengeksplorasi dan menggunakan bahan teknis tercanggih untuk daya tahan maksimal.
                  </p>
                </li>
                <li className="flex gap-6">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
                  <p className="text-zinc-400 font-light leading-relaxed">
                    <strong className="text-white block mb-1">Ethical Engineering</strong>
                    Menjaga rantai pasokan yang transparan dan proses produksi yang minim dampak lingkungan.
                  </p>
                </li>
                <li className="flex gap-6">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
                  <p className="text-zinc-400 font-light leading-relaxed">
                    <strong className="text-white block mb-1">Human Centric Design</strong>
                    Menciptakan siluet yang mendukung pergerakan bebas dalam setiap aktivitas urban.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
