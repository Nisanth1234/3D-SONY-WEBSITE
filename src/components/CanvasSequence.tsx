"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

interface CanvasSequenceProps {
  frameCount: number;
  sequencePath?: string;
  scrollContainerRef?: React.RefObject<HTMLDivElement>;
  objectFit?: "cover" | "contain";
  scale?: number;
}

export default function CanvasSequence({ 
  frameCount = 240, 
  sequencePath = "/sequence/",
  scrollContainerRef,
  objectFit = "cover",
  scale = 1.0
}: CanvasSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll specifically for the container if provided, else use global body scroll
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef || containerRef,
    offset: ["start start", "end end"]
  });

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Pad to 3 digits, e.g., 001, 002
      const frameNum = i.toString().padStart(3, "0");
      // Use the sequencePath prop
      img.src = `${sequencePath}ezgif-frame-${frameNum}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          // All images loaded
          setImages(loadedImages);
          // Draw first frame immediately
          if (canvasRef.current) {
            drawFrame(loadedImages[0]);
          }
        }
      };
      loadedImages.push(img);
    }
  }, [frameCount, sequencePath]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const drawFrame = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Use parent dimensions for the canvas to maintain crispness and fit into split-screens
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;

    // Calculate aspect ratio fit
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    
    // Choose cover or contain
    let ratio = objectFit === "cover" ? Math.max(hRatio, vRatio) : Math.min(hRatio, vRatio);
    ratio = ratio * scale; // Apply scaling factor to reduce size if requested

    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw the image scaled and centered
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }, [objectFit, scale]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    
    // Map scroll progress (0 to 1) to frame index (0 to frameCount - 1)
    const frameIndex = Math.min(
      frameCount - 1,
      Math.max(0, Math.floor(latest * frameCount))
    );
    
    requestAnimationFrame(() => {
      drawFrame(images[frameIndex]);
    });
  });

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (images.length > 0) {
        // Redraw current frame
        const latest = scrollYProgress.get();
        const frameIndex = Math.min(
          frameCount - 1,
          Math.max(0, Math.floor(latest * frameCount))
        );
        drawFrame(images[frameIndex]);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress, frameCount, objectFit, scale]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-background">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />
        
        {/* Optional: Loading overlay */}
        {images.length < frameCount && (
          <div className="absolute inset-0 flex items-center justify-center bg-background z-50 text-white/50 text-sm tracking-widest uppercase">
            Loading Experience...
          </div>
        )}
      </div>
    </div>
  );
}
