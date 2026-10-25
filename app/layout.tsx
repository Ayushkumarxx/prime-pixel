import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Serif_Display, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  variable: "--font-serif",
  subsets: ["latin"],
});

const caveat = Caveat({
  weight: ["700"],
  variable: "--font-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrimePixel — Modern Web Experience",
  description:
    "Clean, high-performance Next.js template powered by Lenis smooth scrolling and GSAP animations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dmSerif.variable} ${caveat.variable} antialiased selection:bg-[#FF5E1E] selection:text-white`}
    >
      <body className="min-h-screen bg-[#E8E8EA] text-[#111113] flex flex-col antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
