import { type KeyboardEvent, type ReactNode, useLayoutEffect, useRef, useState } from 'react';

import { type ScrollChapter, useScrollChapters } from '@/hooks';

const CONTAINER_CLASS_NAME = 'absolute inset-x-0 -bottom-px hidden md:block';
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
  const [active, setActive] = useState<ActiveChapter | undefined>();
  const [tooltipLeft, setTooltipLeft] = useState(0);
  // The bar is one tab stop. The arrow keys move between chapters, and the focusable chapter is the
  // last one focused, or the chapter being read.
  const [focusIndex, setFocusIndex] = useState<number | undefined>();
  const buttonRefs = useRef<(HTMLButtonElement | undefined)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const { chapters, fills, currentIndex } = useScrollChapters(containerRef, CHAPTER_SCROLL_GAP_PX);

  useLayoutEffect(() => {
    if (!active || !tooltipRef.current) {
      return;
    }
    const width = tooltipRef.current.offsetWidth;
    const leftOfPointer = active.x - TOOLTIP_POINTER_GAP_PX - width;
    setTooltipLeft(leftOfPointer >= 0 ? leftOfPointer : active.x + TOOLTIP_POINTER_ICON_WIDTH_PX);
  }, [active]);

  // The container stays mounted, because chapter positions are measured from its bottom edge.
  if (chapters.length === 0) {
    return <div ref={containerRef} className={CONTAINER_CLASS_NAME} />;
  }

  const scrollToChapter = (chapter: ScrollChapter): void => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: chapter.anchor, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  const getRelativeX = (clientX: number): number =>
    clientX - (containerRef.current?.getBoundingClientRect().left ?? 0);

  const activeChapter = active ? chapters[active.index] : undefined;
  const tabStopIndex =
    focusIndex !== undefined && focusIndex < chapters.length ? focusIndex : currentIndex;

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
    <div ref={containerRef} className={CONTAINER_CLASS_NAME}>
      <div
        role='toolbar'
        aria-label='Page chapters'
        className='flex gap-0.5'
        onKeyDown={handleKeyDown}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setFocusIndex(undefined);
          }
        }}
        onMouseLeave={() => {
          setActive(undefined);
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
                buttonRefs.current[index] = element ?? undefined;
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
                setFocusIndex(index);
                // A click also focuses the button. Only keyboard focus places the tooltip, so it
                // stays at the pointer after a click.
                if (event.currentTarget.matches(':focus-visible')) {
                  const rect = event.currentTarget.getBoundingClientRect();
                  setActive({ index, x: getRelativeX(rect.left + rect.width / 2) });
                }
              }}
              onBlur={() => {
                setActive(undefined);
              }}
              className='group flex h-3 min-w-0 flex-1 cursor-pointer items-end outline-none'
            >
              <span className='block h-[3px] w-full overflow-hidden bg-slate-200 transition-[height,background-color] group-hover:h-[6px] group-hover:bg-slate-300 group-focus-visible:h-[6px] group-focus-visible:bg-slate-300 motion-reduce:transition-none dark:bg-slate-800 dark:group-hover:bg-slate-700 dark:group-focus-visible:bg-slate-700'>
                <span
                  className='block h-full bg-amber-600 group-hover:bg-amber-500 group-focus-visible:bg-amber-500 dark:bg-cyan-400 dark:group-hover:bg-cyan-300 dark:group-focus-visible:bg-cyan-300'
                  style={{ width: `${(fills[index] ?? 0) * 100}%` }}
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
          {/* Each level keeps one style: top-level chapters, such as employments, in medium
              weight, and nested chapters, such as projects, in regular weight below them. */}
          <span className='block font-medium'>
            {activeChapter.parentTitle ?? activeChapter.title}
          </span>
          {activeChapter.parentTitle && (
            <span className='block text-slate-600 dark:text-slate-300'>{activeChapter.title}</span>
          )}
        </div>
      )}
    </div>
  );
}
