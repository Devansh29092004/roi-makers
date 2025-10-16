'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

export default function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  });

  // Adjusted to show all cards properly without cutting off
  // With 7 cards total (6 projects + 1 CTA), we need to scroll enough to show them all
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-95%']);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Revolution',
      category: 'Shopify Development',
      description: 'Transformed a traditional retail business into a thriving online marketplace with 300% revenue growth in 6 months.',
      metrics: { value: '300%', label: 'Revenue Growth' },
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 2,
      title: 'Healthcare Digital Transformation',
      category: 'Website Development',
      description: 'Built a comprehensive patient portal and booking system serving 10,000+ patients monthly.',
      metrics: { value: '10K+', label: 'Active Users' },
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      title: 'SaaS Performance Boost',
      category: 'Performance Marketing',
      description: 'Optimized marketing campaigns resulting in 5x ROI and 60% reduction in customer acquisition cost.',
      metrics: { value: '5x', label: 'ROI Increase' },
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      title: 'Social Media Domination',
      category: 'Social Media Marketing',
      description: 'Grew brand presence from 5K to 250K followers with 12% average engagement rate across platforms.',
      metrics: { value: '250K', label: 'Followers' },
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      color: 'from-green-500 to-teal-500',
    },
    {
      id: 5,
      title: 'SEO Success Story',
      category: 'Search Engine Optimization',
      description: 'Achieved #1 rankings for 50+ keywords, driving 400% increase in organic traffic within 8 months.',
      metrics: { value: '400%', label: 'Traffic Growth' },
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 6,
      title: 'Immersive Virtual Tour',
      category: 'Virtual Tours',
      description: 'Created stunning 360° virtual experiences for real estate, increasing property inquiries by 250%.',
      metrics: { value: '250%', label: 'More Inquiries' },
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section ref={targetRef} className="relative bg-background">
      {/* Header Section */}
      <div className="relative z-10 px-8 md:px-16 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Our Success Stories
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Real results, real impact. Explore how we've helped businesses achieve remarkable growth.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Section */}
      <div className="relative h-[400vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 px-8 py-8">
            {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[40vw] h-[70vh] rounded-3xl overflow-hidden group"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={cn(
                  'absolute inset-0 bg-gradient-to-br opacity-80 mix-blend-multiply',
                  project.color
                )} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    <span className="text-white text-sm font-medium">{project.category}</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-6 pt-4">
                    <div className="space-y-1">
                      <div className="text-3xl md:text-4xl font-bold text-[#FF9933]">
                        {project.metrics.value}
                      </div>
                      <div className="text-sm text-gray-300 font-medium">
                        {project.metrics.label}
                      </div>
                    </div>
                    
                    <button className="ml-auto px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-[#FF9933] hover:text-white transition-all duration-300 transform hover:scale-105">
                      View Case Study →
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-8 right-8 w-24 h-24 bg-white/10 rounded-full blur-3xl" />
            </motion.div>
          ))}

          {/* Final CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[40vw] h-[70vh] rounded-3xl overflow-hidden bg-gradient-to-br from-[#FF9933] to-orange-600 flex items-center justify-center p-8 md:p-12"
          >
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Ready to Create Your Success Story?
                </h3>
                <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                  Let's transform your vision into measurable results
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-[#FF9933] font-bold rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 text-lg">
                  Start Your Project
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#FF9933] transition-all duration-300 transform hover:scale-105 text-lg">
                  View All Work
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
