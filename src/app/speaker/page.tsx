"use client";

import CanvasSequence from "@/components/CanvasSequence";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef } from "react";

const SpeakerBlock = ({
  title,
  subtitle,
  description,
  className
}: {
  title: React.ReactNode;
  subtitle: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={cn("h-screen flex flex-col justify-center px-8 md:px-16", className)}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-20% 0px -20% 0px", once: false }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl"
      >
        <div className="lg:bg-transparent bg-black/40 backdrop-blur-md lg:backdrop-blur-none rounded-2xl p-6 lg:p-0">
          <span className="text-nixBlue font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Inside the Sound</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90 mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white to-nixCyan">
            {title}
          </h2>
          <p className="text-xl md:text-2xl font-medium tracking-tight text-white/80 mb-6">
            {subtitle}
          </p>
          <p className="text-lg text-white/50 leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default function SpeakerPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-background text-foreground min-h-screen selection:bg-nixBlue/30">
      <Navbar />
      
      {/* ===== DESKTOP: Side-by-side split layout (lg+) ===== */}
      <div className="hidden lg:grid grid-cols-2 relative">
        
        {/* LEFT COLUMN (Scrollable text) */}
        <div className="relative z-10 bg-[#050505]">
          <div className="h-[100vh] flex flex-col justify-center px-8 md:px-16">
             <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
             >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                  The Heart of <br /> the Sound.
                </h1>
                <p className="text-xl text-white/60 max-w-lg">
                  Scroll to discover the acoustic engineering inside the Sonic Pro.
                </p>
             </motion.div>
          </div>

          <SpeakerBlock 
            title="Carbon Fiber Domes."
            subtitle="Power in precision."
            description="High-rigidity carbon fiber domes prevent distortion even at maximum volume, preserving every transient."
          />
          
          <SpeakerBlock 
            title="Neodymium Magnets."
            subtitle="Instantaneous response."
            description="Ultra-strong magnets and lightweight voice coils react instantly to dynamic shifts in the recording."
          />
          
          <SpeakerBlock 
            title="Acoustic Chambers."
            subtitle="Optimized airflow."
            description="Carefully tuned chambers guide sound waves with zero turbulence, preserving the subtle nuances of the original studio mix."
          />
          
          <div className="h-[100vh] flex flex-col justify-center px-8 md:px-16">
             <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
             >
                <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                  Hear the difference.
                </h2>
                <button className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-nixBlue/80 to-nixCyan/80 hover:from-nixBlue hover:to-nixCyan shadow-[0_0_30px_rgba(0,214,255,0.3)] transition-all">
                  Experience Sonic Pro
                </button>
             </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN (Sticky canvas) */}
        <div className="relative h-[500vh] bg-[#020202]">
          <CanvasSequence frameCount={240} sequencePath="/speaker-sequence/" />
        </div>

      </div>

      {/* ===== MOBILE: Overlay layout (<lg) ===== */}
      <div ref={scrollContainerRef} className="lg:hidden relative" style={{ height: "500vh" }}>
        
        {/* Canvas as full-screen sticky background */}
        <CanvasSequence 
          frameCount={240} 
          sequencePath="/speaker-sequence/" 
          objectFit="contain"
          scale={0.85}
        />

        {/* Text overlaid on top of the canvas */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          
          {/* Hero section */}
          <div className="h-screen flex flex-col justify-end pb-20 px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto"
            >
              <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-6 border border-white/5">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter text-white mb-3">
                  The Heart of<br /> the Sound.
                </h1>
                <p className="text-base text-white/60">
                  Scroll to discover the acoustic engineering inside the Sonic Pro.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Story beat 1: Carbon Fiber */}
          <div className="h-screen flex flex-col justify-end pb-20 px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-20% 0px -20% 0px", once: false }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto"
            >
              <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-6 border border-white/5">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white to-nixCyan mb-3">
                  Carbon Fiber Domes.
                </h2>
                <p className="text-sm sm:text-base font-medium text-white/80 mb-2">
                  Power in precision.
                </p>
                <p className="text-sm text-white/50 leading-relaxed">
                  High-rigidity carbon fiber domes prevent distortion even at maximum volume, preserving every transient.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Story beat 2: Neodymium */}
          <div className="h-screen flex flex-col justify-end pb-20 px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-20% 0px -20% 0px", once: false }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto"
            >
              <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-6 border border-white/5">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white to-nixCyan mb-3">
                  Neodymium Magnets.
                </h2>
                <p className="text-sm sm:text-base font-medium text-white/80 mb-2">
                  Instantaneous response.
                </p>
                <p className="text-sm text-white/50 leading-relaxed">
                  Ultra-strong magnets and lightweight voice coils react instantly to dynamic shifts in the recording.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Story beat 3: Acoustic Chambers */}
          <div className="h-screen flex flex-col justify-end pb-20 px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-20% 0px -20% 0px", once: false }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto"
            >
              <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-6 border border-white/5">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-bl from-white to-nixBlue mb-3">
                  Acoustic Chambers.
                </h2>
                <p className="text-sm sm:text-base font-medium text-white/80 mb-2">
                  Optimized airflow.
                </p>
                <p className="text-sm text-white/50 leading-relaxed">
                  Carefully tuned chambers guide sound waves with zero turbulence, preserving the subtle nuances of the original studio mix.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Conclusion */}
          <div className="h-screen flex flex-col justify-center items-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}
              className="text-center pointer-events-auto"
            >
              <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-white/5">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-white mb-4">
                  Hear the difference.
                </h2>
                <button className="px-6 py-3 rounded-full font-semibold text-white text-sm bg-gradient-to-r from-nixBlue/80 to-nixCyan/80 hover:from-nixBlue hover:to-nixCyan shadow-[0_0_30px_rgba(0,214,255,0.3)] transition-all">
                  Experience Sonic Pro
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </main>
  );
}
