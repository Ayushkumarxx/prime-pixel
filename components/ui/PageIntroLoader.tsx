"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { logo } from "@/public/images";
import { gsap } from "@/lib/gsap";

interface PageIntroLoaderProps {
  onComplete?: () => void;
}

export function PageIntroLoader({ onComplete }: PageIntroLoaderProps) {
  const [active, setActive] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoIconRef = useRef<HTMLDivElement>(null);
  const textLettersRef = useRef<HTMLDivElement>(null);
  const whiteScreenRef = useRef<HTMLDivElement>(null);
  const curtainOrangeRef = useRef<HTMLDivElement>(null);
  const curtainBlueRef = useRef<HTMLDivElement>(null);

  const brandWord = "PRIME PIXEL";

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setActive(false);
          if (onComplete) onComplete();
          if (typeof window !== "undefined") {
            window.dispatchEvent(new Event("hero-reveal-start"));
          }
        },
      });

      // 1. Logo Icon appears & becomes visible
      tl.fromTo(
        logoIconRef.current,
        { opacity: 0, scale: 0.85, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );

      // 2. PRIME PIXEL fades in letter-by-letter from left to right
      const letters = textLettersRef.current?.querySelectorAll(".loader-letter");
      if (letters && letters.length > 0) {
        tl.fromTo(
          letters,
          { opacity: 0, y: 8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.26,
            stagger: 0.05,
            ease: "power2.out",
          },
          "-=0.1"
        );
      }

      // 3. Logo and text fade out slightly upward while white screen stays 100% solid
      tl.to(
        [logoIconRef.current, textLettersRef.current],
        { opacity: 0, y: -20, duration: 0.35, ease: "power2.in" },
        "+=0.35"
      )
        // 4. White screen slides upward (does NOT fade out), followed by Orange, then Blue
        .to(
          [whiteScreenRef.current, curtainOrangeRef.current, curtainBlueRef.current],
          {
            yPercent: -100,
            duration: 0.7,
            stagger: 0.14,
            ease: "power4.inOut",
            onStart: () => {
              // Trigger hero reveal right as the curtains lift
              setTimeout(() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new Event("hero-reveal-start"));
                }
              }, 220);
            },
          },
          "-=0.05"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (!active) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* 1st Screen: White Background with Centered PrimePixel Logo & Text - Slides Upward */}
      <div
        ref={whiteScreenRef}
        className="fixed inset-0 bg-[#FFFFFF] flex flex-col items-center justify-center"
        style={{ zIndex: 10003 }}
      >
        <div className="flex flex-col items-center gap-3">
          {/* Logo icon - Larger as requested */}
          <div
            ref={logoIconRef}
            className="relative w-20 h-20 sm:w-24 sm:h-24"
            style={{ opacity: 0 }}
          >
            <Image
              src={logo}
              alt="PrimePixel Emblem"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* PRIME PIXEL Text - Slightly smaller as requested */}
          <div
            ref={textLettersRef}
            className="flex items-center text-lg xs:text-xl sm:text-2xl font-black uppercase text-zinc-950 tracking-wider select-none"
            style={{
              fontFamily: "var(--font-condensed), Anton, Impact, sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            {brandWord.split("").map((char, i) => (
              <span
                key={i}
                className="loader-letter inline-block"
                style={{ opacity: 0 }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Layer 1: Brand Prime Orange - Slides Upward */}
      <div
        ref={curtainOrangeRef}
        className="absolute inset-0 bg-[#FF5E1E]"
        style={{ zIndex: 10002 }}
      />

      {/* Layer 2: Brand Electric Blue - Slides Upward */}
      <div
        ref={curtainBlueRef}
        className="absolute inset-0 bg-[#2952FF]"
        style={{ zIndex: 10001 }}
      />
    </div>
  );
}
