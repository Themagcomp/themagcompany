const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 12l2-6h4l2 6-2 6h-4L8 12z" />
      </svg>
    ),
    title: "Magnetic Technology",
    description:
      "Strong neodymium magnet attaches to any magnetic surface. Pair with the MBack to attach to clothing and more.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: "50–400 Lumens",
    description:
      "Two dedicated buttons let you adjust brightness from a subtle glow to a powerful 400-lumen beam.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "4 Light Modes",
    description:
      "Cycle between ON, FLASH, STROBE, and OFF. Hold the mode button for 3 seconds to activate SOS.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="7" width="12" height="14" rx="2" />
        <path d="M10 7V5a2 2 0 014 0v2" />
        <path d="M12 12v3" />
      </svg>
    ),
    title: "10-Hour Battery",
    description:
      "800 mAh li-ion battery lasts up to 10 hours. Recharge in just 45 minutes with USB-C.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
      </svg>
    ),
    title: "IPX6 Waterproof",
    description:
      "Withstands powerful water jets from any direction. Built for rain, snow, and the outdoors.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
    title: "Ultra Compact",
    description:
      "Just 50 x 48 x 20 mm — fits in your pocket, clips to your gear, and goes anywhere you do.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-accent text-sm font-medium tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-accent" />
            Features
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Built for <span className="gradient-text">every adventure</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            The Maglight M1 packs serious performance into a pocket-sized package.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card rounded-2xl bg-card-bg p-8 flex flex-col gap-4"
            >
              <div className="text-accent">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
