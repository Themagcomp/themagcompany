"use client";

import dynamic from "next/dynamic";
import React from "react";

const ModelViewer = dynamic(() => import("./ModelViewer"), { ssr: false });

class ModelErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-[400px] text-on-surface-variant text-center p-8">
          <p>3D viewer is not supported on this device.<br />View on desktop for the full experience.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function ProductShowcase() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4">— Interactive —</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Explore the M1</h2>
        <p className="text-on-surface-variant mt-4 text-lg">Click and drag to rotate. Move your mouse to interact.</p>
      </div>
      <div className="flex justify-center">
        <ModelErrorBoundary>
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
        </ModelErrorBoundary>
      </div>
    </section>
  );
}
