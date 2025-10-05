'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [stars, setStars] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
  }>>([]);

  // Generate stars only on client side to avoid hydration mismatch
  useEffect(() => {
    const generatedStars = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 2,
      delay: Math.random() * 5,
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
            className="absolute bg-white rounded-full opacity-80"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 2, 0.5],
              boxShadow: [
                '0 0 0px rgba(255, 255, 255, 0)',
                '0 0 20px rgba(255, 153, 51, 0.5)',
                '0 0 0px rgba(255, 255, 255, 0)'
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-orange-900/20" />

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
              y: [-15, 15, -15],
              rotateZ: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-[#FF9933] to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
              <Mail className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Contact Us
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-2xl md:text-3xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Let&apos;s start a conversation
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            We&apos;re building an innovative contact experience that will make connecting with our team 
            seamless and efficient. Soon you&apos;ll be able to reach out, schedule consultations, 
            and start your ROI transformation journey with just a few clicks.
          </motion.p>

          {/* Coming Soon Badge */}
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF9933]/20 to-orange-600/20 border border-[#FF9933]/40 rounded-full px-8 py-4 backdrop-blur-lg mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="w-3 h-3 bg-[#FF9933] rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-white font-semibold text-lg">Connect Soon</span>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            {/* Email Card */}
            <motion.div
              className="bg-gradient-to-br from-black/40 to-orange-950/40 backdrop-blur-lg border border-[#FF9933]/30 rounded-xl p-6 text-center"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255, 153, 51, 0.6)' }}
              transition={{ duration: 0.3 }}
            >
              <Mail className="w-8 h-8 text-[#FF9933] mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a 
                href="mailto:hello@roimakers.com"
                className="text-gray-300 hover:text-[#FF9933] transition-colors duration-300"
              >
                hello@roimakers.com
              </a>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              className="bg-gradient-to-br from-black/40 to-orange-950/40 backdrop-blur-lg border border-[#FF9933]/30 rounded-xl p-6 text-center"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255, 153, 51, 0.6)' }}
              transition={{ duration: 0.3 }}
            >
              <Phone className="w-8 h-8 text-[#FF9933] mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">Coming Soon</p>
            </motion.div>

            {/* Location Card */}
            <motion.div
              className="bg-gradient-to-br from-black/40 to-orange-950/40 backdrop-blur-lg border border-[#FF9933]/30 rounded-xl p-6 text-center"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255, 153, 51, 0.6)' }}
              transition={{ duration: 0.3 }}
            >
              <MapPin className="w-8 h-8 text-[#FF9933] mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Offices</h3>
              <p className="text-gray-300 text-sm">UK, USA (NY) & EU</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Contact Elements */}
        <div className="absolute top-1/3 left-16 opacity-20">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Mail className="w-6 h-6 text-[#FF9933]" />
          </motion.div>
        </div>

        <div className="absolute bottom-1/3 right-16 opacity-20">
          <motion.div
            animate={{ 
              rotate: -360,
              y: [-20, 20, -20]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Phone className="w-5 h-5 text-white" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
