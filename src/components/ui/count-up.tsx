'use client';

import { animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

type CountUpProps = {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
};

/**
 * Animated numeric counter that increments when it enters the viewport.
 */
export function CountUp({
  value,
  duration = 2,
  decimals = 0,
  prefix = '',
  suffix = '',
}: CountUpProps) {
  const valueRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(valueRef, {
    once: true,
    margin: '-120px',
  });

  useEffect(() => {
    if (!isInView || !valueRef.current) {
      return;
    }

    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => {
        if (!valueRef.current) return;

        const formatted = decimals > 0
          ? latest.toFixed(decimals)
          : Math.round(latest).toString();

        valueRef.current.textContent = `${prefix}${formatted}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [decimals, duration, isInView, prefix, suffix, value]);

  return <span ref={valueRef}>{`${prefix}0${suffix}`}</span>;
}
