import { useState, useEffect, useCallback } from 'react';

export const useCarousel = (items: any[], interval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoize the next function with useCallback
  const next = useCallback(() => {
    setCurrentIndex(prev => (prev === items.length - 1 ? 0 : prev + 1));
  }, [items.length]); // Only recreate when items.length changes

  // Memoize the prev function with useCallback
  const prev = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? items.length - 1 : prev - 1));
  }, [items.length]); // Only recreate when items.length changes

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]); // Now includes all dependencies

  return { currentIndex, next, prev };
};