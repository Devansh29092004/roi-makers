'use client';

import { motion } from 'framer-motion';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { 
  TrendingUp, 
  Monitor, 
  ShoppingCart, 
  Store, 
  Share2, 
  Camera 
} from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      title: "Digital Marketing Consulting",
      description: "Strategic digital marketing solutions to boost your online presence and drive growth.",
      link: "#digital-marketing",
      icon: <TrendingUp size={48} />
    },
    {
      title: "Website Development",
      description: "Custom, responsive websites built with modern technologies and best practices.",
      link: "#website-development",
      icon: <Monitor size={48} />
    },
    {
      title: "E-Commerce Development",
      description: "Complete e-commerce solutions and online store development.",
      link: "#ecommerce",
      icon: <ShoppingCart size={48} />
    },
    {
      title: "Shopify Development",
      description: "Custom Shopify stores with advanced features and optimization for maximum sales.",
      link: "#shopify",
      icon: <Store size={48} />
    },
    {
      title: "Social Media Marketing",
      description: "Engaging social media strategies to connect with your audience and build brand loyalty.",
      link: "#social-media",
      icon: <Share2 size={48} />
    },
    {
      title: "Virtual Tours",
      description: "Immersive virtual tour experiences to showcase your business in stunning detail.",
      link: "#virtual-tours",
      icon: <Camera size={48} />
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-orange-50 py-20 px-4">
      <div className="relative z-10 max-w-7xl mx-auto text-gray-900">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We Shape the{" "}
            <span className="text-[#FF9933]">Perfect Solutions</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We are committed to providing our customers with exceptional service 
            while offering our employees the best training.
          </motion.p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <HoverEffect items={solutions} />
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-gradient-to-r hover:from-[#FF9933] hover:to-[#FF7F00] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#FF9933]/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
