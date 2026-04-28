"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#overview", label: "Overview" },
  { href: "/#technology", label: "Technology" },
  { href: "/#noise-cancelling", label: "Noise Cancelling" },
  { href: "/speaker", label: "Inside the Speaker" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Fade in after 50px of scrolling
  const opacity = useTransform(scrollY, [0, 50], [0, 1]);
  // Slight blur effect increase
  const backdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
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
            NIX
          </Link>
        </div>

        {/* Center: Links — desktop only */}
        <nav className="hidden md:flex flex-1 justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/60 hover:text-white/90 text-xs transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: CTA + Hamburger */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <Link
            href="/prebook"
            className="text-white/60 hover:text-white/90 text-xs hidden sm:block"
          >
            Buy
          </Link>
          <Link
            href="/prebook"
            className={cn(
              "px-4 py-1.5 rounded-full text-xs font-medium text-white hidden md:block",
              "bg-gradient-to-r from-nixBlue/20 to-nixCyan/20",
              "border border-nixCyan/30 hover:border-nixCyan/60 hover:shadow-[0_0_15px_rgba(0,214,255,0.2)]",
              "transition-all duration-300 text-center"
            )}
          >
            Experience Sonic Pro
          </Link>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden relative w-7 h-7 flex flex-col items-center justify-center gap-[5px] group"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={cn(
                "block w-5 h-[1.5px] bg-white/80 rounded-full transition-all duration-300 origin-center",
                mobileOpen && "translate-y-[6.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block w-5 h-[1.5px] bg-white/80 rounded-full transition-all duration-300",
                mobileOpen && "opacity-0 scale-x-0"
              )}
            />
            <span
              className={cn(
                "block w-5 h-[1.5px] bg-white/80 rounded-full transition-all duration-300 origin-center",
                mobileOpen && "-translate-y-[6.5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={cn(
              "fixed inset-0 z-40 pt-14 md:hidden",
              "bg-[#050505]/95 backdrop-blur-xl"
            )}
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8 -mt-14">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-white/80 hover:text-white text-lg font-light tracking-wide transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * navLinks.length, duration: 0.3 }}
                className="mt-4"
              >
                <Link
                  href="/prebook"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-sm font-medium text-white",
                    "bg-gradient-to-r from-nixBlue/30 to-nixCyan/30",
                    "border border-nixCyan/40 hover:border-nixCyan/70",
                    "hover:shadow-[0_0_20px_rgba(0,214,255,0.25)]",
                    "transition-all duration-300"
                  )}
                >
                  Experience Sonic Pro
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
