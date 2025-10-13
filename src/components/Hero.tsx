'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import Silk to avoid SSR issues with Three.js
const Silk = dynamic(() => import('@/components/ui/Silk'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-black to-black" />
});

export default function Hero() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-gradient-to-br from-black to-black">
      {/* Glassmorphism container */}
      <div className="glass-section w-full h-[95vh] relative max-w-[95vw] mx-auto mt-1 md:mt-4 mb-1 md:mb-4 rounded-xl md:rounded-2xl overflow-hidden backdrop-blur-xl border border-[#FF9933]/30 shadow-[0_8px_32px_rgba(255,153,51,0.2),0_0_0_1px_rgba(255,153,51,0.15),inset_0_1px_0_rgba(255,255,255,0.3)] flex flex-col justify-center items-center px-4 md:px-8 py-6 md:py-8 gap-4 md:gap-6">
        
        {/* Silk animated background inside glassmorphism */}
        <div className="absolute inset-0 w-full h-full rounded-xl md:rounded-2xl">
          <Silk
            speed={5}
            scale={1}
            color="#FF9933"
            noiseIntensity={2}
            rotation={1}
          />
        </div>
        
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-grey/40 via-black/20 to-white/10 rounded-xl md:rounded-2xl"></div>
        
        {/* Centered Content */}
        <section className="relative z-10 flex flex-col items-center justify-center text-center px-2 md:px-4 flex-1 w-full">
          {/* Awards & Tagline */}
          <motion.div 
            className="mb-3 md:mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-white text-xs md:text-sm font-semibold mb-2 px-2">#1 MOST RECOMMENDED PERFORMANCE MARKETING AGENCY</div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-2">
              <span className="text-[#FF9933] text-xs md:text-sm">★★★★★</span>
              <span className="text-white text-xs md:text-sm">GOOGLE</span>
              <span className="text-white text-xs md:text-sm">CLUTCH</span>
              <span className="text-white text-xs md:text-sm">FACEBOOK</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-2 flex flex-col items-center px-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <span className="mb-2">We Create</span>
            <span className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span>Category</span>
              {/* <span className="inline-block rounded-lg md:rounded-xl overflow-hidden bg-[#FF9933]/20 backdrop-blur-lg p-1 md:p-2 shadow-lg border border-[#FF9933]/30"> */}
                {/* <img 
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=100&fit=crop&crop=faces" 
                  alt="Team" 
                  className="w-16 h-10 sm:w-20 sm:h-12 md:w-32 md:h-20 lg:w-40 lg:h-24 object-cover rounded"
                /> */}
              {/* </span> */}
              <span>Leaders</span>
            </span>
          </motion.h1>
          <motion.div 
            className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-6 md:mb-8 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            through data-driven ROI optimization
          </motion.div>
        </section>

        {/* Footer Texts */}
        <motion.div 
          className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start w-full mt-6 md:mt-8 gap-4 md:gap-0 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="text-white text-xs sm:text-sm max-w-lg text-center md:text-left">
            Performance marketing specialists creating, optimizing & scaling <br className="hidden md:block" />
            <span className="font-bold">ROI-focused</span> campaigns for sustainable growth
          </div>
          <div className="text-white text-xs sm:text-sm text-center md:text-right">
            218-B ,Trade Center,South Tukoganj <br className="hidden md:block" /> 
            Indore , Madhya Pradesh 452001
          </div>
        </motion.div>
      </div>
    </main>
  );
}
