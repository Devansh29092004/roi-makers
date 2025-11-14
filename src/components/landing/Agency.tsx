'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Agency(): React.ReactElement {
  return (
    <section className={cn(
      "relative min-h-screen w-full overflow-hidden flex items-center",
      "text-black",
      "py-8 md:py-12 px-4"
    )}>
      {/* Grid Background */}
      <div 
        className={cn(
          "absolute inset-0",
          "opacity-20"
        )}
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className={cn(
        "relative z-10 max-w-7xl mx-auto text-gray-900 w-full"
      )}>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-full py-8 md:py-0">
          
          {/* Left Content */}
          <motion.div
            className="space-y-4 md:space-y-6 order-2 lg:order-1"
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
                We're the{" "}
                <span className="text-gray-900">best agency</span>
                <br />
                in downtown.
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              The professional approach to development.
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg"
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
                  <div className="w-2 h-2 bg-gray-900 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 text-base sm:text-lg">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Experience Card */}
          <motion.div
            className="flex justify-center items-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Main Experience Card */}
              <motion.div
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl md:rounded-3xl p-6 md:p-8 text-center shadow-2xl backdrop-blur-lg border border-gray-200"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Award className="w-12 h-12 md:w-16 md:h-16 mx-auto text-gray-900" />
                </motion.div>
                
                <motion.div
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  viewport={{ once: true }}
                >
                  8+
                </motion.div>
                
                <motion.p
                  className="text-gray-700 text-base md:text-lg font-medium mb-4 md:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  Years of Experience
                </motion.p>

                {/* CTA Button */}
                <motion.button
                  className="group bg-[#FF9933] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-orange-600 transition-all duration-300 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  viewport={{ once: true }}
                >
                  Explore now
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}