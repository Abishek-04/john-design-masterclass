'use client';
import { useState, useEffect } from 'react';

export function useBreakpoint() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return {
    isMobile: width > 0 && width < 768,
    isTablet: width > 0 && width < 1024,
  };
}
