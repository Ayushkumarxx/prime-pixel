"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { mascotPink, mascotGreen } from "@/public/images";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function FillerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // 1. Heading Staggered Left-to-Right + Bottom-to-Up Reveal
      if (headingRef.current) {
        const lines = headingRef.current.querySelectorAll(".filler-heading-line");
        const mascots = headingRef.current.querySelectorAll(".filler-heading-mascot");

        gsap.fromTo(
          lines,
          { opacity: 0, x: -40, y: 30 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.85,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          mascots,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 2. Big SVG Soundwave Art: Basic gentle fade
      const wave = sectionRef.current?.querySelector(".filler-soundwave-svg");
      if (wave) {
        gsap.fromTo(
          wave,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: wave,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 3. CTA Button: Basic smooth fade
      const ctaBtn = sectionRef.current?.querySelector(".filler-cta-btn");
      if (ctaBtn) {
        gsap.fromTo(
          ctaBtn,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaBtn,
              start: "top 88%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 17 Chunky 50px Equalizer Bars scaled larger & taller for prominent hero graphic
  // Bars 0-4: Left Waveform (Brand Blue #2952FF)
  // Bars 5-11: Center 7 Masked Bars (50px wide each) Revealing Host Image
  // Bars 12-16: Right Waveform (Brand Blue #2952FF)
  const barHeights = [
    52, 120, 220, 310, 205, // 0-4: Left Waveform (5 bars)
    230, 280, 335, 345, 335, 270, 240, // 5-11: Center Masked Waveform (7 bars, 50px each)
    205, 310, 220, 120, 52, // 12-16: Right Waveform (5 bars)
  ];

  const totalBars = barHeights.length; // 17 bars
  const startX = 138;
  const endX = 1162;
  const step = (endX - startX) / (totalBars - 1); // 64px step
  const barWidth = 50; // Chunky 50px wide bars
  const centerY = 200;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#E8E8EA] py-4 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 select-none flex items-center justify-center"
    >
      {/* Main Rounded White Canvas Card (Like Hero) */}
      <div className="relative w-full max-w-[1420px] bg-white rounded-[28px] sm:rounded-[40px] md:rounded-[48px] border border-zinc-200/90 shadow-2xl shadow-black/5 py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 flex flex-col items-center overflow-hidden">
        
        {/* Big Architectural Grid Background Pattern (120px x 120px Like Hero) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.05) 1.5px, transparent 1.5px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1.5px, transparent 1.5px)
            `,
            backgroundSize: "120px 120px",
          }}
        />

        <div className="relative z-10 w-full flex flex-col items-center">
          {/* Section Heading with Cute Mascots & GSAP scroll reveal */}
          <div ref={headingRef} className="relative inline-block mx-auto max-w-full">
            
            {/* Mascot Sticker 1: Left Bottom of Heading (Pink Mascot, tilted -rotate-12) */}
            <div className="filler-heading-mascot absolute -left-4 sm:-left-9 md:-left-12 -bottom-3 sm:-bottom-4 md:-bottom-6 z-20 -rotate-12 hover:scale-110 hover:-rotate-6 transition-transform duration-300 pointer-events-auto">
              <div className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 drop-shadow-xl">
                <Image
                  src={mascotPink}
                  alt="Pink mascot sticker"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Mascot Sticker 2: Top Right of Heading (Green Mascot, tilted rotate-12) */}
            <div className="filler-heading-mascot absolute -right-4 sm:-right-9 md:-right-12 -top-4 sm:-top-6 md:-top-7 z-20 rotate-12 hover:scale-110 hover:rotate-6 transition-transform duration-300 pointer-events-auto">
              <div className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 drop-shadow-xl">
                <Image
                  src={mascotGreen}
                  alt="Green mascot sticker"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Section Heading: Strictly Two Lines, Guaranteed No 3rd Line Wrap */}
            <h2
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 uppercase text-center leading-[1.05] w-full mx-auto"
              style={{
                fontFamily: "var(--font-condensed), Anton, Impact, sans-serif",
                letterSpacing: "-0.015em",
              }}
            >
              <span className="filler-heading-line block whitespace-nowrap">GROW YOUR BRAND WITH</span>
              <span className="filler-heading-line block whitespace-nowrap">PRIMEPIXEL CREATIVES</span>
            </h2>
          </div>

          {/* Keyframes for vibrating music equalizer and icon */}
          <style>{`
            @keyframes musicWobble {
              0%, 100% { transform: rotate(-10deg) scale(0.95); }
              50% { transform: rotate(10deg) scale(1.15); }
            }
            @keyframes eqBarA {
              0%, 100% { height: 4px; }
              50% { height: 14px; }
            }
            @keyframes eqBarB {
              0%, 100% { height: 12px; }
              50% { height: 5px; }
            }
            @keyframes eqBarC {
              0%, 100% { height: 6px; }
              50% { height: 15px; }
            }
            @keyframes barPulse {
              0%, 100% { transform: scaleY(0.92); }
              50% { transform: scaleY(1.08); }
            }
          `}</style>

          {/* 50px Wide Audio Soundwave Graphic - Prominent, larger SVG art */}
          <div className="w-[115%] -mx-[7.5%] sm:w-full sm:mx-auto max-w-[1300px] my-10 sm:my-14 md:my-18 flex items-center justify-center overflow-visible">
          <svg
            viewBox="0 0 1300 400"
            className="filler-soundwave-svg w-full h-auto select-none"
            style={{ maxHeight: "460px" }}
          >
            <defs>
              {/* Mask clipping path for the 7 central 50px bars revealing the podcast host */}
              <clipPath id="podcast-wave-host-clip-50px">
                {barHeights.map((h, i) => {
                  if (i < 5 || i > 11) return null;
                  const x = startX + i * step - barWidth / 2;
                  const y = centerY - h / 2;
                  return (
                    <rect
                      key={`clip-bar-${i}`}
                      x={x}
                      y={y}
                      width={barWidth}
                      height={h}
                      rx={barWidth / 2}
                      ry={barWidth / 2}
                    />
                  );
                })}
              </clipPath>

              {/* Linear gradient for side audio bars */}
              <linearGradient id="brand-blue-bar-50" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3E6BFF" />
                <stop offset="100%" stopColor="#2952FF" />
              </linearGradient>
            </defs>

            {/* Left Connecting Sinusoidal Audio Wave Line */}
            <path
              d="M 20,200 C 50,170 80,230 110,200 C 120,190 128,205 138,200"
              fill="none"
              stroke="#2952FF"
              strokeWidth="4"
              strokeLinecap="round"
              className="opacity-75"
            />

            {/* Left Solid Brand Blue Waveform Bars (Indices 0 to 4) - Vibrating rhythmically */}
            {barHeights.slice(0, 5).map((h, i) => {
              const x = startX + i * step - barWidth / 2;
              const y = centerY - h / 2;
              return (
                <rect
                  key={`left-bar-${i}`}
                  x={x}
                  y={y}
                  width={barWidth}
                  height={h}
                  rx={barWidth / 2}
                  ry={barWidth / 2}
                  fill="url(#brand-blue-bar-50)"
                  style={{
                    transformOrigin: `${x + barWidth / 2}px ${centerY}px`,
                    animation: `barPulse 1.4s ease-in-out ${(i % 3) * 0.25}s infinite alternate`,
                  }}
                />
              );
            })}

            {/* Center Masked Host Image Through the 50px Slitted Pill Bars */}
            <image
              href="/images/podcast-host.jpg"
              x="430"
              y="15"
              width="445"
              height="370"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#podcast-wave-host-clip-50px)"
            />

            {/* Center Bar White Accents for Crisp Pill Separation */}
            {barHeights.slice(5, 12).map((h, i) => {
              const idx = i + 5;
              const x = startX + idx * step - barWidth / 2;
              const y = centerY - h / 2;
              return (
                <rect
                  key={`center-outline-${idx}`}
                  x={x}
                  y={y}
                  width={barWidth}
                  height={h}
                  rx={barWidth / 2}
                  ry={barWidth / 2}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="2"
                />
              );
            })}

            {/* Right Solid Brand Blue Waveform Bars (Indices 12 to 16) - Vibrating rhythmically */}
            {barHeights.slice(12).map((h, i) => {
              const idx = i + 12;
              const x = startX + idx * step - barWidth / 2;
              const y = centerY - h / 2;
              return (
                <rect
                  key={`right-bar-${idx}`}
                  x={x}
                  y={y}
                  width={barWidth}
                  height={h}
                  rx={barWidth / 2}
                  ry={barWidth / 2}
                  fill="url(#brand-blue-bar-50)"
                  style={{
                    transformOrigin: `${x + barWidth / 2}px ${centerY}px`,
                    animation: `barPulse 1.4s ease-in-out ${(i % 3) * 0.22}s infinite alternate`,
                  }}
                />
              );
            })}

            {/* Right Connecting Sinusoidal Audio Wave Line */}
            <path
              d="M 1162,200 C 1172,195 1180,210 1190,200 C 1220,170 1250,230 1280,200"
              fill="none"
              stroke="#2952FF"
              strokeWidth="4"
              strokeLinecap="round"
              className="opacity-75"
            />
          </svg>
        </div>

        {/* Call To Action Button with Vibrating Music Audio Icon */}
        <div className="mt-2 flex justify-center">
          <button
            type="button"
            onClick={() =>
              document.getElementById("book-call")?.scrollIntoView({ behavior: "smooth" })
            }
            className="filler-cta-btn group px-6 sm:px-10 py-3 sm:py-4 rounded-xl bg-zinc-900 hover:bg-[#FF5E1E] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200 active:scale-95 flex items-center gap-3 cursor-pointer shadow-none hover:shadow-none"
          >
            {/* Vibrating Music & Equalizer Bar Icon */}
            <div className="flex items-center gap-1.5 shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-orange-400 group-hover:text-white transition-colors"
                style={{ animation: "musicWobble 1.2s ease-in-out infinite" }}
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
              {/* Dancing mini visualizer bars */}
              <div className="flex items-end gap-[2px] h-3.5 w-3 shrink-0">
                <span
                  className="w-0.5 bg-orange-400 group-hover:bg-white rounded-full"
                  style={{ animation: "eqBarA 0.7s ease-in-out infinite alternate" }}
                />
                <span
                  className="w-0.5 bg-orange-400 group-hover:bg-white rounded-full"
                  style={{ animation: "eqBarB 0.5s ease-in-out infinite alternate" }}
                />
                <span
                  className="w-0.5 bg-orange-400 group-hover:bg-white rounded-full"
                  style={{ animation: "eqBarC 0.9s ease-in-out infinite alternate" }}
                />
              </div>
            </div>

            <span>FIND YOUR CREATORS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        </div>
      </div>
    </section>
  );
}
