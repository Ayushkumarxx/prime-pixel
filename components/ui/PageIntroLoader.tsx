"use client";

import React, { useEffect, useState } from "react";

interface PageIntroLoaderProps {
  onComplete?: () => void;
}

export function PageIntroLoader({ onComplete }: PageIntroLoaderProps) {
  const [animating, setAnimating] = useState(true);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Start curtain sliding from bottom to top
    const timer1 = setTimeout(() => {
      setStage(1);
    }, 100);

    const timer2 = setTimeout(() => {
      setStage(2);
    }, 450);

    const timer3 = setTimeout(() => {
      setStage(3);
    }, 850);

    const timerDone = setTimeout(() => {
      setAnimating(false);
      if (onComplete) onComplete();
    }, 1400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerDone);
    };
  }, [onComplete]);

  if (!animating) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Div 1: Brand Prime Orange - slides from bottom to top */}
      <div
        className={`absolute inset-0 bg-[#FF5E1E] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          stage >= 1 ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ zIndex: 10003 }}
      />

      {/* Div 2: Brand Electric Blue - slides from bottom to top with slight offset */}
      <div
        className={`absolute inset-0 bg-[#2952FF] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          stage >= 2 ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ zIndex: 10002 }}
      />

      {/* Div 3: Off-White - final reveal sliding upward to unveil Hero */}
      <div
        className={`absolute inset-0 bg-[#FAF8F5] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          stage >= 3 ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ zIndex: 10001 }}
      />
    </div>
  );
}
