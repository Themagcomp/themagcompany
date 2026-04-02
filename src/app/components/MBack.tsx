export default function MBack() {
  return (
    <section className="py-32" id="mback">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container p-8 rounded-2xl border border-white/5">
              <p className="text-primary text-3xl font-black mb-1">Nd</p>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Neodymium</p>
            </div>
            <div className="bg-surface-container p-8 rounded-2xl border border-white/5">
              <p className="text-primary text-3xl font-black mb-1">20mm</p>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Magnet Diameter</p>
            </div>
            <div className="bg-surface-container p-8 rounded-2xl border border-white/5">
              <p className="text-primary text-3xl font-black mb-1">&infin;</p>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Surfaces</p>
            </div>
            <div className="bg-surface-container p-8 rounded-2xl border border-white/5">
              <p className="text-primary text-3xl font-black mb-1">+</p>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Accessories</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4">— THE MBACK</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gradient-gold mb-8">Attach to anything</h2>
          <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
            The MBack isn&apos;t just a clip; it&apos;s a modular ecosystem. Using industrial-grade N52 magnets, the M1 snaps onto steel beams, car hoods, or our custom magnetic mounts.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Swap between the bike mount, the wall plate, or the universal clip in seconds. No screws, no friction, just pure magnetic attraction.
          </p>
        </div>
      </div>
    </section>
  );
}
