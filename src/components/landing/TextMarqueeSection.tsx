"use client";

import ScrollBaseAnimation from "@/components/ui/text-marquee";

export default function TextMarqueeSection() {
  return (
    <section className="w-full py-20 overflow-hidden bg-white">
      <div className="space-y-8">
        {/* Marquee Line 1 - Moving Right */}
        <ScrollBaseAnimation
          baseVelocity={2}
          clasname="font-bold text-black"
          scrollDependent={false}
        >
          TRANSFORM YOUR BRAND • DIGITAL EXCELLENCE • CREATIVE SOLUTIONS • 
        </ScrollBaseAnimation>
        
        {/* Marquee Line 2 - Moving Left */}
        <ScrollBaseAnimation
          baseVelocity={-2}
          clasname="font-bold text-orange-500"
          scrollDependent={true}
          delay={200}
        >
          ROI MAKERS • INNOVATIVE DESIGN • GROWTH STRATEGY • 
        </ScrollBaseAnimation>
        
        {/* Marquee Line 3 - Moving Right */}
        <ScrollBaseAnimation
          baseVelocity={2}
          clasname="font-bold text-black"
          scrollDependent={false}
          delay={400}
        >
          BUILD • CREATE • SCALE • SUCCEED • 
        </ScrollBaseAnimation>
      </div>
    </section>
  );
}
