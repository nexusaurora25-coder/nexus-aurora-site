import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface UseCountUpOptions {
  duration?: number;
  suffix?: string;
  prefix?: string;
}

/**
 * Animates an integer count-up from 0 to `target` once its element scrolls
 * into view, using requestAnimationFrame (no dependency). Triggers once via
 * IntersectionObserver, matching the scroll-reveal pattern used elsewhere
 * in this codebase (see Services.tsx / About.tsx). Skips straight to the
 * final value when the user prefers reduced motion.
 *
 * Only pass whole numbers — decimal stats (e.g. "99.9%") or non-numeric
 * stats (e.g. "27001:2022") should be rendered as static text by the
 * calling component instead, to avoid floating-point animation jank.
 */
export const useCountUp = <T extends HTMLElement = HTMLDivElement>(
  target: number,
  { duration = 1800, suffix = '', prefix = '' }: UseCountUpOptions = {}
) => {
  const ref = useRef<T>(null);
  const [value, setValue] = useState(`${prefix}0${suffix}`);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion) {
      setValue(`${prefix}${target}${suffix}`);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const start = performance.now();
          const easeOutQuad = (t: number) => t * (2 - t);

          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.round(target * easeOutQuad(progress));
            setValue(`${prefix}${current}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);
          observer.disconnect();
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, suffix, prefix, prefersReducedMotion]);

  return { ref, value };
};

export default useCountUp;
