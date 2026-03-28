const resistanceStats = [
  {
    value: "IPX6",
    label: "Water Resistance",
    desc: "Withstands powerful water jets from any direction",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
      </svg>
    ),
  },
  {
    value: "-10°C to 40°C",
    label: "Temperature Range",
    desc: "Tested in the harsh Canadian winter environment",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" />
      </svg>
    ),
  },
  {
    value: "1 m",
    label: "Impact Resistance",
    desc: "Drop it, pick it up, and keep going",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    value: "UV",
    label: "Sun Resistance",
    desc: "UV resistant materials that won't degrade in sunlight",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
];

export default function Weather() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-accent text-sm font-medium tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-accent" />
            Durability
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Built to <span className="gradient-text">withstand</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            Rigorously tested for the most demanding environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resistanceStats.map((stat) => (
            <div
              key={stat.label}
              className="feature-card rounded-2xl bg-card-bg p-8 flex items-start gap-6"
            >
              <div className="text-accent shrink-0 mt-1">{stat.icon}</div>
              <div className="flex flex-col gap-2">
                <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground">{stat.label}</div>
                <p className="text-zinc-400">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
