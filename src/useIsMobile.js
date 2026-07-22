import { useState, useEffect } from 'react';

// Tiny viewport hook - returns true when the screen is phone-sized.
// Used to switch layouts that can't be handled by CSS media queries alone
// (e.g. restructuring the bottom navigation bar on mobile).
export default function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);

  return isMobile;
}
