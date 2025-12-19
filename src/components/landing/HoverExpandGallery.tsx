"use client";

import { HoverExpand } from "@/components/ui/hover-expand";

export default function HoverExpandGallery() {
  const images = [
    {
      src: "/team_picture/1.webp",
      alt: "Rajat Gupta",
      code: "# 01",
      title: "Rajat Gupta",
      subtitle: "Performance Marketing Manager ",
    },
    {
      src: "/team_picture/2.webp",
      alt: "Tripti Ray",
      code: "# 02",
      title: "Tripti Ray",
      subtitle: "Digital Marketing Strategist",
    },
    {
      src: "/team_picture/3.webp",
      alt: "Harshita Sharma",
      code: "# 03",
      title: "Harshita Sharma",
      subtitle: "Social Media Strategist",
    },
    {
      src: "/team_picture/5.webp",
      alt: "Vijay Vishwakarma",
      code: "# 04",
      title: "Vijay Vishwakarma",
      subtitle: "Senior Motion Graphic Designer",
    },
    {
      src: "/team_picture/4.webp",
      alt: "Sankesh Pate",
      code: "# 05",
      title: "Sankesh Pate",
      subtitle: "Senior Graphic Designer",
    },
    {
      src: "/team_picture/6.webp",
      alt: "Pankaj Vishwakarma",
      code: "# 06",
      title: "Pankaj Vishwakarma",
      subtitle: "Wordpress & Shopify Developer",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.55em] text-[#8c7b62] mb-4 clash-display-font">
            Team
          </p>
          <h2 className="text-[#060010] text-5xl md:text-7xl font-bold boska-font">
            Meet Our Team
          </h2>
          <p className="text-[#312619]/80 text-lg mt-6 max-w-2xl mx-auto archivo-font">
            The talented people behind our success
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
