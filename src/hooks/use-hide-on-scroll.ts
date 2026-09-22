import { useEffect, useState } from 'react';

const SCROLL_DIRECTION_THRESHOLD_PX = 12;
const HEADER_VISIBLE_TOP_PX = 64;

export function useHideOnScroll(isPinned: boolean): boolean {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let previousY = window.scrollY;
    let distance = 0;

    const handleScroll = (): void => {
      const maximumY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const currentY = Math.max(0, Math.min(window.scrollY, maximumY));
      const delta = currentY - previousY;
      previousY = currentY;

      if (isPinned || currentY <= HEADER_VISIBLE_TOP_PX) {
        distance = 0;
        setIsHidden(false);
        return;
      }
      if (delta === 0) {
        return;
      }
      distance = Math.sign(delta) === Math.sign(distance) ? distance + delta : delta;
      if (Math.abs(distance) >= SCROLL_DIRECTION_THRESHOLD_PX) {
        setIsHidden(distance > 0);
        distance = 0;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPinned]);

  return !isPinned && isHidden;
}
