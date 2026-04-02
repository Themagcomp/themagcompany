"use client";

import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("./ModelViewer"), { ssr: false });

export default function ProductShowcase() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4">— Interactive —</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Explore the M1</h2>
        <p className="text-on-surface-variant mt-4 text-lg">Click and drag to rotate. Move your mouse to interact.</p>
      </div>
      <div className="flex justify-center">
        <ModelViewer
          url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
          width={900}
          height={600}
          modelXOffset={0}
          modelYOffset={0}
          defaultZoom={1.5}
          autoFrame={true}
          enableMouseParallax={true}
          enableHoverRotation={true}
          enableManualRotation={true}
          environmentPreset="forest"
          fadeIn={false}
          autoRotate={false}
          autoRotateSpeed={0.35}
          showScreenshotButton={false}
        />
      </div>
    </section>
  );
}
