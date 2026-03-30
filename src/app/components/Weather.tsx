export default function Weather() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#111111] p-10 rounded-2xl border border-white/5 text-center flex flex-col items-center">
          <span className="material-symbols-outlined text-primary text-4xl mb-6">water_drop</span>
          <p className="text-primary text-4xl font-bold mb-2">IPX6</p>
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest">Weatherproof</p>
        </div>
        <div className="bg-[#111111] p-10 rounded-2xl border border-white/5 text-center flex flex-col items-center">
          <span className="material-symbols-outlined text-primary text-4xl mb-6">thermostat</span>
          <p className="text-primary text-3xl font-bold mb-2">-10°C to 40°C</p>
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest">Thermal Range</p>
        </div>
        <div className="bg-[#111111] p-10 rounded-2xl border border-white/5 text-center flex flex-col items-center">
          <span className="material-symbols-outlined text-primary text-4xl mb-6">noise_aware</span>
          <p className="text-primary text-4xl font-bold mb-2">1m Impact</p>
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest">Drop Resistance</p>
        </div>
        <div className="bg-[#111111] p-10 rounded-2xl border border-white/5 text-center flex flex-col items-center">
          <span className="material-symbols-outlined text-primary text-4xl mb-6">wb_sunny</span>
          <p className="text-primary text-4xl font-bold mb-2">UV Resistance</p>
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest">Material Longevity</p>
        </div>
      </div>
    </section>
  );
}
