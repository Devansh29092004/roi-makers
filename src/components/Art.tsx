"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import type { CSSProperties } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Art() {
  const heroRef = useRef<HTMLElement>(null);
  const bannerRef = useRef<HTMLElement>(null);
  const outroRef = useRef<HTMLElement>(null);
  const bannerContainerRef = useRef<HTMLDivElement>(null);
  const bannerHeaderRef = useRef<HTMLDivElement>(null);
  const introText1Ref = useRef<HTMLDivElement>(null);
  const introText2Ref = useRef<HTMLDivElement>(null);

  // Preload images for smoother animations
  useEffect(() => {
    const preloadImages = () => {
      const imageUrls = ["/amit.jpg", "/amit-masked.png"];
      imageUrls.forEach((url) => {
        const img = new window.Image();
        img.src = url;
      });
    };
    preloadImages();
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);

    // Optimize GSAP performance
    gsap.ticker.lagSmoothing(0);
    gsap.config({
      nullTargetWarn: false,
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
    };
  }, []);

  useGSAP(() => {
    if (
      !bannerRef.current ||
      !bannerContainerRef.current ||
      !bannerHeaderRef.current ||
      !introText1Ref.current ||
      !introText2Ref.current
    ) {
      return;
    }

    const bannerMaskLayers = gsap.utils.toArray<HTMLDivElement>(".mask");
    const bannerIntroTextElements = [
      introText1Ref.current,
      introText2Ref.current,
    ];
    const splitText = new SplitText(bannerHeaderRef.current, {
      type: "chars",
    });
    const chars = splitText.chars;

    // Set initial states
    bannerMaskLayers.forEach((layer, i) => {
      gsap.set(layer, { scale: 0.9 - i * 0.15 });
    });
    gsap.set(bannerContainerRef.current, { scale: 0 });
    gsap.set(chars, { opacity: 0 });

    // Pre-calculate values for better performance
    const moveDistance = window.innerWidth * 0.5;
    const totalChars = chars.length;

    const trigger = ScrollTrigger.create({
      trigger: bannerRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 4}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1, // Smoother and more responsive scrub
      anticipatePin: 1,
      refreshPriority: -1,
      fastScrollEnd: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress;

        // Use transform3d for hardware acceleration
        gsap.set(bannerContainerRef.current, {
          scale: progress * 0.95,
          force3D: true,
        });

        // Image scale animation (0% to 60% of scroll)
        const imageScaleProgress = Math.min(progress / 0.6, 1);
        bannerMaskLayers.forEach((layer, i) => {
          const initialScale = 0.9 - i * 0.15;
          const maxScale = 1.0;
          const currentScale =
            initialScale + imageScaleProgress * (maxScale - initialScale);
          gsap.set(layer, {
            scale: currentScale,
            force3D: true,
          });
        });

        // Text movement animation (0% to 60% of scroll - synced with image)
        if (progress <= 0.6) {
          const textProgress = imageScaleProgress;

          gsap.set(bannerIntroTextElements[0], {
            x: -textProgress * moveDistance - 5,
            force3D: true,
          });

          gsap.set(bannerIntroTextElements[1], {
            x: textProgress * moveDistance + 5,
            force3D: true,
          });
        } else {
          // Keep text at final position
          gsap.set(bannerIntroTextElements[0], {
            x: -moveDistance - 5,
            force3D: true,
          });
          gsap.set(bannerIntroTextElements[1], {
            x: moveDistance + 5,
            force3D: true,
          });
        }

        // Character reveal animation (60% to 85% of scroll)
        if (progress >= 0.6 && progress <= 0.85) {
          const headerProgress = (progress - 0.6) / 0.25;

          chars.forEach((char, i) => {
            const charDelay = i / totalChars;
            const charOpacity = Math.max(
              0,
              Math.min(1, (headerProgress - charDelay) * (totalChars / 2))
            );

            gsap.set(char, {
              opacity: charOpacity,
              force3D: true,
            });
          });
        } else if (progress < 0.6) {
          gsap.set(chars, { opacity: 0, force3D: true });
        } else if (progress > 0.85) {
          gsap.set(chars, { opacity: 1, force3D: true });
        }
      },
    });

    return () => {
      trigger.kill();
      splitText.revert();
    };
  }, []);

  const maskLayers = useMemo(() => Array.from({ length: 8 }), []);
  const maskStyle = useMemo<CSSProperties>(
    () => ({
      WebkitMaskImage: "url('/amit-masked.png')",
      maskImage: "url('/amit-masked.png')",
      WebkitMaskSize: "cover",
      maskSize: "cover",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskType: "luminance",
      maskType: "luminance",
    }),
    []
  );

  return (
    <div className="font-serif">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-screen h-screen bg-gray-200 text-gray-900 overflow-hidden flex flex-col items-center justify-center gap-4 md:gap-6 px-4 md:px-6 text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
          Art is never just what you see.
        </h1>
        <p className="max-w-2xl text-base sm:text-lg text-gray-600 px-4">
          Every image holds more than its surface—shapes that shift when the
          light changes, meanings that reveal themselves only when you stand at
          a different angle. What looks simple is often layered, waiting for the
          right eyes to translate it.
        </p>
      </section>

      {/* Banner Section */}
      <section
        ref={bannerRef}
        className="relative w-screen h-screen bg-gray-200 text-gray-900 overflow-hidden"
      >
        <div
          ref={bannerContainerRef}
          className="relative w-full h-full p-3 md:p-6 rounded-2xl md:rounded-3xl overflow-hidden"
        >
          {/* Base image */}
          <div className="absolute top-0 left-0 w-full h-full rounded-2xl md:rounded-3xl overflow-hidden">
            <Image
              src="/amit.jpg"
              alt="Telescope banner"
              fill
              className="object-cover rounded-2xl md:rounded-3xl"
              priority
            />
          </div>

          {/* Mask layers */}
          {maskLayers.map((_, index) => (
            <div
              key={index}
              className="mask absolute top-0 left-0 w-full h-full rounded-2xl md:rounded-3xl overflow-hidden"
              style={maskStyle}
            >
              <Image
                src="/amit.jpg"
                alt="Telescope banner mask"
                fill
                className="object-cover"
                priority
              />
            </div>
          ))}

          {/* Banner header */}
          <div
            ref={bannerHeaderRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-4/5 text-center text-orange-600 z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          >
            <h1>Every layer tells a different truth.</h1>
          </div>
        </div>

        {/* Intro text container */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex gap-1 md:gap-2 z-20">
          <div ref={introText1Ref} className="flex-1 flex justify-end">
            <div className="banner-intro-text text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              <h1>Seen from Above</h1>
            </div>
          </div>
          <div ref={introText2Ref} className="flex-1">
            <div className="banner-intro-text text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              <h1>Felt from Within</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Outro Section */}
      <section
        ref={outroRef}
        className="relative w-screen h-screen bg-gray-200 text-gray-900 overflow-hidden flex flex-col items-center justify-center gap-4 md:gap-6 px-4 md:px-6 text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
          We are always reading between the strokes.
        </h1>
        <p className="max-w-2xl text-base sm:text-lg text-gray-600 px-4">
          Perspective decides the story: a gesture becomes confession, a shadow
          turns into memory. The deeper you look, the more versions appear—proof
          that art isn&apos;t fixed, but alive in the way we choose to see it.
        </p>
      </section>
      <style jsx>{`
        .banner-intro-text h1 {
          font-size: clamp(1.5rem, 4vw, 3rem);
          font-weight: bold;
        }
        @media (max-width: 768px) {
          .banner-intro-text h1 {
            font-size: clamp(1.25rem, 3.5vw, 2rem);
          }
        }
      `}</style>
    </div>
  );
}