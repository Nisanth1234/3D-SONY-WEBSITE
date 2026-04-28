"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// High-tech targeting reticle overlay for Sony style
const TechHUD = () => (
  <div className="absolute inset-0 pointer-events-none opacity-20 hidden md:block">
    <div className="absolute top-4 left-4 border-t-2 border-l-2 border-sonyCyan w-8 h-8" />
    <div className="absolute top-4 right-4 border-t-2 border-r-2 border-sonyCyan w-8 h-8" />
    <div className="absolute bottom-4 left-4 border-b-2 border-l-2 border-sonyCyan w-8 h-8" />
    <div className="absolute bottom-4 right-4 border-b-2 border-r-2 border-sonyCyan w-8 h-8" />
    <div className="absolute top-1/2 left-0 w-4 border-t border-sonyBlue" />
    <div className="absolute top-1/2 right-0 w-4 border-t border-sonyBlue" />
  </div>
);

// Reusable text block component with scroll-triggered animations
const StoryBlock = ({
  children,
  align = "center",
  showHud = false,
  calloutLines = null,
}: {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  showHud?: boolean;
  calloutLines?: React.ReactNode;
}) => {
  return (
    <div className={cn(
      "h-screen w-full flex flex-col justify-center px-6 md:px-24 relative",
      align === "left" && "items-start text-left",
      align === "center" && "items-center text-center",
      align === "right" && "items-end text-right"
    )}>
      {calloutLines}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ margin: "-20% 0px -20% 0px", once: false }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "max-w-2xl relative",
          "bg-black/30 backdrop-blur-xl p-8 md:p-12 rounded-none border border-white/10",
          // Sony hard-edge tech look instead of rounded
          "shadow-[0_0_50px_rgba(0,80,255,0.05)]",
          "before:absolute before:inset-0 before:border-[0.5px] before:border-sonyCyan/20 before:scale-[1.02]",
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
      <StoryBlock align="center" showHud>
        <div className="text-sonyCyan font-mono text-sm tracking-[0.3em] mb-4 uppercase">System Initialization</div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90 mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
          Acoustic Engineering <br/> Deconstructed.
        </h1>
        <p className="text-lg text-white/50 max-w-lg mx-auto leading-relaxed">
          Explore the masterclass hardware inside the WH-1000XM6.
        </p>
      </StoryBlock>

      {/* 15-40%: ENGINEERING REVEAL */}
      <StoryBlock 
        align="left" 
        showHud
        calloutLines={
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "30%" }}
            className="hidden lg:block absolute top-1/2 left-[30%] h-[1px] bg-gradient-to-r from-sonyCyan to-transparent -translate-y-1/2"
          />
        }
      >
        <div className="text-sonyBlue font-mono text-xs tracking-widest mb-4 uppercase flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sonyBlue animate-pulse" /> Core Architecture
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white/90 mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white to-sonyBlue">
          Precision-engineered for silence.
        </h2>
        <div className="space-y-4 text-white/60 text-lg leading-relaxed max-w-md">
          <p>
            Custom drivers, sealed acoustic chambers, and optimized airflow deliver studio-grade clarity.
          </p>
        </div>
      </StoryBlock>

      {/* 40-65%: NOISE CANCELLING */}
      <StoryBlock 
        align="right"
        showHud
        calloutLines={
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "30%" }}
            className="hidden lg:block absolute top-1/3 right-[30%] h-[1px] bg-gradient-to-l from-sonyCyan to-transparent"
          />
        }
      >
        <div className="text-sonyCyan font-mono text-xs tracking-widest mb-4 uppercase flex items-center justify-end gap-2">
          Processor V2 <span className="w-2 h-2 rounded-full bg-sonyCyan animate-pulse" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white/90 mb-6 bg-clip-text text-transparent bg-gradient-to-bl from-white to-sonyCyan">
          Adaptive noise cancelling.
        </h2>
        <div className="space-y-4 text-white/60 text-lg leading-relaxed max-w-md">
          <p>Multi-microphone array listens in every direction, analyzing ambient noise 100,000 times per second.</p>
        </div>
      </StoryBlock>

      {/* 65-85%: SOUND & UPSCALING */}
      <StoryBlock align="left" showHud>
        <div className="text-white/40 font-mono text-xs tracking-widest mb-4 uppercase">
          DSEE Extreme Analysis
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white/90 mb-6">
          Immersive, lifelike sound.
        </h2>
        <div className="space-y-4 text-white/60 text-lg leading-relaxed max-w-md">
          <p>
            AI-enhanced upscaling restores clarity to compressed audio, so every note feels alive.
          </p>
        </div>
      </StoryBlock>

      {/* 85-100%: REASSEMBLY & CTA */}
      <StoryBlock align="center">
        <div className="pointer-events-auto">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white/90 mb-4">
            Hear everything.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sonyBlue to-sonyCyan">
              Feel nothing else.
            </span>
          </h2>
          <p className="text-xl text-white/60 mb-10">
            WH‑1000XM6. Designed for focus, crafted for comfort.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className={cn(
              "px-8 py-4 font-semibold text-black bg-white",
              "hover:bg-white/90",
              "transition-all duration-300 scale-100 hover:scale-105 active:scale-95"
            )}>
              Add to Cart - $399
            </button>
            <a href="#specs" className="text-white/60 hover:text-white/90 transition-colors font-medium underline underline-offset-4">
              See full specs
            </a>
          </div>
        </div>
      </StoryBlock>

    </div>
  );
}
