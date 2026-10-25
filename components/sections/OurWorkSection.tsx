"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { mascotPink, mascotGreen } from "@/public/images";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface WorkItem {
  id: string;
  number: string;
  title: string;
  category: string;
  type: "image" | "video";
  src: string;
  isTall?: boolean;
  hasFloatingCard?: boolean;
}

// 5 Service categories matching ServicesSection exactly
// First category has the two videos at the front as requested
const WORK_CATEGORIES: Record<string, WorkItem[]> = {
  "INFLUENCER MARKETING": [
    {
      id: "inf-1",
      number: "( 01 )",
      title: "Prime Motion",
      category: "INFLUENCER MARKETING",
      type: "video",
      src: "/videos/VID-20260930-WA0016.mp4",
      isTall: true, // Big height
    },
    {
      id: "inf-2",
      number: "( 02 )",
      title: "Studio Cut",
      category: "INFLUENCER MARKETING",
      type: "video",
      src: "/videos/VID-20261004-WA0001.mp4",
      isTall: false, // Small height
    },
    {
      id: "inf-3",
      number: "( 03 )",
      title: "Cecia",
      category: "INFLUENCER MARKETING",
      type: "image",
      src: "/images/work/cecia.jpg",
      isTall: true,
    },
    {
      id: "inf-4",
      number: "( 04 )",
      title: "Padelhub",
      category: "INFLUENCER MARKETING",
      type: "image",
      src: "/images/work/padelhub.jpg",
      isTall: false,
    },
    {
      id: "inf-5",
      number: "( 05 )",
      title: "Kopvie",
      category: "INFLUENCER MARKETING",
      type: "image",
      src: "/images/work/kopvie.jpg",
      isTall: true,
    },
    {
      id: "inf-6",
      number: "( 06 )",
      title: "Swarm",
      category: "INFLUENCER MARKETING",
      type: "image",
      src: "/images/work/swarm.jpg",
      hasFloatingCard: true,
      isTall: false,
    },
    {
      id: "inf-7",
      number: "( 07 )",
      title: "Xera",
      category: "INFLUENCER MARKETING",
      type: "image",
      src: "/images/work/xera.jpg",
      isTall: true,
    },
    {
      id: "inf-8",
      number: "( 08 )",
      title: "Kroasan",
      category: "INFLUENCER MARKETING",
      type: "image",
      src: "/images/work/kroasan.jpg",
      isTall: false,
    },
  ],
  "CONTENT MANAGEMENT": [],
  "TALENT MANAGEMENT": [],
  "VIDEO EDITING": [],
  "WEB DEVELOPMENT": [],
};

const CATEGORIES = [
  "INFLUENCER MARKETING",
  "CONTENT MANAGEMENT",
  "TALENT MANAGEMENT",
  "VIDEO EDITING",
  "WEB DEVELOPMENT",
];

export function OurWorkSection() {
  const [activeCategory, setActiveCategory] = useState<string>("INFLUENCER MARKETING");
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // 1. Heading Staggered Left-to-Right + Bottom-to-Up Reveal (WORK - THAT - WORKS)
      if (headingRef.current) {
        const parts = headingRef.current.querySelectorAll(".work-heading-part");
        gsap.fromTo(
          parts,
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
      }

      // 2. Showcase Items: Left-to-Right Staggered Reveal
      const items = scrollContainerRef.current?.querySelectorAll(".work-card-item");
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, x: -70 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: scrollContainerRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  const currentItems = WORK_CATEGORIES[activeCategory] || [];

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 360;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full bg-[#E8E8EA] py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 select-none overflow-x-clip"
    >
      {/* Blueprint Grid Background Pattern (Matching ServicesSection) */}
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

      <div className="relative z-10 w-full max-w-[1440px] mx-auto overflow-hidden sm:overflow-visible">
        
        {/* ======================================================== */}
        {/* 1. Header: WORK - THAT - WORKS (Responsive Scaling)      */}
        {/* ======================================================== */}
        <div
          ref={headingRef}
          className="work-header-text w-full mb-10 sm:mb-16 md:mb-24 lg:mb-32 pt-2 sm:pt-4 overflow-visible"
        >
          <div className="w-full flex items-center justify-center gap-1.5 sm:gap-4 md:gap-7 whitespace-nowrap overflow-visible">
            <h2
              className="work-heading-part text-[11.5vw] xs:text-[12.5vw] sm:text-[13.5vw] md:text-[14vw] lg:text-[170px] xl:text-[195px] font-black text-[#2952FF] uppercase leading-[0.85] tracking-[-0.035em] select-none transform scale-y-[1.2] origin-bottom"
              style={{
                fontFamily: "var(--font-condensed), Anton, 'Bebas Neue', Impact, sans-serif",
                fontWeight: 900,
              }}
            >
              WORK
            </h2>

            <div className="work-heading-part flex items-center justify-center px-1 sm:px-2 shrink-0 self-center">
              <span className="text-[8px] xs:text-[9px] sm:text-[11px] md:text-xs lg:text-sm font-extrabold tracking-[0.2em] sm:tracking-[0.25em] text-[#2952FF] uppercase ">
                THAT
              </span>
            </div>

            <h2
              className="work-heading-part text-[11.5vw] xs:text-[12.5vw] sm:text-[13.5vw] md:text-[14vw] lg:text-[170px] xl:text-[195px] font-black text-[#2952FF] uppercase leading-[0.85] tracking-[-0.035em] select-none transform scale-y-[1.2] origin-bottom"
              style={{
                fontFamily: "var(--font-condensed), Anton, 'Bebas Neue', Impact, sans-serif",
                fontWeight: 900,
              }}
            >
              WORKS
            </h2>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. Category Tabs: Responsive Edge-to-Edge & Full Width    */}
        {/* ======================================================== */}
        <div className="w-full flex items-center justify-between pb-3 sm:pb-4 mb-6 sm:mb-10 overflow-x-auto scrollbar-none gap-4 -mx-4 px-4 pr-10 sm:mx-0 sm:px-0 sm:pr-0">
          <div className="flex items-center gap-6 sm:gap-7 md:gap-8 sm:w-full sm:justify-between shrink-0 sm:shrink pr-6 sm:pr-0">
            {CATEGORIES.map((label) => {
              const isActive = activeCategory === label;
              const isFirst = label === "INFLUENCER MARKETING";

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveCategory(label)}
                  className={`flex items-center gap-1.5 sm:gap-2 text-[13px] sm:text-sm md:text-base font-bold whitespace-nowrap transition-all duration-200 cursor-pointer pb-1.5 shrink-0 ${
                    isActive
                      ? "text-zinc-950 border-b-2 border-zinc-950"
                      : "text-zinc-400 hover:text-zinc-800"
                  }`}
                >
                  {isFirst && (
                    <span className="text-[8px] sm:text-[10px] text-zinc-950">◆</span>
                  )}
                  <span>{label}</span>
                </button>
              );
            })}
          </div>

          {/* Navigation Arrows for Showcase (Only visible when items exist) */}
          {currentItems.length > 0 && (
            <div className="hidden lg:flex items-center gap-2 shrink-0 pl-6 border-l border-zinc-200">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                aria-label="Previous work"
                className="w-8 h-8 rounded-full border border-zinc-300 hover:border-zinc-900 text-zinc-700 hover:text-zinc-950 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                aria-label="Next work"
                className="w-8 h-8 rounded-full border border-zinc-300 hover:border-zinc-900 text-zinc-700 hover:text-zinc-950 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* ======================================================== */}
        {/* 3. Horizontal Showcase OR Empty State Widget             */}
        {/* ======================================================== */}
        {currentItems.length > 0 ? (
          <div
            ref={scrollContainerRef}
            className="w-full flex items-start gap-3.5 sm:gap-5 md:gap-6 overflow-x-auto scrollbar-none pb-6 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {currentItems.map((item) => {
              // Alternating heights scaled responsively from mobile to desktop
              const heightClass = item.isTall
                ? "h-[320px] xs:h-[370px] sm:h-[440px] md:h-[480px] lg:h-[500px]"
                : "h-[240px] xs:h-[280px] sm:h-[340px] md:h-[370px] lg:h-[390px]";

              return (
                <div
                  key={item.id}
                  className="work-card-item group shrink-0 w-[205px] xs:w-[240px] sm:w-[270px] md:w-[290px] lg:w-[310px] flex flex-col"
                  style={{ opacity: 0 }}
                >
                  {/* Media Card Container with Alternating Big/Small Height */}
                  <div
                    className={`relative w-full ${heightClass} overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm transition-all duration-300 group-hover:shadow-md`}
                  >
                    {item.type === "video" ? (
                      /* Simple Clean Video - pointer-events-none avoids touch hijacking */
                      <video
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                      />
                    ) : (
                      <div className="relative w-full h-full overflow-hidden">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Floating Social Media Card for Swarm project */}
                        {item.hasFloatingCard && (
                          <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/95 backdrop-blur-md border border-white/50 shadow-xl pointer-events-none text-left">
                            <div className="flex items-center gap-1.5 mb-1">
                              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-400 flex items-center justify-center text-[8px] sm:text-[9px] font-bold text-zinc-900 shrink-0">
                                AT
                              </div>
                              <div className="text-[9px] sm:text-[11px] font-semibold text-zinc-900 leading-tight truncate">
                                adamtaylor <span className="font-normal text-zinc-500">in</span> <span className="text-[#2952FF] font-semibold">Swarm Hub</span>
                              </div>
                            </div>
                            <p className="text-[9px] sm:text-[11px] text-zinc-800 font-medium leading-snug mb-1 sm:mb-1.5 line-clamp-2">
                              I&apos;m at Marina Beach, the sunset spot here is beautiful ☀️
                            </p>
                            <div className="flex items-center gap-2 sm:gap-2.5 text-[8px] sm:text-[10px] text-zinc-500 font-mono">
                              <span>2m ago</span>
                              <div className="flex items-center gap-0.5 sm:gap-1 text-emerald-600 font-bold">
                                <span>👍</span> 112
                              </div>
                              <div className="flex items-center gap-0.5 sm:gap-1">
                                <span>💬</span> 43
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card Title & Number Info (Directly Below Each Card) */}
                  <div className="mt-2.5 sm:mt-3.5 text-left">
                    <div className="font-mono text-xs sm:text-sm font-bold text-[#2952FF] mb-0.5">
                      {item.number}
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-zinc-950 tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Full Width Empty State Card with Pink & Green Mascot Stickers */
          <div className="w-full min-h-[360px] sm:min-h-[420px] rounded-[28px] sm:rounded-[36px] bg-white border border-zinc-200/90 shadow-xl shadow-black/5 p-8 sm:p-14 flex flex-col items-center justify-center text-center relative overflow-hidden">
            {/* Background Blueprint Grid subtle */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />

            {/* Mascots: Green & Red/Pink Emoji Mascot Stickers */}
            <div className="relative flex items-center justify-center gap-4 sm:gap-6 mb-5 sm:mb-6 z-10">
              {/* Pink Mascot Sticker */}
              <div className="relative w-14 h-14 sm:w-20 sm:h-20 -rotate-12 hover:scale-110 hover:-rotate-6 transition-transform duration-300 drop-shadow-xl">
                <Image
                  src={mascotPink}
                  alt="Pink mascot sticker"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Green Mascot Sticker */}
              <div className="relative w-14 h-14 sm:w-20 sm:h-20 rotate-12 hover:scale-110 hover:rotate-6 transition-transform duration-300 drop-shadow-xl">
                <Image
                  src={mascotGreen}
                  alt="Green mascot sticker"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Empty State Text */}
            <div className="relative z-10 max-w-lg mb-6 sm:mb-7">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-950 uppercase tracking-tight mb-2">
                Currently we don&apos;t have any work here
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-zinc-500 font-medium">
                We are actively scaling campaigns in this category. Partner with us to launch the next flagship project.
              </p>
            </div>

            {/* Book Now Button */}
            <button
              type="button"
              onClick={() =>
                document.getElementById("book-call")?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative z-10 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-[#FF5E1E] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-orange-500/25 hover:bg-[#E04B10] active:scale-95 transition-all cursor-pointer"
            >
              Book Now
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
