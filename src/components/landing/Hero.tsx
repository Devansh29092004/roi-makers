'use client';
import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollBaseAnimation from "@/components/ui/text-marquee";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  showLoading: boolean;
  showHero: boolean;
  showContent: boolean;
  onLoadingFinish: () => void;
  videoSrc?: string;
}

export default function Hero({ 
  showLoading, 
  showHero, 
  showContent, 
  onLoadingFinish,
  videoSrc = "https://www.youtube.com/embed/aYSp5qUTC54?autoplay=1&mute=1&loop=1&playlist=aYSp5qUTC54",
}: HeroProps) {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const headingSectionRef = useRef<HTMLDivElement>(null);
  
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Hero title animation
  useEffect(() => {
    if (!showLoading && heroTitleRef.current) {
      gsap.fromTo(
        heroTitleRef.current,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power2.out",
          onComplete: () => {
            setTimeout(() => onLoadingFinish(), 200);
          }
        }
      );
    }
  }, [showLoading, onLoadingFinish]);

  // Subtitle animation
  useEffect(() => {
    if (showContent && subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.2 }
      );
    }
  }, [showContent]);

  // MONK-E STYLE SCROLL ANIMATION - Exact same as test page
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth <= 900 || !showContent) return;

    const heroBox = heroContainerRef.current;
    const videoWrapper = videoWrapperRef.current;
    const headingSection = headingSectionRef.current;
    if (!heroBox || !videoWrapper) return;

    // Config - same as MonkeHero
    const config = {
      initialScale: 0.4,
      finalScale: 1.15,
      initialLeft: 70,
      finalLeft: 50,
    };

    // Animation state
    const state = {
      scale: config.initialScale,
      leftPos: config.initialLeft,
      headingY: 0,
      headingOpacity: 1,
      mouseX: 0,
      targetMouseX: 0,
    };

    // Set initial transform
    videoWrapper.style.transform = `translateX(-50%) translateY(-50%) scale(${config.initialScale})`;
    videoWrapper.style.left = `${config.initialLeft}%`;
    
    if (headingSection) {
      headingSection.style.transform = 'translateY(0)';
      headingSection.style.opacity = '1';
    }

    // Mouse parallax handler
    const handleMouseMove = (e: MouseEvent) => {
      state.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    };
    document.addEventListener('mousemove', handleMouseMove);

    // RAF animation loop
    let rafId: number;
    const animateParallax = () => {
      if (window.innerWidth < 900) return;

      const movementMultiplier = (1 - state.scale) * 300;
      const targetX = state.scale < 0.95 ? state.targetMouseX * movementMultiplier : 0;
      state.mouseX = gsap.utils.interpolate(state.mouseX, targetX, 0.05);

      // Apply transform to video
      videoWrapper.style.transform = `
        translateX(calc(-50% + ${state.mouseX}px)) 
        translateY(-50%) 
        scale(${state.scale})
      `;
      videoWrapper.style.left = `${state.leftPos}%`;

      // Apply transform to heading
      if (headingSection) {
        headingSection.style.transform = `translateY(${state.headingY}px)`;
        headingSection.style.opacity = `${state.headingOpacity}`;
      }

      rafId = requestAnimationFrame(animateParallax);
    };
    animateParallax();

    // ScrollTrigger - pins and animates
    const scrollTrigger = ScrollTrigger.create({
      trigger: heroBox,
      start: 'top top',
      end: '+=100%',
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;

        // Scale: 0.4 → 1.15
        state.scale = gsap.utils.interpolate(config.initialScale, config.finalScale, progress);

        // Left position: 70% → 50%
        state.leftPos = gsap.utils.interpolate(config.initialLeft, config.finalLeft, progress);

        // Heading: moves up and fades
        state.headingY = gsap.utils.interpolate(0, -150, progress);
        state.headingOpacity = gsap.utils.interpolate(1, 0, Math.min(progress * 1.6, 1));
      },
    });

    return () => {
      scrollTrigger.kill();
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [showContent]);

  return (
    <section className="relative w-full min-h-[200vh] bg-white">
      {/* HERO BOX - The pinned container */}
      <div 
        ref={heroContainerRef}
        className="relative w-full h-screen flex flex-col overflow-hidden"
      >
        {/* Glass background */}
        <div 
          className="absolute inset-0 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl shadow-2xl z-0"
          style={{ 
            background: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        />
        
        {/* Corner Gradients */}
        <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden z-[1] pointer-events-none">
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

        {/* HERO CONTENT - flex-1 takes space above marquee */}
        <section className="relative flex-1 flex flex-col px-6 sm:px-8 md:px-12 lg:px-[3em] pt-12 lg:pt-20 overflow-hidden z-[2]">
          
          {/* Heading Section - Animates up and fades on scroll */}
          <div 
            ref={headingSectionRef}
            className="relative z-[3] mt-4 md:mt-8"
            style={{ willChange: 'transform, opacity' }}
          >
            <h1
              ref={heroTitleRef}
              className="uppercase font-black text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] tracking-[-0.04em] leading-[0.85] select-none text-black mb-4 md:mb-6"
              style={{ opacity: showHero ? 1 : 0 }}
            >
              ROI<span className="align-super text-[0.5em] ml-1">™</span>
            </h1>
            {showContent && (
              <div ref={subtitleRef} className="mt-4 md:mt-6">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-[2.5vw] md:w-[50%] pp-neue-world-font font-normal select-none text-black leading-snug">
                  ROI-first thinking for scale-hungry brands
                </p>
              </div>
            )}
          </div>

          {/* VIDEO WRAPPER - Absolutely positioned, scroll-animated */}
          {showContent && (
            <div
              ref={videoWrapperRef}
              className="hidden md:flex absolute items-center justify-center w-full"
              style={{
                position: 'absolute',
                top: '55%',
                left: '70%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                willChange: 'transform',
                transformOrigin: 'center center',
                transform: isMobile ? 'scale(1)' : 'translateX(-50%) translateY(-50%) scale(0.4)',
              }}
            >
              <div 
                className="relative w-full max-w-[1400px] aspect-[16/9] rounded-[1rem] overflow-hidden"
                style={{
                  backgroundColor: '#1a365d',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                }}
              >
                {videoSrc.endsWith(".mp4") || videoSrc.endsWith(".webm") ? (
                  <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                  />
                ) : (
                  <iframe
                    src={videoSrc}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    title="Hero video"
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  />
                )}
              </div>
            </div>
          )}
        </section>

        {/* MARQUEE - Locked to bottom with mt-auto, higher z-index */}
        <motion.div 
          className="relative w-full pb-4 sm:pb-6 md:pb-8 px-6 sm:px-8 md:px-12 lg:px-[3em] mt-auto z-[10]"
          style={{
            background: 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
          }}
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
        </motion.div>
      </div>
      
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes floatTopRight {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-20px, 10px) scale(1.1); }
          50% { transform: translate(-10px, 20px) scale(0.9); }
          75% { transform: translate(-30px, -5px) scale(1.05); }
        }
        
        @keyframes floatBottomLeft {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(15px, -10px) scale(1.08); }
          50% { transform: translate(25px, -20px) scale(0.95); }
          75% { transform: translate(5px, -15px) scale(1.02); }
        }
      `}</style>
    </section>
  );
}
