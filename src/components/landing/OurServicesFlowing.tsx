'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import FlowingMenu from '../FlowingMenu';
import { useState, useEffect } from 'react';

export default function OurServicesFlowing() {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    // Show hint on mobile only
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      const timer = setTimeout(() => setShowHint(true), 500);
      const hideTimer = setTimeout(() => setShowHint(false), 4000);
      
      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  const services = [
    {
      text: "Digital PR",
      link: "#digital-pr",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=center"
    },
    {
      text: "Social & Social Search",
      link: "#social-search",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center"
    },
    {
      text: "Search & Growth Strategy",
      link: "#search-strategy",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"
    },
    {
      text: "Content Experience",
      link: "#content-experience",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center"
    },
    {
      text: "Data & Insights",
      link: "#data-insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
    },
    {
      text: "Onsite SEO",
      link: "#onsite-seo",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop&crop=center"
    }
  ];

  return (
    <section className={cn(
      "relative w-full overflow-hidden",
      "py-12 md:py-16 lg:py-20 px-4"
    )}
    style={{ backgroundColor: '#E9E4D7' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-12 lg:mb-16 gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gray-800 rounded-xl overflow-hidden shrink-0"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=64&h=64&fit=crop&crop=faces"
                alt="Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black"
            >
              Our Services
            </motion.h2>
          </div>
          
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden sm:flex items-center gap-2 text-black hover:text-orange-500 transition-colors group"
          >
            <span className="text-lg font-medium">View All Services</span>
            <div className="w-6 h-6 flex items-center justify-center">
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.button>
        </div>

        {/* Desktop Services Grid with FlowingMenu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-[120px] rounded-xl overflow-hidden"
            >
              <FlowingMenu items={[service]} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Services Grid with FlowingMenu and Touch Support */}
        <div className="md:hidden relative">
          {/* Tap Hint */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ 
              opacity: showHint ? 1 : 0,
              y: showHint ? 0 : -10
            }}
            transition={{ duration: 0.5 }}
            className="absolute -top-8 left-0 right-0 flex items-center justify-center gap-2 text-orange-500 text-sm font-medium z-10 pointer-events-none"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
            </svg>
            <span>Tap cards to explore</span>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="h-[140px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <FlowingMenu items={[service]} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-colors shadow-lg w-full sm:w-auto"
          >
            Discover All Our Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}