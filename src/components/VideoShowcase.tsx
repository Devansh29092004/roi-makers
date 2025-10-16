"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

interface VideoShowcaseProps {
  videoSrc: string;
  title1: string;
  title2: string;
  initialTranslateY?: number;
  finalTranslateY?: number;
  initialScale?: number;
  finalScale?: number;
  initialFontSize?: number;
  midFontSize?: number;
  finalFontSize?: number;
  initialGap?: number;
  finalGap?: number;
}

const VideoShowcase: React.FC<VideoShowcaseProps> = ({
  videoSrc,
  title1,
  title2,
  initialTranslateY = -110,
  finalTranslateY = -20,
  initialScale = 0.25,
  finalScale = 1,
  initialFontSize = 80,
  midFontSize = 60,
  finalFontSize = 30,
  initialGap = 2,
  finalGap = 1,
}) => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoTitleRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth <= 900) return;

    const videoContainer = videoContainerRef.current;
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const animationState = {
      scrollProgress: 0,
      initialTranslateY,
      currentTranslateY: initialTranslateY,
      scale: initialScale,
      fontSize: initialFontSize,
      gap: initialGap,
      targetMouseX: 0,
      currentMouseX: 0,
      movementMultiplier: 650,
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
      if (videoContainer) {
        videoContainer.style.transform = `translateY(${animationState.currentTranslateY}%) translateX(${animationState.currentMouseX}px) scale(${scale})`;
        videoContainer.style.gap = `${gap}em`;
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
            finalTranslateY,
            animationState.scrollProgress
          );
          animationState.scale = gsap.utils.interpolate(
            initialScale,
            finalScale,
            animationState.scrollProgress
          );
          animationState.gap = gsap.utils.interpolate(
            initialGap,
            finalGap,
            animationState.scrollProgress
          );
          if (animationState.scrollProgress <= 0.4) {
            const firstPartProgress = animationState.scrollProgress / 0.4;
            animationState.fontSize = gsap.utils.interpolate(
              initialFontSize,
              midFontSize,
              firstPartProgress
            );
          } else {
            const secondPartProgress =
              (animationState.scrollProgress - 0.4) / 0.6;
            animationState.fontSize = gsap.utils.interpolate(
              midFontSize,
              finalFontSize,
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
      gsap.killTweensOf(videoContainer);
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [
    initialTranslateY,
    finalTranslateY,
    initialScale,
    finalScale,
    initialFontSize,
    midFontSize,
    finalFontSize,
    initialGap,
    finalGap,
    videoSrc,
  ]);

  return (
    <div
      className="pp-neue-world-font video-container-desktop relative flex flex-col gap-[2em] will-change-transform translate-y-[20%]"
      ref={videoContainerRef}
    >
      <div className="video-preview relative w-full aspect-[16/9] rounded-[1.5rem] bg-[#b9b9b3] overflow-hidden">
        <div className="video-wrapper absolute top-0 left-0 w-full h-full rounded-[1.5rem] overflow-hidden">
          {videoSrc.endsWith(".mp4") ? (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full rounded-[1.5rem] object-cover pointer-events-none"
            />
          ) : (
            <iframe
              src={videoSrc}
              frameBorder="0"
              allow="autoplay; fullscreen"
              referrerPolicy="no-referrer"
              loading="lazy"
              title="video"
              className="absolute top-0 left-0 w-full h-full rounded-[1.5rem] pointer-events-none"
            ></iframe>
          )}
        </div>
      </div>
      <div className="video-title">
        <p
          ref={(el) => {
            videoTitleRefs.current[0] = el;
          }}
          className="relative font-medium text-[78px]"
        >
          {title1}
        </p>
        <p
          ref={(el) => {
            videoTitleRefs.current[1] = el;
          }}
          className="relative font-medium text-[78px]"
        >
          {title2}
        </p>
      </div>
    </div>
  );
};

export default VideoShowcase;
