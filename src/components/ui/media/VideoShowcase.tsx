"use client";
import React from "react";

interface VideoShowcaseProps {
  videoSrc: string;
  className?: string;
  containerClassName?: string;
}

/**
 * VideoShowcase Component
 * 
 * A clean, reusable video display component that handles both video files and iframe embeds.
 * Optimized for performance with proper aspect ratio and rounded corners.
 * 
 * @param videoSrc - URL to video file (.mp4, .webm) or iframe embed (YouTube, Vimeo)
 * @param className - Additional classes for the inner video/iframe element
 * @param containerClassName - Additional classes for the outer container
 */
const VideoShowcase: React.FC<VideoShowcaseProps> = ({
  videoSrc,
  className = "",
  containerClassName = "",
}) => {
  const isVideoFile = videoSrc.endsWith(".mp4") || videoSrc.endsWith(".webm");

  return (
    <div 
      className={`relative w-full aspect-[16/9] rounded-[1rem] overflow-hidden ${containerClassName}`}
      style={{
        backgroundColor: '#1a365d',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      }}
    >
      {isVideoFile ? (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute top-0 left-0 w-full h-full object-cover pointer-events-none ${className}`}
        />
      ) : (
        <iframe
          src={videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          title="Video showcase"
          className={`absolute top-0 left-0 w-full h-full pointer-events-none ${className}`}
        />
      )}
    </div>
  );
};

export default VideoShowcase;

// Legacy commented code below for reference - can be deleted after migration

//     const videoContainer = videoContainerRef.current;
//     const lenis = new Lenis();
//     lenis.on("scroll", ScrollTrigger.update);

//     gsap.ticker.add((time) => {
//       lenis.raf(time * 1000);
//     });
//     gsap.ticker.lagSmoothing(0);

//     const animationState = {
//       scrollProgress: 0,
//       initialTranslateY,
//       currentTranslateY: initialTranslateY,
//       scale: initialScale,
//       fontSize: initialFontSize,
//       gap: initialGap,
//       targetMouseX: 0,
//       currentMouseX: 0,
//       movementMultiplier: 650,
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       animationState.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
//     };
//     document.addEventListener("mousemove", handleMouseMove);

//     let rafId: number;
//     const animate = () => {
//       if (window.innerWidth < 900) return;
//       const { scale, targetMouseX, currentMouseX, gap, movementMultiplier } =
//         animationState;
//       const scaleMovementMultiplier = (1 - scale) * movementMultiplier;
//       const maxHorizontalMovement =
//         scale < 0.95 ? targetMouseX * scaleMovementMultiplier : 0;
//       animationState.currentMouseX = gsap.utils.interpolate(
//         currentMouseX,
//         maxHorizontalMovement,
//         0.05
//       );
//       if (videoContainer) {
//         videoContainer.style.transform = `translateY(${animationState.currentTranslateY}%) translateX(${animationState.currentMouseX}px) scale(${scale})`;
//         videoContainer.style.gap = `${gap}em`;
//       }
//       rafId = requestAnimationFrame(animate);
//     };
//     animate();

//     gsap.timeline({
//       scrollTrigger: {
//         trigger: ".intro",
//         start: "top bottom",
//         end: "top 10%",
//         scrub: true,
//         onUpdate: (self) => {
//           animationState.scrollProgress = self.progress;

//           animationState.currentTranslateY = gsap.utils.interpolate(
//             animationState.initialTranslateY,
//             finalTranslateY,
//             animationState.scrollProgress
//           );
//           animationState.scale = gsap.utils.interpolate(
//             initialScale,
//             finalScale,
//             animationState.scrollProgress
//           );
//           animationState.gap = gsap.utils.interpolate(
//             initialGap,
//             finalGap,
//             animationState.scrollProgress
//           );
//           if (animationState.scrollProgress <= 0.4) {
//             const firstPartProgress = animationState.scrollProgress / 0.4;
//             animationState.fontSize = gsap.utils.interpolate(
//               initialFontSize,
//               midFontSize,
//               firstPartProgress
//             );
//           } else {
//             const secondPartProgress =
//               (animationState.scrollProgress - 0.4) / 0.6;
//             animationState.fontSize = gsap.utils.interpolate(
//               midFontSize,
//               finalFontSize,
//               secondPartProgress
//             );
//           }

//           // Apply font size to video titles
//           videoTitleRefs.current.forEach((el) => {
//             if (el) el.style.fontSize = `${animationState.fontSize}px`;
//           });
//         },
//       },
//     });

//     return () => {
//       gsap.killTweensOf(videoContainer);
//       gsap.ticker.remove(lenis.raf);
//       lenis.destroy();
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       document.removeEventListener("mousemove", handleMouseMove);
//       cancelAnimationFrame(rafId);
//     };
//   }, [
//     initialTranslateY,
//     finalTranslateY,
//     initialScale,
//     finalScale,
//     initialFontSize,
//     midFontSize,
//     finalFontSize,
//     initialGap,
//     finalGap,
//     videoSrc,
//   ]);

//   return (
//     <div
//       className="pp-neue-world-font video-container-desktop relative flex flex-col gap-[2em] will-change-transform translate-y-[20%]"
//       ref={videoContainerRef}
//     >
//       <div className="video-preview relative w-full aspect-[16/9] rounded-[1.5rem] bg-[#b9b9b3] overflow-hidden">
//         <div className="video-wrapper absolute top-0 left-0 w-full h-full rounded-[1.5rem] overflow-hidden">
//           {videoSrc.endsWith(".mp4") ? (
//             <video
//               src={videoSrc}
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="absolute top-0 left-0 w-full h-full rounded-[1.5rem] object-cover pointer-events-none"
//             />
//           ) : (
//             <iframe
//               src={videoSrc}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               allowFullScreen
//               loading="lazy"
//               title="video"
//               className="absolute top-0 left-0 w-full h-full rounded-[1.5rem] pointer-events-none"
//             ></iframe>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoShowcase;
