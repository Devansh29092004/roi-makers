'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/global/Footer';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });

  const benefits = [
    {
      title: "Flexible Work",
      description: "Remote-first with co-working stipends and quarterly offsites",
    
    },
    {
      title: "Learning Budget",
      description: "₹50K/year for courses, conferences, and certifications",
   
    },
    {
      title: "Health Coverage",
      description: "Comprehensive insurance for you and your family",
      
    },
    {
      title: "Performance Bonus",
      description: "Quarterly bonuses tied to campaign outcomes and team OKRs",
     
    },
    {
      title: "Creative Time",
      description: "20% time for side projects and skill exploration",
      
    },
    {
      title: "Growth Path",
      description: "Clear progression frameworks with regular reviews",
   
    }
  ];

  const openPositions = [
    {
      title: "Senior Performance Strategist",
      department: "Strategy",
      location: "Remote / Indore",
      type: "Full-time",
      description: "Design multi-channel growth experiments and own end-to-end campaign architecture."
    },
    {
      title: "Creative Director",
      department: "Creative",
      location: "Remote / Indore",
      type: "Full-time",
      description: "Lead art direction, motion design, and brand systems for high-velocity campaigns."
    },
    {
      title: "Media Science Lead",
      department: "Media",
      location: "Remote / Indore",
      type: "Full-time",
      description: "Model attribution, optimize bid strategies, and scale profitable channels."
    },
    {
      title: "CRO Engineer",
      department: "Product",
      location: "Remote / Indore",
      type: "Full-time",
      description: "Build experimentation frameworks and landing page systems that convert."
    },
    {
      title: "Data Analyst",
      department: "Analytics",
      location: "Remote / Indore",
      type: "Full-time",
      description: "Turn campaign data into actionable insights using SQL, Python, and BI tools."
    },
    {
      title: "Content Strategist",
      department: "Content",
      location: "Remote / Indore",
      type: "Contract",
      description: "Craft narratives that resonate across paid social, email, and lifecycle journeys."
    }
  ];

  const perks = [
    "Annual company retreat to exotic locations",
    "Unlimited books and Audible subscription",
    "Home office setup allowance",
    "Team lunches and celebration budgets",
    "Mental health and wellness support",
    "Equity participation for senior roles"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== '') {
          data.append(key, value);
        }
      });
      
      const response = await fetch('/api/careers', {
        method: 'POST',
        body: data,
      });
      
      if (response.ok) {
        alert('Thank you for applying! We\'ll review your application within 5 business days.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          linkedin: '',
          portfolio: '',
          experience: '',
          resume: null,
          coverLetter: '',
        });
      } else {
        const error = await response.json();
        throw new Error(error.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try emailing us directly at devanshjagtap2@gmail.com');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen boska-font" style={{ backgroundColor: '#E9E4D7' }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-xs uppercase tracking-[0.5em] text-[#8c7b62] mb-6 clash-display-font">Join Our Team</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#060010] mb-6">
              Build The Future<br />With Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#312619]/80 max-w-3xl mx-auto archivo-font leading-relaxed">
              We're assembling a world-class team of growth obsessives, creative engineers, and data storytellers.
              If you thrive in ambiguity and measure success in outcomes, let's talk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture Image */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative h-[400px] md:h-[500px] rounded-[40px] overflow-hidden border border-[#060010]/10 shadow-[0_25px_80px_-50px_rgba(6,0,16,0.4)]">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
              alt="Team collaboration"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060010]/70 via-[#060010]/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12">
              <p className="text-white text-2xl md:text-4xl font-bold">
                "We hire T-shaped humans who can<br />zoom out to strategy and dive deep<br />into craft."
              </p>
              <p className="text-white/80 text-sm md:text-base mt-4 archivo-font">— Aarav Khanna, Founder</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs uppercase tracking-[0.5em] text-[#8c7b62] clash-display-font">Why ROI Makers</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#060010]">Benefits & Perks</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/70 rounded-[28px] p-8 border border-[#060010]/10 shadow-[0_20px_60px_-40px_rgba(6,0,16,0.25)] hover:shadow-[0_30px_90px_-40px_rgba(6,0,16,0.4)] transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-[#060010] mb-2">{benefit.title}</h3>
                <p className="text-sm text-[#312619]/80 archivo-font leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional Perks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 bg-[#060010] text-[#E9E4D7] rounded-[32px] p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Plus More...</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {perks.map((perk, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#ff9933] rounded-full" />
                  <p className="text-sm archivo-font">{perk}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs uppercase tracking-[0.5em] text-[#8c7b62] clash-display-font">Open Roles</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#060010]">Current Openings</h2>
          </motion.div>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/70 rounded-[28px] p-8 border border-[#060010]/10 shadow-[0_20px_60px_-40px_rgba(6,0,16,0.25)] hover:shadow-[0_30px_90px_-40px_rgba(6,0,16,0.4)] transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#060010] group-hover:text-[#8c7b62] transition-colors duration-300">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-xs uppercase tracking-wider text-[#8c7b62] clash-display-font">
                        {position.department}
                      </span>
                      <span className="text-xs text-[#312619]/60 archivo-font">•</span>
                      <span className="text-xs text-[#312619]/80 archivo-font">{position.location}</span>
                      <span className="text-xs text-[#312619]/60 archivo-font">•</span>
                      <span className="text-xs text-[#312619]/80 archivo-font">{position.type}</span>
                    </div>
                  </div>
                  <a
                    href="#apply"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#060010] text-[#E9E4D7] rounded-full text-sm font-semibold uppercase tracking-wider clash-display-font hover:bg-[#8c7b62] transition-all duration-300 hover:scale-105 shadow-md whitespace-nowrap"
                  >
                    Apply Now →
                  </a>
                </div>
                <p className="text-base text-[#312619]/80 archivo-font leading-relaxed">{position.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs uppercase tracking-[0.5em] text-[#8c7b62] clash-display-font">Get Started</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#060010]">Apply Now</h2>
            <p className="mt-4 text-base text-[#312619]/80 archivo-font max-w-2xl mx-auto">
              Fill out the form below or email your resume and portfolio to{' '}
              <a href="mailto:careers@roimakers.com" className="text-[#8c7b62] font-semibold hover:underline">
                careers@roimakers.com
              </a>
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white/70 rounded-[32px] p-8 md:p-12 border border-[#060010]/10 shadow-[0_25px_80px_-50px_rgba(6,0,16,0.3)]"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#060010] mb-2 clash-display-font uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-[#060010]/20 bg-white/50 text-[#060010] archivo-font focus:outline-none focus:ring-2 focus:ring-[#8c7b62] transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#060010] mb-2 clash-display-font uppercase tracking-wider">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-[#060010]/20 bg-white/50 text-[#060010] archivo-font focus:outline-none focus:ring-2 focus:ring-[#8c7b62] transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#060010] mb-2 clash-display-font uppercase tracking-wider">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-[#060010]/20 bg-white/50 text-[#060010] archivo-font focus:outline-none focus:ring-2 focus:ring-[#8c7b62] transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label htmlFor="position" className="block text-sm font-semibold text-[#060010] mb-2 clash-display-font uppercase tracking-wider">
                  Position *
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-[#060010]/20 bg-white/50 text-[#060010] archivo-font focus:outline-none focus:ring-2 focus:ring-[#8c7b62] transition-all"
                >
                  <option value="">Select a position</option>
                  {openPositions.map((pos) => (
                    <option key={pos.title} value={pos.title}>
                      {pos.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-[#060010] mb-2 clash-display-font uppercase tracking-wider">
                Why ROI Makers? *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-2xl border border-[#060010]/20 bg-white/50 text-[#060010] archivo-font focus:outline-none focus:ring-2 focus:ring-[#8c7b62] transition-all resize-none"
                placeholder="Tell us about yourself, your experience, and why you'd be a great fit..."
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-10 py-4 bg-[#060010] text-[#E9E4D7] rounded-full font-semibold text-sm uppercase tracking-wider clash-display-font hover:bg-[#8c7b62] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Submit Application
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
}