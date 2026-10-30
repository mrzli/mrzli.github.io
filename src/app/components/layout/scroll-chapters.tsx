import { type ReactNode, useLayoutEffect, useRef, useState } from 'react';

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
  const { chapters, progress } = useScrollChapters();
  const [active, setActive] = useState<ActiveChapter | null>(null);
  const [tooltipLeft, setTooltipLeft] = useState(0);
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

  return (
    <div ref={containerRef} className='absolute inset-x-0 -bottom-px hidden md:block'>
      <ol
        aria-label='Page chapters'
        className='flex gap-0.5'
        onMouseLeave={() => {
          setActive(null);
        }}
      >
        {chapters.map((chapter, index) => {
          const length = chapter.end - chapter.start;
          const fill = Math.min(1, Math.max(0, (progress - chapter.start) / length));
          const label = chapter.parentTitle
            ? `${chapter.parentTitle}: ${chapter.title}`
            : chapter.title;
          return (
            <li
              key={`${index}-${chapter.title}`}
              className='min-w-0'
              style={{ flexGrow: length, flexBasis: 0 }}
            >
              <button
                type='button'
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
                }}
                onBlur={() => {
                  setActive(null);
                }}
                className='group flex h-3 w-full cursor-pointer items-end outline-none'
              >
                <span className='block h-[3px] w-full overflow-hidden bg-slate-200 transition-[height,background-color] group-hover:h-[6px] group-hover:bg-slate-300 group-focus-visible:h-[6px] group-focus-visible:bg-slate-300 motion-reduce:transition-none dark:bg-slate-800 dark:group-hover:bg-slate-700 dark:group-focus-visible:bg-slate-700'>
                  <span
                    className='block h-full bg-amber-600 transition-colors group-hover:bg-amber-500 group-focus-visible:bg-amber-500 motion-reduce:transition-none dark:bg-cyan-400 dark:group-hover:bg-cyan-300 dark:group-focus-visible:bg-cyan-300'
                    style={{ width: `${fill * 100}%` }}
                  />
                </span>
              </button>
            </li>
          );
        })}
      </ol>
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
