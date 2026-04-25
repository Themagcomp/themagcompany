"use client";

import { useRef, useSyncExternalStore } from "react";

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
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <div className="max-w-6xl mx-auto">
      <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.6)]">
        <video
          ref={videoRef}
          src="/m1-exploded.mp4"
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
