"use client";

import CanvasSequence from "@/components/CanvasSequence";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90 mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white to-sonyCyan">
          {title}
        </h2>
        <p className="text-xl md:text-2xl font-medium tracking-tight text-white/80 mb-6">
          {subtitle}
        </p>
        <p className="text-lg text-white/50 leading-relaxed">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default function SpeakerPage() {
  return (
    <main className="bg-background text-foreground min-h-screen selection:bg-sonyBlue/30">
      <Navbar />
      
      {/* 
        Split screen layout: 
        Left side scrolls (5 screens worth of content).
        Right side is sticky and holds the canvas sequence.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">
        
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
                  Scroll to discover the acoustic engineering inside the WH-1000XM6.
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
                <button className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-sonyBlue/80 to-sonyCyan/80 hover:from-sonyBlue hover:to-sonyCyan shadow-[0_0_30px_rgba(0,214,255,0.3)] transition-all">
                  Experience WH-1000XM6
                </button>
             </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN (Sticky canvas) */}
        <div className="relative h-[500vh] bg-[#020202]">
          {/* 
            The canvas automatically provides its own sticky wrapper.
            By placing it directly in the 500vh container, its scroll target becomes 500vh tall!
          */}
          <CanvasSequence frameCount={240} sequencePath="/speaker-sequence/" />
        </div>

      </div>
    </main>
  );
}
