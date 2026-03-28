export default function MBack() {
  return (
    <section id="mback" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl" />
            <div className="relative aspect-[4/3] img-placeholder rounded-2xl border border-card-border">
              <div className="text-zinc-600 text-center p-8">
                <div className="text-5xl mb-4">🧲</div>
                <p>MBack + M1 image</p>
                <p className="text-xs mt-1 text-zinc-700">Add to public/images/mback.png</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-accent text-sm font-medium tracking-widest uppercase">
              <span className="w-8 h-px bg-accent" />
              The MBack
            </div>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Attach to <span className="gradient-text">anything</span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed">
              The MBack is a lightweight circular device featuring a high-strength 20mm neodymium
              magnet. Place it behind your clothing, and the Maglight M1 snaps on magnetically from
              the front — giving you hands-free light wherever you go.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="feature-card rounded-xl bg-card-bg p-5">
                <div className="text-accent font-bold text-2xl mb-1">Nd</div>
                <div className="text-sm text-zinc-400">Neodymium magnets</div>
              </div>
              <div className="feature-card rounded-xl bg-card-bg p-5">
                <div className="text-accent font-bold text-2xl mb-1">20mm</div>
                <div className="text-sm text-zinc-400">Magnet diameter</div>
              </div>
              <div className="feature-card rounded-xl bg-card-bg p-5">
                <div className="text-accent font-bold text-2xl mb-1">∞</div>
                <div className="text-sm text-zinc-400">Surfaces compatible</div>
              </div>
              <div className="feature-card rounded-xl bg-card-bg p-5">
                <div className="text-accent font-bold text-2xl mb-1">+</div>
                <div className="text-sm text-zinc-400">Future accessories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
