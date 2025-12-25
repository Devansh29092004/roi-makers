"use client";

import { StickyCard002 } from "@/components/ui/sticky-card";

export default function StickyCardSection() {
  const cards = [
    {
      id: 1,
      image: "/images/stack/1.webp",
      alt: "Project 1",
      title: "Our Mission",
      description: "Our mission is to empower businesses with expert digital marketing solutions, train people in digital marketing, and become the best agency for maximizing ROI and digital growth.... Read more",
      bgColor: "#000000"
    },
    {
      id: 2,
      image: "/images/stack/2.webp",
      alt: "Project 2",
      title: "Our Vision",
      description: "At ROI Makers, we aim to be a top digital agency, helping businesses grow with tailored solutions, maximizing ROI, and staying ahead in digital trends through innovation and expertise.... Read more",
      bgColor: "#a0f0e8"
    },
    {
      id: 3,
      image: "/images/stack/3.webp",
      alt: "Project 3",
      title: "Our History",
      description: "After 7 years in Digital Marketing, I founded ROI Makers in 2023 to help businesses grow with tailored strategies, driving traffic, leads, and a strong digital presence across industries.....Read more",
      bgColor: "#ffffff"
    },
  ];

  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[#060010] text-5xl md:text-7xl font-bold boska-font mb-6">
           Best design Agency solutions
          </h2>
          <p className="text-[#312619]/80 text-lg max-w-2xl mx-auto archivo-font">
           There are many variations of passages of available but the majority have suffered alteration in some form, by injected humou or randomised words which don't look even slightly believable.
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
