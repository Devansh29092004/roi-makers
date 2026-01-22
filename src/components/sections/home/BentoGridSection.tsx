//  "use client";
// import React from "react";
// import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   IconArrowWaveRightUp,
//   IconBoxAlignRightFilled,
//   IconBoxAlignTopLeft,
//   IconClipboardCopy,
//   IconFileBroken,
//   IconSignature,
//   IconTableColumn,
// } from "@tabler/icons-react";

// export function BentoGridSection() {
//   return (
//     <section style={{ backgroundColor: '#FFFFFF' }} className="py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Why Choose Us
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Discover what makes us different and how we deliver exceptional results
//           </p>
//         </div>
//         <BentoGrid className="max-w-7xl mx-auto">
//           {items.map((item, i) => (
//             <BentoGridItem
//               key={i}
//               title={item.title}
//               description={item.description}
//               header={item.header}
//               icon={item.icon}
//               className={i === 3 || i === 6 ? "md:col-span-2" : ""}
//             />
//           ))}
//         </BentoGrid>
//       </div>
//     </section>
//   );
// }

// const SkeletonOne = () => {
//   const variants = {
//     initial: { x: 0 },
//     animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
//   };
//   const variantsSecond = {
//     initial: { x: 0 },
//     animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
//   };

//   return (
//     <motion.div
//       initial="initial"
//       whileHover="animate"
//       className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2 rounded-2xl p-4 bg-gradient-to-br from-neutral-100 to-neutral-200"
//     >
//       <motion.div
//         variants={variants}
//         className="flex flex-row rounded-full border border-neutral-300 p-2 items-center space-x-2 bg-white"
//       >
//         <div className="h-6 w-6 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shrink-0" />
//         <div className="w-full bg-neutral-200 h-4 rounded-full" />
//       </motion.div>
//       <motion.div
//         variants={variantsSecond}
//         className="flex flex-row rounded-full border border-neutral-300 p-2 items-center space-x-2 w-3/4 ml-auto bg-white"
//       >
//         <div className="w-full bg-neutral-200 h-4 rounded-full" />
//         <div className="h-6 w-6 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shrink-0" />
//       </motion.div>
//       <motion.div
//         variants={variants}
//         className="flex flex-row rounded-full border border-neutral-300 p-2 items-center space-x-2 bg-white"
//       >
//         <div className="h-6 w-6 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shrink-0" />
//         <div className="w-full bg-neutral-200 h-4 rounded-full" />
//       </motion.div>
//     </motion.div>
//   );
// };

// const SkeletonTwo = () => {
//   const variants = {
//     initial: { width: 0 },
//     animate: { width: "100%", transition: { duration: 0.2 } },
//     hover: { width: ["0%", "100%"], transition: { duration: 2 } },
//   };
//   const arr = new Array(6).fill(0);
  
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       whileHover="hover"
//       className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2 rounded-2xl p-4 bg-gradient-to-br from-neutral-100 to-neutral-200"
//     >
//       {arr.map((_, i) => (
//         <motion.div
//           key={"skeleton-two" + i}
//           variants={variants}
//           style={{ maxWidth: Math.random() * (100 - 40) + 40 + "%" }}
//           className="flex flex-row rounded-full border border-neutral-300 p-2 items-center space-x-2 bg-white w-full h-4"
//         />
//       ))}
//     </motion.div>
//   );
// };

// const SkeletonThree = () => {
//   const variants = {
//     initial: { backgroundPosition: "0 50%" },
//     animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
//   };
  
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       variants={variants}
//       transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
//       className="flex flex-1 w-full h-full min-h-[6rem] rounded-2xl"
//       style={{
//         background: "linear-gradient(-45deg, #f97316, #fb923c, #fdba74, #fed7aa)",
//         backgroundSize: "400% 400%",
//       }}
//     >
//       <motion.div className="h-full w-full rounded-2xl" />
//     </motion.div>
//   );
// };

// const SkeletonFour = () => {
//   const first = {
//     initial: { x: 20, rotate: -5 },
//     hover: { x: 0, rotate: 0 },
//   };
//   const second = {
//     initial: { x: -20, rotate: 5 },
//     hover: { x: 0, rotate: 0 },
//   };
  
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       whileHover="hover"
//       className="flex flex-1 w-full h-full min-h-[6rem] rounded-2xl flex-row space-x-2 p-2 bg-gradient-to-br from-neutral-100 to-neutral-200"
//     >
//       <motion.div
//         variants={first}
//         className="h-full w-1/3 rounded-2xl bg-white p-4 border border-neutral-300 flex flex-col items-center justify-center"
//       >
//         <div className="rounded-full h-14 w-14 bg-gradient-to-r from-orange-400 to-amber-400 flex items-center justify-center text-white font-bold text-xl">
//           R
//         </div>
//         <p className="sm:text-sm text-xs text-center font-semibold text-neutral-600 mt-4">
//           ROI Focused
//         </p>
//         <p className="border border-orange-500 bg-orange-100 text-orange-700 text-xs rounded-full px-2 py-0.5 mt-4">
//           Essential
//         </p>
//       </motion.div>
//       <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 border border-neutral-300 flex flex-col items-center justify-center">
//         <div className="rounded-full h-14 w-14 bg-gradient-to-r from-amber-400 to-yellow-400 flex items-center justify-center text-white font-bold text-xl">
//           D
//         </div>
//         <p className="sm:text-sm text-xs text-center font-semibold text-neutral-600 mt-4">
//           Data Driven
//         </p>
//         <p className="border border-green-500 bg-green-100 text-green-700 text-xs rounded-full px-2 py-0.5 mt-4">
//           Smart
//         </p>
//       </motion.div>
//       <motion.div
//         variants={second}
//         className="h-full w-1/3 rounded-2xl bg-white p-4 border border-neutral-300 flex flex-col items-center justify-center"
//       >
//         <div className="rounded-full h-14 w-14 bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-xl">
//           C
//         </div>
//         <p className="sm:text-sm text-xs text-center font-semibold text-neutral-600 mt-4">
//           Creative
//         </p>
//         <p className="border border-blue-500 bg-blue-100 text-blue-700 text-xs rounded-full px-2 py-0.5 mt-4">
//           Innovative
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// };

// const SkeletonFive = () => {
//   const variants = {
//     initial: { x: 0 },
//     animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
//   };
//   const variantsSecond = {
//     initial: { x: 0 },
//     animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
//   };

//   return (
//     <motion.div
//       initial="initial"
//       whileHover="animate"
//       className="flex flex-1 w-full h-full min-h-[6rem] rounded-2xl flex-col space-y-2 p-4 bg-gradient-to-br from-neutral-100 to-neutral-200"
//     >
//       <motion.div
//         variants={variants}
//         className="flex flex-row rounded-2xl border border-neutral-300 p-3 items-start space-x-2 bg-white"
//       >
//         <div className="rounded-full h-10 w-10 bg-gradient-to-r from-orange-400 to-amber-400 shrink-0 flex items-center justify-center text-white font-bold text-sm">
//           Q
//         </div>
//         <p className="text-xs text-neutral-600 leading-relaxed">
//           We deliver strategic solutions that drive measurable results for your business growth...
//         </p>
//       </motion.div>
//       <motion.div
//         variants={variantsSecond}
//         className="flex flex-row rounded-full border border-neutral-300 p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white"
//       >
//         <p className="text-xs text-neutral-600">Let's grow together.</p>
//         <div className="h-6 w-6 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shrink-0" />
//       </motion.div>
//     </motion.div>
//   );
// };

// const SkeletonSix = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//       className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative"
//     >
//       <Image
//         src="/images/stack/6.webp"
//         alt="Partnership"
//         fill
//         className="object-cover transition-transform duration-300 hover:scale-110"
//         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//       />
//     </motion.div>
//   );
// };

// const SkeletonSeven = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//       className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative"
//     >
//       <Image
//         src="/flower.webp"
//         alt="Track Record"
//         fill
//         className="object-cover transition-transform duration-300 hover:scale-110"
//         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//       />
//     </motion.div>
//   );
// };

// const items = [
//   {
//     title: "Strategic Excellence",
//     description: "Data-driven strategies that deliver measurable ROI and sustainable growth.",
//     header: <SkeletonOne />,
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Creative Innovation",
//     description: "Fresh perspectives and cutting-edge solutions that set you apart.",
//     header: <SkeletonTwo />,
//     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Technical Mastery",
//     description: "Expert implementation across all digital platforms and technologies.",
//     header: <SkeletonThree />,
//     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "End-to-End Solutions",
//     description:
//       "From strategy to execution, we handle every aspect of your digital presence with precision and care.",
//     header: <SkeletonFour />,
//     icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Agile Approach",
//     description: "Flexible methodologies that adapt to your evolving business needs.",
//     header: <SkeletonFive />,
//     icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Client Partnership",
//     description: "Collaborative relationships built on transparency and shared success.",
//     header: <SkeletonSix />,
//     icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Proven Track Record",
//     description: "Years of experience delivering results for brands across industries with measurable impact.",
//     header: <SkeletonSeven />,
//     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
//   },
// ];
