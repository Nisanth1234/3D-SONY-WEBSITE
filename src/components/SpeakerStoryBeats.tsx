"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const StoryBlock = ({
  children,
  align = "center",
}: {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
}) => {
  return (
    <div className={cn(
      "h-screen w-full flex flex-col justify-center px-6 md:px-24",
      align === "left" && "items-start text-left",
      align === "center" && "items-center text-center",
      align === "right" && "items-end text-right"
    )}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-20% 0px -20% 0px", once: false }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "max-w-2xl",
          "bg-black/20 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/5",
          "shadow-[0_0_50px_rgba(0,214,255,0.05)]"
        )}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default function SpeakerStoryBeats() {
  return (
    <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">
      
      {/* 0-20%: HERO */}
      <StoryBlock align="center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90 mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
          The Heart of the Sound
        </h2>
        <p className="text-xl md:text-2xl font-medium tracking-tight text-white/80 mb-6">
          Custom-designed 30mm dynamic drivers.
        </p>
        <p className="text-lg text-white/50 max-w-lg mx-auto leading-relaxed">
          Engineered from the ground up to deliver deeper bass and pristine vocals.
        </p>
      </StoryBlock>

      {/* 20-50%: MAGNETS & COILS */}
      <StoryBlock align="left">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white/90 mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white to-sonyCyan">
          Power in precision.
        </h2>
        <div className="space-y-4 text-white/60 text-lg leading-relaxed max-w-md">
          <p>
            High-rigidity carbon fiber domes prevent distortion, even at maximum volume.
          </p>
          <p>
            Neodymium magnets and lightweight voice coils respond instantly to every transient.
          </p>
        </div>
      </StoryBlock>

      {/* 50-80%: ACOUSTIC CHAMBER */}
      <StoryBlock align="right">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white/90 mb-6 bg-clip-text text-transparent bg-gradient-to-bl from-white to-sonyBlue">
          Optimized airflow.
        </h2>
        <div className="space-y-4 text-white/60 text-lg leading-relaxed max-w-md">
          <p>Carefully tuned acoustic chambers guide sound waves with zero turbulence.</p>
          <p>Every subtle nuance of the original recording is preserved.</p>
        </div>
      </StoryBlock>

      {/* 80-100%: CONCLUSION */}
      <StoryBlock align="center">
        <div className="pointer-events-auto">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white/90 mb-4">
            Hear the difference.
          </h2>
          <p className="text-xl text-white/60 mb-10">
            A masterclass in acoustic engineering.
          </p>
        </div>
      </StoryBlock>

    </div>
  );
}
