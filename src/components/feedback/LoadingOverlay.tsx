"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const TEXT = "ROI-MAKERS™";

const LoadingOverlay: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // Animate each letter: fade in + vertical flip
    gsap.set(lettersRef.current, { opacity: 0, rotateX: -90 });
    gsap.set(overlayRef.current, { opacity: 1 });
    gsap.to(lettersRef.current, {
      opacity: 1,
      rotateX: 0,
      duration: 0.4,
      ease: "back.out(2)",
      stagger: 0.1,
      onComplete: () => {
        // Slide out the whole word to the right and fade (faster)
        const mockoEl = overlayRef.current?.querySelector(".mocko-text");
        if (mockoEl) {
          gsap.to(mockoEl, {
            x: 200,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
            delay: 0.5,
            onComplete: () => {
              if (onFinish) onFinish();
            },
          });
        } else {
          if (onFinish) onFinish();
        }
      },
    });
  }, [onFinish]);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "#FFFFFF",
        pointerEvents: "auto",
      }}
      className="loading-overlay boska-font"
    >
      <div
        className="mocko-text"
        style={{
          position: "fixed",
          right: "3vw",
          bottom: "3vw",
          fontSize: "min(18vw, 7rem)",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          display: "flex",
          gap: "0.05em",
          color: "#111",
          willChange: "transform, opacity",
        }}
        aria-label={TEXT}
      >
        {TEXT.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              lettersRef.current[i] = el;
            }}
            style={{
              display: "inline-block",
              transformStyle: "preserve-3d",
              willChange: "opacity, transform",
            }}
          >
            {char}
          </span>
        ))}
      </div>
      <style jsx>{`
        .loading-overlay {
          background:#FFFFFF;
        }
      `}</style>
    </div>
  );
};

export default LoadingOverlay;
