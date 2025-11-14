// 'use client';

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// interface HeroProps {
//   showLoading: boolean;
//   showHero: boolean;
//   showContent: boolean;
//   onLoadingFinish: () => void;
// }

// export default function Hero({ showLoading, showHero, showContent, onLoadingFinish }: HeroProps) {
//   const heroTitleRef = useRef<HTMLHeadingElement>(null);
//   const subtitleRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!showLoading && heroTitleRef.current) {
//       // Animate hero title
//       gsap.fromTo(
//         heroTitleRef.current,
//         { opacity: 0, y: 50 },
//         { 
//           opacity: 1, 
//           y: 0, 
//           duration: 1, 
//           ease: "power2.out",
//           onComplete: () => {
//             // Trigger content to show after hero animation
//             setTimeout(() => onLoadingFinish(), 200);
//           }
//         }
//       );
//     }
//   }, [showLoading, onLoadingFinish]);

//   useEffect(() => {
//     if (showContent && subtitleRef.current) {
//       gsap.fromTo(
//         subtitleRef.current,
//         { opacity: 0, y: 30 },
//         { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.2 }
//       );
//     }
//   }, [showContent]);

//   return (
//     <section className="hero flex flex-col justify-between pt-[8em] sm:pt-[9em] md:pt-[6em] h-[100svh] w-full px-4 md:px-[2.5em] relative">
//       <div>
//         <h1
//           ref={heroTitleRef}
//           className="relative uppercase font-black left-[-0.05em] text-[18vw] sm:text-[20vw] md:text-[25vw] tracking-[-0.04em] leading-[1] select-none"
//           style={{ opacity: showHero ? 1 : 0 }}
//         >
//           ROI<span className="align-super text-[0.5em] ml-1">™</span>
//         </h1>
//         {showContent && (
//           <div
//             className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-0"
//             ref={subtitleRef}
//           >
//             <p className="text-xl sm:text-2xl md:text-[3vw] md:w-[50%] pp-neue-world-font font-normal select-none">
//               Strategy, design, and campaigns for ambitious companies.
//             </p>
//             <p className="text-[18px] md:text-[20px] font-medium hidden md:flex select-none">
//               {"{"}Scroll{"}"}
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
