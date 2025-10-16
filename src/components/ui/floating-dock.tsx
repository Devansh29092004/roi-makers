// import { cn } from "@/lib/utils";
// import {
//   AnimatePresence,
//   MotionValue,
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
// } from "motion/react";

// import { useRef, useState, useCallback, useMemo } from "react";

// export const FloatingDock = ({
//   items,
//   desktopClassName,
//   mobileClassName,
// }: {
//   items: { title: string; icon: React.ReactNode; href: string }[];
//   desktopClassName?: string;
//   mobileClassName?: string;
// }) => {
//   return (
//     <>
//       {/* Only render mobile version - desktop uses resizable navbar */}
//       <FloatingDockMobile items={items} className={mobileClassName} />
//     </>
//   );
// };

// const FloatingDockMobile = ({
//   items,
//   className,
// }: {
//   items: { title: string; icon: React.ReactNode; href: string }[];
//   className?: string;
// }) => {
//   const mouseX = useMotionValue(Infinity);

//   const setMouseX = useCallback(
//     (value: number | null) => {
//       mouseX.set(typeof value === "number" ? value : Infinity);
//     },
//     [mouseX],
//   );

//   const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
//     setMouseX(e.clientX);
//   };

//   const handlePointerLeave = () => {
//     setMouseX(null);
//   };

//   return (
//     <div className={cn("block md:hidden", className)}>
//       <motion.div
//         onPointerMove={handlePointerMove}
//         onPointerLeave={handlePointerLeave}
//   onMouseMove={(e) => setMouseX(e.clientX)}
//         onMouseLeave={() => setMouseX(null)}
//   onTouchStart={(e) => setMouseX(e.touches[0]?.clientX ?? null)}
//   onTouchMove={(e) => setMouseX(e.touches[0]?.clientX ?? null)}
//         onTouchEnd={() => setMouseX(null)}
//         onTouchCancel={() => setMouseX(null)}
//         className="flex items-end gap-3 rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md px-4 py-3 shadow-xl border border-neutral-200 dark:border-neutral-800"
//         initial={{ y: 100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ type: "spring", stiffness: 260, damping: 20 }}
//       >
//         {items.map((item) => (
//           <MobileIconContainer
//             mouseX={mouseX}
//             setMouseX={setMouseX}
//             key={item.title}
//             title={item.title}
//             icon={item.icon}
//             href={item.href}
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// function MobileIconContainer({
//   mouseX,
//   setMouseX,
//   title,
//   icon,
//   href,
// }: {
//   mouseX: MotionValue;
//   setMouseX: (value: number | null) => void;
//   title: string;
//   icon: React.ReactNode;
//   href: string;
// }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const influenceRange = 160;
//   const transforms = useMemo(() => {
//     return {
//       shell: {
//         base: 48,
//         boost: 18,
//       },
//       icon: {
//         base: 24,
//         boost: 10,
//       },
//     };
//   }, []);

//   // Calculate distance from cursor to icon center
//   const distance = useTransform(mouseX, (val) => {
//     const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    
//     // If mouseX is Infinity (cursor not over dock), return large distance
//     if (!isFinite(val)) {
//       return 1000;
//     }
    
//     const center = bounds.x + bounds.width / 2;
//     return val - center;
//   });

//   // Transform distance to size (closer = bigger)
//   const smoothSize = (base: number, boost: number) =>
//     useTransform(distance, (val) => {
//       const absDistance = Math.min(Math.abs(val), influenceRange);
//       if (!Number.isFinite(absDistance)) return base;
//       const proximity = 1 - absDistance / influenceRange;
//       return base + boost * proximity * proximity;
//     });

//   const widthTransform = smoothSize(transforms.shell.base, transforms.shell.boost);
//   const heightTransform = smoothSize(transforms.shell.base, transforms.shell.boost);
//   const widthIconTransform = smoothSize(transforms.icon.base, transforms.icon.boost);
//   const heightIconTransform = smoothSize(transforms.icon.base, transforms.icon.boost);

//   // Apply spring physics for smooth animation
//   const width = useSpring(widthTransform, {
//     mass: 0.15,
//     stiffness: 160,
//     damping: 18,
//   });
//   const height = useSpring(heightTransform, {
//     mass: 0.15,
//     stiffness: 160,
//     damping: 18,
//   });

//   const widthIcon = useSpring(widthIconTransform, {
//     mass: 0.12,
//     stiffness: 180,
//     damping: 20,
//   });
//   const heightIcon = useSpring(heightIconTransform, {
//     mass: 0.12,
//     stiffness: 180,
//     damping: 20,
//   });

//   const [hovered, setHovered] = useState(false);

//   const focusTooltip = useCallback(() => {
//     const bounds = ref.current?.getBoundingClientRect();
//     if (!bounds) return;
//     setMouseX(bounds.x + bounds.width / 2);
//     setHovered(true);
//   }, [setMouseX]);

//   const releaseTooltip = useCallback(() => {
//     setHovered(false);
//     setMouseX(null);
//   }, [setMouseX]);

//   return (
//     <a href={href}>
//       <motion.div
//         ref={ref}
//         style={{ width, height }}
//         onMouseEnter={focusTooltip}
//         onMouseLeave={releaseTooltip}
//         onFocus={focusTooltip}
//         onBlur={releaseTooltip}
//         onPointerDown={focusTooltip}
//         onPointerUp={releaseTooltip}
//         onTouchStart={focusTooltip}
//         onTouchEnd={releaseTooltip}
//         onTouchCancel={releaseTooltip}
//         className="relative flex aspect-square items-center justify-center rounded-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 shadow-lg"
//       >
//         <AnimatePresence>
//           {hovered && (
//             <motion.div
//               initial={{ opacity: 0, y: 10, x: "-50%" }}
//               animate={{ opacity: 1, y: 0, x: "-50%" }}
//               exit={{ opacity: 0, y: 2, x: "-50%" }}
//               className="absolute -top-8 left-1/2 w-fit rounded-md border border-neutral-200 bg-neutral-900 dark:bg-neutral-100 px-2 py-0.5 text-xs whitespace-pre text-white dark:text-neutral-900 shadow-lg"
//             >
//               {title}
//             </motion.div>
//           )}
//         </AnimatePresence>
//         <motion.div
//           style={{ width: widthIcon, height: heightIcon }}
//           className="flex items-center justify-center text-neutral-700 dark:text-neutral-300"
//         >
//           {icon}
//         </motion.div>
//       </motion.div>
//     </a>
//   );
// }

// const FloatingDockDesktop = ({
//   items,
//   className,
// }: {
//   items: { title: string; icon: React.ReactNode; href: string }[];
//   className?: string;
// }) => {
//   const mouseX = useMotionValue(Infinity);
//   return (
//     <motion.div
//       onMouseMove={(e) => mouseX.set(e.clientX)}
//       onMouseLeave={() => mouseX.set(Infinity)}
//       className={cn(
//         "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 md:flex dark:bg-neutral-900",
//         className,
//       )}
//     >
//       {items.map((item) => (
//         <IconContainer mouseX={mouseX} key={item.title} {...item} />
//       ))}
//     </motion.div>
//   );
// };

// function IconContainer({
//   mouseX,
//   title,
//   icon,
//   href,
// }: {
//   mouseX: MotionValue;
//   title: string;
//   icon: React.ReactNode;
//   href: string;
// }) {
//   let ref = useRef<HTMLDivElement>(null);

//   let distance = useTransform(mouseX, (val) => {
//     let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

//     return val - bounds.x - bounds.width / 2;
//   });

//   let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
//   let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

//   let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
//   let heightTransformIcon = useTransform(
//     distance,
//     [-150, 0, 150],
//     [20, 40, 20],
//   );

//   let width = useSpring(widthTransform, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   });
//   let height = useSpring(heightTransform, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   });

//   let widthIcon = useSpring(widthTransformIcon, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   });
//   let heightIcon = useSpring(heightTransformIcon, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   });

//   const [hovered, setHovered] = useState(false);

//   return (
//     <a href={href}>
//       <motion.div
//         ref={ref}
//         style={{ width, height }}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
//       >
//         <AnimatePresence>
//           {hovered && (
//             <motion.div
//               initial={{ opacity: 0, y: 10, x: "-50%" }}
//               animate={{ opacity: 1, y: 0, x: "-50%" }}
//               exit={{ opacity: 0, y: 2, x: "-50%" }}
//               className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
//             >
//               {title}
//             </motion.div>
//           )}
//         </AnimatePresence>
//         <motion.div
//           style={{ width: widthIcon, height: heightIcon }}
//           className="flex items-center justify-center"
//         >
//           {icon}
//         </motion.div>
//       </motion.div>
//     </a>
//   );
// }
