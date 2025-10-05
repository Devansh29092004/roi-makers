'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 1,
    title: "BOOST YOUR BRAND WITH PERFORMANCE MARKETING",
    description: "Transform your digital presence with data-driven performance marketing strategies that deliver measurable results and maximum ROI.",
    details: "Our performance marketing approach focuses on conversion optimization, advanced analytics, and strategic campaign management to boost your brand visibility and drive qualified leads.",
    percentage: 85
  },
  {
    id: 2,
    title: "BUILD YOUR BUSINESS WITH WEBSITE DEVELOPMENT",
    description: "Create stunning, responsive websites that convert visitors into customers with our cutting-edge development solutions.",
    details: "We specialize in modern web technologies, user experience design, and scalable architecture to build websites that perform exceptionally across all devices and platforms.",
    percentage: 92
  },
  {
    id: 3,
    title: "MAXIMIZE SALES WITH SHOPIFY DEVELOPMENT",
    description: "Launch and scale your e-commerce business with custom Shopify solutions designed for growth and conversions.",
    details: "Our Shopify expertise includes custom theme development, app integrations, performance optimization, and conversion rate optimization to maximize your online sales potential.",
    percentage: 78
  }
];

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section className={cn(
      "relative min-h-screen w-full overflow-hidden",
      "bg-gradient-to-br from-gray-50 via-white to-gray-100",
      "py-12 md:py-16 lg:py-20 px-4"
    )}>
      {/* Subtle Grid Background */}
      <div 
        className={cn(
          "absolute inset-0",
          "opacity-[0.02]"
        )}
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 0'
        }}
      />

      <div className={cn(
        "relative z-10 max-w-7xl mx-auto"
      )}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Content Section */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-black">
                WE DO MORE THEN EVER
                <br />
                <span className="relative">
                  PLATFORMS
                  <span className="text-[#FF9933]">.</span>
                  {/* Decorative underline */}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-[#FF9933]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </span>
              </h2>
            </motion.div>

            {/* ROI Makers Logo Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="relative">
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">RM</span>
                </div>
                {/* Floating dots animation */}
                <motion.div
                  className="absolute -top-2 -right-2 w-3 h-3 bg-[#FF9933] rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">ROI MAKERS</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-8 h-0.5 bg-[#FF9933]"></div>
                  <span className="text-sm text-gray-600">Digital Agency</span>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md"
            >
              There are many variants of passages the majority have suffered alteration in some form randomised words believable.
            </motion.p>

            {/* Performance Marketing Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
                  PERFORMANCE MARKETING
                </span>
                <span className="text-lg font-bold text-black">70%</span>
              </div>
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#FF9933] to-orange-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          </div>

          {/* Right Content - Expandable Services */}
          <div className="lg:col-span-7">
            <div className="space-y-3 md:space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300",
                    expandedService === service.id ? "bg-black text-white" : "bg-white hover:bg-gray-50"
                  )}
                >
                  {/* Service Header */}
                  <motion.div
                    className={cn(
                      "flex items-center justify-between p-4 md:p-6 cursor-pointer",
                      "border-b border-gray-200 last:border-b-0"
                    )}
                    onClick={() => toggleService(service.id)}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-4">
                      <span className={cn(
                        "text-2xl font-bold",
                        expandedService === service.id ? "text-[#FF9933]" : "text-gray-400"
                      )}>
                        {service.id}.
                      </span>
                      <h3 className={cn(
                        "text-lg font-bold tracking-wide",
                        expandedService === service.id ? "text-white" : "text-black"
                      )}>
                        {service.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedService === service.id ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center",
                        expandedService === service.id ? "bg-[#FF9933]" : "bg-gray-100"
                      )}
                    >
                      <Plus className={cn(
                        "w-4 h-4",
                        expandedService === service.id ? "text-white" : "text-gray-600"
                      )} />
                    </motion.div>
                  </motion.div>

                  {/* Expandable Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedService === service.id ? "auto" : 0,
                      opacity: expandedService === service.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 space-y-4">
                      <p className={cn(
                        "text-base leading-relaxed",
                        expandedService === service.id ? "text-gray-300" : "text-gray-600"
                      )}>
                        {service.description}
                      </p>
                      <p className={cn(
                        "text-sm leading-relaxed",
                        expandedService === service.id ? "text-gray-400" : "text-gray-500"
                      )}>
                        {service.details}
                      </p>
                      
                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Success Rate</span>
                          <span className="text-sm font-bold">{service.percentage}%</span>
                        </div>
                        <div className="relative h-1 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#FF9933] to-orange-400 rounded-full"
                            initial={{ width: 0 }}
                            animate={{
                              width: expandedService === service.id ? `${service.percentage}%` : 0
                            }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}