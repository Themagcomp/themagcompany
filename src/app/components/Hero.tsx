export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-24 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary-container/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-primary-container/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4">— INTRODUCING</p>
        <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
          <span className="text-gradient-gold block">Maglight</span>
          <span className="text-white block">M1</span>
        </h1>
        <p className="text-zinc-400 text-lg font-medium max-w-md mb-10 leading-relaxed">
          The world&apos;s most versatile everyday carry light. Engineered for durability, powered by magnets, and designed for the nocturnal explorer.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs gold-glow hover:scale-105 transition-all duration-300">
            Back on Kickstarter — April 2026
          </button>
          <button className="border border-outline-variant/30 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs backdrop-blur-sm hover:bg-white/5 transition-all">
            Explore Features
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 relative">
        {/* Specs Badges */}
        <div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-48 hover:translate-y-[-4px] transition-transform">
          <span className="text-primary font-bold text-3xl">IPX6</span>
          <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Waterproof</span>
        </div>
        <div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-48 mt-8 hover:translate-y-[-4px] transition-transform">
          <span className="text-primary font-bold text-3xl">400</span>
          <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Lumens</span>
        </div>
        <div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-48 hover:translate-y-[-4px] transition-transform">
          <span className="text-primary font-bold text-3xl">10hr</span>
          <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Battery</span>
        </div>
        <div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-48 mt-8 hover:translate-y-[-4px] transition-transform">
          <span className="text-primary font-bold text-3xl">50g</span>
          <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Lightweight</span>
        </div>
        {/* Hero Image Placeholder Decor */}
        <div className="absolute inset-0 -z-10 opacity-20 scale-125 blur-3xl pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}
