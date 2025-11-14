'use client';
import React, { useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import GradientBackground from '@/components/ui/gradient-background';
import gsap from "gsap";

interface HeroProps {
  showLoading: boolean;
  showHero: boolean;
  showContent: boolean;
  onLoadingFinish: () => void;
}

export default function Hero({ showLoading, showHero, showContent, onLoadingFinish }: HeroProps) {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showLoading && heroTitleRef.current) {
      // Animate hero title
      gsap.fromTo(
        heroTitleRef.current,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power2.out",
          onComplete: () => {
            // Trigger content to show after hero animation
            setTimeout(() => onLoadingFinish(), 200);
          }
        }
      );
    }
  }, [showLoading, onLoadingFinish]);

  useEffect(() => {
    if (showContent && subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.2 }
      );
    }
  }, [showContent]);

return (
  <main className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center">
    {/* Glassmorphism container */}
    <div className="glass-section w-full h-[95vh] relative max-w-[95vw] mx-auto mt-1 md:mt-4 mb-1 md:mb-4 rounded-xl md:rounded-2xl overflow-hidden backdrop-blur-xl flex flex-col px-4 md:px-8 py-6 md:py-8">
      
      {/* GradientBackground animated background inside glassmorphism */}
      <div className="absolute inset-0 w-full h-full rounded-xl md:rounded-2xl">
        <GradientBackground />
      </div>
      
      <section className="hero flex flex-col pt-[8em] sm:pt-[9em] md:pt-[6em] flex-1 w-full px-4 md:px-[2.5em] relative z-10">
        <div className="mb-auto">
          <h1
            ref={heroTitleRef}
            className="relative uppercase font-black left-[-0.05em] text-[15vw] sm:text-[18vw] md:text-[20vw] tracking-[-0.04em] leading-[0.9] select-none text-black mb-6 md:mb-8"
            style={{ opacity: showHero ? 1 : 0 }}
          >
            ROI<span className="align-super text-[0.5em] ml-1">™</span>
          </h1>
          {showContent && (
            <div
              className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8 mt-4 md:mt-6"
              ref={subtitleRef}
            >
              <p className="text-lg sm:text-xl md:text-[2.5vw] md:w-[50%] pp-neue-world-font font-normal select-none text-black leading-snug">
                Strategy, design, and campaigns for ambitious companies.
              </p>
              <p className="text-[16px] md:text-[18px] font-medium hidden md:flex select-none text-black">
                {"{"}Scroll{"}"}
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-grey/40 via-black/20 to-white/10 rounded-xl md:rounded-2xl pointer-events-none"></div>

      {/* Footer Texts */}
      <motion.div 
        className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-3 md:gap-0 px-4 md:px-[2.5em] pb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="text-black text-[10px] sm:text-xs max-w-lg text-center md:text-left leading-relaxed">
          Performance marketing specialists creating, optimizing & scaling <br className="hidden md:block" />
          <span className="font-bold">ROI-focused</span> campaigns for sustainable growth
        </div>
        <div className="text-black text-[10px] sm:text-xs text-center md:text-right leading-relaxed">
          218-B ,Trade Center,South Tukoganj <br className="hidden md:block" /> 
          Indore , Madhya Pradesh 452001
        </div>
      </motion.div>
    </div>
  </main>
);
}
