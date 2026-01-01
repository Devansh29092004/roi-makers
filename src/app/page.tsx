"use client";
import React, { useEffect, useRef, lazy, Suspense } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Hero from "@/components/Hero";
import LoadingOverlay from "@/components/LoadingOverlay";
// import ArtWork from "@/components/Art";

// Lazy load components that aren't immediately visible
const VideoShowcase = lazy(() => import("@/components/VideoShowcase"));
const ImageWall = lazy(() => import("@/components/ImageWall"));
const TextMarqueeSection = lazy(() => import("@/components/landing/TextMarqueeSection"));
const CardMarqueeSection = lazy(() => import("@/components/landing/CardMarqueeSection")); 
const OurServices = lazy(() => import("@/components/landing/OurServices"));
const HoverExpandGallery = lazy(() => import("@/components/landing/HoverExpandGallery"));
const StickyCardSection = lazy(() => import("@/components/landing/StickyCardSection"));
const BrandsClients = lazy(() => import("@/components/landing/BrandsClients"));
const FAQSection = lazy(() => import("@/components/landing/faq"));
const Footer = lazy(() => import("@/components/global/Footer"));


const breakpoints = [
  { maxWidth: 1000, translateY: -135, movMultiplier: 450 },
  { maxWidth: 1100, translateY: -130, movMultiplier: 500 },
  { maxWidth: 1200, translateY: -125, movMultiplier: 550 },
  { maxWidth: 1300, translateY: -120, movMultiplier: 600 },
];

function getInitialValues(width: number) {
  for (const bp of breakpoints) {
    if (width <= bp.maxWidth) {
      return {
        translateY: bp.translateY,
        movementMultiplier: bp.movMultiplier,
      };
    }
  }
  return {
    translateY: -110,
    movementMultiplier: 650,
  };
}

gsap.registerPlugin(ScrollTrigger);

const MenuPage = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoTitleRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [showLoading, setShowLoading] = React.useState(true);
  const [showHero, setShowHero] = React.useState(false);
  const [showContent, setShowContent] = React.useState(false);
  const videoSectionRef = useRef<HTMLElement>(null);
  const outroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth <= 900) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const initialValues = getInitialValues(window.innerWidth);
    const animationState = {
      scrollProgress: 0,
      initialTranslateY: initialValues.translateY,
      currentTranslateY: initialValues.translateY,
      movementMultiplier: initialValues.movementMultiplier,
      scale: 0.25,
      fontSize: 80,
      gap: 2,
      targetMouseX: 0,
      currentMouseX: 0,
    };

    const handleMouseMove = (e: MouseEvent) => {
      animationState.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    };
    document.addEventListener("mousemove", handleMouseMove);

    let rafId: number;
    const animate = () => {
      if (window.innerWidth < 900) return;
      const { scale, targetMouseX, currentMouseX, gap, movementMultiplier } =
        animationState;
      const scaleMovementMultiplier = (1 - scale) * movementMultiplier;
      const maxHorizontalMovement =
        scale < 0.95 ? targetMouseX * scaleMovementMultiplier : 0;
      animationState.currentMouseX = gsap.utils.interpolate(
        currentMouseX,
        maxHorizontalMovement,
        0.05
      );
      if (videoContainerRef.current) {
        videoContainerRef.current.style.transform = `translateY(${animationState.currentTranslateY}%) translateX(${animationState.currentMouseX}px) scale(${scale})`;
        videoContainerRef.current.style.gap = `${gap}em`;
      }
      rafId = requestAnimationFrame(animate);
    };
    animate();

    gsap.timeline({
      scrollTrigger: {
        trigger: ".intro",
        start: "top bottom",
        end: "top 10%",
        scrub: true,
        onUpdate: (self) => {
          animationState.scrollProgress = self.progress;

          animationState.currentTranslateY = gsap.utils.interpolate(
            animationState.initialTranslateY,
            -20,
            animationState.scrollProgress
          );
          animationState.scale = gsap.utils.interpolate(
            0.25,
            1,
            animationState.scrollProgress
          );
          animationState.gap = gsap.utils.interpolate(
            2,
            1,
            animationState.scrollProgress
          );
          if (animationState.scrollProgress <= 0.4) {
            const firstPartProgress = animationState.scrollProgress / 0.4;
            animationState.fontSize = gsap.utils.interpolate(
              80,
              60,
              firstPartProgress
            );
          } else {
            const secondPartProgress =
              (animationState.scrollProgress - 0.4) / 0.6;
            animationState.fontSize = gsap.utils.interpolate(
              40,
              30,
              secondPartProgress
            );
          }

          // Apply font size to video titles
          videoTitleRefs.current.forEach((el) => {
            if (el) el.style.fontSize = `${animationState.fontSize}px`;
          });
        },
      },
    });

    return () => {
      gsap.killTweensOf(videoContainerRef.current);
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (!showLoading) {
      setShowHero(true);
    }
  }, [showLoading]);

  useEffect(() => {
    if (showHero) {
      // Wait a bit before showing content
      const timer = setTimeout(() => setShowContent(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [showHero]);

  useEffect(() => {
    if (showContent) {
      // Animate video section
      if (videoSectionRef.current) {
        gsap.fromTo(
          videoSectionRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.3 }
        );
      }
      // Animate outro
      if (outroRef.current) {
        gsap.fromTo(
          outroRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.5 }
        );
      }
      
      // Refresh ScrollTrigger after content loads
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [showContent]);

  return (
    <div className="min-h-screen text-black boska-font overflow-x-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      <Hero
        showLoading={showLoading}
        showHero={showHero}
        showContent={showContent}
        onLoadingFinish={() => setShowContent(true)}
      />
      {showLoading && <LoadingOverlay onFinish={() => setShowLoading(false)} />}
      {showContent && (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-lg">Loading...</div>
        </div>}>
          {/* Move VideoShowcase here, right after Hero and before TextMarquee */}
          <section
            className="intro max-md:-mt-80 h-full w-full px-2 md:px-[2.5em] -mt-60 md:-mt-80"
            ref={videoSectionRef}
          >
            {/* Desktop VideoShowcase */}
            <div className="hidden md:block">
              <VideoShowcase
                videoSrc="https://www.youtube.com/embed/aYSp5qUTC54?autoplay=1&mute=1&loop=1&playlist=aYSp5qUTC54"
                initialScale={0.15}
                initialTranslateY={-130}
              />
            </div>
            {/* Mobile Video Preview removed */}
          </section>
          <section
            className="outro flex flex-col justify-center items-center min-h-[100vh] w-full px-4 md:px-[2.5em]"
            ref={outroRef}
          >
            <ImageWall
              heroText="See how we transform brands"
              heroTextClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-4 md:px-[2.5em] flex justify-center items-center font-medium text-foreground text-center w-full"
              buttonText="Start Your Growth Story"
              lines= {[
                "Razor-sharp strategy. Addictive design.",
                "Campaigns that make CFOs smile and competitors nervous.",
                "Ready To 10x Your Digital Game? Let's Build.",
              ]}
              footerContent={
                <section className="hero mb-40 md:mb-60 flex justify-center items-center w-screen bg-background">
                  <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-4 md:px-[2.5em] flex justify-center items-center font-medium text-foreground text-center w-full">
                    See how we transform brands
                  </p>
                </section>
              }
              stackImageCount={6}
            />
          </section>
          <OurServices/>
          <CardMarqueeSection />
          {/* <BentoGridSection /> */}
          <BrandsClients />
          <StickyCardSection />
          <HoverExpandGallery />
          {/* <Agency/>
          <Services/> */}
          {/* <ArtWork /> */}
          <FAQSection />
          <Footer />
        </Suspense>
      )}
      <style jsx>{`
        @media (max-width: 900px) {
          nav,
          section {
            padding: 1.5em;
          }
          .hero {
            padding-top: 4em;
            justify-content: flex-start;
            gap: 2em;
          }
          .hero h1 {
            font-size: 18vw;
          }
          .video-container-desktop {
            display: none;
          }
          .video-container-mobile {
            display: flex;
            flex-direction: column;
            gap: 1em;
          }
        }
        @media (max-width: 640px) {
          .hero {
            padding-top: 3em;
            padding-left: 1em;
            padding-right: 1em;
          }
          .hero h1 {
            font-size: 18vw;
          }
        }
      `}</style>
    </div>
  );
};

export default MenuPage;
