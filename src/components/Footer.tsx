"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          
          {/* Brand & Contact */}
          <div className="md:col-span-2">
            <Link href="/" className="text-white/90 font-medium tracking-tight text-xl mb-6 block">
              SONY
            </Link>
            <p className="text-white/50 text-sm max-w-sm mb-6 leading-relaxed">
              Experience the pinnacle of acoustic engineering and adaptive noise cancellation with the new WH-1000XM6.
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-white/40 text-xs uppercase tracking-widest font-mono">Contact Us</span>
              <a 
                href="mailto:nisanthk38@gmail.com" 
                className="text-white/50 hover:text-sonyBlue transition-colors font-medium text-sm"
              >
                nisanthk38@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/90 font-medium mb-6">Product</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/#overview" className="text-white/50 hover:text-white transition-colors text-sm">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/#technology" className="text-white/50 hover:text-white transition-colors text-sm">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/speaker" className="text-white/50 hover:text-white transition-colors text-sm">
                  Inside the Speaker
                </Link>
              </li>
              <li>
                <Link href="#specs" className="text-white/50 hover:text-white transition-colors text-sm">
                  Specifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Support */}
          <div>
            <h4 className="text-white/90 font-medium mb-6">Support</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-white/50 hover:text-white transition-colors text-sm">
                  Product Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/50 hover:text-white transition-colors text-sm">
                  Manuals & Warranty
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/50 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/50 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-white/40 text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} Sony Corporation. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-white/40 text-xs">Built for demonstration purposes.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
