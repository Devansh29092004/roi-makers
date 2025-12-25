'use client';
import { useRef, useEffect } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from 'motion/react';
import { wrap } from '@motionone/utils';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface CardItem {
  title: string;
  description?: string;
  imageUrl: string;
  tag?: string;
}

interface CardMarqueeProps {
  cards: CardItem[];
  baseVelocity: number;
  className?: string;
  scrollDependent?: boolean;
  delay?: number;
}

export default function CardMarquee({
  cards,
  baseVelocity = -1,
  className,
  scrollDependent = true,
  delay = 0,
}: CardMarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  const hasStarted = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      hasStarted.current = true;
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useAnimationFrame((t, delta) => {
    if (!hasStarted.current) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (scrollDependent) {
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className='overflow-hidden whitespace-nowrap flex flex-nowrap'>
      <motion.div
        className='flex whitespace-nowrap gap-8 flex-nowrap'
        style={{ x }}
      >
        {[...Array(4)].map((_, repeatIndex) => (
          <div key={repeatIndex} className="flex gap-8">
            {cards.map((card, cardIndex) => (
              <div
                key={cardIndex}
                className={cn(
                  "relative group cursor-pointer flex-shrink-0",
                  "w-[300px] sm:w-[400px] md:w-[500px]",
                  "h-[400px] sm:h-[500px] md:h-[600px]",
                  "rounded-3xl overflow-hidden",
                  "shadow-xl hover:shadow-2xl transition-all duration-300",
                  className
                )}
              >
                {/* Full image background */}
                <div className="relative w-full h-full">
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 400px, (max-width: 768px) 500px, 600px"
                  />
                  
                  {/* Tag - always visible */}
                  {card.tag && (
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-semibold z-10">
                      {card.tag}
                    </div>
                  )}
                  
                  {/* Overlay with text - shows on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 whitespace-normal transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {card.title}
                    </h3>
                      {card.description && (
                        <p className="text-lg text-white whitespace-normal line-clamp-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {card.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
