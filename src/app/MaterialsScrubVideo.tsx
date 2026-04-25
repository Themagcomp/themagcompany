"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

const getSnapshot = () => window.matchMedia(QUERY).matches;
const getServerSnapshot = () => true;

export default function MaterialsScrubVideo() {
  const reducedMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const outerRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (reducedMotion) return;
    if (!outerRef.current || !pinRef.current || !shellRef.current || !videoRef.current) return;

    const video = videoRef.current;
    const shell = shellRef.current;

    const ready = (): Promise<void> =>
      new Promise((resolve) => {
        if (video.readyState >= 1 && video.duration > 0) {
          resolve();
        } else {
          video.addEventListener("loadedmetadata", () => resolve(), { once: true });
        }
      });

    let ctx: gsap.Context | null = null;
    let cancelled = false;

    ready().then(() => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: outerRef.current!,
            start: "top top",
            end: "bottom bottom",
            pin: pinRef.current!,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        // PHASE 1 — Expand: 0 → 0.15
        tl.to(
          shell,
          {
            width: "100vw",
            height: "100dvh",
            maxWidth: "100vw",
            borderRadius: 0,
            boxShadow: "0 0 0 0 rgba(0,0,0,0)",
            duration: 0.15,
            ease: "power2.inOut",
          },
          0,
        );

        // PHASE 2 — Scrub: 0.15 → 0.85
        tl.to(
          {},
          {
            duration: 0.7,
            ease: "none",
            onUpdate: function () {
              const localProgress = this.progress();
              if (video.duration > 0) {
                video.currentTime = localProgress * video.duration;
              }
            },
          },
          0.15,
        );

        // PHASE 3 — Shrink: 0.85 → 1.0
        tl.to(
          shell,
          {
            width: "100%",
            height: "auto",
            maxWidth: "72rem",
            borderRadius: "2rem",
            boxShadow: "0 80px 160px -40px rgba(0,0,0,0.6)",
            duration: 0.15,
            ease: "power2.inOut",
          },
          0.85,
        );
      }, outerRef);
    });

    return () => {
      cancelled = true;
      if (ctx) ctx.revert();
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.6)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/m1-exploded-final.jpg"
            alt="Maglight M1 exploded view: Clear Cover, Li-Ion Battery, Up/Down Button, MBack, Front, PCB, Magnet, Gasket, Back, Screws"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <section ref={outerRef} className="relative h-[300vh] md:h-[400vh]">
      <div ref={pinRef} className="h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        <div
          ref={shellRef}
          className="relative aspect-video overflow-hidden bg-black"
          style={{
            width: "100%",
            maxWidth: "72rem",
            borderRadius: "2rem",
            boxShadow: "0 80px 160px -40px rgba(0,0,0,0.6)",
          }}
        >
          <video
            ref={videoRef}
            src="/m1-exploded.mp4"
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
