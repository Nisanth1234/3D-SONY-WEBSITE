"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import Link from "next/link";

const colors = [
  { id: "midnight", name: "Midnight Black", hex: "#0A0A0A", border: "border-white/20" },
  { id: "silver", name: "Platinum Silver", hex: "#D1D1D1", border: "border-black/10" },
  { id: "navy", name: "Deep Navy", hex: "#0A122A", border: "border-white/10" },
];

export default function PrebookPage() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "United States",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-nixBlue/30">
      <Navbar />

      <div className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Product Image & Selection */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="sticky top-24"
            >
              <span className="text-nixBlue font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Reservation</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                Pre-order <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-nixBlue to-nixCyan">
                  Sonic Pro
                </span>
              </h1>
              
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#0A0A12] to-[#050508] border border-white/5 mb-8 group">
                {/* Product placeholder visual - using a CSS representation or gradient */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    key={selectedColor.id}
                    initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-3/4 h-3/4"
                  >
                    {/* Abstract headphone visual using SVG/Divs */}
                    <div 
                      className="absolute inset-0 rounded-full blur-[100px] opacity-20"
                      style={{ backgroundColor: selectedColor.hex }}
                    />
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-48 h-64 border-8 rounded-[40px] relative" style={{ borderColor: selectedColor.hex }}>
                         <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-16 h-32 rounded-2xl" style={{ backgroundColor: selectedColor.hex }} />
                         <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-16 h-32 rounded-2xl" style={{ backgroundColor: selectedColor.hex }} />
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Corner detail */}
                <div className="absolute bottom-6 left-6">
                  <p className="text-white/40 text-xs font-mono tracking-widest uppercase mb-1">Colorway</p>
                  <p className="text-white font-medium">{selectedColor.name}</p>
                </div>
                <div className="absolute bottom-6 right-6 text-right">
                  <p className="text-white/40 text-xs font-mono tracking-widest uppercase mb-1">Price</p>
                  <p className="text-2xl font-bold text-white">$399.00</p>
                </div>
              </div>

              {/* Color Selection */}
              <div className="flex gap-4 mb-8">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "w-12 h-12 rounded-full border-2 transition-all duration-300",
                      selectedColor.id === color.id ? "border-nixCyan scale-110" : "border-transparent opacity-50 hover:opacity-100"
                    )}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-nixCyan/20 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-nixCyan" />
                  </div>
                  <p className="text-sm text-white/60">Ships starting June 15th, 2026</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-nixCyan/20 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-nixCyan" />
                  </div>
                  <p className="text-sm text-white/60">Includes exclusive pre-order carrying case</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#0A0A12] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Reserve yours.</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-nixCyan transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-nixCyan transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Country</label>
                      <select 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-nixCyan transition-colors appearance-none"
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                      >
                        <option value="United States" className="bg-[#0A0A12]">United States</option>
                        <option value="United Kingdom" className="bg-[#0A0A12]">United Kingdom</option>
                        <option value="Japan" className="bg-[#0A0A12]">Japan</option>
                        <option value="Germany" className="bg-[#0A0A12]">Germany</option>
                      </select>
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit"
                        className="w-full py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        Confirm Reservation
                      </button>
                      <p className="text-center text-[10px] text-white/30 mt-4 leading-relaxed">
                        By clicking confirm, you agree to our Terms of Service and Privacy Policy. No payment is required today. You will be notified via email when your unit is ready for purchase.
                      </p>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#0A0A12] border border-nixCyan/20 rounded-3xl p-12 text-center shadow-[0_0_50px_rgba(0,214,255,0.1)]"
                >
                  <div className="w-20 h-20 bg-nixCyan/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-10 h-10 text-nixCyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Reservation Confirmed.</h2>
                  <p className="text-white/50 mb-8">
                    Thank you, {formData.name.split(' ')[0]}. We've sent a confirmation email to <span className="text-white/80">{formData.email}</span>. 
                    You are now #2,842 in line for the NIX Sonic Pro.
                  </p>
                  <Link 
                    href="/"
                    className="inline-block px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
                  >
                    Back to Overview
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Guarantees */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <p className="text-white/90 font-medium text-sm mb-1">Price Guarantee</p>
                <p className="text-xs text-white/40">Locked in at $399 regardless of launch demand.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <p className="text-white/90 font-medium text-sm mb-1">Priority Delivery</p>
                <p className="text-xs text-white/40">First batch shipment guaranteed for pre-orders.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Footer minimal */}
      <footer className="py-12 border-t border-white/5 text-center mt-20">
         <p className="text-white/20 text-xs">© 2026 NIX Audio. All rights reserved.</p>
      </footer>
    </main>
  );
}
