import CanvasSequence from "@/components/CanvasSequence";
import Navbar from "@/components/Navbar";
import StoryBeats from "@/components/StoryBeats";
import FeatureSections from "@/components/FeatureSections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-background text-foreground min-h-screen selection:bg-sonyBlue/30">
      <Navbar />

      {/* 
        PRODUCT HERO HEADER
        A clean, non-sticky product header before the scrollytelling begins.
      */}
      <div className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto text-center flex flex-col items-center">
        <span className="text-sonyBlue font-semibold tracking-wider text-sm uppercase mb-4">New Release</span>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6">
          Sony WH-1000XM6
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mb-8">
          The pinnacle of noise cancelling. Re-engineered from the inside out.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors">
            Pre-order
          </button>
          <button className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
            Watch the film
          </button>
        </div>
      </div>
      
      {/* 
        SECTION 1: Headphone Explosion 
        This wrapper creates the scrollable area. It is 500vh tall to allow scrolling through 5 sections. 
      */}
      <div className="relative h-[500vh]">
        {/* The pinned canvas sequence. Set to contain so it doesn't stretch edge-to-edge */}
        <CanvasSequence 
          frameCount={240} 
          sequencePath="/sequence/" 
          objectFit="contain"
          scale={1.15}
        />
        {/* The text overlays that fade in and out at different scroll positions */}
        <StoryBeats />
      </div>

      {/* 
        SECTION 2: Technology & Noise Cancelling Feature Blocks
      */}
      <FeatureSections />

      <Footer />

    </main>
  );
}
