"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export interface ImageWallProps {
  heroText?: string;
  heroTextClassName?: string;
  lines?: string[];
  buttonText?: string;
  footerContent?: React.ReactNode;
  stackImageCount?: number; // number of images in /images/stack
}

const defaultLines = [
  "Creative strategy. Impactful design.",
  "Campaigns that move brands forward.",
  "Partner with Mocko™ for your next leap.",
];

const ImageWall: React.FC<ImageWallProps> = ({
  heroText = "See how we transform brands",
  lines = defaultLines,
  buttonText = "Work With Us",
  footerContent = (
    <div className="w-full hidden  flex-col items-start gap-2 p-4 z-2">
      <span className="text-3xl font-bold tracking-tight">Mocko™</span>
      <span className="text-lg">
        Strategy, design, and campaigns for ambitious brands.
      </span>
      <span className="text-base opacity-70">hello@mocko.agency</span>
    </div>
  ),
  stackImageCount = 6,
}) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLDivElement>(null);

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= stackImageCount; i += 2) {
      rows.push(
        <div
          className="row relative w-screen my-4 flex justify-center gap-[2em]"
          key={i}
        >
          <div className="relative w-[40%] h-[360px] rounded-[0.75em] overflow-hidden will-change-transform card-left ">
            <Image
              src={`/images/stack/${i}.jpg`}
              alt=""
              width={600}
              height={360}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <div className="relative w-[40%] h-[360px] rounded-[0.75em] overflow-hidden will-change-transform card-right">
            <Image
              src={`/images/stack/${i + 1}.jpg`}
              alt=""
              width={600}
              height={360}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </div>
      );
    }
    return rows;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollTriggerSettings = {
      trigger: mainRef.current,
      start: "top 25%",
      toggleActions: "play reverse play reverse",
    };

    const leftXValues = [-600, -750, -600];
    const rightXValues = [600, 750, 600];
    const leftRotationValues = [20, -10, -35];
    const rightRotationValues = [-30, 10, 35];
    const yValues = [-30, -140, -300];

    const rows = mainRef.current?.querySelectorAll(".row") ?? [];
    rows.forEach((row, index) => {
      const leftCard = row.querySelector(".card-left");
      const rightCard = row.querySelector(".card-right");

      if (leftCard) {
        gsap.to(leftCard, {
          x: leftXValues[index % leftXValues.length],
          rotation: leftRotationValues[index % leftRotationValues.length],
          y: yValues[index % yValues.length],
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top center",
            end: "150% bottom",
            scrub: true,
            // markers: true,
          },
          duration: 0.5,
        });
      }
      if (rightCard) {
        gsap.to(rightCard, {
          x: rightXValues[index % rightXValues.length],
          rotation: rightRotationValues[index % rightRotationValues.length],
          y: yValues[index % yValues.length],
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top center",
            end: "150% bottom",
            scrub: true,
          },
          duration: 1,
        });
      }
    });

    gsap.to(".logo", {
      scale: 1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    gsap.to(".line p", {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    gsap.to("button", {
      y: 0,
      opacity: 1,
      delay: 0.25,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    // Hero fade up animation
    if (heroRef.current && headlineRef.current && subheadlineRef.current) {
      gsap.set(
        [headlineRef.current, approachRef.current, subheadlineRef.current],
        {
          opacity: 0,
          y: 40,
        }
      );
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top 70%",
        once: true,
        onEnter: () => {
          gsap.to(
            [headlineRef.current, approachRef.current, subheadlineRef.current],
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              stagger: 0.15,
            }
          );
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [stackImageCount, lines, buttonText, footerContent, heroText]);

  return (
    <div className="boska-font overflow-x-clip bg-background">
      {/* Approach Hero Section */}
      <section
        ref={heroRef}
        className="w-full flex flex-col items-center justify-center px-[2.5em] pt-24 pb-16"
      >
        <div className="flex w-full max-w-7xl mx-auto items-start gap-8">
          {/* Left Arrow */}
          <div className="flex-shrink-0 hidden md:flex flex-col items-start justify-start pt-2 min-w-[60px]">
            <span className="flex text-[3.5rem] md:text-[4.5rem] font-bold leading-none">
              &rarr;
            </span>
          </div>
          {/* Headline */}
          <div className="flex-1">
            <h2
              ref={headlineRef}
              className="text-[2.5rem] md:text-[3.5rem] font-bold leading-tight tracking-tight mb-12"
              style={{ lineHeight: 1.05 }}
            >
              Defining how brands move, scale,
              <br className="hidden md:block" />
              and express themselves across
              <br className="hidden md:block" />
              modern media
            </h2>
            {/* Two-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div
                ref={approachRef}
                className="text-2xl text-black/80 flex items-start font-bold italic"
              >
                (Approach)
              </div>
              <div ref={subheadlineRef} className="pp-neue-world-font">
                <div className="font-semibold text-xl mb-2">
                  Motion is the new frontier of branding and communication.
                </div>
                <div className="text-gray-500 text-base  leading-relaxed space-y-4">
                  <p>
                    The media landscape has evolved, brands are called to scale
                    beyond static and adapt to the world of motion. With
                    countless digital touchpoints and an increasingly saturated
                    market, they seek consistency across platforms while
                    striving to uniquely stand out.
                  </p>

                  <p>
                    As a boutique studio, we seamlessly integrate as an
                    extension of these teams—gaining a deep understanding of
                    each brand&apos;s essence and goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Approach Hero Section */}
      <section
        ref={mainRef}
        className="main w-screen min-h-[150vh] md:flex flex-col items-center relative bg-background hidden"
      >
        <div className="main-content flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
          <div className="copy flex flex-col items-center justify-center m-8">
            {lines.map((line, idx) => (
              <div
                className="line w-max min-h-[2.5em] flex items-center overflow-hidden mb-5"
                key={idx}
              >
                <p className="text-foreground clash-display-font tracking font-medium text-3xl md:text-[2.5vw] translate-y-10 opacity-0 transition-transform duration-100 py-1">
                  {line}
                </p>
              </div>
            ))}
            <div className="btn mt-4">
              <Button
                className="relative overflow-hidden text-background  cursor-pointer border-0 rounded-full px-10 py-4 text-2xl font-semibold bg-foreground shadow-lg opacity-0 translate-y-8 transition-all duration-300 ease-out hover:scale-105 focus:scale-105 active:scale-100 group"
                style={{ boxShadow: "0 4px 24px 0 rgba(255, 72, 146, 0.15)" }}
              >
                <span className="relative z-10">{buttonText}</span>
                <span
                  className="absolute left-[-75%] top-0 w-1/2 h-full bg-white opacity-20 rotate-12 group-hover:animate-shine"
                  aria-hidden="true"
                />
              </Button>
              <style jsx global>{`
                @keyframes shine {
                  0% {
                    left: -75%;
                  }
                  60% {
                    left: 120%;
                  }
                  100% {
                    left: 120%;
                  }
                }
                .group:hover .group-hover\\:animate-shine {
                  animation: shine 1.1s cubic-bezier(0.4, 0, 0.2, 1);
                }
              `}</style>
            </div>
          </div>
        </div>
        {generateRows()}
      </section>
      <section className="footer flex items-start justify-center z-[2]text-foreground bg-background">
        {footerContent}
      </section>
    </div>
  );
};

export default ImageWall;
