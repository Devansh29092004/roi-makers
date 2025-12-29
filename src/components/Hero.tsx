'use client';
import React, { useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import gsap from "gsap";
import ScrollBaseAnimation from "@/components/ui/text-marquee";
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
  <main className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center pb-24 md:pb-32" style={{ backgroundColor: '#FFFFFF' }}>
    
    {/* Premium Glass Container */}
    <div className="relative w-full max-w-[95vw] mx-auto mt-8 md:mt-12 mb-8 md:mb-12">
      {/* Clean glass background */}
      <div 
        className="absolute inset-0 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl"
        style={{ 
          background: 'rgba(255, 255, 255, 0.1)',
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2)
          `
        }}
      ></div>
      
      {/* Moving Corner Gradients Inside Glass */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        {/* Top-right corner gradient */}
        <div 
          className="absolute -top-40 -right-40 w-[48rem] h-[48rem] rounded-full opacity-85"
          style={{
            background: `radial-gradient(circle, 
              rgba(255, 170, 23, 1) 0%, 
              rgba(255, 170, 23, 0.9) 15%,
              rgba(255, 200, 100, 0.8) 30%, 
              rgba(255, 220, 150, 0.6) 50%, 
              rgba(255, 240, 200, 0.4) 70%, 
              rgba(255, 250, 230, 0.2) 85%,
              transparent 100%
            )`,
            animation: 'floatTopRight 8s ease-in-out infinite'
          }}
        />
        
        {/* Bottom-left corner gradient */}
        <div 
          className="absolute -bottom-40 -left-40 w-[48rem] h-[48rem] rounded-full opacity-80"
          style={{
            background: `radial-gradient(circle, 
              rgba(255, 170, 23, 0.95) 0%, 
              rgba(255, 170, 23, 0.85) 15%,
              rgba(255, 200, 100, 0.75) 30%, 
              rgba(255, 220, 150, 0.55) 50%, 
              rgba(255, 240, 200, 0.35) 70%, 
              rgba(255, 250, 230, 0.18) 85%,
              transparent 100%
            )`,
            animation: 'floatBottomLeft 10s ease-in-out infinite reverse'
          }}
        />
      </div>
      <section className="hero relative flex flex-col pt-[6em] sm:pt-[7em] md:pt-[4em] pb-8 md:pb-12 flex-1 w-full px-6 md:px-[3em]">
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
          </div>
        )}
      </div>

      {/* Footer Texts */}
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-3 md:gap-0 pb-8 md:pb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="w-full h-20 md:h-20">
          <div className="w-full py-2 md:py-4 overflow-hidden">
            <ScrollBaseAnimation
              baseVelocity={-1}
              clasname="font-extrabold text-black !text-5xl md:!text-base [&_span]:!w-15 [&_span]:!h-15 md:[&_span]:!w-17 md:[&_span]:!h-17"
              scrollDependent={false}
              items={[
                {
                  text: "TRANSFORM YOUR BRAND",
                  imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
                },
                {
                  text: "CREATIVE SOLUTIONS",
                  imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80"
                },
                {
                  text: "ROI MAKERS",
                  imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80"
                }
              ]}
            />
          </div>
        </div>
        {/* <div className="text-black  text-[16px]   pp-neue-world-font font-normal select-none  max-w-lg text-center md:text-left leading-relaxed">
          Performance marketing specialists creating, optimizing & scaling <br className="hidden md:block" />
          <span className="font-bold">ROI-focused</span> campaigns for sustainable growth
        </div>
        <div className="text-black  pp-neue-world-font font-normal select-none text-[16px]  text-center md:text-right leading-relaxed">
          218-B ,Trade Center,South Tukoganj <br className="hidden md:block" /> 
          Indore , Madhya Pradesh 452001
        </div> */}
      </motion.div>
      </section>
    </div>
    
    {/* Glass shine and corner gradient animation styles */}
    <style jsx>{`
      @keyframes shine {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }
      
      @keyframes floatTopRight {
        0%, 100% {
          transform: translate(0, 0) scale(1);
        }
        25% {
          transform: translate(-20px, 10px) scale(1.1);
        }
        50% {
          transform: translate(-10px, 20px) scale(0.9);
        }
        75% {
          transform: translate(-30px, -5px) scale(1.05);
        }
      }
      
      @keyframes floatBottomLeft {
        0%, 100% {
          transform: translate(0, 0) scale(1);
        }
        25% {
          transform: translate(15px, -10px) scale(1.08);
        }
        50% {
          transform: translate(25px, -20px) scale(0.95);
        }
        75% {
          transform: translate(5px, -15px) scale(1.02);
        }
      }
    `}</style>
  </main>
);
}
