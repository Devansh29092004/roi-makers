"use client";

import { StickyCard002 } from "@/components/ui/sticky-card";

export default function StickyCardSection() {
  const cards = [
    {
      id: 1,
      image: "/images/stack/1.webp",
      alt: "Project 1",
      title: "Pioneers",
      description: "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
      bgColor: "#000000"
    },
    {
      id: 2,
      image: "/images/stack/2.webp",
      alt: "Project 2",
      title: "Award Winning",
      description: "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
      bgColor: "#a0f0e8"
    },
    {
      id: 3,
      image: "/images/stack/3.webp",
      alt: "Project 3",
      title: "Speed",
      description: "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We've created a service which takes ideas to result within 60 minutes.",
      bgColor: "#ffffff"
    },
  ];

  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.55em] text-[#8c7b62] mb-4 clash-display-font">
            Featured Projects
          </p>
          <h2 className="text-[#060010] text-5xl md:text-7xl font-bold boska-font mb-6">
            Our Latest Work
          </h2>
          <p className="text-[#312619]/80 text-lg max-w-2xl mx-auto archivo-font">
            Discover our most recent projects and creative solutions
          </p>
        </div>

        {/* Sticky Card Component */}
        <div>
          <StickyCard002 cards={cards} />
        </div>
      </div>
    </section>
  );
}
