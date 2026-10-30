import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';

// Pages mark chapters with this attribute. A chapter may contain nested chapters, which replace it
// when it is too tall to be useful as a single chapter.
const CHAPTER_ATTRIBUTE = 'data-chapter';

const SPLIT_HEIGHT_VIEWPORT_RATIO = 1.5;
// A chapter is reached once its top scrolls above this distance from the top of the viewport.
const REACHED_LINE_PX = 120;
// Allows for rounding when checking whether the page is scrolled to the bottom.
const BOTTOM_TOLERANCE_PX = 2;

export function chapterAttributes(
  title: string,
): Readonly<Record<typeof CHAPTER_ATTRIBUTE, string>> {
  return { [CHAPTER_ATTRIBUTE]: title };
}

export interface ScrollChapter {
  readonly title: string;
  readonly parentTitle?: string;
  readonly element: HTMLElement;
}

export interface ScrollChapters {
  readonly chapters: readonly ScrollChapter[];
  // The last chapter reached. Chapters up to it count as reached.
  readonly currentIndex: number;
}

export function useScrollChapters(): ScrollChapters {
  const { pathname } = useLocation();
  const [chapters, setChapters] = useState<readonly ScrollChapter[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const chaptersRef = useRef<readonly ScrollChapter[]>([]);

  useEffect(() => {
    const updateCurrent = (): void => {
      setCurrentIndex(getCurrentIndex(chaptersRef.current));
    };
    const update = (): void => {
      chaptersRef.current = findChapters();
      setChapters(chaptersRef.current);
      updateCurrent();
    };

    update();
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(document.body);
    window.addEventListener('scroll', updateCurrent, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('scroll', updateCurrent);
      window.removeEventListener('resize', update);
    };
  }, [pathname]);

  return { chapters, currentIndex };
}

function getCurrentIndex(chapters: readonly ScrollChapter[]): number {
  const maximumY = document.documentElement.scrollHeight - window.innerHeight;
  // Short chapters at the end may never scroll up to the line, so the bottom of the page reaches
  // the last one.
  if (chapters.length > 0 && window.scrollY >= maximumY - BOTTOM_TOLERANCE_PX) {
    return chapters.length - 1;
  }
  const reached = chapters.findLastIndex(
    (chapter) => chapter.element.getBoundingClientRect().top <= REACHED_LINE_PX,
  );
  return Math.max(0, reached);
}

function findChapters(): readonly ScrollChapter[] {
  const chapters = getTopLevelChapterElements().flatMap(toChapters);
  return chapters.length < 2 ? [] : chapters;
}

function getTopLevelChapterElements(): readonly HTMLElement[] {
  // The swipe preview renders a second page, which is inert and must not add chapters.
  return [...document.querySelectorAll<HTMLElement>(`[${CHAPTER_ATTRIBUTE}]`)].filter(
    (element) =>
      element.closest('[inert]') === null &&
      element.parentElement?.closest(`[${CHAPTER_ATTRIBUTE}]`) === null,
  );
}

function toChapters(element: HTMLElement): readonly ScrollChapter[] {
  const title = element.getAttribute(CHAPTER_ATTRIBUTE) ?? '';
  const children = [...element.querySelectorAll<HTMLElement>(`[${CHAPTER_ATTRIBUTE}]`)];
  const isTall =
    element.getBoundingClientRect().height > window.innerHeight * SPLIT_HEIGHT_VIEWPORT_RATIO;

  if (children.length < 2 || !isTall) {
    return [{ title, element }];
  }
  // The first nested chapter also covers the parent's own heading.
  return children.map((child, index) => ({
    title: child.getAttribute(CHAPTER_ATTRIBUTE) ?? '',
    parentTitle: title,
    element: index === 0 ? element : child,
  }));
}
