import { useEffect, useState } from 'react';

/**
 * Tracks the user's `prefers-reduced-motion` OS/browser setting so
 * autoplay video, parallax, animated gradients, and count-up counters
 * can be skipped or shown in their final state for users who prefer it.
 */
export const usePrefersReducedMotion = (): boolean => {
  // Starts false and is read in an effect so the prerendered HTML and the first client render match.
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

export default usePrefersReducedMotion;
