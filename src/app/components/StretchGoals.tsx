export default function StretchGoals() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold mb-16 text-center">Community Stretch Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/10 text-center">
            <div className="text-primary-fixed-dim text-sm font-bold mb-4">$5,000 GOAL</div>
            <h3 className="text-2xl font-bold mb-4 text-on-surface">Silicone Case</h3>
            <p className="text-on-surface-variant mb-6 text-sm">Every order receives a protective soft-touch silicone sleeve.</p>
            <div className="w-full h-1 bg-primary/20 rounded-full overflow-hidden">
              <div className="w-full h-full bg-primary" />
            </div>
            <div className="mt-4 text-[0.7rem] uppercase font-bold text-primary">Unlocked</div>
          </div>
          <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/10 text-center">
            <div className="text-on-surface-variant text-sm font-bold mb-4">$25,000 GOAL</div>
            <h3 className="text-2xl font-bold mb-4 text-on-surface">Travel Case</h3>
            <p className="text-on-surface-variant mb-6 text-sm">Custom EVA hardshell carrying case for your M1 and charging cable.</p>
            <div className="w-full h-1 bg-outline-variant/20 rounded-full overflow-hidden">
              <div className="w-[60%] h-full bg-primary-container" />
            </div>
            <div className="mt-4 text-[0.7rem] uppercase font-bold text-primary-container">In Progress</div>
          </div>
          <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/10 text-center">
            <div className="text-on-surface-variant text-sm font-bold mb-4">$50,000 GOAL</div>
            <h3 className="text-2xl font-bold mb-4 text-on-surface">Color Options</h3>
            <p className="text-on-surface-variant mb-6 text-sm">Unlocked limited edition Obsidian Black and Arctic White finishes.</p>
            <div className="w-full h-1 bg-outline-variant/20 rounded-full overflow-hidden">
              <div className="w-[10%] h-full bg-outline-variant" />
            </div>
            <div className="mt-4 text-[0.7rem] uppercase font-bold text-on-surface-variant">Locked</div>
          </div>
        </div>
      </div>
    </section>
  );
}
