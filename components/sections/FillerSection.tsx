"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { mascotPink, mascotGreen } from "@/public/images";

export function FillerSection() {
  // 17 Chunky 50px Equalizer Bars with balanced spacing & crisp slits
  // Bars 0-4: Left Waveform (Brand Blue #2952FF)
  // Bars 5-11: Center 7 Masked Bars (50px wide each) Revealing Host Image
  // Bars 12-16: Right Waveform (Brand Blue #2952FF)
  const barHeights = [
    42, 98, 180, 250, 165, // 0-4: Left Waveform (5 bars)
    185, 225, 270, 275, 270, 215, 190, // 5-11: Center Masked Waveform (7 bars, 50px each)
    165, 250, 180, 98, 42, // 12-16: Right Waveform (5 bars)
  ];

  const totalBars = barHeights.length; // 17 bars
  const startX = 138;
  const endX = 1162;
  const step = (endX - startX) / (totalBars - 1); // 64px step
  const barWidth = 50; // Chunky 50px wide bars
  const centerY = 170;

  return (
    <section className="relative w-full bg-[#E8E8EA] py-4 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 select-none flex items-center justify-center">
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
          {/* Section Heading with Cute Mascots */}
          <div className="relative inline-block mx-auto max-w-full">
            
            {/* Mascot Sticker 1: Left Bottom of Heading (Pink Mascot, tilted -rotate-12) */}
            <div className="absolute -left-4 sm:-left-9 md:-left-12 -bottom-3 sm:-bottom-4 md:-bottom-6 z-20 -rotate-12 hover:scale-110 hover:-rotate-6 transition-transform duration-300 pointer-events-auto">
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
            <div className="absolute -right-4 sm:-right-9 md:-right-12 -top-4 sm:-top-6 md:-top-7 z-20 rotate-12 hover:scale-110 hover:rotate-6 transition-transform duration-300 pointer-events-auto">
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
              <span className="block whitespace-nowrap">GROW YOUR BRAND WITH</span>
              <span className="block whitespace-nowrap">PRIMEPIXEL CREATIVES</span>
            </h2>
          </div>

          {/* 50px Wide Audio Soundwave Graphic - Horizontally bigger on small screens */}
          <div className="w-[112%] -mx-[6%] sm:w-full sm:mx-auto max-w-[1200px] my-10 sm:my-14 md:my-16 flex items-center justify-center overflow-visible">
          <svg
            viewBox="0 0 1300 340"
            className="w-full h-auto select-none"
            style={{ maxHeight: "380px" }}
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
              d="M 20,170 C 50,140 80,200 110,170 C 120,160 128,175 138,170"
              fill="none"
              stroke="#2952FF"
              strokeWidth="4"
              strokeLinecap="round"
              className="opacity-75"
            />

            {/* Left Solid Brand Blue Waveform Bars (Indices 0 to 4) */}
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
                />
              );
            })}

            {/* Center Masked Host Image Through the 50px Slitted Pill Bars */}
            <image
              href="/images/podcast-host.jpg"
              x="430"
              y="20"
              width="445"
              height="300"
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

            {/* Right Solid Brand Blue Waveform Bars (Indices 12 to 16) */}
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
                />
              );
            })}

            {/* Right Connecting Sinusoidal Audio Wave Line */}
            <path
              d="M 1162,170 C 1172,165 1180,180 1190,170 C 1220,140 1250,200 1280,170"
              fill="none"
              stroke="#2952FF"
              strokeWidth="4"
              strokeLinecap="round"
              className="opacity-75"
            />
          </svg>
        </div>

        {/* Call To Action Button (Completely Flat - No Shadow) */}
        <div className="mt-2 flex justify-center">
          <button
            type="button"
            onClick={() =>
              document.getElementById("book-call")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group px-7 sm:px-11 py-3 sm:py-4 rounded-xl bg-zinc-900 hover:bg-[#FF5E1E] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200 active:scale-95 flex items-center gap-2.5 cursor-pointer shadow-none hover:shadow-none"
          >
            <span>FIND YOUR CREATORS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        </div>
      </div>
    </section>
  );
}
