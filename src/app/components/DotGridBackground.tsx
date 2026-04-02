"use client";

import DotGrid from "./DotGrid";

export default function DotGridBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <DotGrid
        dotSize={4}
        gap={18}
        baseColor="#2a2a2a"
        activeColor="#b89062"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
}
