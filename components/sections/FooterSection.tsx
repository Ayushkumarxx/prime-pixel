"use client";

import React from "react";
import { SearchCreatorsSection } from "./SearchCreatorsSection";
import { BookACallSection } from "./BookACallSection";
import { SiteFooter } from "./SiteFooter";

export function FooterSection() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Orange Section: Book a Call (media_1791549934311.png) */}
      <BookACallSection />

      {/* 2. Blue Section: Searching for Creators (media_1791549934338.png) */}
      <SearchCreatorsSection />

      {/* 3. Footer Section: Legal, Socials & Watermark (media_1791549934332.png) */}
      <SiteFooter />
    </div>
  );
}

export { SearchCreatorsSection, BookACallSection, SiteFooter };
