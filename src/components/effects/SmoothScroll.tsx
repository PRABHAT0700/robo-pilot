"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import "lenis/dist/lenis.css";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.068,
        duration: 1.45,
        smoothWheel: true,
        wheelMultiplier: 0.78,
        touchMultiplier: 1.05,
        autoRaf: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
