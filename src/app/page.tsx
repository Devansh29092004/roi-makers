"use client";
import React, { useEffect, useRef, lazy, Suspense } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Hero from "@/components/landing/Hero";
import LoadingOverlay from "@/components/LoadingOverlay";

// Lazy load components that aren't immediately visible
const ImageWall = lazy(() => import("@/components/ImageWall"));
const BrandMarquee = lazy(() => import("@/components/landing/BrandMarquee"));
const ServicesShowcase = lazy(() => import("@/components/landing/ServicesShowcase")); 
const ServicesGrid = lazy(() => import("@/components/landing/ServicesGrid"));
const TeamGallery = lazy(() => import("@/components/landing/TeamGallery"));
const AboutCards = lazy(() => import("@/components/landing/AboutCards"));
const ClientsStats = lazy(() => import("@/components/landing/ClientsStats"));
const FAQSection = lazy(() => import("@/components/landing/FAQ"));
const Footer = lazy(() => import("@/components/global/Footer"));

gsap.registerPlugin(ScrollTrigger);

const MenuPage = () => {
  const [showLoading, setShowLoading] = React.useState(true);
  const [showHero, setShowHero] = React.useState(false);
  const [showContent, setShowContent] = React.useState(false);
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

    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
    <div className="min-h-screen text-foreground boska-font overflow-x-hidden bg-background">
      <Hero
        showLoading={showLoading}
        showHero={showHero}
        showContent={showContent}
        onLoadingFinish={() => setShowContent(true)}
        videoSrc="https://www.youtube.com/embed/aYSp5qUTC54?autoplay=1&mute=1&loop=1&playlist=aYSp5qUTC54"
      />
      {showLoading && <LoadingOverlay onFinish={() => setShowLoading(false)} />}
      {showContent && (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-lg">Loading...</div>
        </div>}>
          <section
            className="outro flex flex-col justify-center items-center min-h-[100vh] w-full px-2 sm:px-4 md:px-[2.5em] mt-16 sm:mt-20 md:mt-0"
            ref={outroRef}
          >
            <ImageWall
              heroText="See how we transform brands"
              heroTextClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-2 sm:px-4 md:px-[2.5em] flex justify-center items-center font-medium text-foreground text-center w-full"
              buttonText="Start Your Growth Story"
              lines= {[
                "Razor-sharp strategy. Addictive design.",
                "Campaigns that make CFOs smile and competitors nervous.",
                "Ready To 10x Your Digital Game? Let's Build.",
              ]}
              footerContent={
                <section className="hero mb-20 sm:mb-30 md:mb-40 lg:mb-60 flex justify-center items-center w-screen bg-background">
                  <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-2 sm:px-4 md:px-[2.5em] flex justify-center items-center font-medium text-foreground text-center w-full">
                    See how we transform brands
                  </p>
                </section>
              }
              stackImageCount={6}
            />
          </section>
          <ServicesGrid/>
          <ServicesShowcase />
          <ClientsStats />
          <AboutCards />
          <TeamGallery />
          <FAQSection />
          <Footer />
        </Suspense>
      )}
    </div>
  );
};

export default MenuPage;
