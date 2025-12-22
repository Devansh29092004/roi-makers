"use client";

import ScrollBaseAnimation from "@/components/ui/text-marquee";

export default function TextMarqueeSection() {
  return (
    <section className="w-full py-12 md:py-32 mt-24 md:mt-32 overflow-hidden bg-white">
      <ScrollBaseAnimation
        baseVelocity={-0.5}
        clasname="font-black text-black"
        scrollDependent={false}
        items={[
          {
            text: "TRANSFORM YOUR BRAND",
            imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
          },
          {
            text: "CREATIVE SOLUTIONS",
            imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80"
          },
          {
            text: "ROI MAKERS",
            imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80"
          }
        ]}
      />
    </section>
  );
}
