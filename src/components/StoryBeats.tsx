"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

// High-tech targeting reticle overlay for NIX style
const TechHUD = () => (
  <div className="absolute inset-0 pointer-events-none opacity-20 hidden md:block">
    <div className="absolute top-4 left-4 border-t-2 border-l-2 border-nixCyan w-8 h-8" />
    <div className="absolute top-4 right-4 border-t-2 border-r-2 border-nixCyan w-8 h-8" />
    <div className="absolute bottom-4 left-4 border-b-2 border-l-2 border-nixCyan w-8 h-8" />
    <div className="absolute bottom-4 right-4 border-b-2 border-r-2 border-nixCyan w-8 h-8" />
    <div className="absolute top-1/2 left-0 w-4 border-t border-nixBlue" />
    <div className="absolute top-1/2 right-0 w-4 border-t border-nixBlue" />
  </div>
);

// Reusable text block component with scroll-triggered animations
const StoryBlock = ({
  children,
  align = "center",
  showHud = false,
  calloutLines = null,
  mobilePosition = "bottom",
}: {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  showHud?: boolean;
  calloutLines?: React.ReactNode;
  mobilePosition?: "bottom" | "top" | "center";
}) => {
  return (
    <div className={cn(
      "h-screen w-full flex flex-col px-4 md:px-24 relative",
      // Desktop alignment
      "md:justify-center",
      align === "left" && "md:items-start md:text-left",
      align === "center" && "md:items-center md:text-center",
      align === "right" && "md:items-end md:text-right",
      // Mobile: always centered horizontally, position cards at bottom/top to leave room for the explosion
      "items-center text-center",
      mobilePosition === "bottom" && "justify-end pb-8 md:pb-0",
      mobilePosition === "top" && "justify-start pt-20 md:pt-0",
      mobilePosition === "center" && "justify-center",
    )}>
      {calloutLines}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ margin: "-20% 0px -20% 0px", once: false }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "max-w-2xl relative",
          // Desktop: hard-edge tech look
          "md:bg-black/30 md:backdrop-blur-xl md:p-8 lg:p-12 md:rounded-none md:border md:border-white/10",
          "md:shadow-[0_0_50px_rgba(0,80,255,0.05)]",
          "md:before:absolute md:before:inset-0 md:before:border-[0.5px] md:before:border-nixCyan/20 md:before:scale-[1.02]",
          // Mobile: compact glassmorphic card
          "bg-black/50 backdrop-blur-xl p-5 rounded-2xl border border-white/10",
          "md:rounded-none",
        )}
      >
        {showHud && <TechHUD />}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default function StoryBeats() {
  return (
    // We use absolute inset-0 to lay it exactly over the 500vh container.
    // The inner content will just naturally stack to fill 500vh (5 x 100vh sections).
    <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">
      
      {/* 0-15%: HERO - Note: We added a new static hero above the canvas, so this is now the first scroll step */}
      <StoryBlock align="center" showHud mobilePosition="bottom">
        <div className="text-nixCyan font-mono text-xs md:text-sm tracking-[0.3em] mb-3 md:mb-4 uppercase">System Initialization</div>
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold tracking-tighter text-white/90 mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
          Acoustic Engineering <br/> Deconstructed.
        </h1>
        <p className="text-sm md:text-lg text-white/50 max-w-lg mx-auto leading-relaxed">
          Explore the masterclass hardware inside the NIX Sonic Pro.
        </p>
      </StoryBlock>

      {/* 15-40%: ENGINEERING REVEAL */}
      <StoryBlock 
        align="left" 
        showHud
        mobilePosition="bottom"
        calloutLines={
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "30%" }}
            className="hidden lg:block absolute top-1/2 left-[30%] h-[1px] bg-gradient-to-r from-nixCyan to-transparent -translate-y-1/2"
          />
        }
      >
        <div className="text-nixBlue font-mono text-xs tracking-widest mb-3 md:mb-4 uppercase flex items-center gap-2 justify-center md:justify-start">
          <span className="w-2 h-2 rounded-full bg-nixBlue animate-pulse" /> Core Architecture
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white/90 mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white to-nixBlue">
          Precision-engineered for silence.
        </h2>
        <div className="space-y-3 md:space-y-4 text-white/60 text-sm md:text-lg leading-relaxed max-w-md">
          <p>
            Custom drivers, sealed acoustic chambers, and optimized airflow deliver studio-grade clarity.
          </p>
        </div>
      </StoryBlock>

      {/* 40-65%: NOISE CANCELLING */}
      <StoryBlock 
        align="right"
        showHud
        mobilePosition="bottom"
        calloutLines={
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "30%" }}
            className="hidden lg:block absolute top-1/3 right-[30%] h-[1px] bg-gradient-to-l from-nixCyan to-transparent"
          />
        }
      >
        <div className="text-nixCyan font-mono text-xs tracking-widest mb-3 md:mb-4 uppercase flex items-center justify-center md:justify-end gap-2">
          Processor V2 <span className="w-2 h-2 rounded-full bg-nixCyan animate-pulse" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white/90 mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-bl from-white to-nixCyan">
          Adaptive noise cancelling.
        </h2>
        <div className="space-y-3 md:space-y-4 text-white/60 text-sm md:text-lg leading-relaxed max-w-md">
          <p>Multi-microphone array listens in every direction, analyzing ambient noise 100,000 times per second.</p>
        </div>
      </StoryBlock>

      {/* 65-85%: SOUND & UPSCALING */}
      <StoryBlock align="left" showHud mobilePosition="bottom">
        <div className="text-white/40 font-mono text-xs tracking-widest mb-3 md:mb-4 uppercase">
          DSEE Extreme Analysis
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white/90 mb-4 md:mb-6">
          Immersive, lifelike sound.
        </h2>
        <div className="space-y-3 md:space-y-4 text-white/60 text-sm md:text-lg leading-relaxed max-w-md">
          <p>
            AI-enhanced upscaling restores clarity to compressed audio, so every note feels alive.
          </p>
        </div>
      </StoryBlock>

      {/* 85-100%: REASSEMBLY & CTA */}
      <StoryBlock align="center" mobilePosition="center">
        <div className="pointer-events-auto">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white/90 mb-3 md:mb-4">
            Hear everything.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nixBlue to-nixCyan">
              Feel nothing else.
            </span>
          </h2>
          <p className="text-base md:text-xl text-white/60 mb-8 md:mb-10">
            NIX Sonic Pro. Designed for focus, crafted for comfort.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Link 
              href="/prebook"
              className={cn(
                "px-6 md:px-8 py-3 md:py-4 font-semibold text-black bg-white text-sm md:text-base",
                "hover:bg-white/90 text-center",
                "transition-all duration-300 scale-100 hover:scale-105 active:scale-95"
              )}
            >
              Pre-order - $399
            </Link>
            <a href="#specs" className="text-white/60 hover:text-white/90 transition-colors font-medium underline underline-offset-4 text-sm md:text-base">
              See full specs
            </a>
          </div>
        </div>
      </StoryBlock>

    </div>
  );
}
