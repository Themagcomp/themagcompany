export default function Internals() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto" id="specs">
      <div className="text-center mb-20">
        <h2 className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4">— Specs &amp; Internals —</h2>
        <h3 className="text-4xl font-bold tracking-tight text-white">Precision Engineering</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Technical Table */}
        <div className="lg:col-span-2 bg-[#111111] p-10 rounded-2xl border border-white/5">
          <h4 className="text-white text-[10px] uppercase tracking-[0.2em] font-bold mb-8 border-b border-white/5 pb-4">Internal Hardware</h4>
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-zinc-500 text-sm">Processor</span>
              <span className="text-white font-medium">Raspberry Pi RP2350</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-zinc-500 text-sm">LED Array</span>
              <span className="text-white font-medium">6 Front-Facing SMD High-CRI</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-zinc-500 text-sm">Optics</span>
              <span className="text-white font-medium">Total Internal Reflection (TIR)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 text-sm">Charging</span>
              <span className="text-white font-medium">USB-C Fast Charge (15 min 80%)</span>
            </div>
          </div>
        </div>
        {/* Materials Grid */}
        <div className="bg-[#111111] p-10 rounded-2xl border border-white/5">
          <h4 className="text-white text-[10px] uppercase tracking-[0.2em] font-bold mb-8 border-b border-white/5 pb-4">Build Materials</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-surface-container-low text-center">
              <p className="text-primary font-bold text-xs mb-1">PA12</p>
              <p className="text-zinc-500 text-[8px] uppercase tracking-widest">Nylon</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-container-low text-center">
              <p className="text-primary font-bold text-xs mb-1">M3</p>
              <p className="text-zinc-500 text-[8px] uppercase tracking-widest">Black Oxide</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-container-low text-center">
              <p className="text-primary font-bold text-xs mb-1">TPU</p>
              <p className="text-zinc-500 text-[8px] uppercase tracking-widest">Sealants</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-container-low text-center">
              <p className="text-primary font-bold text-xs mb-1">PC</p>
              <p className="text-zinc-500 text-[8px] uppercase tracking-widest">Polycarb</p>
            </div>
          </div>
        </div>
      </div>
      {/* Wide Power Card */}
      <div className="bg-[#111111] p-10 rounded-2xl border border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h4 className="text-white font-bold text-xl mb-2">Advanced Power Management</h4>
          <p className="text-zinc-500 text-sm">Dynamic thermal regulation ensures the M1 never overheats, preserving battery life and LED integrity.</p>
        </div>
        <div className="flex gap-12">
          <div className="text-center">
            <p className="text-primary text-3xl font-black leading-none mb-1">850mAh</p>
            <p className="text-zinc-500 text-[8px] uppercase tracking-widest">Capacity</p>
          </div>
          <div className="text-center">
            <p className="text-primary text-3xl font-black leading-none mb-1">2yr</p>
            <p className="text-zinc-500 text-[8px] uppercase tracking-widest">Warranty</p>
          </div>
        </div>
      </div>
    </section>
  );
}
