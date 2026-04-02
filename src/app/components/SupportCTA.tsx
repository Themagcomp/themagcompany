export default function SupportCTA() {
  return (
    <section className="py-40 flex justify-center items-center text-center px-6">
      <div className="max-w-3xl glass p-16 rounded-xl relative">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-container flex items-center justify-center rounded-full shadow-[0_0_50px_rgba(184,144,98,0.4)]">
          <span className="material-symbols-outlined text-on-primary text-4xl">favorite</span>
        </div>
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">Support the Vision</h2>
        <p className="text-on-surface-variant mb-12 text-lg">
          Join 4,200+ backers who are helping us redefine what a light can be. Stretch goals including Titanium finishes are now unlocked.
        </p>
        <div className="flex flex-col gap-6">
          <button className="gold-gradient text-on-primary px-16 py-6 rounded-full font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform">
            Back This Project
          </button>
          <div className="flex justify-center gap-8 text-[10px] tracking-widest uppercase font-bold text-primary">
            <span>Free Global Shipping</span>
            <span>Lifetime Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
}
