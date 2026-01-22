"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Service = {
  title: string;
  image: string;
  href: string;
};

const services: Service[] = [
  {
    title: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    href: "/services/digital-marketing",
  },
  {
    title: "Performance Marketing",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    href: "/services/performance-marketing",
  },
  {
    title: "Website Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    href: "/services/website-development",
  },
  {
    title: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
    href: "/services/ecommerce",
  },
  {
    title: "Shopify Development",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=80",
    href: "/services/shopify-development",
  },
  {
    title: "Social Media Marketing",
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1600&q=80",
    href: "/services/social-media-marketing",
  },
  {
    title: "Search Engine Optimization",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1600&q=80",
    href: "/services/search-engine-optimization",
  },
  {
    title: "Virtual Tours",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
    href: "/services/virtual-tours",
  },
];

export default function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-muted dark:bg-background text-foreground">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <header className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
            <span>Our</span>
            <span className="relative inline-flex h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-28 lg:w-28 overflow-hidden rounded-2xl sm:rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80"
                alt="Strategy workshop"
                fill
                sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, (max-width: 1024px) 80px, 120px"
                className="object-cover"
                priority
              />
            </span>
            <span>Services</span>
          </div>
          
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full bg-transparent px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-black transition-all duration-300 ease-out hover:gap-3"
          >
            View All Services <span aria-hidden>↗</span>
          </a>
        </header>

        <div className="h-px w-full bg-black" />

        <div id="services" className="grid gap-0 md:grid-cols-2 md:gap-x-8 lg:gap-x-12">
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative block"
            >
              <div className="relative border-b border-black">
                <div className="py-6 sm:py-8">
                  {/* Default state text */}
                  <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium transition-opacity duration-700 ease-in-out will-change-opacity ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                    {service.title}
                  </h3>
                </div>
                
                {/* Hover state with image background */}
                <div className={`absolute inset-0 flex items-center overflow-hidden rounded-full transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-[opacity,transform] ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-98 pointer-events-none'}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
                  <div className="relative z-10 flex items-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-8 w-full">
                    <span className="text-2xl sm:text-3xl text-white">↗</span>
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white">
                      {service.title}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
