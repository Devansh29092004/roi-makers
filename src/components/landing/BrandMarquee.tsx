"use client";

import ScrollBaseAnimation from "@/components/ui/text-marquee";

export default function BrandMarquee() {
  return (
    <section className="w-full py-2 md:py-4 mt-4 md:mt-6 overflow-hidden bg-background">
      <ScrollBaseAnimation
        baseVelocity={-0.5}
        clasname="font-black text-foreground"
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
