"use client";

import CardMarquee from "@/components/ui/card-marquee";

export default function ServicesShowcase() {
  const cards = [
    {
      title: "Digital Marketing",
      description: "Data-driven strategies to scale visibility, engagement, and conversions.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tag: "Growth"
    },
    {
      title: "Performance Marketing",
      description: "Measurable campaigns built to maximize returns and efficiency.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tag: "ROI"
    },
    {
      title: "Website Development",
      description: "High-performing websites designed for speed, clarity, conversions.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tag: "Build"
    },
    {
      title: "E-commerce",
      description: "Scalable online stores built for seamless buying experiences.",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      tag: "Commerce"
    },
    {
      title: "Shopify Development",
      description: "Custom Shopify solutions optimized for growth and performance.",
      imageUrl: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80",
      tag: "Shopify"
    },
    {
      title: "Social Media Marketing",
      description: "Content and campaigns that build brands and communities.",
      imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
      tag: "Social"
    },
    {
      title: "Search Engine Optimization",
      description: "Improving rankings, traffic, and long-term organic visibility.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tag: "Search"
    },
    {
      title: "Virtual Tours",
      description: "Interactive experiences bringing spaces to life digitally.",
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      tag: "Immersive"
    }
  ];

  return (
    <section className="w-full py-8 sm:py-12 md:py-24 overflow-hidden bg-muted dark:bg-background">
      <div className="mb-6 sm:mb-8 md:mb-12 px-4 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-foreground">
          Our Services
        </h2>
      </div>
      <CardMarquee
        cards={cards}
        baseVelocity={-1}
        scrollDependent={true}
      />
    </section>
  );
}
