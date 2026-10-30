import { type KeyboardEvent, type ReactNode, useLayoutEffect, useRef, useState } from 'react';

import { cn } from '@/app/util';
import { type ScrollChapter, useScrollChapters } from '@/hooks';

const CHAPTER_SCROLL_GAP_PX = 16;
// The tooltip sits below and to the left of the pointer, away from the pointer icon, which extends
// below and to the right of the point it hovers.
const TOOLTIP_POINTER_GAP_PX = 8;
const TOOLTIP_POINTER_ICON_WIDTH_PX = 20;

interface ActiveChapter {
  readonly index: number;
  // The pointer position, or the segment center for keyboard focus, relative to the bar.
  readonly x: number;
}

export function ScrollChapters(): ReactNode {
  const { chapters, currentIndex } = useScrollChapters();
  const [active, setActive] = useState<ActiveChapter | null>(null);
  const [tooltipLeft, setTooltipLeft] = useState(0);
  // The bar is one tab stop. The arrow keys move between chapters, and the focusable chapter is the
  // last one focused, or the chapter being read.
  const [focusIndex, setFocusIndex] = useState<number | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!active || !tooltipRef.current) {
      return;
    }
    const width = tooltipRef.current.offsetWidth;
    const leftOfPointer = active.x - TOOLTIP_POINTER_GAP_PX - width;
    setTooltipLeft(leftOfPointer >= 0 ? leftOfPointer : active.x + TOOLTIP_POINTER_ICON_WIDTH_PX);
  }, [active]);

  if (chapters.length === 0) {
    return null;
  }

  const scrollToChapter = (chapter: ScrollChapter): void => {
    const headerBottom = containerRef.current?.getBoundingClientRect().bottom ?? 0;
    const top =
      chapter.element.getBoundingClientRect().top +
      window.scrollY -
      headerBottom -
      CHAPTER_SCROLL_GAP_PX;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: Math.max(0, top), behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  const getRelativeX = (clientX: number): number =>
    clientX - (containerRef.current?.getBoundingClientRect().left ?? 0);

  const activeChapter = active ? chapters[active.index] : undefined;
  const tabStopIndex =
    focusIndex !== null && focusIndex < chapters.length ? focusIndex : currentIndex;

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    const current = focusIndex ?? currentIndex;
    const next =
      event.key === 'ArrowRight'
        ? Math.min(chapters.length - 1, current + 1)
        : event.key === 'ArrowLeft'
          ? Math.max(0, current - 1)
          : event.key === 'Home'
            ? 0
            : event.key === 'End'
              ? chapters.length - 1
              : undefined;
    if (next === undefined) {
      return;
    }
    event.preventDefault();
    buttonRefs.current[next]?.focus();
  };

  return (
    <div ref={containerRef} className='absolute inset-x-0 -bottom-px hidden md:block'>
      <div
        role='toolbar'
        aria-label='Page chapters'
        className='flex gap-0.5'
        onKeyDown={handleKeyDown}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setFocusIndex(null);
          }
        }}
        onMouseLeave={() => {
          setActive(null);
        }}
      >
        {chapters.map((chapter, index) => {
          const label = chapter.parentTitle
            ? `${chapter.parentTitle}: ${chapter.title}`
            : chapter.title;
          return (
            <button
              key={`${index}-${chapter.title}`}
              ref={(element) => {
                buttonRefs.current[index] = element;
              }}
              type='button'
              tabIndex={index === tabStopIndex ? 0 : -1}
              aria-label={`Go to ${label}`}
              onClick={() => {
                scrollToChapter(chapter);
              }}
              onMouseMove={(event) => {
                setActive({ index, x: getRelativeX(event.clientX) });
              }}
              onFocus={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                setActive({ index, x: getRelativeX(rect.left + rect.width / 2) });
                setFocusIndex(index);
              }}
              onBlur={() => {
                setActive(null);
              }}
              className='group flex h-3 min-w-0 flex-1 cursor-pointer items-end outline-none'
            >
              <span className='block h-[3px] w-full overflow-hidden bg-slate-200 transition-[height,background-color] group-hover:h-[6px] group-hover:bg-slate-300 group-focus-visible:h-[6px] group-focus-visible:bg-slate-300 motion-reduce:transition-none dark:bg-slate-800 dark:group-hover:bg-slate-700 dark:group-focus-visible:bg-slate-700'>
                <span
                  className={cn(
                    'block h-full transition-colors duration-200 ease-in-out motion-reduce:transition-none',
                    index <= currentIndex &&
                      'bg-amber-600 group-hover:bg-amber-500 group-focus-visible:bg-amber-500 dark:bg-cyan-400 dark:group-hover:bg-cyan-300 dark:group-focus-visible:bg-cyan-300',
                  )}
                />
              </span>
            </button>
          );
        })}
      </div>
      {active && activeChapter && (
        <div
          ref={tooltipRef}
          aria-hidden='true'
          className='pointer-events-none absolute top-full z-10 mt-2 rounded-md bg-white px-2.5 py-1.5 text-xs whitespace-nowrap text-slate-900 shadow-md ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700'
          style={{ left: tooltipLeft }}
        >
          {activeChapter.parentTitle && (
            <span className='block text-slate-500 dark:text-slate-400'>
              {activeChapter.parentTitle}
            </span>
          )}
          <span className='block font-medium'>{activeChapter.title}</span>
        </div>
      )}
    </div>
  );
}
