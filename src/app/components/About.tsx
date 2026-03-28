export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-accent text-sm font-medium tracking-widest uppercase mb-4">
          <span className="w-8 h-px bg-accent" />
          Our Story
          <span className="w-8 h-px bg-accent" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
          Made by <span className="gradient-text">Canadians</span>,
          <br />
          for adventurers everywhere
        </h2>

        <div className="feature-card rounded-2xl bg-card-bg p-8 md:p-12 text-left">
          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            The Maglight M1 was created by two passionate Canadians who love outdoor activities
            and engineering. Together they formed The Mag Company and spent over a year perfecting
            the Maglight M1.
          </p>
          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            With over a year of development and real-world testing, each redesign and improvement
            has come from hands-on experience — ensuring the light withstands harsh environments
            while optimizing performance and battery life.
          </p>
          <p className="text-lg text-zinc-400 leading-relaxed">
            From the Canadian wilderness to your next adventure, the Maglight M1 is built to
            perform when you need it most.
          </p>
        </div>

        {/* Future accessories teaser */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-zinc-300">Coming Soon: Maglight Accessories</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Clips for Hanging", "Bike Connectors", "Wall Mounts", "Handle Attachment"].map(
              (accessory) => (
                <div
                  key={accessory}
                  className="px-5 py-2.5 rounded-full border border-card-border text-sm text-zinc-400 hover:border-accent hover:text-accent transition-colors"
                >
                  {accessory}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
