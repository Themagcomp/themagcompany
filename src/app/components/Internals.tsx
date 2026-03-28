const specs = [
  { label: "Processor", value: "RP2350" },
  { label: "LEDs", value: "6 front-facing" },
  { label: "Battery", value: "800 mAh Li-ion" },
  { label: "Charge Time", value: "45 minutes" },
  { label: "Charging", value: "USB-C (IPX6)" },
  { label: "Buttons", value: "3 (mode, +, -)" },
  { label: "Brightness", value: "50–400 lumens" },
  { label: "Board", value: "Custom FR4" },
];

const materials = [
  { name: "PA12 Nylon", desc: "Durable casing" },
  { name: "Black Oxide M3", desc: "Stainless screws" },
  { name: "TPU", desc: "Gasket & buttons" },
  { name: "Polycarbonate", desc: "Light window" },
];

export default function Internals() {
  return (
    <section id="specs" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-accent text-sm font-medium tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-accent" />
            Specs & Internals
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Engineered for <span className="gradient-text">performance</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            A custom compact circuit board delivers optimized brilliance and functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Specs table */}
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold mb-4 text-zinc-300">Technical Specifications</h3>
            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between py-3 px-4 rounded-lg ${
                  i % 2 === 0 ? "bg-card-bg" : ""
                }`}
              >
                <span className="text-zinc-400">{spec.label}</span>
                <span className="font-medium text-foreground">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Materials */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold mb-2 text-zinc-300">Build Materials</h3>
            <div className="grid grid-cols-2 gap-4">
              {materials.map((mat) => (
                <div
                  key={mat.name}
                  className="feature-card rounded-xl bg-card-bg p-6 flex flex-col gap-2"
                >
                  <span className="text-accent font-bold">{mat.name}</span>
                  <span className="text-sm text-zinc-500">{mat.desc}</span>
                </div>
              ))}
            </div>

            {/* Battery stats */}
            <div className="feature-card rounded-2xl bg-card-bg p-8 mt-2">
              <h4 className="text-lg font-semibold mb-6">Power</h4>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent">USB-C</div>
                  <div className="text-xs text-zinc-500 mt-1">Charging</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">45 min</div>
                  <div className="text-xs text-zinc-500 mt-1">Recharge time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">10 hr</div>
                  <div className="text-xs text-zinc-500 mt-1">Battery life</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
