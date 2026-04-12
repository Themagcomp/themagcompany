import Image from "next/image";
import AutoplayVideo from "./AutoplayVideo";

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
        <div className="flex justify-between items-center px-6 md:px-12 py-3 max-w-[1440px] mx-auto w-full">
          <div className="text-xl font-bold text-on-surface tracking-tight">Maglight M1</div>
          <div className="hidden md:flex space-x-8">
            <a
              className="text-xs font-medium text-on-surface/60 hover:text-primary transition-colors duration-300"
              href="#overview"
            >
              Overview
            </a>
            <a
              className="text-xs font-medium text-on-surface/60 hover:text-primary transition-colors duration-300"
              href="#specs"
            >
              Specs
            </a>
            <a
              className="text-xs font-medium text-on-surface/60 hover:text-primary transition-colors duration-300"
              href="#reviews"
            >
              Reviews
            </a>
            <a
              className="text-xs font-medium text-on-surface/60 hover:text-primary transition-colors duration-300"
              href="#support"
            >
              Support
            </a>
          </div>
          <button className="bg-primary-container text-on-primary px-4 py-1.5 rounded-full font-medium text-xs tracking-tight hover:opacity-90 transition-all">
            Buy
          </button>
        </div>
      </nav>

      <main className="pt-14">
        <section
          id="overview"
          className="relative min-h-[88vh] flex flex-col items-center justify-center text-center px-6 pt-20 pb-12 bg-white text-on-surface overflow-hidden"
        >
          <p className="relative z-20 text-[0.7rem] md:text-xs font-semibold tracking-[0.32em] uppercase text-on-surface/45 mb-4 md:mb-6">
            Introducing
          </p>

          <div className="relative w-full flex items-center justify-center">
            <h1
              aria-label="Maglight"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[32vw] md:text-[26vw] lg:text-[23vw] font-black tracking-[-0.055em] leading-[0.82] text-on-surface whitespace-nowrap select-none pointer-events-none z-0"
            >
              MAGLIGHT
            </h1>

            <div className="relative z-10 w-[74%] md:w-[60%] lg:w-[54%] xl:w-[50%] max-w-[720px]">
              <div className="relative aspect-[3/2] rounded-[2rem] overflow-hidden shadow-[0_60px_140px_-30px_rgba(0,0,0,0.45)]">
                <Image
                  src="/m1-hero.png"
                  alt="Maglight M1 rendered at an angle"
                  fill
                  priority
                  sizes="(max-width: 768px) 74vw, (max-width: 1280px) 60vw, 720px"
                  className="object-cover scale-[1.08] select-none pointer-events-none"
                  style={{ objectPosition: "center 42%" }}
                />
              </div>
            </div>
          </div>

          <div className="relative z-20 mt-10 md:mt-14 flex flex-col items-center gap-3">
            <button className="bg-primary-container text-on-primary px-8 py-3 rounded-full text-base font-semibold hover:opacity-90 transition-all shadow-[0_10px_30px_-10px_rgba(0,102,204,0.5)]">
              Back on Kickstarter
            </button>
            <p className="text-sm text-on-surface font-semibold">
              From $49 or $12/mo. for 4 mos.
            </p>
            <p className="text-xs text-on-surface-variant/60 font-medium">
              Shipping worldwide Fall 2026
            </p>
          </div>
        </section>

        <section className="py-32 bg-white px-6 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-primary font-semibold mb-2">Design</p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Adventure-proof by design.
            </h2>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              Crafted from aerospace-grade aluminum, the M1 is as light as it is
              durable. It&apos;s the companion that doesn&apos;t just keep up—it
              leads the way.
            </p>
          </div>
          <div className="max-w-6xl mx-auto aspect-video bg-[#f5f5f7] rounded-4xl flex items-center justify-center">
            <span className="text-on-surface-variant/40 font-medium">
              M1 in Action — Outdoor Scene Placeholder
            </span>
          </div>
        </section>

        <section id="specs" className="py-24 bg-[#fbfbfd] px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">
              Take a closer look.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-6 h-full md:h-[800px]">
              <div className="md:col-span-8 md:row-span-2 bento-card rounded-4xl p-12 flex flex-col justify-between overflow-hidden relative">
                <div className="max-w-md relative z-10">
                  <h3 className="text-3xl font-bold mb-4">1000 Lumens</h3>
                  <p className="text-lg text-on-surface-variant leading-relaxed">
                    Blinding power in the palm of your hand. Precision
                    engineered optics for a uniform beam that reaches further.
                  </p>
                </div>
                <div className="flex-grow flex items-center justify-center py-12">
                  <div className="w-full h-64 bg-surface-dim/20 rounded-2xl flex items-center justify-center border border-black/5">
                    <span className="text-on-surface-variant/40 font-medium italic">
                      Photo — High power beam visualization
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 bento-card rounded-4xl p-10 flex flex-col">
                <h3 className="text-2xl font-bold mb-3">MagSafe Ready</h3>
                <p className="text-on-surface-variant leading-snug mb-8">
                  Snaps directly to your iPhone or any magnetic surface with
                  industrial-grade strength.
                </p>
                <div className="flex-grow flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-primary/40">
                    flash_on
                  </span>
                </div>
              </div>
              <div className="md:col-span-4 bento-card rounded-4xl p-10 flex flex-col">
                <h3 className="text-2xl font-bold mb-3">60h Battery</h3>
                <p className="text-on-surface-variant leading-snug mb-8">
                  Efficient power management ensures you&apos;re never left in
                  the dark when it matters most.
                </p>
                <div className="flex-grow flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-primary/40">
                    battery_charging_full
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-white px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-primary font-semibold mb-2">Interface</p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Your lighting, your way.
            </h2>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              Five distinct modes from ambient glow to emergency strobe. Tweak
              everything with the tactile, satisfying dial.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
            <div className="bento-card rounded-4xl p-8 md:p-10 flex flex-col overflow-hidden">
              <div className="relative w-full flex-grow min-h-[320px] rounded-3xl overflow-hidden bg-black mb-10">
                <AutoplayVideo
                  src="/front-cover.mp4"
                  className="absolute inset-0 w-full h-full object-cover scale-[1.15]"
                />
              </div>
              <div className="px-2">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">
                  Form Factor
                </p>
                <h4 className="text-3xl font-bold tracking-tight mb-4">
                  Compact Design.
                </h4>
                <p className="text-base text-on-surface-variant leading-relaxed max-w-sm">
                  Pocket-sized at just{" "}
                  <span className="text-on-surface font-semibold">
                    50 × 48 × 20mm
                  </span>
                  . Light enough to take anywhere, small enough to forget
                  it&apos;s there.
                </p>
              </div>
            </div>
            <div className="bg-on-surface text-surface rounded-4xl p-12 flex flex-col justify-between overflow-hidden relative">
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-primary-fixed mb-4 block">
                  The Ecosystem
                </span>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Meet the MBack.
                </h3>
                <p className="text-lg text-surface-dim/80 leading-relaxed mb-10 max-w-sm">
                  The ultimate mounting plate. Attach it to your backpack, bike,
                  or belt and the M1 becomes an extension of your movement.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary-fixed font-semibold hover:gap-3 transition-all"
                >
                  Learn more about MBack
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </a>
              </div>
              <div className="mt-12 md:absolute md:right-[-10%] md:bottom-[-5%] md:w-2/3 aspect-square bg-white/5 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-sm">
                <span className="text-white/20 font-medium">MBack Plate</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-[#fbfbfd] px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 apple-text-gradient">
              BUILT FOR THE ELEMENTS.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-8 bg-white rounded-3xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/5 flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">
                  water_drop
                </span>
                <h4 className="font-bold text-on-surface text-lg">IP68 Water</h4>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/5 flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">
                  air
                </span>
                <h4 className="font-bold text-on-surface text-lg">Dust Proof</h4>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/5 flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">
                  height
                </span>
                <h4 className="font-bold text-on-surface text-lg">2m Drop</h4>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/5 flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">
                  ac_unit
                </span>
                <h4 className="font-bold text-on-surface text-lg">-20°C Ready</h4>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-white px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-24 tracking-tight">
              The Road Ahead
            </h2>
            <div className="relative max-w-2xl mx-auto space-y-16">
              <div className="absolute left-[23px] top-2 bottom-2 w-0.5 bg-surface-container"></div>
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center ring-8 ring-white">
                  <span className="material-symbols-outlined text-white text-xl">
                    check
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-1">Concept &amp; Design</h4>
                <p className="text-on-surface-variant">
                  Completed Q1 2024. Finalized industrial design and material
                  sourcing.
                </p>
              </div>
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary-container flex items-center justify-center ring-8 ring-white">
                  <span className="material-symbols-outlined text-white text-xl">
                    rocket_launch
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-1 text-primary">
                  Kickstarter Launch
                </h4>
                <p className="text-on-surface-variant font-medium">
                  Live Now! Joining forces with the community to bring M1 to
                  life.
                </p>
              </div>
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-surface-container border-4 border-white flex items-center justify-center ring-8 ring-white">
                  <div className="w-3 h-3 rounded-full bg-outline-variant/30"></div>
                </div>
                <h4 className="text-xl font-bold mb-1 text-on-surface-variant/50">
                  Mass Production
                </h4>
                <p className="text-on-surface-variant/40">
                  Scheduled for Q3 2024. Assembly in our ISO-certified
                  facilities.
                </p>
              </div>
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-surface-container border-4 border-white flex items-center justify-center ring-8 ring-white">
                  <div className="w-3 h-3 rounded-full bg-outline-variant/30"></div>
                </div>
                <h4 className="text-xl font-bold mb-1 text-on-surface-variant/50">
                  Global Shipping
                </h4>
                <p className="text-on-surface-variant/40">
                  Landing in pockets and backpacks everywhere Q4 2024.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-40 bg-[#f5f5f7] px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-10 apple-text-gradient">
              Design that vanishes.
            </h2>
            <p className="text-2xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto mb-20 font-medium">
              At Maglight, we believe the best tools are the ones you
              don&apos;t have to think about. M1 was designed with a singular
              focus: to provide powerful light exactly where you need it,
              effortlessly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <p className="text-5xl font-bold mb-2">18</p>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant/60 font-bold">
                  Months of R&amp;D
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-5xl font-bold mb-2">42</p>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant/60 font-bold">
                  Prototypes
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-5xl font-bold mb-2">0</p>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant/60 font-bold">
                  Compromises
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto px-12 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div>
              <div className="text-xl font-bold mb-2">Maglight</div>
              <p className="text-sm text-on-surface-variant/60">
                Illuminating the path forward.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              <a
                href="#"
                className="text-xs font-semibold text-on-surface-variant/60 hover:text-on-surface transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs font-semibold text-on-surface-variant/60 hover:text-on-surface transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-xs font-semibold text-on-surface-variant/60 hover:text-on-surface transition-colors"
              >
                Cookie Settings
              </a>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-black/5 text-xs text-on-surface-variant/40">
            © 2024 Maglight. All rights reserved. iPhone and MagSafe are
            trademarks of Apple Inc.
          </div>
        </div>
      </footer>
    </>
  );
}
