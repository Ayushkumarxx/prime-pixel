"use client";

import type { ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";

export { useLenis };

interface SmoothScrollProviderProps {
  children: ReactNode;
}

/**
 * SmoothScrollProvider
 * 
 * Flawless, native-performance smooth scrolling powered by official ReactLenis.
 * Supports smooth wheel, touch momentum, and anchor scrolling with zero lag.
 */
export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
