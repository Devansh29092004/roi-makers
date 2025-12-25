"use client";

import CardMarquee from "@/components/ui/card-marquee";

export default function CardMarqueeSection() {
  const cards = [
    {
      title: "Brand Strategy & Identity",
      description: "We create powerful brand identities that resonate with your audience.",
      imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
      tag: "Branding"
    },
    {
      title: "Digital Marketing",
      description: "Data-driven campaigns that deliver measurable results.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tag: "Marketing"
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites that convert visitors into customers.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tag: "Development"
    },
    {
      title: "Creative Design",
      description: "Stunning visuals that capture attention and drive engagement.",
      imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
      tag: "Design"
    },
    {
      title: "Social Media",
      description: "Build a strong social presence that connects with your community.",
      imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
      tag: "Social"
    },
    {
      title: "Content Creation",
      description: "Compelling content that tells your brand story effectively.",
      imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80",
      tag: "Content"
    },
      {
        title: "Creative Design",
        description: "Stunning visuals that capture attention and drive engagement.",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
        tag: "Design",
        colors: { from: "rose-200", via: "fuchsia-200", to: "purple-200", button: "white" },
        textColor: "text-black"
      },
      {
        title: "Social Media",
        description: "Build a strong social presence that connects with your community.",
        imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
        tag: "Social",
        colors: { from: "green-200", via: "teal-200", to: "cyan-100", button: "white" },
        textColor: "text-black"
      },
      {
        title: "Content Creation",
        description: "Compelling content that tells your brand story effectively.",
        imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80",
        tag: "Content",
        colors: { from: "amber-200", via: "yellow-100", to: "lime-100", button: "white" },
        textColor: "text-black"
      }
    ];

  return (
    <section className="w-full py-12 md:py-24 overflow-hidden bg-gray-50">
      <div className="mb-8 md:mb-12 px-4 md:px-8">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-black">
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
