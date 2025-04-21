import { useState, useEffect } from 'react';

export function useMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side rendering)
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < breakpoint);
      };

      // Initial check
      checkMobile();

      // Set up event listener for window resize
      window.addEventListener('resize', checkMobile);

      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }
  }, [breakpoint]);

  return isMobile;
}
