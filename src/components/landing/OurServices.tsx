import Image from "next/image";
import FlowingMenu from "../FlowingMenu";

type Service = {
  title: string;
  image: string;
  href: string;
};

const services: Service[] = [
  {
    title: "Digital PR",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    href: "#digital-pr",
  },
  {
    title: "Search & Growth Strategy",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    href: "#search-growth",
  },
  {
    title: "Data & Insights",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
    href: "#data-insights",
  },
  {
    title: "Social & Social Search",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80",
    href: "#social-social",
  },
  {
    title: "Content Experience",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
    href: "#content-experience",
  },
  {
    title: "Onsite SEO",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    href: "#onsite-seo",
  },
];

const flowingMenuItems = services.map((service) => ({
  link: service.href,
  text: service.title,
  image: service.image,
}));

const columns = [flowingMenuItems.slice(0, 3), flowingMenuItems.slice(3, 6)];

export default function OurServices() {
  return (
    <main className="min-h-screen bg-[#E9E4D7] text-[#060010]">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 lg:gap-16 archivo-font">
        <header className="flex flex-col gap-8">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.55em] text-[#8c7b62] clash-display-font">Capabilities</p>
            <div className="flex flex-wrap items-center gap-4 text-5xl font-semibold tracking-tight md:text-7xl boska-font">
              <span>Our</span>
              <span className="relative inline-flex h-16 w-16 overflow-hidden rounded-3xl md:h-20 md:w-20">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80"
                  alt="Strategy workshop"
                  fill
                  sizes="80px"
                  className="object-cover"
                  priority
                />
              </span>
              <span>Services</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-2xl text-lg leading-relaxed text-[#312619]/80">
              Bespoke roadmaps, production firepower, and performance rituals that keep
              campaigns compounding. Tap into specialists that move quickly while
              keeping the craft dialed all the way up.
            </p>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-[#0f0d0b] bg-[#f7f3ea] px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#0f0d0b] clash-display-font shadow-sm transition hover:-translate-y-0.5 hover:bg-[#0f0d0b] hover:text-white"
            >
              View All <span aria-hidden>↗</span>
            </a>
          </div>
        </header>

        <div className="h-px w-full rounded-3xl bg-[#c1b7a6]" />

        <div id="services" className="grid gap-6 md:grid-cols-2 rounded-xl">
          {columns.map((column, columnIdx) => (
            <div key={`column-${columnIdx}`} className="space-y-8">
              <div className="relative h-[240px] rounded-xl">
                <FlowingMenu items={column} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
