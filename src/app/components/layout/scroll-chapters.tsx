import { type ReactNode, useRef, useState } from 'react';

import { cn } from '@/app/util';
import { type ScrollChapter, useScrollChapters } from '@/hooks';

const CHAPTER_SCROLL_GAP_PX = 16;

export function ScrollChapters(): ReactNode {
  const { chapters, progress } = useScrollChapters();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={containerRef} className='absolute inset-x-0 -bottom-px hidden md:block'>
      <ol aria-label='Page chapters' className='flex gap-0.5'>
        {chapters.map((chapter, index) => {
          const length = chapter.end - chapter.start;
          const fill = Math.min(1, Math.max(0, (progress - chapter.start) / length));
          const label = chapter.parentTitle
            ? `${chapter.parentTitle}: ${chapter.title}`
            : chapter.title;
          return (
            <li
              key={`${index}-${chapter.title}`}
              className='relative min-w-0'
              style={{ flexGrow: length, flexBasis: 0 }}
            >
              <button
                type='button'
                aria-label={`Go to ${label}`}
                onClick={() => {
                  scrollToChapter(chapter);
                }}
                onMouseEnter={() => {
                  setActiveIndex(index);
                }}
                onMouseLeave={() => {
                  setActiveIndex(null);
                }}
                onFocus={() => {
                  setActiveIndex(index);
                }}
                onBlur={() => {
                  setActiveIndex(null);
                }}
                className='group flex h-3 w-full cursor-pointer items-end focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 dark:focus-visible:outline-cyan-300'
              >
                <span className='block h-[3px] w-full overflow-hidden bg-slate-200 transition-[height] group-hover:h-[6px] group-focus-visible:h-[6px] motion-reduce:transition-none dark:bg-slate-800'>
                  <span
                    className='block h-full bg-amber-600 dark:bg-cyan-400'
                    style={{ width: `${fill * 100}%` }}
                  />
                </span>
              </button>
              {activeIndex === index && (
                <div
                  aria-hidden='true'
                  className={cn(
                    'pointer-events-none absolute top-full z-10 mt-1 rounded-md bg-slate-900 px-2.5 py-1.5 text-xs whitespace-nowrap text-white shadow-md dark:bg-slate-100 dark:text-slate-900',
                    index === 0
                      ? 'left-0'
                      : index === chapters.length - 1
                        ? 'right-0'
                        : 'left-1/2 -translate-x-1/2',
                  )}
                >
                  {chapter.parentTitle && (
                    <span className='block text-slate-300 dark:text-slate-600'>
                      {chapter.parentTitle}
                    </span>
                  )}
                  <span className='block font-medium'>{chapter.title}</span>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
