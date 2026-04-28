"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Bento-style feature card
const FeatureCard = ({
  title,
  description,
  delay = 0,
  className,
  imageSrc,
  imageAlt,
}: {
  title: React.ReactNode;
  description: string;
  delay?: number;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "bg-[#0A0A0C] border border-white/5 rounded-3xl overflow-hidden relative group",
        "hover:border-white/10 transition-colors duration-500",
        className
      )}
    >
      {/* Optional Background Image */}
      {imageSrc && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={imageSrc}
            alt={imageAlt || "Feature image"}
            fill
            className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 mix-blend-screen"
          />
          {/* Gradient overlay so text remains readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/80 to-transparent" />
        </div>
      )}

      <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-end">
        <h3 className="text-2xl md:text-3xl font-bold text-white/90 mb-4 tracking-tight">
          {title}
        </h3>
        <p className="text-white/60 leading-relaxed max-w-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default function FeatureSections() {
  return (
    <div className="bg-[#050505] relative z-20 pb-32">
      
      {/* TECHNOLOGY SECTION */}
      <section id="technology" className="pt-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/90 mb-6">
            Technology.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nixBlue to-nixCyan">
              Rewriting the rules of sound.
            </span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl">
            Powered by our next-generation V2 Integrated Processor, the Sonic Pro delivers a paradigm shift in both acoustic precision and smart functionality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]">
          <FeatureCard 
            className="md:col-span-8 bg-gradient-to-br from-[#0A0A0C] to-[#0A1020]"
            title={<>V2 Integrated<br/>Processor</>}
            description="Unlocks the full potential of our HD Noise Cancelling Processor QN2e. It controls eight microphones to deliver unprecedented noise cancellation quality."
            delay={0.1}
            imageSrc="/img/v2_processor_chip.png"
            imageAlt="V2 Processor Chip glowing macro shot"
          />
          <FeatureCard 
            className="md:col-span-4"
            title="DSEE Extreme™"
            description="Edge-AI dynamically restores high-frequency sound lost in compression, recognizing instruments, genres, and individual elements in real time."
            delay={0.2}
            imageSrc="/img/dsee_extreme.png"
            imageAlt="Audio upscaling visualization"
          />
          <FeatureCard 
            className="md:col-span-4"
            title="Spatial Audio"
            description="360 Reality Audio adapts to the unique shape of your ear, placing you precisely in the center of the mixing studio."
            delay={0.3}
            imageSrc="/img/spatial_audio_waves.png"
            imageAlt="Immersive Spatial Audio Sound Waves"
          />
          <FeatureCard 
            className="md:col-span-8 bg-gradient-to-tl from-[#0A0A0C] to-[#051515]"
            title={<>Carbon Fiber<br/>Composite Diaphragm</>}
            description="Ultra-rigid and incredibly lightweight. The newly designed 30mm driver prevents high-frequency distortion and delivers deep, punchy bass."
            delay={0.4}
            imageSrc="/img/carbon_fiber_diaphragm.png"
            imageAlt="Carbon Fiber Headphone Diaphragm"
          />
        </div>
      </section>

      {/* NOISE CANCELLING SECTION */}
      <section id="noise-cancelling" className="pt-40 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/90 mb-6">
            Noise Cancelling.<br/>
            <span className="text-white/40">Absolute silence.</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl">
            Whether you’re on a long-haul flight or in a bustling cafe, the Sonic Pro shuts out the world, analyzing and adapting to your environment thousands of times per second.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            className="min-h-[350px]"
            title="8 Microphone Array"
            description="Four microphones on each ear cup capture ambient noise with surgical precision, drastically reducing high-frequency sounds."
            delay={0.1}
            imageSrc="/img/noise_cancelling_mic.png"
            imageAlt="High precision noise cancelling microphone mesh"
          />
          <FeatureCard 
            className="min-h-[350px]"
            title="Auto NC Optimizer"
            description="Automatically optimizes noise cancelling based on your wearing conditions and atmospheric pressure, perfect for flying."
            delay={0.2}
            imageSrc="/img/auto_nc_optimizer.png"
            imageAlt="Abstract futuristic visualization of atmospheric pressure analysis"
          />
          <FeatureCard 
            className="min-h-[350px]"
            title="Wind Noise Reduction"
            description="A newly developed wind noise reduction structure surrounding the mic minimizes wind disruption for crystal-clear calls and silence."
            delay={0.3}
            imageSrc="/img/wind_noise_reduction.png"
            imageAlt="Sleek aerodynamic microphone structure"
          />
        </div>
      </section>

    </div>
  );
}
