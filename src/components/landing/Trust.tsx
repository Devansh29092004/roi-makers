'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { WobbleCard } from '../ui/wobble-card';
import { cn } from '@/lib/utils';

export default function Trust() {
  const features = [
    "Committed to client satisfaction.",
    "Adapting to global standards.",
    "Reliable and transparent services.",
    "Trusted partner for growth."
  ];

  const coreFeatures = [
    {
      number: "01",
      title: "TOTAL DESIGN FREEDOM FOR EVERYONE",
      subtitle: "CORE FEATURES"
    },
    {
      number: "02", 
      title: "BASIC RULES OF RUNNING WEB AGENCY",
      subtitle: "CORE FEATURES"
    }
  ];

  return (
    <section className={cn(
      "relative min-h-screen w-full overflow-hidden",
      "bg-gradient-to-br from-gray-900 via-black to-gray-800",
      "py-20 px-4"
    )}>
      <div className={cn(
        "relative z-10 max-w-7xl mx-auto"
      )}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
          
          {/* Orange Commitment Card */}
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-orange-500 to-orange-600 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <motion.h2 
                className="text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                ROI Makers powers the entire business universe
              </motion.h2>
              <motion.p
                className="text-white/90 text-sm md:text-base mt-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                With over 1,200 satisfied clients, ROI Makers is the most trusted platform for businesses.
              </motion.p>
            </div>
          </WobbleCard>

          {/* White Trust Card */}
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-white border border-gray-200">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-tight text-black">
                No compromises, no shortcuts, no limits.
              </h2>
              
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                When quality matters most, excellence is the only standard we accept.
              </p>
            </motion.div>
          </WobbleCard>

          {/* Core Features Cards */}
          <div className="col-span-1 lg:col-span-1 space-y-6">
            {coreFeatures.map((feature, index) => (
              <WobbleCard
                key={feature.number}
                containerClassName={`h-[200px] ${
                  index === 0 
                    ? 'bg-black border border-gray-800' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index === 0 
                        ? 'bg-orange-500' 
                        : 'bg-orange-100'
                    }`}>
                      <span className={`font-bold text-sm ${
                        index === 0 ? 'text-white' : 'text-orange-600'
                      }`}>{feature.number}</span>
                    </div>
                    <span className={`text-xs uppercase tracking-wider font-medium ${
                      index === 0 ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {feature.subtitle}
                    </span>
                  </div>
                  <h3 className={`text-sm md:text-base font-bold leading-tight ${
                    index === 0 ? 'text-white' : 'text-black'
                  }`}>
                    {feature.title}
                  </h3>
                </motion.div>
              </WobbleCard>
            ))}
          </div>

          {/* Client Image and Features Card */}
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-black border border-gray-800 min-h-[400px]">
            <div className="grid md:grid-cols-2 gap-8 h-full">
              {/* Client Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden bg-gray-800 min-h-[200px] border border-gray-700"
              >
                {/* Placeholder for client image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <p className="text-sm font-medium">Signup for blazing-fast cutting-edge</p>
                    <p className="text-xs text-gray-400 mt-1">ROI Makers solutions today!</p>
                  </div>
                </div>
              </motion.div>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-6 flex flex-col justify-center"
              >
                <h3 className="text-white text-lg md:text-xl font-bold">
                  With over 1,200 satisfied clients, ROI Makers is the most trusted platform for businesses.
                </h3>
                
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}