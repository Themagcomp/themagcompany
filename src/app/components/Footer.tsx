export default function Footer() {
  return (
    <footer className="border-t border-card-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA banner */}
        <div className="rounded-2xl bg-gradient-to-r from-accent/10 to-accent-light/10 border border-accent/20 p-8 md:p-12 text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Ready to light your next adventure?
          </h2>
          <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
            Back the Maglight M1 on Kickstarter this April and be one of the first to experience
            hands-free magnetic lighting.
          </p>
          <a
            href="#hero"
            className="cta-pulse inline-block bg-accent text-black px-8 py-4 rounded-full text-base font-semibold hover:bg-accent-light transition-colors"
          >
            Back on Kickstarter — April 2026
          </a>
        </div>

        {/* Footer links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>
            <span className="text-foreground font-semibold">THE MAG</span>
            <span className="text-accent font-semibold"> COMPANY</span>
          </div>
          <div className="flex gap-6">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#specs" className="hover:text-foreground transition-colors">Specs</a>
            <a href="#roadmap" className="hover:text-foreground transition-colors">Roadmap</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
          </div>
          <div>&copy; 2026 The Mag Company. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
