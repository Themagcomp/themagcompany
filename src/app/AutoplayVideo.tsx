"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  className?: string;
};

export default function AutoplayVideo({ src, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    const attemptPlay = () => {
      video.play().catch(() => {});
    };
    if (video.readyState >= 2) {
      attemptPlay();
    } else {
      video.addEventListener("loadeddata", attemptPlay, { once: true });
    }
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      disableRemotePlayback
    />
  );
}
