"use client";

import { HoverExpand } from "@/components/ui/hover-expand";

export default function HoverExpandGallery() {
  const images = [
    {
      src: "/images/stack/1.webp",
      alt: "Creative Design Work",
      code: "# 01",
    },
    {
      src: "/images/stack/2.webp",
      alt: "Modern Architecture",
      code: "# 02",
    },
    {
      src: "/images/stack/3.webp",
      alt: "Brand Identity",
      code: "# 03",
    },
    {
      src: "/images/stack/4.webp",
      alt: "Digital Experience",
      code: "# 04",
    },
    {
      src: "/images/stack/5.webp",
      alt: "Visual Storytelling",
      code: "# 05",
    },
    {
      src: "/images/stack/6.webp",
      alt: "Innovation Design",
      code: "# 06",
    },
    {
      src: "/flower.webp",
      alt: "Creative Solutions",
      code: "# 07",
    },
    {
      src: "/flower1.webp",
      alt: "Design Excellence",
      code: "# 08",
    },
    {
      src: "/car.webp",
      alt: "Portfolio Work",
      code: "# 09",
    },
  ];

  return (
    <section className="bg-[#E9E4D7] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.55em] text-[#8c7b62] mb-4 clash-display-font">
            Portfolio
          </p>
          <h2 className="text-[#060010] text-5xl md:text-7xl font-bold boska-font">
            Our Work
          </h2>
          <p className="text-[#312619]/80 text-lg mt-6 max-w-2xl mx-auto archivo-font">
            Explore our latest projects and creative solutions
          </p>
        </div>

        {/* Hover Expand Gallery */}
        <div className="flex items-center justify-center">
          <HoverExpand images={images} />
        </div>
      </div>
    </section>
  );
}
