export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      {/* Ambient Background Glows */}
      <div className="absolute top-[15%] right-[15%] w-[600px] h-[600px] blur-[180px] rounded-full pointer-events-none" style={{background: 'rgba(184, 144, 98, 0.15)'}} />
      <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] blur-[100px] rounded-full pointer-events-none" style={{background: 'rgba(235, 191, 141, 0.08)'}} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
        <div className="text-center">
          <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8">— Introducing —</p>
          <h1 className="text-7xl md:text-[9rem] font-black tracking-tighter leading-none pb-2">
            <span className="text-gradient-gold inline-block py-2">Maglight</span>
            <br />
            <span className="text-on-surface inline-block py-1">M1</span>
          </h1>
          <p className="text-on-surface-variant text-xl md:text-2xl font-light max-w-xl mx-auto leading-relaxed mt-8 mb-14 tracking-wide">
            Pocket-sized. Magnetic. Virtually indestructible.
          </p>
          <div className="flex justify-center gap-5 mb-16">
            <button className="gold-gradient text-on-primary px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(184,144,98,0.3)]">
              Back on Kickstarter
            </button>
            <a href="#features" className="px-10 py-5 rounded-full border border-outline-variant/20 font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-colors text-on-surface-variant">
              Explore
            </a>
          </div>
        </div>

        {/* Spec badges */}
        <div className="relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] blur-[100px] rounded-full pointer-events-none" style={{background: 'rgba(235, 191, 141, 0.1)'}} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto relative z-10">
            <div className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300">
              <span className="text-primary font-black text-3xl block mb-2">IPX6</span>
              <span className="text-zinc-500 text-[9px] uppercase tracking-widest font-bold">Waterproof</span>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300">
              <span className="text-primary font-black text-3xl block mb-2">400</span>
              <span className="text-zinc-500 text-[9px] uppercase tracking-widest font-bold">Lumens</span>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300">
              <span className="text-primary font-black text-3xl block mb-2">10hr</span>
              <span className="text-zinc-500 text-[9px] uppercase tracking-widest font-bold">Battery</span>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300">
              <span className="text-primary font-black text-3xl block mb-2">50g</span>
              <span className="text-zinc-500 text-[9px] uppercase tracking-widest font-bold">Ultralight</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
