'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [stars, setStars] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
  }>>([]);

  // Generate stars only on client side to avoid hydration mismatch
  useEffect(() => {
    const generatedStars = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-950 relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full opacity-60"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-orange-900/30" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Back Button */}
        <motion.div
          className="absolute top-8 left-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link 
            href="/"
            className="flex items-center gap-2 text-white hover:text-[#FF9933] transition-colors duration-300 text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Icon */}
          <motion.div
            className="mb-8 flex justify-center"
            animate={{ 
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-[#FF9933] to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
              <Users className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            About Us
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-2xl md:text-3xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Our story is being written
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            We're preparing to share the incredible journey of ROI Makers - from our humble beginnings 
            to becoming a category leader in performance marketing. Our story of innovation, client success, 
            and team excellence will inspire you.
          </motion.p>

          {/* Coming Soon Badge */}
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF9933]/20 to-orange-600/20 border border-[#FF9933]/40 rounded-full px-8 py-4 backdrop-blur-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-3 h-3 bg-[#FF9933] rounded-full animate-pulse" />
            <span className="text-white font-semibold text-lg">Under Construction</span>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 opacity-30">
          <motion.div
            animate={{ 
              y: [-15, 15, -15],
              rotate: [0, 180, 360] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-4 h-4 bg-[#FF9933] rounded-full"
          />
        </div>

        <div className="absolute bottom-20 right-20 opacity-30">
          <motion.div
            animate={{ 
              y: [15, -15, 15],
              scale: [1, 1.5, 1] 
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-6 bg-white rounded-full"
          />
        </div>
      </div>
    </div>
  );
}