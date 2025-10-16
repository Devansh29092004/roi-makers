"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

gsap.registerPlugin(SplitText);

export type TeamInfo = {
  fullName: string;
  role: string;
  bio: string;
  fun?: string;
};

export type TeamShowcaseProps = {
  teamNames: string[];
  teamImages: string[];
  teamInfo: TeamInfo[];
  title?: string;
};

const TeamShowcase: React.FC<TeamShowcaseProps> = ({
  teamNames,
  teamImages,
  teamInfo,
  title = "{ Meet }",
}) => {
  const imagesRef = useRef<HTMLDivElement>(null);
  const namesRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const prevActiveIndex = useRef<number | null>(null);

  useEffect(() => {
    const profileImagesContainer = imagesRef.current;
    const profileImages = imagesRef.current?.querySelectorAll(".img") ?? [];
    const nameElements = namesRef.current?.querySelectorAll(".name") ?? [];
    const nameHeadings = namesRef.current?.querySelectorAll(".name h1") ?? [];

    // Split all h1s into chars and add 'letter' class
    nameHeadings.forEach((heading) => {
      const splitText = SplitText.create(heading, { type: "chars" });
      (splitText.chars as Element[]).forEach((char) => {
        (char as HTMLElement).classList.add("letter");
      });
    });

    const defaultLetters = nameElements[0]?.querySelectorAll(".letter") ?? [];
    gsap.set(defaultLetters, { y: "100%" });

    if (window.innerWidth >= 900) {
      profileImages.forEach((img, index) => {
        const correspondingName = nameElements[index + 1];
        if (!correspondingName) return;
        const letters = correspondingName.querySelectorAll(".letter");

        img.addEventListener("mouseenter", () => {
          gsap.to(img, {
            width: 140,
            height: 140,
            duration: 0.4,
            ease: "power4.out",
          });

          gsap.to(letters, {
            y: "-100%",
            duration: 0.4,
            stagger: {
              each: 0.08,
              from: "center",
            },
          });
        });

        img.addEventListener("mouseleave", () => {
          gsap.to(img, {
            width: 70,
            height: 70,
            duration: 0.4,
            ease: "power4.out",
          });

          gsap.to(letters, {
            y: "0%",
            duration: 0.4,
            stagger: {
              each: 0.08,
              from: "center",
            },
          });
        });
      });

      profileImagesContainer?.addEventListener("mouseenter", () => {
        gsap.to(defaultLetters, {
          y: "0%",
          ease: "power4.out",
          duration: 0.4,
          stagger: {
            each: 0.08,
            from: "center",
          },
        });
      });

      profileImagesContainer?.addEventListener("mouseleave", () => {
        gsap.to(defaultLetters, {
          y: "100%",
          duration: 0.4,
          stagger: {
            each: 0.08,
            from: "center",
          },
        });
      });
    }
  }, [teamNames, teamImages, teamInfo]);

  // Mobile tap effect with exit animation and index+1 mapping
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth >= 900) return;
    const nameElements = namesRef.current?.querySelectorAll(".name") ?? [];
    // Animate previous active name out
    if (
      prevActiveIndex.current !== null &&
      prevActiveIndex.current !== activeIndex &&
      nameElements[prevActiveIndex.current + 1]
    ) {
      const prevLetters =
        nameElements[prevActiveIndex.current + 1].querySelectorAll(".letter");
      gsap.to(prevLetters, {
        y: "0%",
        duration: 0.3,
        stagger: { each: 0.06, from: "center" },
        onComplete: () => {
          // Animate new active name in
          if (activeIndex !== null && nameElements[activeIndex + 1]) {
            const newLetters =
              nameElements[activeIndex + 1].querySelectorAll(".letter");
            gsap.to(newLetters, {
              y: "-100%",
              duration: 0.4,
              stagger: { each: 0.08, from: "center" },
            });
          }
        },
      });
    } else if (activeIndex !== null && nameElements[activeIndex + 1]) {
      // No previous, just animate in
      const newLetters =
        nameElements[activeIndex + 1].querySelectorAll(".letter");
      gsap.to(newLetters, {
        y: "-100%",
        duration: 0.4,
        stagger: { each: 0.08, from: "center" },
      });
    }
    // Animate Core (index 0) out when a profile is active, in when not
    const coreLetters = nameElements[0]?.querySelectorAll(".letter") ?? [];
    if (activeIndex !== null) {
      gsap.to(coreLetters, {
        y: "100%",
        duration: 0.3,
        stagger: { each: 0.06, from: "center" },
      });
    } else {
      gsap.to(coreLetters, {
        y: "0%",
        duration: 0.4,
        stagger: { each: 0.08, from: "center" },
      });
    }
    // Reset all others
    nameElements.forEach((el, i) => {
      if (activeIndex === null || i !== activeIndex + 1) {
        const letters = el.querySelectorAll(".letter");
        gsap.to(letters, {
          y: "0%",
          duration: 0.3,
          stagger: { each: 0.06, from: "center" },
        });
      }
    });
    prevActiveIndex.current = activeIndex;
  }, [activeIndex, teamInfo]);

  const handleImageTap = (index: number) => {
    if (typeof window !== "undefined" && window.innerWidth < 900) {
      setActiveIndex((prev) => (prev === index ? null : index));
    }
  };

  return (
    <Card className="team-section bg-foreground border-4 border-muted w-screen h-[100svh] flex md:flex-col justify-center items-center md:gap-[2.5em] gap-4 overflow-hidden relative team-page m-0 p-0 box-border flex-col-reverse md:flex-nowrap">
      <CardHeader className="absolute top-55 md:top-38 left-0 w-full  flex justify-center items-center secondary-font">
        <CardTitle className="text-4xl text-background">{title}</CardTitle>
      </CardHeader>
      <div
        className="profile-images flex flex-wrap md:flex-nowrap justify-center items-center w-full md:w-max max-w-[90%] md:max-w-none"
        ref={imagesRef}
      >
        {teamImages.map((src, i) => (
          <div
            className="img relative w-[60px] h-[60px] p-[10px] cursor-pointer will-change-[width,height] md:w-[70px] md:h-[70px] md:p-[0.5rem]"
            key={i}
            tabIndex={0}
            aria-label={`Profile image for ${teamNames[i + 1] || teamNames[0]}`}
            role="img"
            onClick={() => handleImageTap(i)}
            onMouseEnter={() => {
              if (window.innerWidth >= 900) setActiveIndex(i);
            }}
            onMouseLeave={() => {
              if (window.innerWidth >= 900) setActiveIndex(null);
            }}
          >
            <Image
              src={src}
              alt={`Profile of ${teamNames[i + 1] || teamNames[0]}`}
              width={70}
              height={70}
              className="w-full h-full object-cover rounded-lg"
              priority={i < 3}
            />
          </div>
        ))}
      </div>
      <div
        className="profile-names relative flex items-center justify-center w-full h-[4rem] md:h-[15rem] overflow-hidden z-10"
        ref={namesRef}
      >
        {teamNames.map((name, i) => (
          <div
            className={`name${i === 0 ? " default" : ""} w-full h-full`}
            key={i}
          >
            <h1
              className={
                `split absolute w-full text-center uppercase font-extrabold leading-none select-none z-10 ` +
                `font-['Barlow_Condensed'] text-[4rem] tracking-[0] drop-shadow-lg md:text-[13rem] md:tracking-[-0.5rem] ` +
                (i === 0
                  ? "text-[#e3e3db] -translate-x-1/2 -translate-y-[60%] left-1/2 top-1/2 md:-translate-y-[150%]"
                  : "text-[#f93535] -translate-x-1/2 translate-y-[50%] left-1/2 top-1/2 md:translate-y-[50%]")
              }
              style={{
                fontFamily: "Barlow Condensed, Arial,  sans-serif",
              }}
            >
              {i === 0
                ? name
                : teamInfo[i - 1]?.fullName?.split(" ")[0] || name}
            </h1>
          </div>
        ))}
      </div>
      {/* Animated Info Card */}
      <AnimatePresence>
        {activeIndex !== null && teamInfo[activeIndex] && (
          <Card
            key={activeIndex}
            className="absolute left-1/2 -translate-x-1/2 bottom-8 w-[calc(100%-40px)] max-w-2xl md:max-w-4xl bg-foreground rounded-xl shadow-xl p-0 secondary-font border-none h-[100px] max-md:h-[200px] flex flex-col justify-center items-center"
            style={{ zIndex: 20 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              className="w-full h-full flex flex-row justify-between items-center p-6 gap-6 mx-20 max-md:mx-2"
            >
              {/* Left: Name and Role */}
              <div className="flex flex-col h-full items-start min-w-[120px] max-w-[40%]">
                <h3 className="text-2xl font-bold text-background leading-tight">
                  {teamInfo[activeIndex]?.fullName ||
                    teamNames[activeIndex + 1]}
                </h3>
                <p className="text-sm text-background font-semibold mt-1">
                  {teamInfo[activeIndex].role}
                </p>
              </div>
              {/* Right: Bio and Fun Fact */}
              <div className="flex-1 text-left pl-6 border-l-4 border-accent flex flex-col justify-center h-full">
                <div className="flex items-start gap-2">
                  <span className="text-3xl  select-none leading-none text-[#f93535]">
                    “
                  </span>
                  <span className="text-lg md:text-xl text-background font-medium leading-snug">
                    {teamInfo[activeIndex].bio}
                  </span>
                </div>
                {teamInfo[activeIndex].fun && (
                  <span className="block text-sm text-[#f93535] italic mt-2 pl-8">
                    {teamInfo[activeIndex].fun}
                  </span>
                )}
              </div>
            </motion.div>
          </Card>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default TeamShowcase;
