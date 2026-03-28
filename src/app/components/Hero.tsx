export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text content */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2 text-accent text-sm font-medium tracking-widest uppercase">
            <span className="w-8 h-px bg-accent" />
            Introducing
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="gradient-text">Maglight</span>
            <br />
            <span className="text-foreground">M1</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed">
            Revolutionize portable lighting with hands-free magnetic technology.
            Attach anywhere, light everything.
          </p>

          {/* Quick specs */}
          <div className="flex flex-wrap gap-4 text-sm">
            {[
              { label: "IPX6", desc: "Waterproof" },
              { label: "400", desc: "Lumens" },
              { label: "10hr", desc: "Battery" },
              { label: "50g", desc: "Lightweight" },
            ].map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col items-center px-4 py-3 rounded-xl bg-card-bg border border-card-border"
              >
                <span className="text-accent font-bold text-lg">{spec.label}</span>
                <span className="text-zinc-500 text-xs">{spec.desc}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="#roadmap"
              className="cta-pulse bg-accent text-black px-8 py-4 rounded-full text-base font-semibold hover:bg-accent-light transition-colors text-center"
            >
              Back on Kickstarter — April 2026
            </a>
            <a
              href="#features"
              className="border border-card-border text-foreground px-8 py-4 rounded-full text-base font-semibold hover:border-zinc-600 transition-colors text-center"
            >
              Explore Features
            </a>
          </div>
        </div>

        {/* Product image placeholder */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
          <div className="relative w-full max-w-md aspect-square img-placeholder rounded-3xl border border-card-border">
            <div className="text-zinc-600 text-center p-8">
              <div className="text-6xl mb-4">💡</div>
              <p>Product image</p>
              <p className="text-xs mt-1 text-zinc-700">Add to public/images/hero-product.png</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
