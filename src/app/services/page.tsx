'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/global/Footer';

const services = [
  {
    id: 1,
    slug: 'digital-pr',
    title: 'Digital PR',
    shortDesc: 'Build brand authority through strategic media outreach and high-quality backlinks.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    category: 'Brand & Media'
  },
  {
    id: 2,
    slug: 'search-growth-strategy',
    title: 'Search & Growth',
    shortDesc: 'Data-driven SEO and PPC strategies that drive sustainable organic growth.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
    category: 'Performance'
  },
  {
    id: 3,
    slug: 'data-insights',
    title: 'Data & Insights',
    shortDesc: 'Transform raw data into actionable intelligence for smarter decision-making.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80',
    category: 'Analytics'
  },
  {
    id: 4,
    slug: 'organic-social-content',
    title: 'Social & Content',
    shortDesc: 'Engage audiences with authentic social strategies and compelling content.',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80',
    category: 'Creative'
  },
  {
    id: 5,
    slug: 'content-experience',
    title: 'Content Experience',
    shortDesc: 'Create immersive, interactive content that converts visitors into customers.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80',
    category: 'Creative'
  },
  {
    id: 6,
    slug: 'onsite-seo',
    title: 'Onsite SEO',
    shortDesc: 'Technical optimization and on-page SEO to improve rankings and user experience.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
    category: 'Performance'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full boska-font" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.5em] text-xs font-semibold text-[#8c7b62] clash-display-font">
            What We Do
          </p>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#060010]">
            Full-Stack Growth<br />Services
          </h1>
          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-[#312619]/80 max-w-3xl mx-auto archivo-font leading-relaxed">
            From strategy to execution, we offer end-to-end services designed to accelerate your revenue and build lasting competitive advantages.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/services/${service.slug}`}>
                <div className="group rounded-[32px] border border-[#060010]/10 bg-white overflow-hidden shadow-[0_25px_80px_-50px_rgba(6,0,16,0.3)] hover:shadow-[0_30px_90px_-40px_rgba(6,0,16,0.5)] transition-all duration-500 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060010]/80 via-[#060010]/20 to-transparent" />
                    
                    {/* Number Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <span className="text-white font-black text-lg clash-display-font">
                          {String(service.id).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-6 right-6">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white bg-[#ff9933]/90 backdrop-blur-sm px-3 py-1.5 rounded-full clash-display-font font-semibold">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#060010] mb-2 group-hover:text-[#ff9933] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#312619]/80 archivo-font leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>
                    <div className="flex items-center gap-2 text-[#ff9933] text-sm font-semibold uppercase tracking-wider clash-display-font">
                      <span>Learn More</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#060010] text-[#E9E4D7] rounded-[40px] p-12 md:p-16 text-center shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Growth?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-[#E9E4D7]/80 archivo-font max-w-2xl mx-auto">
            Let's build a custom growth system tailored to your unique business goals and market dynamics.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#E9E4D7] text-[#060010] rounded-full font-semibold text-sm uppercase tracking-wider clash-display-font hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start a Project <span aria-hidden>→</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#E9E4D7] text-[#E9E4D7] rounded-full font-semibold text-sm uppercase tracking-wider clash-display-font hover:bg-[#E9E4D7] hover:text-[#060010] transition-all duration-300 hover:scale-105"
            >
              Book a Call
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
