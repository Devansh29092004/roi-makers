'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import FlowingMenu from '../FlowingMenu';

export default function OurServicesFlowing() {
  const services = [
    {
      text: "Digital PR",
      link: "#digital-pr",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200&h=100&fit=crop&crop=center"
    },
    {
      text: "Social & Social Search",
      link: "#social-search",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop&crop=center"
    },
    {
      text: "Search & Growth Strategy",
      link: "#search-strategy",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop&crop=center"
    },
    {
      text: "Content Experience",
      link: "#content-experience",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop&crop=center"
    },
    {
      text: "Data & Insights",
      link: "#data-insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=100&fit=crop&crop=center"
    },
    {
      text: "Onsite SEO",
      link: "#onsite-seo",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=200&h=100&fit=crop&crop=center"
    }
  ];

  return (
    <section className={cn(
      "relative w-full overflow-hidden",
      "bg-gradient-to-br from-gray-50 via-white to-orange-50 py-12 md:py-16 lg:py-20 px-4"
    )}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 md:mb-12 lg:mb-16 gap-4">
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-xl overflow-hidden"
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
            className="flex items-center gap-2 text-black hover:text-orange-500 transition-colors group"
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

        {/* Services Grid with FlowingMenu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg"
          >
            Discover All Our Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}