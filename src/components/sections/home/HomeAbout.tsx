"use client";

import { StickyCard002 } from "@/components/ui/sticky-card";

export default function AboutCards() {
  const cards = [
    {
      id: 1,
      image: "/images/stack/1.webp",
      alt: "Our Mission",
      title: "Our Mission",
      description: "Our mission is to arm ambitious brands with marketing systems that compound, not campaigns that expire. To replace guesswork with growth science. To make ROI so predictable it becomes your unfair advantage.",
      ctaText: "Read more",
      ctaLink: "/about",
      bgColor: "#000000"
    },
    {
      id: 2,
      image: "/images/stack/2.webp",
      alt: "Our Vision",
      title: "Our Vision",
      description: "To become the agency that makes \"viral growth\" sound quaint and \"hockey stick trajectories\" look conservative. The team that founders call when they're ready to stop experimenting and start dominating.",
      ctaText: "Read more",
      ctaLink: "/about",
      bgColor: "#a0f0e8"
    },
    {
      id: 3,
      image: "/images/stack/3.webp",
      alt: "Our History",
      title: "Our History",
      description: "Today: 250+ active partners. 1,200+ campaigns. 626K+ leads. But we're still hungry, still testing, still obsessed with finding the edges where strategy becomes an unfair advantage.",
      ctaText: "Read more",
      ctaLink: "/about",
      bgColor: "#ffffff"
    },
  ];

  return (
    <section className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold boska-font mb-4 sm:mb-6">
            Why brands fire their old agency for us
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto archivo-font px-2">
            Most agencies are expensive content mills wrapped in corporate jargon. They prioritize billable hours over breakthrough results, safety over scalability, and maintaining the status quo over making you money.
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
