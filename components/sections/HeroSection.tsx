"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Menu, X } from "lucide-react";
import {
  hero1,
  mascotPink,
  mascotGreen,
  redPin,
  logo,
} from "@/public/images";

const HERO_HEADLINES = [
  "Empowering Indonesia's Creator Economy",
  "Scaling Next-Gen Digital Talent Globally",
  "Accelerating Viral Brand Impact & Reach",
  "Engineering High-Retention Digital Storytelling",
  "Connecting Visionary Creators With Global Brands",
];

export function HeroSection() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const nextHeadline = () => {
    setHeadlineIndex((prev) => (prev + 1) % HERO_HEADLINES.length);
  };

  const prevHeadline = () => {
    setHeadlineIndex((prev) => (prev - 1 + HERO_HEADLINES.length) % HERO_HEADLINES.length);
  };

  return (
  
    <section className="relative w-full pt-1 sm:pt-2 pb-12 sm:pb-16 px-1.5 sm:px-3 md:px-4 flex items-center justify-center">
      {/* ======================================================== */}
      {/* Layered Slide-In Animated Mobile Drawer (Orange > Blue > White) */}
      {/* Placed at section root for 100% reliable z-index & pointer events */}
      {/* ======================================================== */}
      <div
        className={`fixed inset-0 z-[9999] transition-all duration-300 ${
          mobileMenuOpen ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"
        }`}
      >
        {/* Layer 1: Bottom Orange Panel */}
        <div
          className={`fixed inset-0 bg-[#FF5E1E] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        />

        {/* Layer 2: Middle Blue Panel */}
        <div
          className={`fixed inset-0 bg-[#2952FF] transition-transform duration-500 delay-75 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        />

        {/* Layer 3: Main White Content Panel */}
        <div
          className={`fixed inset-0 bg-[#FFFFFF] transition-transform duration-500 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] p-6 sm:p-8 flex flex-col justify-between ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2.5 select-none">
              <div className="relative w-9 h-9 shrink-0">
                <Image
                  src={logo}
                  alt="PrimePixel Emblem"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-black tracking-tight uppercase text-zinc-950">
                PRIMEPIXEL
              </span>
            </div>

            {/* Black Circular Close Cross Icon Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(false);
              }}
              aria-label="Close navigation menu"
              className="w-11 h-11 rounded-full bg-zinc-950 text-white flex items-center justify-center hover:bg-zinc-800 active:scale-90 transition-all cursor-pointer shrink-0 pointer-events-auto"
            >
              <X className="w-5 h-5 pointer-events-none" />
            </button>
          </div>

          {/* Menu Links with Staggered Brutalist Typography */}
          <nav className="flex flex-col gap-2 my-auto w-full">
            {[
              { label: "SERVICES", href: "services", num: "( 01 )" },
              { label: "OUR WORK", href: "work", num: "( 02 )" },
              { label: "CONTACT US", href: "book-call", num: "( 03 )" },
            ].map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileMenuOpen(false);
                  setTimeout(() => {
                    const el = document.getElementById(link.href);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 200);
                }}
                className="group flex items-baseline justify-between border-b border-zinc-200/80 py-4 sm:py-5 text-left transition-all cursor-pointer hover:border-zinc-950 pointer-events-auto"
              >
                <span className="text-3xl xs:text-4xl sm:text-5xl font-black uppercase tracking-tight text-zinc-950 group-hover:text-[#FF5E1E] transition-colors">
                  {link.label}
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-zinc-400 group-hover:text-zinc-950 transition-colors">
                  {link.num}
                </span>
              </button>
            ))}
          </nav>

          {/* Bottom Brand & Designer Tag */}
          <div className="flex items-center justify-between border-t border-zinc-200/80 pt-4 text-xs font-semibold text-zinc-600">
            <div className="flex items-center gap-2">
              <div className="relative w-5 h-5 shrink-0">
                <Image
                  src={logo}
                  alt="PrimePixel Emblem"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-black tracking-tight text-zinc-950 uppercase text-[11px]">
                PRIMEPIXEL
              </span>
            </div>
            <span className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
              2026 © ALL RIGHTS RESERVED
            </span>
          </div>
        </div>
      </div>

      {/* Main Rounded Canvas Card */}
      <div className="relative w-full max-w-[1420px] min-h-[580px] sm:min-h-[640px] md:h-[calc(100vh-28px)] md:max-h-[880px] bg-white rounded-[28px] sm:rounded-[40px] md:rounded-[48px] shadow-2xl shadow-black/8 border border-zinc-200/90 p-4 sm:p-7 md:p-9 flex flex-col justify-between overflow-visible">
        
        {/* ======================================================== */}
        {/* Architectural Grid Table (Squares - NO topmost line)     */}
        {/* ======================================================== */}
        <div className="absolute inset-x-0 top-[84px] bottom-0 z-0 pointer-events-none">
          {/* Horizontal lines */}
          <div className="absolute top-[25%] inset-x-0 h-px bg-zinc-200/80" />
          <div className="absolute top-[50%] inset-x-0 h-px bg-zinc-200/80" />
          <div className="absolute top-[75%] inset-x-0 h-px bg-zinc-200/80" />

          {/* Vertical lines (6 columns forming big squares) */}
          <div className="absolute inset-y-0 left-[16.666%] w-px bg-zinc-200/80" />
          <div className="absolute inset-y-0 left-[33.333%] w-px bg-zinc-200/80" />
          <div className="absolute inset-y-0 left-[50%] w-px bg-zinc-200/80" />
          <div className="absolute inset-y-0 left-[66.666%] w-px bg-zinc-200/80" />
          <div className="absolute inset-y-0 left-[83.333%] w-px bg-zinc-200/80" />
        </div>

        {/* ======================================================== */}
        {/* Top Header / Navigation */}
        {/* ======================================================== */}
        <header className="relative z-40 flex items-center justify-between gap-3 w-full">
          {/* Brand Logo & Name Area */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 select-none shrink-0">
            {/* Big, prominent logo icon */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0 transition-transform duration-200 hover:scale-105 cursor-pointer">
              <Image
                src={logo}
                alt="PrimePixel Emblem"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Mobile: "PRIMEPIXEL" with concise tagline */}
            <div className="md:hidden flex flex-col justify-center">
              <span className="text-sm font-black tracking-tight uppercase text-zinc-950 leading-tight">
                PRIMEPIXEL
              </span>
              <span className="text-[9px] font-bold tracking-tight uppercase text-zinc-500 leading-tight">
                TALENT MANAGEMENT • CREATOR STUDIO
              </span>
            </div>

            {/* Desktop: Continuous 2-line brand text */}
            <div className="hidden md:flex flex-col justify-center">
              <span className="text-xs font-black tracking-tight uppercase text-zinc-950 leading-tight">
                PRIMEPIXEL IS A TALENT MANAGEMENT COMPANY
              </span>
              <span className="text-[11px] font-bold tracking-tight uppercase text-zinc-500 leading-tight">
                COMMITTED TO EMPOWERING NEXT-GEN CREATORS.
              </span>
            </div>
          </div>

          {/* Desktop Navigation Buttons: SERVICES, OUR WORK, CONTACT US */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-5 py-2.5 rounded-full border border-zinc-300 text-zinc-800 font-semibold text-xs uppercase tracking-tight hover:bg-zinc-100 active:scale-95 transition-all cursor-pointer"
            >
              SERVICES
            </button>
            <button
              type="button"
              onClick={() =>
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-5 py-2.5 rounded-full border border-zinc-300 text-zinc-800 font-semibold text-xs uppercase tracking-tight hover:bg-zinc-100 active:scale-95 transition-all cursor-pointer"
            >
              OUR WORK
            </button>
            <button
              type="button"
              onClick={() =>
                document.getElementById("book-call")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-5 py-2.5 rounded-full bg-[#FF5E1E] text-white font-bold text-xs uppercase tracking-tight shadow-md shadow-orange-500/25 hover:bg-[#E04B10] active:scale-95 transition-all cursor-pointer"
            >
              CONTACT US
            </button>
          </div>

          {/* Mobile: Black Circular Hamburger Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(true);
            }}
            aria-label="Open mobile navigation menu"
            className="md:hidden w-10 h-10 rounded-full bg-zinc-950 text-white flex items-center justify-center hover:bg-zinc-800 active:scale-95 transition-all cursor-pointer shrink-0 z-40"
          >
            <Menu className="w-4 h-4 pointer-events-none" />
          </button>
        </header>

        {/* ======================================================== */}
        {/* 3 Typography Words - Layered BEHIND the model (z-0)      */}
        {/* Tight cohesive spacing on mobile so Creator is close to Socialize */}
        {/* ======================================================== */}
        
        {/* 1. TOP-CENTER TEXT: SOCIALIZE (Electric Blue) */}
        <div className="absolute top-[12%] sm:top-[12%] md:top-[11%] left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none text-center">
          <h1 className="text-[13.5vw] sm:text-[13vw] lg:text-[150px] font-black text-[#2952FF] tracking-tighter leading-none uppercase drop-shadow-sm">
            SOCIALIZE
          </h1>
        </div>

        {/* 2. MIDDLE-LEFT TEXT: CREATOR (Orange with underline - pulled closer under Socialize) */}
        <div className="absolute top-[23%] sm:top-[28%] md:top-[32%] left-[6%] sm:left-[13%] md:left-[16%] z-0 pointer-events-none select-none flex flex-col items-start">
          <span className="text-[11vw] sm:text-[10vw] lg:text-[118px] font-black italic tracking-tighter text-[#FF5E1E] leading-none uppercase drop-shadow-sm">
            CREATOR
          </span>
          <div className="w-[108%] h-2.5 sm:h-3.5 bg-[#FF5E1E] rounded-full -rotate-1 mt-1 shadow-sm" />
        </div>

        {/* 3. MIDDLE-RIGHT TEXT: STUDIO (Black, tilted - matching alignment) */}
        <div className="absolute top-[31%] sm:top-[34%] md:top-[36%] right-[6%] sm:right-[12%] md:right-[15%] z-0 pointer-events-none select-none">
          <span className="text-[12vw] sm:text-[11vw] lg:text-[132px] font-black tracking-tighter text-zinc-950 leading-none uppercase inline-block -rotate-2">
            STUDIO
          </span>
        </div>

        {/* ======================================================== */}
        {/* Floating Mascot Stickers (z-20)                           */}
        {/* ======================================================== */}
        
        {/* Mascot 1: Pink Squircle Sticker */}
        <div className="absolute z-20 left-[18%] sm:left-[24%] md:left-[26%] top-[22%] sm:top-[23%] md:top-[24%] -rotate-12 hover:scale-105 transition-transform duration-300 pointer-events-auto">
          <div className="relative w-13 h-13 sm:w-18 sm:h-18 md:w-22 md:h-22 drop-shadow-xl">
            <Image
              src={mascotPink}
              alt="Pink mascot sticker"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Mascot 2: Green Squircle Sticker */}
        <div className="absolute z-20 right-[18%] sm:right-[23%] md:right-[25%] top-[26%] sm:top-[29%] md:top-[30%] rotate-12 hover:scale-105 transition-transform duration-300 pointer-events-auto">
          <div className="relative w-13 h-13 sm:w-18 sm:h-18 md:w-22 md:h-22 drop-shadow-xl">
            <Image
              src={mascotGreen}
              alt="Green mascot sticker"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* ======================================================== */}
        {/* Central Person Model - Taller & vertically prominent on small screen */}
        {/* ======================================================== */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[8%] sm:translate-y-[8%] md:translate-y-[7%] z-10 w-[340px] xs:w-[380px] sm:w-[420px] md:w-[490px] lg:w-[550px] pointer-events-none">
          <Image
            src={hero1}
            alt="PrimePixel Hero Model"
            width={640}
            height={850}
            priority
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* ======================================================== */}
        {/* Bottom Area: Metrics Card on the LEFT on small screens, smaller width, without raised text */}
        {/* ======================================================== */}
        <div className="relative z-20 flex items-end justify-between w-full mt-auto">
          
          {/* METRICS CARD: Positioned on the LEFT on mobile and desktop, compact width, without raised text */}
          <div className="relative bg-white rounded-2xl shadow-xl shadow-black/8 border border-zinc-100 p-3 sm:p-4 md:p-5 w-[205px] xs:w-[220px] sm:w-[250px] md:w-[270px]">
            {/* 3D Red Pushpin */}
            <div className="absolute -top-4 -right-2.5 w-8 h-8 sm:w-11 sm:h-11 z-30 pointer-events-none drop-shadow-lg -scale-x-100 rotate-[12deg]">
              <Image
                src={redPin}
                alt="Pushpin"
                fill
                className="object-contain"
              />
            </div>

            {/* Avatars & Collab Count */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="flex -space-x-1.5 sm:-space-x-2 overflow-hidden">
                <Image
                  className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                  alt="Talent 1"
                  width={32}
                  height={32}
                  unoptimized
                />
                <Image
                  className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                  alt="Talent 2"
                  width={32}
                  height={32}
                  unoptimized
                />
                <Image
                  className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces"
                  alt="Talent 3"
                  width={32}
                  height={32}
                  unoptimized
                />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-zinc-950">150+</p>
                <p className="text-[9px] sm:text-[10px] text-zinc-500 font-medium">Brand collaboration</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-zinc-100 rounded-full mt-2.5 sm:mt-3 overflow-hidden">
              <div className="h-full w-[46%] bg-[#FF5E1E] rounded-full" />
            </div>

            {/* Views Metrics - Raised funding removed from both small and big screen as requested */}
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-zinc-500 font-medium mt-1.5 sm:mt-2">
              <span className="font-bold text-zinc-900">1B+ views</span>
              <span className="text-[9px] font-semibold text-emerald-600">Active</span>
            </div>
          </div>

          {/* RIGHT CARD (Headline + Arrows): HIDDEN on small screens (hidden md:block), visible on laptop/desktop */}
          <div className="hidden md:block relative bg-white rounded-2xl shadow-xl shadow-black/8 border border-zinc-100 p-4 sm:p-5 w-[320px] md:w-[350px] text-left">
            {/* Pill Tag with Orange Badge */}
            <div className="inline-flex items-center gap-1.5 bg-zinc-50 border border-zinc-200/80 px-2.5 py-1 rounded-full text-[11px] mb-2.5">
              <span className="bg-[#FF5E1E] text-white font-bold px-4.5 py-0.5 rounded-4xl text-[9px] uppercase">
                PRIMEPIXEL
              </span>
            </div>

            {/* Headline with looping transition on click */}
            <div
              onClick={nextHeadline}
              className="cursor-pointer group select-none min-h-[52px] sm:min-h-[58px] flex items-center"
            >
              <h2
                key={headlineIndex}
                className="text-base sm:text-lg md:text-xl font-extrabold text-zinc-950 tracking-tight leading-snug transition-all duration-300 ease-out group-hover:text-[#FF5E1E]"
              >
                {HERO_HEADLINES[headlineIndex]}
              </h2>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2.5 mt-3 sm:mt-4">
              <button
                type="button"
                onClick={prevHeadline}
                aria-label="Previous headline"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-orange-200 bg-orange-50/60 text-[#FF5E1E] flex items-center justify-center hover:bg-orange-100 active:scale-95 transition-all cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextHeadline}
                aria-label="Next headline"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FF5E1E] text-white flex items-center justify-center shadow-lg shadow-orange-500/25 hover:bg-[#E04B10] active:scale-95 transition-all cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );

}
