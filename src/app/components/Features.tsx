"use client";

import BorderGlow from "./BorderGlow";

export default function Features() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto" id="features">
      <div className="text-center mb-20">
        <h2 className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4">— Features —</h2>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Engineered for Extremes</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BorderGlow backgroundColor="#111111" borderRadius={16} glowColor="40 80 60" colors={['#ebbf8d', '#b89062', '#d4a574']} glowRadius={30} edgeSensitivity={40}>
          <div className="p-10">
            <span className="material-symbols-outlined text-primary text-4xl mb-6 block">nest_cam_magnet_mount</span>
            <h4 className="text-white text-xl font-bold mb-3">Magnetic Tech</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">Integrated N52 neodymium magnets for instant attachment to any metallic surface.</p>
          </div>
        </BorderGlow>
        <BorderGlow backgroundColor="#111111" borderRadius={16} glowColor="40 80 60" colors={['#ebbf8d', '#b89062', '#d4a574']} glowRadius={30} edgeSensitivity={40}>
          <div className="p-10">
            <span className="material-symbols-outlined text-primary text-4xl mb-6 block">light_mode</span>
            <h4 className="text-white text-xl font-bold mb-3">50-400 Lumens</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">Adjustable brightness levels to suit everything from reading to trail blazing.</p>
          </div>
        </BorderGlow>
        <BorderGlow backgroundColor="#111111" borderRadius={16} glowColor="40 80 60" colors={['#ebbf8d', '#b89062', '#d4a574']} glowRadius={30} edgeSensitivity={40}>
          <div className="p-10">
            <span className="material-symbols-outlined text-primary text-4xl mb-6 block">settings_input_antenna</span>
            <h4 className="text-white text-xl font-bold mb-3">4 Light Modes</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">Toggle between flood, spot, strobe, and a soft ambient mood setting.</p>
          </div>
        </BorderGlow>
        <BorderGlow backgroundColor="#111111" borderRadius={16} glowColor="40 80 60" colors={['#ebbf8d', '#b89062', '#d4a574']} glowRadius={30} edgeSensitivity={40}>
          <div className="p-10">
            <span className="material-symbols-outlined text-primary text-4xl mb-6 block">battery_very_low</span>
            <h4 className="text-white text-xl font-bold mb-3">10hr Battery</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">High-density lithium polymer core provides consistent power for all-night use.</p>
          </div>
        </BorderGlow>
        <BorderGlow backgroundColor="#111111" borderRadius={16} glowColor="40 80 60" colors={['#ebbf8d', '#b89062', '#d4a574']} glowRadius={30} edgeSensitivity={40}>
          <div className="p-10">
            <span className="material-symbols-outlined text-primary text-4xl mb-6 block">water_drop</span>
            <h4 className="text-white text-xl font-bold mb-3">IPX6 Rated</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">Fully sealed architectural design protects against heavy rain and dust ingress.</p>
          </div>
        </BorderGlow>
        <BorderGlow backgroundColor="#111111" borderRadius={16} glowColor="40 80 60" colors={['#ebbf8d', '#b89062', '#d4a574']} glowRadius={30} edgeSensitivity={40}>
          <div className="p-10">
            <span className="material-symbols-outlined text-primary text-4xl mb-6 block">compress</span>
            <h4 className="text-white text-xl font-bold mb-3">Ultra Compact</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">Smaller than a car key fob. Fits into any pocket, pouch, or palm seamlessly.</p>
          </div>
        </BorderGlow>
      </div>
    </section>
  );
}
