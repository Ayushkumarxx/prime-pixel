"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  programLabel: string;
  description: string;
}

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string>("influencer-marketing");

  const services: ServiceItem[] = [
    {
      id: "influencer-marketing",
      title: "INFLUENCER MARKETING",
      programLabel: "OUR FIRST PROGRAM",
      description: "Empowering Global Creator Economy & Brand Partnerships",
    },
    {
      id: "content-management",
      title: "CONTENT MANAGEMENT",
      programLabel: "SECOND PROGRAM",
      description: "Learning That Drives Real Creator Revenue",
    },
    {
      id: "talent-management",
      title: "TALENT MANAGEMENT",
      programLabel: "THIRD PROGRAM",
      description: "Shows Worth Clearing Your Evening For",
    },
    {
      id: "video-editing",
      title: "VIDEO EDITING",
      programLabel: "FOURTH PROGRAM",
      description: "High-Retention Storytelling & Dynamic Pacing",
    },
    {
      id: "web-development",
      title: "WEB DEVELOPMENT",
      programLabel: "FIFTH PROGRAM",
      description: "A Place To Land, Not Just Scroll",
    },
  ];

  // Exact horizontal positions requested:
  // 1: Right (~74%)
  // 2: Little Left (~50%)
  // 3: A Little More Left (~26%)
  // 4: A Little Right (~48%)
  // 5: A Little Right (~70%)
  const tabOffsets = [
    "left-[74%]",
    "left-[50%]",
    "left-[26%]",
    "left-[48%]",
    "left-[70%]",
  ];

  return (
    <section id="services" className="relative w-full bg-[#E8E8EA] py-16 sm:py-24 px-4 sm:px-6 md:px-8 select-none overflow-visible">
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

      <div className="relative max-w-[1400px] mx-auto overflow-visible">
        {/* Header: OUR SERVICES (OUR SERVICE → on small screens) */}
        <div className="pb-10 sm:pb-14 border-b border-zinc-300/80">
          <div className="flex items-baseline gap-3 sm:gap-4">
            <span className="font-mono text-xl sm:text-2xl font-bold text-zinc-950 hidden sm:inline-block">
              (05)
            </span>
            <h2
              className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[#2952FF] uppercase font-extrabold flex items-center gap-3"
              style={{
                fontFamily: "var(--font-condensed), Anton, Impact, sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              {/* Mobile: OUR SERVICE → */}
              <span className="sm:hidden">OUR SERVICE →</span>

              {/* Desktop: OUR SERVICES → */}
              <span className="hidden sm:inline-flex items-center gap-3">
                OUR SERVICES
                <span className="text-[#2952FF] font-light">→</span>
              </span>
            </h2>
          </div>
        </div>

        {/* Continuous Stacked Container with 2.5px white border and overflow-visible */}
        <div className="mt-20 sm:mt-24 pt-12 sm:pt-14 p-2 sm:p-3 flex flex-col rounded-[32px] sm:rounded-[40px] border-[2.5px] border-white bg-white/70 shadow-sm relative overflow-visible">
          {services.map((item, idx) => {
            const isActive = activeId === item.id;
            const tabOffsetClass = tabOffsets[idx];
            // Increasing z-index ensures every subsequent card's tab overlaps in front and is 100% visible
            const cardZIndex = (idx + 1) * 10;

            return (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`group relative w-full cursor-pointer transition-all duration-200 rounded-[20px] sm:rounded-[24px] border-[2px] border-white overflow-visible ${
                  idx > 0 ? "-mt-1" : ""
                } ${
                  isActive
                    ? "bg-[#2952FF] text-white shadow-lg shadow-blue-600/20"
                    : "bg-[#F0F0F3] text-zinc-900 hover:bg-[#E8E8EC]"
                }`}
                style={{ zIndex: cardZIndex }}
              >
                {/* Rounded White-Bordered Sloped Tab Strip - Visible on EVERY card */}
                <div
                  className={`absolute -top-[36px] sm:-top-[42px] max-sm:left-1/2 ${tabOffsetClass} -translate-x-1/2 pointer-events-none z-30`}
                >
                  <div className="relative w-[260px] sm:w-[410px] h-[37px] sm:h-[43px] flex items-center justify-center">
                    {/* SVG Sloping Flat-Top Tab with gently rounded top corners */}
                    <svg
                      viewBox="0 0 410 43"
                      preserveAspectRatio="none"
                      className="absolute inset-0 w-full h-full"
                    >
                      {/* Polygon fill matching card */}
                      <path
                        d="M 0,43 C 24,43 36,8 54,2 C 60,0 66,0 72,0 L 338,0 C 344,0 350,0 356,2 C 374,8 386,43 410,43 Z"
                        fill={isActive ? "#2952FF" : "#FFFFFF"}
                      />
                      {/* Crisp 2.5px white stroke ONLY for cards after the first one */}
                      {idx > 0 && (
                        <path
                          d="M 0,43 C 24,43 36,8 54,2 C 60,0 66,0 72,0 L 338,0 C 344,0 350,0 356,2 C 374,8 386,43 410,43"
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="2.5"
                        />
                      )}
                    </svg>

                    {/* Tab Label */}
                    <span
                      className={`relative z-10 text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase underline decoration-1 underline-offset-4 pb-0.5 ${
                        isActive ? "text-white" : "text-[#2952FF]"
                      }`}
                    >
                      {item.programLabel}
                    </span>
                  </div>
                </div>

                {/* Card Content Row with increased bottom padding (+20-30%) */}
                <div className="w-full px-5 sm:px-10 md:px-12 pt-7 sm:pt-9 pb-12 sm:pb-20 flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6">
                  {/* Left: Bullet + Title + Clean Black Border Chip */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 shrink-0">
                    <span
                      className={`w-3 h-3 rounded-full shrink-0 ${
                        isActive ? "bg-white" : "bg-[#2952FF]"
                      }`}
                    />
                    <h3
                      className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase sm:whitespace-nowrap ${
                        isActive ? "text-white" : "text-[#2952FF]"
                      }`}
                      style={{
                        fontFamily: "var(--font-condensed), Anton, Impact, sans-serif",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Right: Subtitle Description + Brand Orange Arrow Button */}
                  <div className="flex items-center justify-between lg:justify-end gap-5 sm:gap-8 shrink-0">
                    <p
                      className={`text-xs sm:text-base md:text-lg font-medium max-w-sm text-left lg:text-right ${
                        isActive ? "text-white/95" : "text-zinc-600"
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* Circular Action Button in Brand Prime Orange */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        document.getElementById("book-call")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#FF5E1E] text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/20 transition-all duration-300 hover:scale-110 hover:bg-[#E84D0E] active:scale-95 cursor-pointer"
                      aria-label={`Book a call for ${item.title}`}
                    >
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] transition-transform duration-300 group-hover:-rotate-45" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
