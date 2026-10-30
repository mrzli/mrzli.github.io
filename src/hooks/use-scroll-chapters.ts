import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

// Pages mark chapters with this attribute. A chapter may contain nested chapters, which replace it
// when it is too tall to be useful as a single chapter.
const CHAPTER_ATTRIBUTE = 'data-chapter';

export function chapterAttributes(
  title: string,
): Readonly<Record<typeof CHAPTER_ATTRIBUTE, string>> {
  return { [CHAPTER_ATTRIBUTE]: title };
}

const SPLIT_HEIGHT_VIEWPORT_RATIO = 1.5;

export interface ScrollChapter {
  readonly title: string;
  readonly parentTitle?: string;
  readonly element: HTMLElement;
  // Fractions of the document height where the chapter starts and ends.
  readonly start: number;
  readonly end: number;
}

export interface ScrollChapters {
  readonly chapters: readonly ScrollChapter[];
  // The reading position as a fraction of the document height.
  readonly progress: number;
}

export function useScrollChapters(): ScrollChapters {
  const { pathname } = useLocation();
  const [chapters, setChapters] = useState<readonly ScrollChapter[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateChapters = (): void => {
      setChapters(findChapters());
    };
    const updateProgress = (): void => {
      setProgress(getReadingProgress());
    };
    const update = (): void => {
      updateChapters();
      updateProgress();
    };

    update();
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(document.body);
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', update);
    };
  }, [pathname]);

  return { chapters, progress };
}

// The reading position moves from the top of the viewport at the start of the page to its bottom at
// the end, so it reaches every part of the document, including chapters too short to scroll to.
function getReadingProgress(): number {
  const documentHeight = document.documentElement.scrollHeight;
  const maximumY = Math.max(0, documentHeight - window.innerHeight);
  if (maximumY === 0) {
    return 1;
  }
  const scrolled = Math.min(1, Math.max(0, window.scrollY / maximumY));
  return (window.scrollY + window.innerHeight * scrolled) / documentHeight;
}

interface ChapterStart {
  readonly title: string;
  readonly parentTitle?: string;
  readonly element: HTMLElement;
  readonly top: number;
}

function findChapters(): readonly ScrollChapter[] {
  const starts = getTopLevelChapterElements().flatMap(toChapterStarts);
  if (starts.length < 2) {
    return [];
  }
  const documentHeight = document.documentElement.scrollHeight;
  return starts.map((start, index) => ({
    title: start.title,
    parentTitle: start.parentTitle,
    element: start.element,
    start: index === 0 ? 0 : start.top / documentHeight,
    end:
      index === starts.length - 1 ? 1 : (starts[index + 1]?.top ?? documentHeight) / documentHeight,
  }));
}

function getTopLevelChapterElements(): readonly HTMLElement[] {
  // The swipe preview renders a second page, which is inert and must not add chapters.
  return [...document.querySelectorAll<HTMLElement>(`[${CHAPTER_ATTRIBUTE}]`)].filter(
    (element) =>
      element.closest('[inert]') === null &&
      element.parentElement?.closest(`[${CHAPTER_ATTRIBUTE}]`) === null,
  );
}

function toChapterStarts(element: HTMLElement): readonly ChapterStart[] {
  const title = element.getAttribute(CHAPTER_ATTRIBUTE) ?? '';
  const top = getDocumentTop(element);
  const children = [...element.querySelectorAll<HTMLElement>(`[${CHAPTER_ATTRIBUTE}]`)];
  const isTall =
    element.getBoundingClientRect().height > window.innerHeight * SPLIT_HEIGHT_VIEWPORT_RATIO;

  if (children.length < 2 || !isTall) {
    return [{ title, element, top }];
  }
  // The first nested chapter also covers the parent's own heading.
  return children.map((child, index) => ({
    title: child.getAttribute(CHAPTER_ATTRIBUTE) ?? '',
    parentTitle: title,
    element: index === 0 ? element : child,
    top: index === 0 ? top : getDocumentTop(child),
  }));
}

function getDocumentTop(element: HTMLElement): number {
  return element.getBoundingClientRect().top + window.scrollY;
}
