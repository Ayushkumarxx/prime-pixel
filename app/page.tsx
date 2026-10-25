import { PageIntroLoader } from "@/components/ui/PageIntroLoader";
import { HeroSection } from "@/components/sections/HeroSection";
import { CompanyStripSection } from "@/components/sections/CompanyStripSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FillerSection } from "@/components/sections/FillerSection";
import { OurWorkSection } from "@/components/sections/OurWorkSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E8E8EA]">
      {/* 3-Div Opening Curtain Wipe (Orange > Blue > White) */}
      <PageIntroLoader />

      <HeroSection />

      {/* Sections after Hero */}
      <CompanyStripSection />
      <ServicesSection />
      <OurWorkSection />
      <FillerSection />
      <StatsSection />
      <AboutSection />

      {/* Footer Flow (BookACall on top, then SearchCreators, then SiteFooter) */}
      <FooterSection />
    </main>
  );
}



