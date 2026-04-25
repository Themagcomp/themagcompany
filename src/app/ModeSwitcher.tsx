"use client";

import { useEffect, useRef, useState } from "react";

type Mode = "off" | "flash" | "strobe" | "sos";

const MODES: Array<{ id: Exclude<Mode, "off">; label: string; src: string }> = [
  { id: "flash", label: "Flash", src: "/m1-mode-flash.mp4" },
  { id: "strobe", label: "Strobe", src: "/m1-mode-strobe.mp4" },
  { id: "sos", label: "SOS", src: "/m1-mode-sos.mp4" },
];

export default function ModeSwitcher() {
  const [mode, setMode] = useState<Mode>("off");
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  useEffect(() => {
    for (const m of MODES) {
      const v = videoRefs.current[m.id];
      if (!v) continue;
      if (m.id === mode) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    }
  }, [mode]);

  return (
    <div className="bento-card rounded-4xl p-10 md:p-12 flex flex-col overflow-hidden">
      <div className="relative w-full flex-grow min-h-[300px] md:min-h-[320px] rounded-3xl overflow-hidden bg-black mb-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/m1-mode-off.jpg"
          alt="Maglight M1 device front view, idle"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
            mode === "off" ? "opacity-100" : "opacity-0"
          }`}
        />
        {MODES.map((m) => (
          <video
            key={m.id}
            ref={(el) => {
              videoRefs.current[m.id] = el;
            }}
            src={m.src}
            muted
            playsInline
            loop
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
              mode === m.id ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="px-2">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">
          Modes
        </p>
        <h4 className="text-4xl font-bold tracking-tight mb-4">
          Try the modes.
        </h4>
        <p className="text-lg text-on-surface-variant leading-relaxed max-w-md mb-8">
          Tap a button to see how each mode lights up.
        </p>
        <div className="flex flex-wrap gap-3">
          {MODES.map((m) => {
            const active = mode === m.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setMode(m.id)}
                aria-pressed={active}
                style={
                  active
                    ? {
                        backgroundColor: "#0066cc",
                        color: "#ffffff",
                        borderColor: "transparent",
                        boxShadow: "0 8px 20px -8px rgba(0,102,204,0.6)",
                      }
                    : {
                        backgroundColor: "#ffffff",
                        color: "#1a1c1d",
                        borderColor: "#c1c6d5",
                      }
                }
                className="px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 border"
              >
                {m.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
