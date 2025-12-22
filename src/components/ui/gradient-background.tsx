"use client";

import { GrainGradient } from "@paper-design/shaders-react";

export function GradientBackground() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      <GrainGradient
        style={{ height: "100%", width: "100%", position: "absolute" }}
        colorBack="#FFFFFF"
        softness={0.85}
        intensity={0.5}
        noise={0.15}
        shape="corners"
        offsetX={100}
        offsetY={0}
        scale={1.5}
        rotation={0}
        speed={0.5}
        colors={[
          "#FFAA17",
          "#FFD17A",
          "#FFE5B4",
        ]}
      />
    </div>
  );
}

export default GradientBackground;
