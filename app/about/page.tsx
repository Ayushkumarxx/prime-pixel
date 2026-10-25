import React from "react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public/images";
import { AboutSection } from "@/components/sections/AboutSection";
import { FooterSection } from "@/components/sections/FooterSection";

export const metadata = {
  title: "About Us | PrimePixel - Creator Talent & Digital Studio",
  description:
    "Discover PrimePixel - the vanguard of digital creators, video editing, and next-gen internet culture.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#E8E8EA] flex flex-col">
      {/* Sticky / Top Navigation Bar */}
      <header className="w-full max-w-[1420px] mx-auto px-4 sm:px-6 md:px-10 py-6 flex items-center justify-between z-50">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-200 group-hover:scale-105">
            <Image
              src={logo}
              alt="PrimePixel Emblem"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-black tracking-tight uppercase text-zinc-950">
              PRIMEPIXEL
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-tight uppercase text-zinc-500">
              TALENT MANAGEMENT
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-zinc-300 text-zinc-800 font-semibold text-xs uppercase tracking-tight hover:bg-zinc-100 transition-all"
          >
            ← BACK TO HOME
          </Link>
          <a
            href="#book-call"
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#FF5E1E] text-white font-bold text-xs uppercase tracking-tight shadow-md shadow-orange-500/25 hover:bg-[#E04B10] transition-all"
          >
            GET IN TOUCH
          </a>
        </div>
      </header>

      {/* About Us Section */}
      <AboutSection />

      {/* Footer Flow */}
      <FooterSection />
    </main>
  );
}
