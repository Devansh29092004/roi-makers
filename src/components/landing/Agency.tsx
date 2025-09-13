'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Award, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function Agency() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const calculateBubbleOffset = (bubbleRef: any, intensity: number = 30) => {
    if (!bubbleRef) return { x: 0, y: 0 };
    
    const bubbleRect = bubbleRef.getBoundingClientRect();
    const bubbleCenterX = bubbleRect.left + bubbleRect.width / 2;
    const bubbleCenterY = bubbleRect.top + bubbleRect.height / 2;
    
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - bubbleCenterX, 2) + 
      Math.pow(mousePosition.y - bubbleCenterY, 2)
    );
    
    if (distance < 150) {
      const angle = Math.atan2(
        bubbleCenterY - mousePosition.y,
        bubbleCenterX - mousePosition.x
      );
      const force = Math.max(0, (150 - distance) / 150) * intensity;
      return {
        x: Math.cos(angle) * force,
        y: Math.sin(angle) * force
      };
    }
    
    return { x: 0, y: 0 };
  };
  return (
    <section className={cn(
      "relative h-screen w-full overflow-hidden flex items-center",
      "bg-black",
      "py-12 px-4"
    )}>
      {/* Primary Grid Pattern - Bright and Visible */}
      <div 
        className={cn(
          "absolute inset-0",
          "opacity-30"
        )}
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 0'
        }}
      />
      
      {/* Secondary Grid Layer with Motion */}
      <motion.div 
        className={cn(
          "absolute inset-0",
          "opacity-20"
        )}
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px', '0px 0px']
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '40px 40px'
        }}
      />

      {/* Tertiary Grid for Depth */}
      <div 
        className={cn(
          "absolute inset-0",
          "opacity-10"
        )}
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          backgroundPosition: '60px 60px'
        }}
      />

      {/* Subtle Dark Gradient Overlay */}
      <motion.div 
        className={cn(
          "absolute inset-0",
          "bg-gradient-to-br from-black/80 via-black/60 to-black/80"
        )}
        animate={{
          background: [
            "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%)",
            "linear-gradient(225deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)",
            "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%)"
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className={cn(
        "relative z-10 max-w-7xl mx-auto text-white w-full"
      )}>
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                We're the{" "}
                <span className="text-white">best agency</span>
                <br />
                in downtown.
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              The professional approach to development.
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-400 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Unlock the Power of Digital Marketing: Boost Your Business and Reach Your Target Audience Today.
            </motion.p>

            {/* Features List */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                'Accelerate Your Online Growth.',
                'Drive Sales Through Digitally.',
                'Boost Your Online Presences.'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <p className="text-gray-300 text-lg">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Experience Card */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Experience Card */}
              <motion.div
                className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-center shadow-2xl backdrop-blur-lg border border-gray-600"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Award className="w-16 h-16 mx-auto text-white" />
                </motion.div>
                
                <motion.div
                  className="text-6xl md:text-7xl font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  viewport={{ once: true }}
                >
                  8+
                </motion.div>
                
                <motion.p
                  className="text-gray-300 text-lg font-medium mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  Years of Experience
                </motion.p>

                {/* CTA Button - ORANGE */}
                <motion.button
                  className="group bg-[#FF9933] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-orange-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  viewport={{ once: true }}
                >
                  Explore now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              {/* Interactive Bubbles System - 10 Total Bubbles with Mouse Avoidance */}
              
              {/* Bubble 1 - Dark Orange Top Right */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-orange-800 to-orange-900 rounded-full cursor-pointer border border-orange-700/40 shadow-lg bubble-1"
                animate={{ 
                  y: [-8, 8, -8],
                  scale: [1, 1.1, 1]
                }}
                whileHover={{ 
                  scale: 2,
                  backgroundColor: "rgba(194, 65, 12, 0.8)",
                  boxShadow: "0 0 30px rgba(194, 65, 12, 0.6)",
                  borderColor: "rgba(194, 65, 12, 0.8)"
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  transform: `translate(${mousePosition.x ? calculateBubbleOffset(document.querySelector('.bubble-1'), 25).x : 0}px, ${mousePosition.y ? calculateBubbleOffset(document.querySelector('.bubble-1'), 25).y : 0}px)`
                }}
              />
              
              {/* Bubble 2 - Dark Black Bottom Left */}
              <motion.div
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-full cursor-pointer border border-gray-600/30 shadow-lg bubble-2"
                animate={{ 
                  y: [10, -10, 10],
                  x: [-3, 3, -3],
                  rotate: [0, 180, 360]
                }}
                whileHover={{ 
                  scale: 1.8,
                  backgroundColor: "rgba(17, 24, 39, 0.9)",
                  boxShadow: "0 0 25px rgba(17, 24, 39, 0.7)",
                  y: -15
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                style={{
                  transform: `translate(${mousePosition.x ? calculateBubbleOffset(document.querySelector('.bubble-2'), 30).x : 0}px, ${mousePosition.y ? calculateBubbleOffset(document.querySelector('.bubble-2'), 30).y : 0}px)`
                }}
              />
              
              {/* Bubble 3 - Dark Orange Top Center */}
              <motion.div
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-orange-700 to-red-900 rounded-full cursor-pointer border border-orange-600/50 shadow-md bubble-3"
                animate={{ 
                  y: [-5, 15, -5],
                  scale: [0.9, 1.3, 0.9]
                }}
                whileHover={{ 
                  scale: 2.5,
                  backgroundColor: "rgba(180, 83, 9, 0.9)",
                  boxShadow: "0 0 40px rgba(180, 83, 9, 0.8)",
                  rotate: 360
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{
                  transform: `translate(${mousePosition.x ? calculateBubbleOffset(document.querySelector('.bubble-3'), 35).x : 0}px, ${mousePosition.y ? calculateBubbleOffset(document.querySelector('.bubble-3'), 35).y : 0}px)`
                }}
              />
              
              {/* Bubble 4 - Dark Black Right Side */}
              <motion.div
                className="absolute top-1/3 -right-4 w-10 h-10 bg-gradient-to-br from-gray-900 to-black rounded-full cursor-pointer border border-gray-700/25 shadow-md bubble-4"
                animate={{ 
                  x: [-5, 5, -5],
                  y: [-8, 12, -8],
                  opacity: [0.7, 1, 0.7]
                }}
                whileHover={{ 
                  scale: 2.2,
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  boxShadow: "0 0 35px rgba(0, 0, 0, 0.8)",
                  x: 15
                }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                style={{
                  transform: `translate(${mousePosition.x ? calculateBubbleOffset(document.querySelector('.bubble-4'), 28).x : 0}px, ${mousePosition.y ? calculateBubbleOffset(document.querySelector('.bubble-4'), 28).y : 0}px)`
                }}
              />
              
              {/* Bubble 5 - Dark Orange Left Side */}
              <motion.div
                className="absolute bottom-1/4 -left-5 w-14 h-14 bg-gradient-to-br from-orange-900 to-red-800 rounded-full cursor-pointer border border-orange-800/40 shadow-lg bubble-5"
                animate={{ 
                  x: [-4, 8, -4],
                  scale: [1, 1.15, 1],
                  rotate: [0, -90, 0]
                }}
                whileHover={{ 
                  scale: 1.9,
                  backgroundColor: "rgba(153, 27, 27, 0.9)",
                  boxShadow: "0 0 45px rgba(153, 27, 27, 0.7)",
                  x: -20
                }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                style={{
                  transform: `translate(${mousePosition.x ? calculateBubbleOffset(document.querySelector('.bubble-5'), 32).x : 0}px, ${mousePosition.y ? calculateBubbleOffset(document.querySelector('.bubble-5'), 32).y : 0}px)`
                }}
              />
              
              {/* Bubble 6 - Dark Black Bottom Center */}
              <motion.div
                className="absolute -bottom-6 left-1/3 w-9 h-9 bg-gradient-to-br from-black to-gray-800 rounded-full cursor-pointer border border-gray-600/35 shadow-md bubble-6"
                animate={{ 
                  y: [8, -12, 8],
                  x: [-6, 6, -6],
                  scale: [0.95, 1.25, 0.95]
                }}
                whileHover={{ 
                  scale: 2.3,
                  backgroundColor: "rgba(31, 41, 55, 0.9)",
                  boxShadow: "0 0 50px rgba(31, 41, 55, 0.8)",
                  y: -25
                }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                style={{
                  transform: `translate(${mousePosition.x ? calculateBubbleOffset(document.querySelector('.bubble-6'), 26).x : 0}px, ${mousePosition.y ? calculateBubbleOffset(document.querySelector('.bubble-6'), 26).y : 0}px)`
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Background Floating Bubbles - 4 More Interactive Bubbles (7-10) */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Bubble 7 - Dark Orange Large Top Left */}
          <motion.div
            className="absolute top-1/4 left-16 w-24 h-24 bg-gradient-to-br from-orange-800 to-red-900 rounded-full cursor-pointer border border-orange-700/25 shadow-2xl backdrop-blur-sm bubble-7"
            animate={{ 
              scale: [1, 1.3, 1], 
              opacity: [0.6, 0.9, 0.6],
              x: [0, 20, 0],
              y: [0, -15, 0]
            }}
            whileHover={{ 
              scale: 2, 
              backgroundColor: "rgba(180, 83, 9, 0.7)",
              boxShadow: "0 0 60px rgba(180, 83, 9, 0.8)",
              borderColor: "rgba(180, 83, 9, 0.6)"
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              transform: `translate(${mousePosition.x ? calculateBubbleOffset(document.querySelector('.bubble-7'), 40).x : 0}px, ${mousePosition.y ? calculateBubbleOffset(document.querySelector('.bubble-7'), 40).y : 0}px)`
            }}
          />
          
          {/* Bubble 8 - Dark Black Medium Bottom Right */}
          <motion.div
            className="absolute bottom-1/3 right-20 w-20 h-20 bg-gradient-to-br from-gray-900 to-black rounded-full cursor-pointer border border-gray-700/20 shadow-xl backdrop-blur-sm bubble-8"
            animate={{ 
              scale: [1.2, 0.9, 1.2], 
              opacity: [0.5, 0.8, 0.5],
              rotate: [0, 180, 360],
              x: [0, -25, 0]
            }}
            whileHover={{ 
              scale: 2.2, 
              backgroundColor: "rgba(17, 24, 39, 0.8)",
              boxShadow: "0 0 70px rgba(17, 24, 39, 0.9)",
              y: -30
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{
              transform: `translate(${mousePosition.x ? calculateBubbleOffset(document.querySelector('.bubble-8'), 45).x : 0}px, ${mousePosition.y ? calculateBubbleOffset(document.querySelector('.bubble-8'), 45).y : 0}px)`
            }}
          />
          
          {/* Bubble 9 - Dark Orange Small Center Floating */}
          <motion.div
            className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-orange-700 to-orange-900 rounded-full cursor-pointer border border-orange-600/30 shadow-lg backdrop-blur-sm bubble-9"
            animate={{ 
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
              scale: [0.8, 1.4, 1.1, 0.8],
              rotate: [0, 90, 270, 360]
            }}
            whileHover={{ 
              scale: 2.5, 
              backgroundColor: "rgba(194, 65, 12, 0.8)",
              boxShadow: "0 0 80px rgba(194, 65, 12, 0.9)",
              rotate: 720
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{
              transform: `translate(${mousePosition.x ? calculateBubbleOffset(document.querySelector('.bubble-9'), 38).x : 0}px, ${mousePosition.y ? calculateBubbleOffset(document.querySelector('.bubble-9'), 38).y : 0}px)`
            }}
          />
          
          {/* Bubble 10 - Dark Black Extra Large Background */}
          <motion.div
            className="absolute top-1/6 right-1/4 w-28 h-28 bg-gradient-to-br from-black to-gray-800 rounded-full cursor-pointer border border-gray-600/15 shadow-2xl backdrop-blur-lg bubble-10"
            animate={{ 
              scale: [0.9, 1.5, 1.2, 0.9],
              opacity: [0.4, 0.7, 0.9, 0.4],
              x: [0, -30, 15, 0],
              y: [0, 25, -10, 0],
              rotate: [0, -180, 180, 0]
            }}
            whileHover={{ 
              scale: 2.8, 
              backgroundColor: "rgba(31, 41, 55, 0.7)",
              boxShadow: "0 0 100px rgba(31, 41, 55, 0.9)",
              borderColor: "rgba(31, 41, 55, 0.4)",
              filter: "blur(1px)"
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            style={{
              transform: `translate(${mousePosition.x ? calculateBubbleOffset(document.querySelector('.bubble-10'), 50).x : 0}px, ${mousePosition.y ? calculateBubbleOffset(document.querySelector('.bubble-10'), 50).y : 0}px)`
            }}
          />
        </div>
      </div>
    </section>
  );
}