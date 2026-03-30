export default function About() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto" id="about">
      <div className="text-center mb-16">
        <h2 className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4">— Our Story —</h2>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12">Built by Explorers</h3>
        <div className="bg-[#111111] p-12 rounded-3xl border border-white/5 max-w-4xl mx-auto text-left relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            The Mag Company was born from a cold winter night in the Canadian wilderness. Two engineers, frustrated by bulky flashlights that couldn&apos;t be positioned where needed, decided to rethink illumination from the ground up.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed mb-12">
            We believe that the best tools are the ones that disappear until you need them. The Maglight M1 is our answer to that philosophy: powerful, modular, and virtually indestructible.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-white/5">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Modular Future:</span>
            <div className="px-4 py-1.5 rounded-full border border-white/10 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Clips</div>
            <div className="px-4 py-1.5 rounded-full border border-white/10 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Bike</div>
            <div className="px-4 py-1.5 rounded-full border border-white/10 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Wall</div>
            <div className="px-4 py-1.5 rounded-full border border-white/10 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Handle</div>
            <span className="text-primary text-[8px] font-bold italic ml-2">COMING SOON</span>
          </div>
        </div>
      </div>
    </section>
  );
}
