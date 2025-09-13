'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center">
      {/* Blurred background image */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="w-full h-full object-cover blur-[40px] scale-105 opacity-40 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"
          }}
        />
      </div>

      {/* Glassmorphism container */}
      <div className="glass-section w-full h-screen relative max-w-[95vw] mx-auto mt-8 mb-8 rounded-3xl bg-gradient-to-br from-black/40 via-black/30 to-[#FF9933]/20 backdrop-blur-xl border border-[#FF9933]/30 shadow-2xl flex flex-col justify-center items-center px-8 py-6 gap-8">
        
        {/* Centered Content */}
        <section className="flex flex-col items-center justify-center text-center px-4 flex-1 w-full">
          {/* Awards & Tagline */}
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-white text-xs font-semibold mb-2">#1 MOST RECOMMENDED PERFORMANCE MARKETING AGENCY</div>
            <div className="flex flex-wrap justify-center gap-4 mb-2">
              <span className="text-[#FF9933] text-xs">★★★★★</span>
              <span className="text-white text-xs">GOOGLE</span>
              <span className="text-white text-xs">CLUTCH</span>
              <span className="text-white text-xs">FACEBOOK</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-white text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-2 flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <span>We Create</span>
            <span className="flex items-center gap-4">
              Category
              <span className="inline-block rounded-xl overflow-hidden bg-[#FF9933]/20 backdrop-blur-lg p-2 shadow-lg border border-[#FF9933]/30">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=100&fit=crop&crop=faces" 
                  alt="Team" 
                  className="w-20 h-12 sm:w-32 sm:h-20 md:w-40 md:h-24 object-cover rounded"
                />
              </span>
              <span>Leaders</span>
            </span>
          </motion.h1>
          <motion.div 
            className="text-white text-2xl font-medium mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            through data-driven ROI optimization
          </motion.div>
        </section>

        {/* Footer Texts */}
        <motion.div 
          className="flex justify-between w-full mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="text-white text-sm max-w-lg">
            Performance marketing specialists creating, optimizing & scaling <br />
            <span className="font-bold">ROI-focused</span> campaigns for sustainable growth
          </div>
          <div className="text-white text-sm text-right">
            4 Global Offices serving <br /> 
            UK, USA (New York) & EU
          </div>
        </motion.div>
      </div>
    </main>
  );
}
