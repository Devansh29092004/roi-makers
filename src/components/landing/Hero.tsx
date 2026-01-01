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
  <main className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center pb-0" style={{ backgroundColor: '#FFFFFF' }}>
    
    {/* Premium Glass Container */}
    <div className="relative w-full h-[85vh] sm:h-[90vh] md:h-[75vh] lg:h-[80vh] mx-auto my-0">
      {/* Clean glass background */}
      <div 
        className="absolute inset-0 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl shadow-2xl"
        style={{ 
          background: 'rgba(255, 255, 255, 0.1)',
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2)
          `
        }}
      ></div>
      
      {/* Moving Corner Gradients Inside Glass */}
      <div className="absolute inset-0 rounded-2xl md:rounded-5xl overflow-hidden">
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
      <section className="hero relative flex flex-col w-full h-full px-6 sm:px-8 md:px-12 lg:px-[3em] justify-between md:pt-12 lg:pt-20 pb-0">
      {/* Hero Content - Centered on mobile, normal on desktop */}
      <div className="flex-1 flex items-center justify-center md:items-start md:justify-start pt-8 sm:pt-12 md:pt-0">
        <div className="text-center md:text-left w-full">
          <h1
            ref={heroTitleRef}
            className="relative uppercase font-black left-0 md:left-[-0.05em] text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] tracking-[-0.04em] leading-[0.9] select-none text-black mb-6 sm:mb-8 md:mb-10"
            style={{ opacity: showHero ? 1 : 0 }}
          >
            ROI<span className="align-super text-[0.5em] ml-1">™</span>
          </h1>
          {showContent && (
            <div
              className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end gap-4 sm:gap-5 md:gap-8 mt-4 sm:mt-5 md:mt-6"
              ref={subtitleRef}
            >
              <p className="text-lg sm:text-xl md:text-2xl lg:text-[2.5vw] md:w-[50%] pp-neue-world-font font-normal select-none text-black leading-snug text-center md:text-left">
              ROI-first thinking for scale-hungry brands
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer Marquee - Glued to bottom */}
      <motion.div 
        className="w-full pb-4 sm:pb-6 md:pb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="w-full h-20 sm:h-24 md:h-28">
          <div className="w-full py-3 sm:py-4 md:py-5 overflow-hidden">
            <ScrollBaseAnimation
              baseVelocity={-1}
              clasname="font-extrabold text-black !text-3xl sm:!text-4xl md:!text-5xl lg:!text-base [&_span]:!w-14 [&_span]:!h-14 sm:[&_span]:!w-16 sm:[&_span]:!h-16 md:[&_span]:!w-17 md:[&_span]:!h-17"
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
