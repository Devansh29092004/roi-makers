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
import Hero from "@/components/Hero";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import TeamShowcase from "@/components/TeamShowcase";
import LogoLoop from "@/components/LogoLoop";
import BrandsClients from "@/components/landing/BrandsClients";

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
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
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
    if (showHero && heroTitleRef.current) {
      gsap.fromTo(
        heroTitleRef.current,
        { opacity: 0, x: "-100vw" },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          onComplete: () => setShowContent(true),
        }
      );
    }
  }, [showHero]);

  useEffect(() => {
    if (showContent) {
      // Animate subtitle/scroll cue
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.1 }
        );
      }
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
      {showLoading && <LoadingOverlay onFinish={() => setShowLoading(false)} />}
      {/* <Hero /> */}
      {/* <Navbar /> */}
      <section className="hero flex flex-col justify-between pt-[4em] md:pt-[4em] h-[100svh] w-full px-4 md:px-[2.5em]">
        <h1
          ref={heroTitleRef}
          className="relative uppercase font-black left-[-0.05em] text-[18vw] sm:text-[20vw] md:text-[25vw] tracking-[-0.04em] leading-[1] select-none"
          style={{ opacity: showHero ? 1 : 0 }}
        >
          ROI<span className="align-super text-[0.5em] ml-1">™</span>
        </h1>
        {showContent && (
          <div
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-0"
            ref={subtitleRef}
          >
            <p className="text-xl sm:text-2xl md:text-[3vw] md:w-[50%] pp-neue-world-font font-normal select-none">
              Strategy, design, and campaigns for ambitious companies.
            </p>
            <p className="text-[18px] md:text-[20px] font-medium hidden md:flex select-none">
              {"{"}Scroll{"}"}
            </p>
          </div>
        )}
      </section>
      {showContent && (
        <>
          <section
            className="intro max-md:-mt-80 h-full w-full px-4 md:px-[2.5em]"
            ref={videoSectionRef}
          >
            {/* Desktop VideoShowcase */}
            <div className="hidden md:block">
              <VideoShowcase
                videoSrc="https://www.youtube.com/embed/HXFkg0vwLpQ?autoplay=1&mute=1&controls=0&loop=1&playlist=HXFkg0vwLpQ"
                title1="ROI™ Showreel"
                title2="(Clients — 2018/2024)"
              />
            </div>
            {/* Mobile Video Preview */}
            <div className="video-container-mobile pp-neue-world-font max-w-[800px] w-full mx-auto flex-col gap-[1em] flex md:hidden">
              <div className="video-preview relative w-full aspect-[16/9] rounded-xl md:rounded-[1.5rem] bg-[#b9b9b3] overflow-hidden">
                <div className="video-wrapper absolute top-0 left-0 w-full h-full rounded-xl md:rounded-[1.5rem] overflow-hidden">
                  <iframe
                    src="https://player.vimeo.com/video/1027126039?background=1&autoplay=1&loop=1&muted=1&dnt=1&app_id=codegrid"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    title="ROI video"
                    className="absolute top-0 left-0 w-full h-full rounded-xl md:rounded-[1.5rem] pointer-events-none"
                  ></iframe>
                </div>
              </div>
              <div className="video-title">
                <p className="font-medium text-3xl sm:text-4xl">ROI™ Showreel</p>
                <p className="font-medium text-xl sm:text-2xl">(Clients — 2018/2024)</p>
              </div>
            </div>
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
