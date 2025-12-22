'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import Footer from '@/components/global/Footer';

const servicesData: Record<string, {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  process: { step: string; description: string }[];
}> = {
  'digital-pr': {
    title: 'Digital PR',
    description: 'Build your brand reputation and earn high-quality backlinks through strategic digital PR campaigns that get you featured in top-tier publications.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Media Outreach & Relationship Building',
      'Press Release Distribution',
      'Influencer Partnerships',
      'Crisis Management',
      'Brand Reputation Monitoring',
      'High-Authority Link Building'
    ],
    benefits: [
      'Increase brand visibility and credibility',
      'Earn high-quality backlinks from authoritative sources',
      'Build relationships with key media contacts',
      'Improve search engine rankings',
      'Generate positive brand sentiment'
    ],
    process: [
      { step: 'Research', description: 'Identify target publications and media contacts relevant to your industry' },
      { step: 'Strategy', description: 'Develop compelling story angles and newsworthy content' },
      { step: 'Outreach', description: 'Connect with journalists and influencers to secure coverage' },
      { step: 'Amplify', description: 'Promote secured coverage across channels for maximum impact' }
    ]
  },
  'search-growth-strategy': {
    title: 'Search & Growth Strategy',
    description: 'Develop a comprehensive search strategy that drives sustainable growth through organic search, paid campaigns, and conversion optimization.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
    features: [
      'SEO Strategy & Implementation',
      'PPC Campaign Management',
      'Conversion Rate Optimization',
      'Keyword Research & Analysis',
      'Competitor Analysis',
      'Growth Roadmap Development'
    ],
    benefits: [
      'Achieve sustainable organic traffic growth',
      'Maximize ROI on paid campaigns',
      'Improve conversion rates across channels',
      'Gain competitive advantage in search',
      'Data-driven decision making'
    ],
    process: [
      { step: 'Audit', description: 'Comprehensive analysis of current search performance and opportunities' },
      { step: 'Planning', description: 'Create detailed roadmap with prioritized initiatives' },
      { step: 'Execution', description: 'Implement strategies across SEO, PPC, and CRO' },
      { step: 'Optimization', description: 'Continuously test and refine based on performance data' }
    ]
  },
  'data-insights': {
    title: 'Data & Insights',
    description: 'Transform raw data into actionable insights that drive business decisions and marketing performance through advanced analytics and reporting.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Custom Analytics Dashboards',
      'Performance Tracking & Reporting',
      'Predictive Analytics',
      'Customer Journey Mapping',
      'Attribution Modeling',
      'Data Visualization'
    ],
    benefits: [
      'Make data-driven marketing decisions',
      'Understand customer behavior patterns',
      'Identify growth opportunities',
      'Optimize marketing spend',
      'Improve forecasting accuracy'
    ],
    process: [
      { step: 'Collection', description: 'Set up tracking and data collection across all channels' },
      { step: 'Analysis', description: 'Process and analyze data to uncover insights' },
      { step: 'Visualization', description: 'Create clear dashboards and reports' },
      { step: 'Action', description: 'Implement recommendations based on insights' }
    ]
  },
  'organic-social-content': {
    title: 'Organic Social & Content',
    description: 'Build authentic connections with your audience through engaging social media content and strategic community management.',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Social Media Strategy',
      'Content Creation & Curation',
      'Community Management',
      'Social Listening',
      'Influencer Collaboration',
      'Platform Optimization'
    ],
    benefits: [
      'Grow engaged social media following',
      'Build brand loyalty and trust',
      'Generate user-generated content',
      'Increase organic reach',
      'Drive website traffic from social'
    ],
    process: [
      { step: 'Strategy', description: 'Define social media goals and content pillars' },
      { step: 'Creation', description: 'Develop engaging content calendar' },
      { step: 'Engagement', description: 'Active community management and response' },
      { step: 'Growth', description: 'Optimize and scale successful content' }
    ]
  },
  'content-experience': {
    title: 'Content Experience',
    description: 'Create immersive content experiences that engage, educate, and convert your audience at every stage of their journey.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Content Strategy & Planning',
      'Interactive Content Creation',
      'Video Production',
      'User Experience Design',
      'Content Distribution',
      'Performance Optimization'
    ],
    benefits: [
      'Increase engagement and time on site',
      'Improve content conversion rates',
      'Create memorable brand experiences',
      'Generate qualified leads',
      'Build thought leadership'
    ],
    process: [
      { step: 'Discovery', description: 'Understand audience needs and content gaps' },
      { step: 'Design', description: 'Create engaging content experiences' },
      { step: 'Develop', description: 'Build and test interactive elements' },
      { step: 'Distribute', description: 'Launch and promote across channels' }
    ]
  },
  'onsite-seo': {
    title: 'Onsite SEO',
    description: 'Optimize your website for search engines and users with comprehensive technical SEO, content optimization, and site architecture improvements.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Technical SEO Audit',
      'On-Page Optimization',
      'Site Architecture Planning',
      'Core Web Vitals Optimization',
      'Schema Markup Implementation',
      'Internal Linking Strategy'
    ],
    benefits: [
      'Improve search engine rankings',
      'Enhance user experience',
      'Increase organic traffic',
      'Better crawlability and indexation',
      'Higher conversion rates'
    ],
    process: [
      { step: 'Audit', description: 'Comprehensive technical and on-page SEO analysis' },
      { step: 'Prioritize', description: 'Create prioritized list of optimization opportunities' },
      { step: 'Implement', description: 'Execute technical and content optimizations' },
      { step: 'Monitor', description: 'Track performance and make ongoing improvements' }
    ]
  }
};

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full boska-font" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060010]/80 via-[#060010]/60 to-[#060010]/40" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 text-[#E9E4D7]/80 hover:text-[#E9E4D7] transition-colors duration-300 mb-6 text-sm uppercase tracking-wider clash-display-font"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#E9E4D7] mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-[#E9E4D7]/90 max-w-3xl archivo-font leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="uppercase tracking-[0.5em] text-xs font-semibold text-[#8c7b62] clash-display-font mb-4">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#060010]">
            Comprehensive Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-[24px] border border-[#060010]/10 bg-white/80 p-6 shadow-[0_20px_60px_-40px_rgba(6,0,16,0.25)] hover:shadow-[0_30px_90px_-40px_rgba(6,0,16,0.4)] transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#ff9933] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-base text-[#060010] archivo-font leading-relaxed">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="rounded-[40px] border border-[#060010]/10 bg-gradient-to-br from-[#060010] to-[#312619] p-12 md:p-16 shadow-2xl">
            <p className="uppercase tracking-[0.5em] text-xs font-semibold text-[#ff9933] clash-display-font mb-4">
              Key Benefits
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-[#E9E4D7]">
              Why Choose This Service
            </h2>
            <ul className="grid md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-[#ff9933] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-lg text-[#E9E4D7]/90 archivo-font leading-relaxed">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="uppercase tracking-[0.5em] text-xs font-semibold text-[#8c7b62] clash-display-font mb-4">
            Our Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#060010]">
            How We Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-[28px] border border-[#060010]/10 bg-white/80 p-8 shadow-[0_20px_60px_-40px_rgba(6,0,16,0.25)] hover:shadow-[0_30px_90px_-40px_rgba(6,0,16,0.4)] transition-all duration-300"
              >
                <div className="text-5xl font-black text-[#ff9933] mb-4 clash-display-font">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#060010]">
                  {step.step}
                </h3>
                <p className="text-sm text-[#312619]/80 archivo-font leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-[#E9E4D7]/80 archivo-font max-w-2xl mx-auto">
            Let's discuss how our {service.title.toLowerCase()} services can drive measurable growth for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#E9E4D7] text-[#060010] rounded-full font-semibold text-sm uppercase tracking-wider clash-display-font hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start a Project <span aria-hidden>→</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#E9E4D7] text-[#E9E4D7] rounded-full font-semibold text-sm uppercase tracking-wider clash-display-font hover:bg-[#E9E4D7] hover:text-[#060010] transition-all duration-300 hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
