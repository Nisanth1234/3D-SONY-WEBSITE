"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import Link from "next/link";

const techData = [
  {
    tag: "Processor",
    title: "V2 Integrated Processor",
    stat: "8x",
    statLabel: "faster processing",
    desc: "The next-generation V2 chip handles noise cancelling, audio upscaling, and spatial audio in real time with industry-leading power efficiency.",
    gradient: "from-nixBlue to-nixCyan",
  },
  {
    tag: "Audio",
    title: "LDAC™ Codec",
    stat: "990",
    statLabel: "kbps transmission",
    desc: "Transmit approximately three times more data than conventional Bluetooth, for premium wireless Hi-Res Audio that's virtually indistinguishable from wired.",
    gradient: "from-nixCyan to-emerald-400",
  },
  {
    tag: "Battery",
    title: "40-Hour Battery",
    stat: "40h",
    statLabel: "playtime",
    desc: "Industry-leading battery life with quick charge — 3 minutes of charging gives you 3 hours of playback. USB-C PD fast charging supported.",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    tag: "Comfort",
    title: "Ultralight Design",
    stat: "250g",
    statLabel: "featherweight",
    desc: "Redesigned headband distributes pressure evenly with soft-fit leather cushions and an ergonomic swivel mechanism for all-day wear.",
    gradient: "from-violet-400 to-fuchsia-500",
  },
];

const specs = [
  { label: "Driver Unit", value: "30mm" },
  { label: "Frequency Response", value: "4Hz – 40,000Hz" },
  { label: "Impedance", value: "16Ω (1kHz)" },
  { label: "Bluetooth", value: "5.3" },
  { label: "Codec Support", value: "SBC, AAC, LDAC, LC3" },
  { label: "ANC Mics", value: "8 (4 per ear)" },
  { label: "Battery", value: "40 hrs (ANC On)" },
  { label: "Quick Charge", value: "3 min → 3 hrs" },
  { label: "Weight", value: "250g" },
  { label: "USB", value: "Type-C (PD)" },
  { label: "Multipoint", value: "3 devices" },
  { label: "Water Resistance", value: "IPX4" },
];

// Animated counter component
const AnimatedStat = ({ value, label, gradient }: { value: string; label: string; gradient: string }) => (
  <div className="mb-6">
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn("text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r", gradient)}
    >
      {value}
    </motion.span>
    <p className="text-white/40 text-sm mt-1 font-mono tracking-widest uppercase">{label}</p>
  </div>
);

export default function TechShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={containerRef} className="relative bg-[#030308] overflow-hidden py-32 md:py-48">
      {/* Animated background grid */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,214,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,214,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }} />
      </motion.div>

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-nixBlue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-nixCyan/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 md:mb-32"
        >
          <span className="text-nixCyan/60 font-mono text-xs tracking-[0.4em] uppercase mb-6 block">Latest Innovation</span>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6">
            Cutting-Edge<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nixBlue via-nixCyan to-emerald-400">
              Technology.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto">
            Every component meticulously engineered to deliver an experience that defies expectation.
          </p>
        </motion.div>

        {/* Tech cards — alternating layout */}
        <div className="space-y-16 md:space-y-32 mb-32 md:mb-48">
          {techData.map((item, i) => (
            <motion.div
              key={item.tag}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center",
                i % 2 === 1 && "md:direction-rtl"
              )}
            >
              {/* Stat side */}
              <div className={cn("order-2", i % 2 === 1 ? "md:order-2" : "md:order-1")}>
                <span className="text-white/30 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
                  0{i + 1} — {item.tag}
                </span>
                <AnimatedStat value={item.stat} label={item.statLabel} gradient={item.gradient} />
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white/90 mb-4">
                  {item.title}
                </h3>
                <p className="text-white/50 leading-relaxed max-w-md text-base md:text-lg">
                  {item.desc}
                </p>
              </div>

              {/* Visual side — abstract tech visual */}
              <div className={cn("order-1", i % 2 === 1 ? "md:order-1" : "md:order-2")} data-cursor="hover">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className={cn(
                    "relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden",
                    "bg-gradient-to-br from-[#0A0A15] to-[#080812]",
                    "border border-white/5 group"
                  )}
                >
                  {/* Animated inner glow */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className={cn("absolute inset-0 m-auto w-3/4 h-3/4 rounded-full blur-[80px]", `bg-gradient-to-br ${item.gradient}`)}
                    style={{ opacity: 0.15 }}
                  />

                  {/* Tech grid overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "30px 30px",
                  }} />

                  {/* Center element */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className={cn(
                        "w-32 h-32 md:w-48 md:h-48 rounded-full border border-white/10",
                        "flex items-center justify-center"
                      )}
                    >
                      <div className={cn("w-20 h-20 md:w-28 md:h-28 rounded-full border border-dashed", `border-${item.gradient.split(' ')[0].replace('from-', '')}/30`)} />
                    </motion.div>
                    <span className={cn(
                      "absolute text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-br",
                      item.gradient
                    )}>
                      {item.stat}
                    </span>
                  </div>

                  {/* Corner markers */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/20" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specs table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          id="specs"
        >
          <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/90 text-center mb-4">
            Full Specifications
          </h3>
          <p className="text-white/40 text-center mb-16 text-lg">Every detail, quantified.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            {specs.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="bg-[#0A0A0C] p-6 md:p-8 group hover:bg-[#0C0C12] transition-colors duration-300"
                data-cursor="hover"
              >
                <p className="text-white/30 text-xs font-mono tracking-widest uppercase mb-3">{s.label}</p>
                <p className="text-white/90 text-xl md:text-2xl font-semibold tracking-tight">{s.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-nixBlue via-nixCyan to-nixBlue rounded-2xl opacity-20 blur-xl" />
            <div className="relative bg-[#0A0A12] border border-white/10 rounded-2xl p-12 md:p-16 max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">
                Ready to experience<br />the future of audio?
              </h3>
              <p className="text-white/50 mb-8 text-lg max-w-lg mx-auto">
                Pre-order now and be among the first to own the most advanced noise cancelling headphones ever made.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/prebook"
                  className={cn(
                    "px-8 py-4 rounded-full font-semibold text-black bg-white",
                    "hover:bg-white/90 hover:scale-105 active:scale-95",
                    "transition-all duration-300 text-center"
                  )}
                >
                  Pre-order — $399
                </Link>
                <button className={cn(
                  "px-8 py-4 rounded-full font-medium text-white",
                  "border border-nixCyan/30 hover:border-nixCyan/60",
                  "hover:shadow-[0_0_20px_rgba(0,214,255,0.15)]",
                  "transition-all duration-300"
                )}>
                  Compare Models
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
