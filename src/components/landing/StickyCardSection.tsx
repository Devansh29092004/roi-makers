"use client";

import { StickyCard002 } from "@/components/ui/sticky-card";

export default function StickyCardSection() {
  const cards = [
    {
      id: 1,
      image: "/images/stack/1.webp",
      alt: "Project 1",
    },
    {
      id: 2,
      image: "/images/stack/2.webp",
      alt: "Project 2",
    },
    {
      id: 3,
      image: "/images/stack/3.webp",
      alt: "Project 3",
    },
    {
      id: 4,
      image: "/images/stack/4.webp",
      alt: "Project 4",
    },
    {
      id: 5,
      image: "/images/stack/5.webp",
      alt: "Project 5",
    },
    {
      id: 6,
      image: "/images/stack/6.webp",
      alt: "Project 6",
    },
  ];

  return (
    <section className="bg-[#E9E4D7] min-h-screen">
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
