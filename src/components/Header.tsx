'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-xl font-bold">
          ROI Makers
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/services" className="text-white hover:text-gray-300 transition-colors">
            Services +
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
            About +
          </Link>
          <Link href="/work" className="text-white hover:text-gray-300 transition-colors">
            Work
          </Link>
          <Link href="/careers" className="text-white hover:text-gray-300 transition-colors">
            Careers
          </Link>
          <Link href="/blog" className="text-white hover:text-gray-300 transition-colors">
            Blog
          </Link>
          <Link href="/webinar" className="text-white hover:text-gray-300 transition-colors">
            Webinar
          </Link>
        </div>
        
        {/* CTA Button */}
        <Link
          href="/contact"
          className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
        >
          Get In Touch →
        </Link>
      </nav>
    </motion.header>
  );
}
