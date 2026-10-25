"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function BookACallSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const leftStickerRef = useRef<HTMLDivElement>(null);
  const rightStickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // 1. Orange banner pop up
      if (bannerRef.current) {
        gsap.fromTo(
          bannerRef.current,
          { opacity: 0, scale: 0.92, y: 35 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bannerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 2. Center Button Bouncy Pop
      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          { opacity: 0, scale: 0.75 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.75,
            delay: 0.2,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: bannerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 3. Left Reserve Ticket Pop
      if (leftStickerRef.current) {
        gsap.fromTo(
          leftStickerRef.current,
          { opacity: 0, scale: 0.6, rotation: -25 },
          {
            opacity: 1,
            scale: 1,
            rotation: -12,
            duration: 0.7,
            delay: 0.35,
            ease: "back.out(1.8)",
            scrollTrigger: {
              trigger: bannerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 4. Right Sale Badge Pop
      if (rightStickerRef.current) {
        gsap.fromTo(
          rightStickerRef.current,
          { opacity: 0, scale: 0.6, rotation: 25 },
          {
            opacity: 1,
            scale: 1,
            rotation: 12,
            duration: 0.7,
            delay: 0.35,
            ease: "back.out(1.8)",
            scrollTrigger: {
              trigger: bannerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 15 scallops across 1200 width (period = 80px)
  let topScallopD = "M 0 0 ";
  for (let x = 0; x < 1200; x += 80) {
    topScallopD += `C ${x + 20} 30, ${x + 60} 30, ${x + 80} 0 `;
  }
  topScallopD += "L 1200 0 L 0 0 Z";

  let botScallopD = "M 0 40 ";
  for (let x = 0; x < 1200; x += 80) {
    botScallopD += `C ${x + 20} 10, ${x + 60} 10, ${x + 80} 40 `;
  }
  botScallopD += "L 1200 40 L 0 40 Z";

  return (
    <section
      ref={sectionRef}
      id="book-call"
      className="w-full bg-[#FAF8F5] rounded-t-[28px] sm:rounded-t-[40px] md:rounded-t-[48px] pt-8 sm:pt-12 pb-16 px-4 sm:px-6 md:px-8 select-none"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* The Orange Grid Banner matching media_1791549934311.png */}
        <div
          ref={bannerRef}
          className="relative w-full min-h-[300px] h-[320px] sm:h-[380px] md:h-[440px] bg-[#FF4F18] overflow-hidden rounded-[24px] sm:rounded-[36px] flex items-center justify-center"
        >
          {/* Dark Blueprint Grid Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 0, 0, 0.45) 1.5px, transparent 1.5px),
                linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 1.5px, transparent 1.5px)
              `,
              backgroundSize: "75px 75px",
            }}
          />

          {/* Top Scalloped Wavy Edge */}
          <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
            <svg
              viewBox="0 0 1200 35"
              preserveAspectRatio="none"
              className="w-full h-[22px] sm:h-[30px] md:h-[35px]"
            >
              <path d={topScallopD} fill="#FAF8F5" />
            </svg>
          </div>

          {/* Bottom Scalloped Wavy Edge */}
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
            <svg
              viewBox="0 0 1200 40"
              preserveAspectRatio="none"
              className="w-full h-[22px] sm:h-[30px] md:h-[38px]"
            >
              <path d={botScallopD} fill="#FAF8F5" />
            </svg>
          </div>

          {/* Left Sticker: Green "RESERVE Your Seat" Ticket - with ample top margin */}
          <div
            ref={leftStickerRef}
            className="absolute left-3 sm:left-8 md:left-16 lg:left-24 top-9 xs:top-11 sm:top-1/2 -translate-y-0 sm:-translate-y-1/2 scale-[0.72] sm:scale-100 origin-top-left -rotate-12 z-20 transition-transform duration-300 hover:-rotate-6 hover:scale-105 cursor-pointer"
          >
            <div className="relative bg-[#3CD070] border-[3.5px] border-black rounded-lg px-4 sm:px-6 py-2.5 sm:py-3.5 shadow-[5px_7px_0px_#000000] flex flex-col items-center justify-center">
              {/* Ticket Left Notch */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#FF4F18] border-[3.5px] border-black" />
              {/* Ticket Right Notch */}
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#FF4F18] border-[3.5px] border-black" />

              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-[11px] sm:text-[13px] md:text-[15px] tracking-wider text-black uppercase font-mono">
                  RESERVE
                </span>
                <span className="w-4 h-4 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center">
                  !
                </span>
              </div>
              <div className="mt-0.5 border-b-[2.5px] border-black pb-0.5">
                <span
                  className="font-bold text-lg sm:text-2xl md:text-3xl text-black leading-none"
                  style={{ fontFamily: "var(--font-script, 'Caveat', cursive)" }}
                >
                  Your Seat
                </span>
              </div>
            </div>
          </div>

          {/* Center 3D Yellow Pill Button: "Book a Call" */}
          <div ref={buttonRef} className="relative z-20 flex flex-col items-center">
            <a
              href="#book-call"
              className="group relative inline-flex flex-col items-center justify-center px-7 sm:px-16 md:px-20 py-3 sm:py-6 md:py-7 rounded-full bg-[#FFBA08] border-[3.5px] sm:border-[4px] border-black shadow-[0_8px_0_#000000] sm:shadow-[0_12px_0_#000000] transition-all duration-200 hover:translate-y-1 hover:shadow-[0_8px_0_#000000] active:translate-y-2.5 active:shadow-[0_2px_0_#000000] cursor-pointer"
            >
              <span
                className="text-3xl sm:text-5xl md:text-6xl text-black font-bold tracking-tight select-none leading-none"
                style={{ fontFamily: "var(--font-script, 'Caveat', cursive)" }}
              >
                Book a Call
              </span>
              {/* Underline beneath the cursive text */}
              <div className="w-full h-[3px] bg-black rounded-full mt-1.5 transition-transform duration-200 group-hover:scale-x-105" />
            </a>
          </div>

          {/* Right Sticker: Blue "Sale!" Starburst Badge - Padded inside with extra margin */}
          <div
            ref={rightStickerRef}
            className="absolute right-5 xs:right-7 sm:right-10 md:right-16 lg:right-24 bottom-8 xs:bottom-10 sm:top-1/2 sm:bottom-auto -translate-y-0 sm:-translate-y-1/2 scale-[0.72] sm:scale-100 origin-bottom-right rotate-12 z-20 transition-transform duration-300 hover:rotate-6 hover:scale-105 cursor-pointer"
          >
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center drop-shadow-[5px_7px_0px_#000000]">
              {/* 16-point Starburst SVG */}
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
                fill="#1D4ED8"
              >
                <polygon points="50,0 61,16 80,9 85,29 100,38 93,57 100,77 82,82 77,100 58,93 39,100 33,81 14,84 19,65 0,53 14,35 7,16 27,21 38,0" />
              </svg>
              <span
                className="relative z-10 text-white font-bold text-2xl sm:text-3xl md:text-4xl -rotate-6 select-none"
                style={{ fontFamily: "var(--font-script, 'Caveat', cursive)" }}
              >
                Sale!
              </span>
            </div>
          </div>
        </div>

        {/* Subtitle Copy below orange banner */}
        <div className="mt-6 sm:mt-8 flex justify-center sm:justify-end">
          <p className="max-w-xl text-center sm:text-right text-zinc-900 font-bold text-xs sm:text-base md:text-lg leading-snug">
            From High-Growth Meta Campaigns To Full-Scale Creator Management &amp; Brand Deals.
            
          </p>
        </div>
      </div>
    </section>
  );
}
