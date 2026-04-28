"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { scrollY } = useScroll();
  
  // Fade in after 50px of scrolling
  const opacity = useTransform(scrollY, [0, 50], [0, 1]);
  // Slight blur effect increase
  const backdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);

  return (
    <motion.header
      style={{
        opacity,
        backdropFilter: backdropBlur,
      }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "h-14 flex items-center justify-between px-6 md:px-12",
        "bg-[#050505]/75 border-b border-white/5 transition-all"
      )}
    >
      {/* Left: Logo */}
      <div className="flex-1">
        <Link href="/" className="text-white/90 font-medium tracking-tight text-sm">
          SONY
        </Link>
      </div>

      {/* Center: Links */}
      <nav className="hidden md:flex flex-1 justify-center gap-8">
        <Link href="/#overview" className="text-white/60 hover:text-white/90 text-xs transition-colors">
          Overview
        </Link>
        <Link href="/#technology" className="text-white/60 hover:text-white/90 text-xs transition-colors">
          Technology
        </Link>
        <Link href="/#noise-cancelling" className="text-white/60 hover:text-white/90 text-xs transition-colors">
          Noise Cancelling
        </Link>
        <Link href="/speaker" className="text-white/60 hover:text-white/90 text-xs transition-colors font-medium">
          Inside the Speaker
        </Link>
      </nav>

      {/* Right: CTA */}
      <div className="flex-1 flex justify-end items-center gap-4">
        <Link
          href="#buy"
          className="text-white/60 hover:text-white/90 text-xs hidden sm:block"
        >
          Buy
        </Link>
        <button className={cn(
          "px-4 py-1.5 rounded-full text-xs font-medium text-white",
          "bg-gradient-to-r from-sonyBlue/20 to-sonyCyan/20",
          "border border-sonyCyan/30 hover:border-sonyCyan/60 hover:shadow-[0_0_15px_rgba(0,214,255,0.2)]",
          "transition-all duration-300"
        )}>
          Experience WH‑1000XM6
        </button>
      </div>
    </motion.header>
  );
}
