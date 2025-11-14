"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import VideoShowcase from "@/components/VideoShowcase";
import LoadingOverlay from "@/components/LoadingOverlay";
import ImageWall from "@/components/ImageWall";
import Footer from "@/components/global/Footer";
import OurServicesFlowing from "@/components/landing/OurServicesFlowing";
import Art from "@/components/Art";
// import LandingHero from "@/components/landing/Hero";
import BrandsClients from "@/components/landing/BrandsClients";
import FAQSection from "@/components/landing/faq";
import Employee from "@/components/landing/Employee";
import Ballpit from "@/components/ui/ballpit";
import GradientBackground from "@/components/ui/gradient-background";
import HorizontalScroll from "@/components/landing/HorizontalScroll";
import Solutions from "@/components/landing/Solutions";
import HoverExpandHorizontal from "@/components/ui/horizontal-hover-expand";
import Hero1 from "@/components/Hero1";


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

    const lenis = new Lenis();
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
    }
  }, [showContent]);

  return (
    <div className="min-h-screen bg-white text-black boska-font overflow-x-hidden">
      <Hero1
        showLoading={showLoading}
        showHero={showHero}
        showContent={showContent}
        onLoadingFinish={() => setShowContent(true)}
      />
      {showLoading && <LoadingOverlay onFinish={() => setShowLoading(false)} />}
      
      {/* <LandingHero 
        showLoading={showLoading}
        showHero={showHero}
        showContent={showContent}
        onLoadingFinish={() => {}}
      />
       */}
      {showContent && (
        <>
          <section
            className="intro max-md:-mt-80 h-full w-full px-4 md:px-[2.5em]"
            ref={videoSectionRef}
          >
            {/* Desktop VideoShowcase */}
            {/* <div className="hidden md:block">
              <VideoShowcase
                videoSrc="https://www.youtube.com/embed/HXFkg0vwLpQ?autoplay=1&mute=1&controls=0&loop=1&playlist=HXFkg0vwLpQ"
                title1="ROI™ Showreel"
                title2="(Clients — 2018/2024)"
              />
            </div> */}
            {/* Mobile Video Preview removed */}
          </section>
          <section
            className="outro flex flex-col justify-center items-center min-h-[100svh] w-full px-4 md:px-[2.5em]"
            ref={outroRef}
          >
            <ImageWall
              heroText="See how we transform brands"
              heroTextClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-4 md:px-[2.5em] flex justify-center items-center font-medium text-foreground text-center w-full"
              buttonText="Work With Us"
              lines={[
                "Creative strategy. Impactful design.",
                "Campaigns that move brands forward.",
                "Partner with Mocko™ for your next leap.",
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
          <OurServicesFlowing />
          <BrandsClients/>
          <Art/>
        <Employee />
        <HoverExpandHorizontal />
        <div className="px-4 md:px-[2.5em] my-16">
          {/* <Ballpit /> */}
        </div>
          <FAQSection/>
          <Footer />
        </>
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
