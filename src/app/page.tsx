import Image from "next/image";
import AutoplayVideo from "./AutoplayVideo";
import InterestForm from "./InterestForm";
import MaterialsScrubVideo from "./MaterialsScrubVideo";
import ModeSwitcher from "./ModeSwitcher";

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
              href="#signup"
            >
              Support
            </a>
          </div>
          <a
            href="https://www.kickstarter.com/projects/magcompany/maglight-m1-a-campers-partner-in-crime"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-container text-on-primary px-4 py-1.5 rounded-full font-medium text-xs tracking-tight hover:opacity-90 transition-all"
          >
            Back
          </a>
        </div>
      </nav>

      <main className="pt-14">
        <section
          id="overview"
          className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-6 pt-20 pb-12 bg-white text-on-surface overflow-hidden"
        >
          <p className="relative z-20 text-[0.7rem] md:text-xs font-semibold tracking-[0.32em] uppercase text-on-surface/45 mb-3 md:mb-4">
            Introducing
          </p>

          <h1
            aria-label="Maglight"
            className="relative z-0 text-[22vw] md:text-[19vw] lg:text-[17vw] font-black tracking-[-0.055em] leading-[0.82] text-on-surface whitespace-nowrap select-none pointer-events-none"
          >
            MAGLIGHT
          </h1>

          <div className="relative z-10 w-[94%] md:w-[92%] lg:w-[88%] max-w-[1400px] mt-10 md:mt-14 lg:mt-16">
            <div className="relative aspect-[16/9] rounded-[2.25rem] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.5)] bg-black">
              <div className="absolute inset-0 hero-float pointer-events-none">
                <Image
                  src="/m1-hero-fg.png"
                  alt="Maglight M1 rendered at an angle"
                  fill
                  priority
                  sizes="(max-width: 1400px) 92vw, 1400px"
                  className="object-cover scale-[1.06] select-none"
                  style={{ objectPosition: "center 46%" }}
                />
              </div>
            </div>
          </div>

          <div className="relative z-20 mt-10 md:mt-12 flex flex-col items-center gap-3">
            <a
              href="https://www.kickstarter.com/projects/magcompany/maglight-m1-a-campers-partner-in-crime"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-container text-on-primary px-8 py-3 rounded-full text-base font-semibold hover:opacity-90 transition-all shadow-[0_10px_30px_-10px_rgba(0,102,204,0.5)]"
            >
              Back on Kickstarter
            </a>
            <p className="text-xs text-on-surface-variant/60 font-medium">
              Shipping begins August 2026
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
              Engineered from impact-resistant polymers and sealed with TPU
              gaskets, the M1 is as light as it is durable. It&apos;s the
              companion that doesn&apos;t just keep up. It leads the way.
            </p>
          </div>
          <div className="max-w-6xl mx-auto relative aspect-video bg-[#f5f5f7] rounded-4xl overflow-hidden">
            <Image
              src="/m1-adventure.jpg"
              alt="Maglight M1 glowing on a rock beside a snow-edged stream"
              fill
              sizes="(max-width: 1280px) 100vw, 1152px"
              className="object-cover"
            />
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
                  <h3 className="text-3xl font-bold mb-4">400 Lumens</h3>
                  <p className="text-lg text-on-surface-variant leading-relaxed">
                    Blinding power in the palm of your hand. Precision
                    engineered optics for a uniform beam that reaches further.
                  </p>
                </div>
                <div className="relative flex-grow min-h-[280px] mt-8 rounded-2xl overflow-hidden border border-black/5 bg-black">
                  <Image
                    src="/m1-beam.jpg"
                    alt="Maglight M1 beam visualized against a wall in a dark room"
                    fill
                    sizes="(max-width: 1280px) 60vw, 700px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-4 bento-card rounded-4xl p-10 flex flex-col overflow-hidden">
                <h3 className="text-2xl font-bold mb-3">MagSafe Ready</h3>
                <p className="text-on-surface-variant leading-snug mb-6">
                  Snaps directly to your iPhone or any magnetic surface with
                  industrial-grade strength.
                </p>
                <div className="relative flex-grow min-h-[200px] rounded-3xl overflow-hidden bg-black">
                  <AutoplayVideo
                    src="/magnet-use.mp4"
                    loop
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-4 bento-card rounded-4xl p-10 flex flex-col">
                <h3 className="text-2xl font-bold mb-3">10h Battery</h3>
                <p className="text-on-surface-variant leading-snug mb-8">
                  An 800 mAh cell delivers a full day of use, with USB-C
                  recharging in just 45 minutes.
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
              Cycle between On, Flash, and Strobe with a dedicated button. Hold
              it to trigger SOS. Brightness adjusts from 50 to 400 lumens.
            </p>
          </div>
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-8 items-stretch">
            <ModeSwitcher />
            <div className="bg-on-surface text-surface rounded-4xl p-10 md:p-14 flex flex-col md:flex-row overflow-hidden relative">
              <div className="md:w-1/2 flex flex-col justify-center space-y-6 relative z-10">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary-fixed block mb-4">
                    The Ecosystem
                  </span>
                  <h3 className="text-[42px] md:text-[44px] font-black text-white leading-[0.95] tracking-[-0.04em] whitespace-nowrap">
                    Meet the MBack.
                  </h3>
                </div>
                <p className="text-surface-dim/75 text-[17px] leading-relaxed max-w-[280px]">
                  The ultimate mounting plate. Attach it to your backpack, bike,
                  or belt and the M1 becomes an extension of your movement.
                </p>
                <div className="pt-2">
                  <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary-fixed/60 mb-3">
                    Works With
                  </p>
                  <div className="flex flex-wrap gap-2 max-w-[320px]">
                    {[
                      "Backpacks",
                      "Bikes",
                      "Belt loops",
                      "Metal surfaces",
                    ].map((label) => (
                      <span
                        key={label}
                        className="px-3 py-1.5 rounded-full bg-white/5 text-[11px] font-semibold text-white/75 border border-white/[0.08]"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary-fixed/60 mb-3">
                    Coming Next
                  </p>
                  <div className="flex flex-wrap gap-2 max-w-[320px]">
                    {[
                      "Hanging Clip",
                      "Bike Connector",
                      "Wall Mount",
                      "Handle",
                    ].map((label) => (
                      <span
                        key={label}
                        className="px-3 py-1.5 rounded-full bg-transparent text-[11px] font-semibold text-white/45 border border-dashed border-white/20"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-[11px] text-white/35 italic">
                    A growing ecosystem of adapters in development.
                  </p>
                </div>
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

              <div className="mt-12 md:mt-0 md:w-1/2 flex items-center justify-center min-w-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/m1-mback.png"
                  alt="MBack magnetic mounting plate"
                  className="w-full max-w-[260px] md:max-w-[300px] h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative min-h-[85vh] md:min-h-[90vh] bg-black overflow-hidden flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/m1-in-action.jpg"
              alt="Maglight M1 magnetically attached to an electrical panel, beam cutting through the darkness"
              fill
              sizes="100vw"
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent md:from-black md:via-black/60 md:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 py-24">
            <div className="max-w-xl text-white">
              <p className="text-xs md:text-sm font-semibold tracking-[0.28em] uppercase text-white/50 mb-5">
                When it matters
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.03] mb-8">
                When the lights
                <br />
                go out.
              </h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-lg">
                Snap it to the panel. Snap it to the toolbox. Snap it to the
                rack in the basement. The M1 is already exactly where you
                need it. Hands free, beam steady, the moment the room goes
                dark.
              </p>
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
                <h4 className="font-bold text-on-surface text-lg">IPX6 Water</h4>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/5 flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">
                  wb_sunny
                </span>
                <h4 className="font-bold text-on-surface text-lg">UV Resistant</h4>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/5 flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">
                  height
                </span>
                <h4 className="font-bold text-on-surface text-lg">1m Drop</h4>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/5 flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">
                  ac_unit
                </span>
                <h4 className="font-bold text-on-surface text-lg">-10°C to 40°C</h4>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-black text-white px-6 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xs md:text-sm font-semibold tracking-[0.28em] uppercase text-white/50 mb-4">
              Materials
            </p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Built from the ground up.
            </h2>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              Every component chosen with intent. Resilient enough to take a
              beating, refined enough to disappear into your daily carry.
            </p>
          </div>
          <MaterialsScrubVideo />
          <p className="mt-6 text-center text-xs text-white/40 font-medium italic max-w-6xl mx-auto">
            * Material spec reflects the base Kickstarter build. Stretch goals
            will upgrade select components.
          </p>
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
                  Over a year of iteration and real-world testing. Industrial
                  design and material sourcing finalized.
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
                  April 2026. Live now. Joining forces with the community to
                  bring M1 to life.
                </p>
              </div>
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-surface-container border-4 border-white flex items-center justify-center ring-8 ring-white">
                  <div className="w-3 h-3 rounded-full bg-outline-variant/30"></div>
                </div>
                <h4 className="text-xl font-bold mb-1 text-on-surface-variant/50">
                  Production
                </h4>
                <p className="text-on-surface-variant/40">
                  May to July 2026. Order parts, finalize commercial design,
                  finish production.
                </p>
              </div>
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-surface-container border-4 border-white flex items-center justify-center ring-8 ring-white">
                  <div className="w-3 h-3 rounded-full bg-outline-variant/30"></div>
                </div>
                <h4 className="text-xl font-bold mb-1 text-on-surface-variant/50">
                  Shipping
                </h4>
                <p className="text-on-surface-variant/40">
                  Backers receive their M1 starting August 2026.
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
                <p className="text-5xl font-bold mb-2">400</p>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant/60 font-bold">
                  Peak Lumens
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-5xl font-bold mb-2">10h</p>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant/60 font-bold">
                  Battery Life
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-5xl font-bold mb-2">45m</p>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant/60 font-bold">
                  Full Recharge
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="signup" className="py-32 bg-white px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-semibold mb-2">Stay in the loop</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Be the first to know.
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl mx-auto mb-10">
              Drop your email and we&apos;ll notify you the moment the M1 hits
              Kickstarter. No spam, no follow-ups. Just one launch
              announcement.
            </p>
            <InterestForm />
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
