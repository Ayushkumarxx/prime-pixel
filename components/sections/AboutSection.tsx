"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles, Zap, Flame, TrendingUp } from "lucide-react";
import { aboutAbstract1 } from "@/public/images";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// Custom Chunky 6-pointed Brutalist Asterisk / Starburst
function BrutalistStar({
  className = "",
  color = "#FF5E1E",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill={color}
      className={`transition-transform duration-700 hover:rotate-90 ease-out select-none ${className}`}
    >
      <g transform="translate(50,50)">
        {/* 3 intersecting thick rounded rectangles at 0, 60, 120 degrees */}
        <rect x="-14" y="-48" width="28" height="96" rx="6" />
        <rect
          x="-14"
          y="-48"
          width="28"
          height="96"
          rx="6"
          transform="rotate(60)"
        />
        <rect
          x="-14"
          y="-48"
          width="28"
          height="96"
          rx="6"
          transform="rotate(120)"
        />
      </g>
    </svg>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // 1. Photo Subtle Fade & Scale In
      const photo = sectionRef.current?.querySelector(".about-photo-card");
      if (photo) {
        gsap.fromTo(
          photo,
          { opacity: 0, scale: 0.94, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: photo,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 2. Heading Staggered Left-to-Right + Bottom-to-Up Reveal (ABOUT US)
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

      // 3. Editorial Description Reveal
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 4. Two Brutalist Stars Smoothly Managed Scroll Rotation
      gsap.to(".about-star-orange", {
        rotation: 160,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2.5,
        },
      });

      gsap.to(".about-star-white", {
        rotation: -160,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2.5,
        },
      });

      // 5. Staggered 2026 Entrance (20 then 26)
      const yearDigits = sectionRef.current?.querySelectorAll(".about-year-digit");
      if (yearDigits && yearDigits.length > 0) {
        gsap.fromTo(
          yearDigits,
          { opacity: 0, y: 45, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: yearDigits[0],
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-[#E8E8EA] py-14 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 select-none overflow-hidden"
    >
      {/* Blueprint Architectural Grid Background Pattern */}
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

      <div className="relative z-10 w-full max-w-[1420px] mx-auto">
        {/* ======================================================== */}
        {/* EDITORIAL ABOUT US ROW (Focused, Crisp Brutalist Design) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-14 items-start">
          {/* Left Col (7 cols): Sharp Image (No Border Radius) + Text Right Beside It */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 md:gap-10">
            {/* Image: Sharp 90-Degree Corners (No Border Radius) */}
            <div
              className="about-photo-card relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-none sm:w-[300px] md:w-[340px] aspect-[3/4] overflow-hidden bg-zinc-900 border border-zinc-400/90 shadow-2xl shadow-black/10 shrink-0 group"
              style={{ opacity: 0 }}
            >
              <Image
                src={aboutAbstract1}
                alt="PrimePixel Minimalist Abstract Art"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 340px"
                priority
              />
            </div>

            {/* Text Placed RIGHT AFTER the image */}
            <div className="max-w-lg pt-1 sm:pt-2 text-left w-full">
              {/* Highlighted Blue Heading as requested */}
              <h2
                ref={headingRef}
                className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase font-black tracking-tight text-[#2952FF] leading-none mb-3 sm:mb-6 select-none"
                style={{
                  fontFamily: "var(--font-condensed), Anton, Impact, sans-serif",
                  letterSpacing: "-0.015em",
                }}
              >
                ABOUT US
              </h2>

              {/* Bolder Description with Different Colors & Inline Icons */}
              <p
                ref={contentRef}
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-zinc-950 leading-snug sm:leading-normal"
              >
                We are <span className="text-[#FF5E1E]">PrimePixel</span>{" "}
                <Sparkles className="inline-block w-4 h-4 sm:w-5 sm:h-5 text-[#FF5E1E] mx-0.5 -translate-y-0.5" />{" "}
                — the talent management & digital media powerhouse. We scout and
                elevate{" "}
                <span className="text-[#2952FF]">viral digital creators</span>{" "}
                <Zap className="inline-block w-4 h-4 sm:w-5 sm:h-5 text-[#2952FF] mx-0.5 -translate-y-0.5 fill-[#2952FF]" />{" "}
                who engineer internet culture. By fusing{" "}
                <span className="text-[#FF5E1E]">
                  high-velocity video editing
                </span>{" "}
                <Flame className="inline-block w-4 h-4 sm:w-5 sm:h-5 text-[#FF5E1E] mx-0.5 -translate-y-0.5 fill-[#FF5E1E]" />{" "}
                with strategic algorithmic growth{" "}
                <TrendingUp className="inline-block w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 mx-0.5 -translate-y-0.5" />
                , we transform online attention into{" "}
                <span className="text-zinc-950 underline decoration-[#FF5E1E] decoration-2 underline-offset-4">
                  cultural dominance
                </span>
                .
              </p>
            </div>
          </div>

          {/* Right Col (5 cols): Bigger Stars + Sized & Shifted-Upward 2026 */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-1">
            {/* Bigger Chunky Asterisks in Top Right - Flat Brutalist Style Without Shadows */}
            <div className="flex items-center justify-end gap-5 sm:gap-8 w-full">
              {/* Massive Prime Orange Star with GSAP Scroll Rotation */}
              <div className="about-star-orange w-24 h-24 xs:w-28 xs:h-28 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 shrink-0">
                <BrutalistStar className="w-full h-full" color="#FF5E1E" />
              </div>

              {/* Big White Star with GSAP Scroll Rotation */}
              <div className="about-star-white w-16 h-16 xs:w-18 xs:h-18 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 shrink-0 -translate-y-3 sm:-translate-y-6">
                <BrutalistStar className="w-full h-full" color="#FFFFFF" />
              </div>
            </div>

            {/* Sized-Down & Shifted Upward Staggered 2026 */}
            <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col items-end leading-[0.76] select-none text-right">
              <span
                className="about-year-digit text-6xl sm:text-8xl md:text-[105px] lg:text-[130px] font-black tracking-tighter text-zinc-950 -translate-x-4 sm:-translate-x-12 md:-translate-x-16"
                style={{
                  fontFamily: "var(--font-condensed), Anton, Impact, sans-serif",
                  letterSpacing: "-0.03em",
                  opacity: 0,
                }}
              >
                20
              </span>
              <span
                className="about-year-digit text-5xl sm:text-7xl md:text-[90px] lg:text-[115px] font-black tracking-tighter text-[#2952FF] pr-1.5 sm:pr-3"
                style={{
                  fontFamily: "var(--font-condensed), Anton, Impact, sans-serif",
                  letterSpacing: "-0.03em",
                  opacity: 0,
                }}
              >
                26
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
