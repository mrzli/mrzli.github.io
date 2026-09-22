import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
  type TouchEventHandler,
} from 'react';
import { useLocation, useNavigate } from 'react-router';

const SWIPE_ANIMATION_DURATION_MS = 220;
const SWIPE_PAGE_GAP_PX = 24;
const SWIPE_MIN_DISTANCE_PX = 80;
const SWIPE_MAX_DURATION_MS = 800;
const SWIPE_DIRECTION_THRESHOLD_PX = 12;
const SWIPE_HORIZONTAL_RATIO = 2;
const SWIPE_EDGE_GUARD_PX = 24;
const SWIPE_SCROLL_TOLERANCE_PX = 16;
const SWIPE_BREAKPOINT_PROPERTY = '--swipe-breakpoint';
const SWIPE_BREAKPOINT_CLASS = '[--swipe-breakpoint:var(--breakpoint-md)]';
const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, [contenteditable]:not([contenteditable="false"]), [role="button"], [role="slider"], [role="textbox"]';

export interface SwipeNavigation {
  readonly handlers: SwipeHandlers;
  readonly preview: SwipePreview | undefined;
}

interface SwipePreview {
  readonly path: string;
  readonly distance: number;
  readonly travelDistance: number;
  readonly top: number;
  readonly side: number;
  readonly settling: boolean;
  readonly transition: string | undefined;
}

interface SwipeHandlers {
  readonly className: string;
  readonly onTouchStart: TouchEventHandler<HTMLDivElement>;
  readonly ref: RefObject<HTMLDivElement | null>;
  readonly onTouchEnd: TouchEventHandler<HTMLDivElement>;
  readonly onTouchCancel: TouchEventHandler<HTMLDivElement>;
}

interface SwipeStart {
  readonly identifier: number;
  readonly clientX: number;
  readonly clientY: number;
  readonly startedAt: number;
  readonly scrollY: number;
  readonly locationKey: string;
}

interface SwipePage {
  readonly to: string;
}

export function useSwipeNavigation(pages: readonly SwipePage[]): SwipeNavigation {
  const surface = useRef<HTMLDivElement>(null);
  const start = useRef<SwipeStart | undefined>(undefined);
  const [preview, setPreview] = useState<SwipePreview>();
  const previewRef = useRef<SwipePreview | undefined>(undefined);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const location = useLocation();
  const navigate = useNavigate();
  const isSwipeEnabled = useBelowBreakpoint(surface, SWIPE_BREAKPOINT_PROPERTY);

  const updatePreview = useCallback((value: SwipePreview | undefined): void => {
    previewRef.current = value;
    setPreview(value);
  }, []);
  const reset = useCallback((): void => {
    clearTimeout(timer.current);
    timer.current = undefined;
    start.current = undefined;
    updatePreview(undefined);
  }, [updatePreview]);
  const finish = useCallback(
    (path?: string): void => {
      clearTimeout(timer.current);
      const current = previewRef.current;
      if (!current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        reset();
        if (path) {
          void navigate(path);
        }
        return;
      }
      updatePreview({
        ...current,
        settling: true,
        transition: `transform ${SWIPE_ANIMATION_DURATION_MS}ms ease-out`,
        distance: path ? -current.side * current.travelDistance : 0,
      });
      timer.current = setTimeout(() => {
        if (path) {
          void navigate(path);
        } else {
          reset();
        }
      }, SWIPE_ANIMATION_DURATION_MS);
    },
    [navigate, reset, updatePreview],
  );

  useLayoutEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    motion.addEventListener('change', reset);
    window.addEventListener('resize', reset);
    return () => {
      reset();
      motion.removeEventListener('change', reset);
      window.removeEventListener('resize', reset);
    };
  }, [location.key, isSwipeEnabled, reset]);

  useEffect(() => {
    const element = surface.current;
    start.current = undefined;
    if (!element || !isSwipeEnabled) {
      return;
    }
    const handleMove = (event: TouchEvent): void => {
      const origin = start.current;
      if (!origin) {
        return;
      }
      if (
        event.timeStamp - origin.startedAt > SWIPE_MAX_DURATION_MS ||
        window.getSelection()?.toString()
      ) {
        start.current = undefined;
        finish();
        return;
      }
      const touch = event.touches[0];
      if (event.touches.length !== 1 || touch.identifier !== origin.identifier) {
        start.current = undefined;
        finish();
        return;
      }
      const horizontal = Math.abs(touch.clientX - origin.clientX);
      const vertical = Math.abs(touch.clientY - origin.clientY);
      if (vertical > SWIPE_DIRECTION_THRESHOLD_PX && vertical > horizontal) {
        start.current = undefined;
        finish();
        return;
      }
      if (
        horizontal > SWIPE_DIRECTION_THRESHOLD_PX &&
        horizontal > vertical * SWIPE_HORIZONTAL_RATIO &&
        event.cancelable
      ) {
        event.preventDefault();
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          return;
        }
        const distance = touch.clientX - origin.clientX;
        const path = getSwipeDestination(pages, location.pathname, distance);
        if (path) {
          const bounds = element.getBoundingClientRect();
          updatePreview({
            path,
            distance: Math.max(-bounds.width, Math.min(bounds.width, distance)),
            travelDistance: bounds.width + SWIPE_PAGE_GAP_PX,
            top: window.scrollY,
            side: distance < 0 ? 1 : -1,
            settling: false,
            transition: undefined,
          });
        }
      }
    };
    element.addEventListener('touchmove', handleMove, { passive: false });
    return () => {
      element.removeEventListener('touchmove', handleMove);
    };
  }, [isSwipeEnabled, location.key, location.pathname, pages, finish, updatePreview]);

  return {
    preview,
    handlers: {
      ref: surface,
      className: SWIPE_BREAKPOINT_CLASS,
      onTouchStart: (event) => {
        if (previewRef.current?.settling) {
          return;
        }
        reset();
        if (
          !isSwipeEnabled ||
          event.touches.length !== 1 ||
          window.getSelection()?.toString() ||
          isInteractiveTarget(event.target, event.currentTarget)
        ) {
          return;
        }
        const touch = event.touches[0];
        if (
          touch.clientX < SWIPE_EDGE_GUARD_PX ||
          touch.clientX > window.innerWidth - SWIPE_EDGE_GUARD_PX
        ) {
          return;
        }
        start.current = {
          identifier: touch.identifier,
          clientX: touch.clientX,
          clientY: touch.clientY,
          startedAt: event.timeStamp,
          scrollY: window.scrollY,
          locationKey: location.key,
        };
      },
      onTouchEnd: (event) => {
        if (previewRef.current?.settling) {
          return;
        }
        const origin = start.current;
        start.current = undefined;
        if (
          !isSwipeEnabled ||
          !origin ||
          event.touches.length !== 0 ||
          event.changedTouches.length !== 1 ||
          event.timeStamp - origin.startedAt > SWIPE_MAX_DURATION_MS ||
          Math.abs(window.scrollY - origin.scrollY) > SWIPE_SCROLL_TOLERANCE_PX ||
          location.key !== origin.locationKey ||
          window.getSelection()?.toString()
        ) {
          finish();
          return;
        }
        const touch = event.changedTouches[0];
        const horizontal = touch.clientX - origin.clientX;
        const vertical = touch.clientY - origin.clientY;
        if (
          touch.identifier !== origin.identifier ||
          Math.abs(horizontal) < SWIPE_MIN_DISTANCE_PX ||
          Math.abs(horizontal) < Math.abs(vertical) * SWIPE_HORIZONTAL_RATIO
        ) {
          finish();
          return;
        }
        const nextPath = getSwipeDestination(pages, location.pathname, horizontal);
        finish(nextPath);
      },
      onTouchCancel: () => {
        start.current = undefined;
        finish();
      },
    },
  };
}

function useBelowBreakpoint(surface: RefObject<HTMLElement | null>, property: string): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const element = surface.current;
    if (!element) {
      return;
    }
    const breakpoint = getComputedStyle(element).getPropertyValue(property).trim();
    if (!breakpoint) {
      return;
    }
    const media = window.matchMedia(`(width < ${breakpoint})`);
    const updateMatches = (): void => {
      setMatches(media.matches);
    };
    updateMatches();
    media.addEventListener('change', updateMatches);
    return () => {
      media.removeEventListener('change', updateMatches);
    };
  }, [surface, property]);
  return matches;
}

function getSwipeDestination(
  pages: readonly SwipePage[],
  pathname: string,
  horizontalDistance: number,
): string | undefined {
  const normalizedPath = pathname.replace(/\/$/, '') || '/';
  const currentIndex = pages.findIndex((page) => `/${page.to}` === normalizedPath);
  if (currentIndex < 0 || pages.length < 2) {
    return undefined;
  }
  const step = horizontalDistance < 0 ? 1 : -1;
  const nextIndex = (currentIndex + step + pages.length) % pages.length;
  return `/${pages[nextIndex].to}`;
}

function isInteractiveTarget(target: EventTarget, boundary: HTMLElement): boolean {
  if (!(target instanceof Element)) {
    return true;
  }
  if (target.closest(INTERACTIVE_SELECTOR)) {
    return true;
  }
  for (
    let element: Element | null = target;
    element && element !== boundary;
    element = element.parentElement
  ) {
    if (
      element.scrollWidth > element.clientWidth &&
      /auto|scroll/.test(getComputedStyle(element).overflowX)
    ) {
      return true;
    }
  }
  return false;
}
