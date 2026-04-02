export default function Roadmap() {
  return (
    <section className="py-32" id="roadmap">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4">— Roadmap —</h2>
          <h3 className="text-4xl font-bold tracking-tight text-white">The Journey Ahead</h3>
        </div>
        <div className="relative max-w-2xl mx-auto mb-32">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          <div className="space-y-16">
            <div className="relative flex items-center justify-between group">
              <div className="w-[45%] text-right pr-8">
                <h4 className="text-white font-bold">April 2026</h4>
                <p className="text-zinc-500 text-sm">Kickstarter Launch</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-primary absolute left-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(184,144,98,0.8)]" />
              <div className="w-[45%]" />
            </div>
            <div className="relative flex items-center justify-between group">
              <div className="w-[45%]" />
              <div className="w-2 h-2 rounded-full bg-white/20 absolute left-1/2 -translate-x-1/2" />
              <div className="w-[45%] pl-8">
                <h4 className="text-white font-bold">May 2026</h4>
                <p className="text-zinc-500 text-sm">Tooling &amp; Mold Testing</p>
              </div>
            </div>
            <div className="relative flex items-center justify-between group">
              <div className="w-[45%] text-right pr-8">
                <h4 className="text-white font-bold">June 2026</h4>
                <p className="text-zinc-500 text-sm">Beta Unit Production</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-white/20 absolute left-1/2 -translate-x-1/2" />
              <div className="w-[45%]" />
            </div>
            <div className="relative flex items-center justify-between group">
              <div className="w-[45%]" />
              <div className="w-2 h-2 rounded-full bg-white/20 absolute left-1/2 -translate-x-1/2" />
              <div className="w-[45%] pl-8">
                <h4 className="text-white font-bold">July 2026</h4>
                <p className="text-zinc-500 text-sm">Quality Assurance Phase</p>
              </div>
            </div>
            <div className="relative flex items-center justify-between group">
              <div className="w-[45%] text-right pr-8">
                <h4 className="text-white font-bold">August 2026</h4>
                <p className="text-zinc-500 text-sm">Worldwide Shipping</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-white/20 absolute left-1/2 -translate-x-1/2" />
              <div className="w-[45%]" />
            </div>
          </div>
        </div>
        {/* Stretch Goals */}
        <div className="text-center mb-12">
          <h4 className="text-white text-[10px] uppercase tracking-widest font-bold">Stretch Goals</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container p-8 rounded-2xl border border-white/5 text-center">
            <p className="text-primary text-2xl font-bold mb-2">$5k</p>
            <p className="text-white text-sm font-bold mb-1">Silicone Case</p>
            <p className="text-zinc-500 text-xs">Unlocks protective skin options</p>
          </div>
          <div className="bg-surface-container p-8 rounded-2xl border border-white/5 text-center">
            <p className="text-primary text-2xl font-bold mb-2">$25k</p>
            <p className="text-white text-sm font-bold mb-1">Travel Case</p>
            <p className="text-zinc-500 text-xs">Hard-shell storage for all mounts</p>
          </div>
          <div className="bg-surface-container p-8 rounded-2xl border border-white/5 text-center">
            <p className="text-primary text-2xl font-bold mb-2">$50k</p>
            <p className="text-white text-sm font-bold mb-1">Color Options</p>
            <p className="text-zinc-500 text-xs">Sage, Sand, and Ember variants</p>
          </div>
        </div>
      </div>
    </section>
  );
}
