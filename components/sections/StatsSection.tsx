"use client";

import React, { useEffect, useRef } from "react";
import { TrendingUp, Sparkles, Zap } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const metricRef = useRef<HTMLDivElement>(null);
  const matrixRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // 1. Heading Left-to-Right + Bottom-to-Up Scroll Animation (OUR STATS)
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, x: -35, y: 30 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 1b. Subtitle and 82.7 Metric Smooth Fade Entrance
      if (subtextRef.current) {
        gsap.fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      if (metricRef.current) {
        gsap.fromTo(
          metricRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 2. Dot Matrix Staggered Animation
      const dots = matrixRef.current?.querySelectorAll(".stat-matrix-dot");
      if (dots && dots.length > 0) {
        gsap.fromTo(
          dots,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.45,
            ease: "back.out(2)",
            stagger: {
              grid: [6, 6],
              from: "start",
              amount: 0.6,
            },
            scrollTrigger: {
              trigger: matrixRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 3. Staggered Entrance for 3 Stat Cards
      const statCards = cardsContainerRef.current?.querySelectorAll(".stat-card-item");
      if (statCards && statCards.length > 0) {
        gsap.fromTo(
          statCards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Dot matrix: 6 columns x 6 rows = 36 dots total
  // Top row (row 0): 4 outline circles, 2 filled dots
  // Rows 1-5: all 30 dots filled in Prime Orange (#FF5E1E)
  const dotMatrix = Array.from({ length: 6 }, (_, rowIndex) =>
    Array.from({ length: 6 }, (_, colIndex) => {
      const isHollow = rowIndex === 0 && colIndex < 4;
      return { id: `${rowIndex}-${colIndex}`, isHollow };
    })
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#E8E8EA] pt-12 sm:pt-16 md:pt-24 pb-16 sm:pb-24 md:pb-32 px-3 sm:px-6 md:px-8 select-none overflow-hidden"
    >
      {/* Blueprint Grid Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 w-full max-w-[1420px] mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10">
        
        {/* ======================================================== */}
        {/* PART 1: OUR STATS (Single-Line Headline & Subtext)         */}
        {/* ======================================================== */}
        <div className="w-full px-2 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 sm:gap-12">
            
            {/* Left Content: Doubled Heading, Subtitle, and 82.5^ Metric with Explanatory Label */}
            <div className="flex flex-col justify-between flex-1 min-w-0">
              <div>
                <h2
                  ref={headingRef}
                  className="text-5xl xs:text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-[#2952FF] uppercase leading-none mb-3 sm:mb-5 whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-condensed), Anton, Impact, sans-serif",
                    letterSpacing: "-0.015em",
                  }}
                >
                  OUR STATS
                </h2>

                <p
                  ref={subtextRef}
                  style={{ opacity: 0 }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-700 font-medium whitespace-normal lg:whitespace-nowrap"
                >
                  We find the people who convert people — driving real audience attention and creator growth.
                </p>
              </div>

              {/* Metric 82.7^ with inline bolder & smaller 'conversion rate' with tight gap */}
              <div
                ref={metricRef}
                style={{ opacity: 0 }}
                className="mt-3 sm:mt-5 flex flex-wrap items-baseline gap-2 sm:gap-2.5"
              >
                <div className="flex items-baseline gap-1">
                  <span className="text-7xl sm:text-8xl md:text-9xl font-light tracking-tight text-zinc-950 leading-none">
                    82.7
                  </span>
                  <span className="text-4xl sm:text-6xl md:text-7xl text-zinc-950 font-light leading-none -translate-y-4">
                    ^
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-zinc-500 uppercase -translate-y-2 sm:-translate-y-3 font-mono">
                  conversion rate
                </span>
              </div>
            </div>

            {/* Right: 6x6 Matrix of Circular Dots in Prime Orange */}
            <div className="shrink-0 flex items-center justify-start lg:justify-end">
              <div ref={matrixRef} className="grid grid-cols-6 gap-2.5 sm:gap-3.5">
                {dotMatrix.map((row) =>
                  row.map((dot) => (
                    <div
                      key={dot.id}
                      className={`stat-matrix-dot w-7 h-7 sm:w-10 sm:h-10 rounded-full transition-transform hover:scale-110 duration-200 ${
                        dot.isHollow
                          ? "border-[2px] border-zinc-400 bg-transparent"
                          : "bg-[#FF5E1E] shadow-sm shadow-orange-500/20"
                      }`}
                    />
                  ))
                )}
              </div>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* PART 2: The Rounded White Div with Big Grid (Hero Style) */}
        {/* ======================================================== */}
        <div className="relative w-full bg-white rounded-[28px] sm:rounded-[40px] md:rounded-[48px] border border-zinc-200/90 shadow-2xl shadow-black/5 p-6 sm:p-10 md:p-14 lg:p-16 pb-10 sm:pb-14 md:pb-20 lg:pb-24 flex flex-col overflow-hidden">
          
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

          <div className="relative z-10 w-full flex flex-col">
            
            {/* Headline without chip */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 mb-3 sm:mb-4">
              Don't take our word for it.
            </h2>

            {/* ======================================================== */}
            {/* 3 CARDS / DIVS: 40% (Card 1) / 30% (Card 2) / 30% (Card 3) */}
            {/* Staggered GSAP scroll entrance & tighter mobile spacing  */}
            {/* ======================================================== */}
            <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-10 gap-4 sm:gap-6 mt-4 sm:mt-6 md:mt-8 w-full">
              
              {/* Card 1 (Reach of the Business): 40% Width (col-span-4) in Prime Orange (No Shadow) */}
              <div
                className="stat-card-item md:col-span-4 relative rounded-[24px] sm:rounded-[32px] bg-[#FF5E1E] text-white p-5 xs:p-6 sm:p-8 flex flex-col justify-between min-h-[220px] xs:min-h-[250px] sm:min-h-[360px] overflow-hidden border border-[#FF5E1E]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
                  `,
                  backgroundSize: "32px 32px",
                }}
              >
                {/* Top Icon: Trend/Reach Icon in White */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white">
                    <TrendingUp className="w-7 h-7 sm:w-10 sm:h-10 stroke-[2.2]" />
                  </div>
                </div>

                {/* Big Stat & Reach Label - Tighter distance between icon & percentage on small screens */}
                <div className="mt-2.5 xs:mt-3 sm:mt-8">
                  <div className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tight leading-none">
                    85%
                  </div>
                  <div className="mt-2.5 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg font-medium text-white/95 max-w-[320px] leading-snug">
                    Expanded organic reach & business engagement across audiences. *
                  </div>
                </div>
              </div>

              {/* Card 2 (Quality of Our Work): 30% Width (col-span-3) */}
              <div
                className="stat-card-item md:col-span-3 relative rounded-[24px] sm:rounded-[32px] bg-[#F4F6F3] text-zinc-950 border border-zinc-200/80 p-5 xs:p-6 sm:p-8 flex flex-col justify-between min-h-[220px] xs:min-h-[250px] sm:min-h-[360px] overflow-hidden"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px)
                  `,
                  backgroundSize: "32px 32px",
                }}
              >
                {/* Top Icon: Quality/Sparkles Icon */}
                <div className="flex items-center justify-between text-zinc-950">
                  <Sparkles className="w-7 h-7 sm:w-10 sm:h-10 stroke-[2.2]" />
                </div>

                {/* Stat & Quality Label - Tighter distance between icon & percentage on small screens */}
                <div className="mt-2.5 xs:mt-3 sm:mt-8">
                  <div className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold text-zinc-950 tracking-tight leading-none">
                    98%
                  </div>
                  <div className="mt-2.5 sm:mt-4 text-xs sm:text-base font-semibold text-zinc-700 max-w-[240px] leading-snug">
                    Verified client satisfaction with the quality and delivery of our work.
                  </div>
                </div>
              </div>

              {/* Card 3 (Presence in Market Increased): 30% Width (col-span-3) */}
              <div
                className="stat-card-item md:col-span-3 relative rounded-[24px] sm:rounded-[32px] bg-[#F4F6F3] text-zinc-950 border border-zinc-200/80 p-5 xs:p-6 sm:p-8 flex flex-col justify-between min-h-[220px] xs:min-h-[250px] sm:min-h-[360px] overflow-hidden"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px)
                  `,
                  backgroundSize: "32px 32px",
                }}
              >
                {/* Top Icon: Thunder / Zap Icon */}
                <div className="flex items-center justify-between text-zinc-950">
                  <Zap className="w-7 h-7 sm:w-10 sm:h-10 stroke-[2.2] fill-zinc-950/10" />
                </div>

                {/* Stat & Market Presence Label - Tighter distance between icon & percentage on small screens */}
                <div className="mt-2.5 xs:mt-3 sm:mt-8">
                  <div className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold text-zinc-950 tracking-tight leading-none">
                    87%
                  </div>
                  <div className="mt-2.5 sm:mt-4 text-xs sm:text-base font-semibold text-zinc-700 max-w-[240px] leading-snug">
                    Reported stronger market presence and competitive brand recall.
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
