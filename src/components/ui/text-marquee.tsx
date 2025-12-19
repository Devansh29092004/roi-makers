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

interface MarqueeItem {
  text: string;
  imageUrl: string;
}

interface ParallaxProps {
  items: MarqueeItem[];
  baseVelocity: number;
  clasname?: string;
  scrollDependent?: boolean;
  delay?: number;
}

export default function ScrollBaseAnimation({
  items,
  baseVelocity = -5,
  clasname,
  scrollDependent = false,
  delay = 0,
}: ParallaxProps) {
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
  const hasStarted = useRef(false); // Track animation start status

  useEffect(() => {
    const timer = setTimeout(() => {
      hasStarted.current = true; // Start animation after the delay
    }, delay);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [delay]);

  useAnimationFrame((t, delta) => {
    if (!hasStarted.current) return; // Skip if delay hasn't passed

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Reverse direction if scrollDependent is true
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
        className='flex whitespace-nowrap gap-12 flex-nowrap items-center'
        style={{ x }}
      >
        {[...Array(4)].map((_, repeatIndex) => (
          <span key={repeatIndex} className="flex items-center gap-12">
            {items.map((item, itemIndex) => (
              <span key={itemIndex} className={cn(`flex items-center gap-8 sm:text-[10vw] text-[13vw] leading-none`, clasname)}>
                <span className="inline-block relative sm:w-[10vw] sm:h-[10vw] w-[13vw] h-[13vw] rounded-3xl overflow-hidden flex-shrink-0">
                  <Image
                    src={item.imageUrl}
                    alt="Brand visual"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 13vw, 10vw"
                  />
                </span>
                {item.text}
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
