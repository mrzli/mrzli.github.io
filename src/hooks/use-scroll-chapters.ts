import { type RefObject, useEffect, useState } from 'react';
import { useLocation } from 'react-router';

// Pages mark chapters with this attribute. A chapter may contain nested chapters, which replace it
// when it is too tall to be useful as a single chapter.
const CHAPTER_ATTRIBUTE = 'data-chapter';

const SPLIT_HEIGHT_VIEWPORT_RATIO = 1.5;

export function chapterAttributes(
  title: string,
): Readonly<Record<typeof CHAPTER_ATTRIBUTE, string>> {
  return { [CHAPTER_ATTRIBUTE]: title };
}

export interface ScrollChapter {
  readonly title: string;
  readonly parentTitle?: string;
  // The scroll position where the chapter starts. Scrolling there fills the bar up to this
  // chapter and no further.
  readonly anchor: number;
}

export interface ScrollChapters {
  readonly chapters: readonly ScrollChapter[];
  // How full each chapter's segment is, from 0 to 1.
  readonly fills: readonly number[];
  // The last chapter whose anchor has been reached.
  readonly currentIndex: number;
}

// A chapter starts when its top reaches `gap` pixels below the bottom of `edgeRef`, such as a sticky
// header.
export function useScrollChapters(
  edgeRef: RefObject<HTMLElement | null>,
  gap: number,
): ScrollChapters {
  const { pathname } = useLocation();
  const [chapters, setChapters] = useState<readonly ScrollChapter[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateScroll = (): void => {
      setScrollY(window.scrollY);
    };
    const update = (): void => {
      setChapters(findChapters((edgeRef.current?.getBoundingClientRect().bottom ?? 0) + gap));
      updateScroll();
    };

    update();
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(document.body);
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', update);
    };
  }, [pathname, edgeRef, gap]);

  const fills = chapters.map((chapter, index) => {
    const previous = chapters[index - 1];
    if (!previous) {
      return 1;
    }
    const length = chapter.anchor - previous.anchor;
    if (length <= 0) {
      return scrollY >= chapter.anchor ? 1 : 0;
    }
    return Math.min(1, Math.max(0, (scrollY - previous.anchor) / length));
  });
  const currentIndex = Math.max(
    0,
    fills.findLastIndex((fill) => fill >= 1),
  );

  return { chapters, fills, currentIndex };
}

interface ChapterElement {
  readonly title: string;
  readonly parentTitle?: string;
  readonly element: HTMLElement;
}

function findChapters(anchorOffset: number): readonly ScrollChapter[] {
  const elements = getTopLevelChapterElements().flatMap(toChapterElements);
  if (elements.length < 2) {
    return [];
  }
  const anchors = getAnchors(
    elements.map(
      ({ element }) => element.getBoundingClientRect().top + window.scrollY - anchorOffset,
    ),
  );
  return elements.map(({ title, parentTitle }, index) => ({
    title,
    parentTitle,
    anchor: anchors[index] ?? 0,
  }));
}

// The first chapter starts at the top of the page. Chapters too close to the end to scroll to share
// the last stretch of scrolling evenly, so each still has its own anchor.
function getAnchors(tops: readonly number[]): readonly number[] {
  const maximumY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const anchors = tops.map((top, index) => (index === 0 ? 0 : Math.max(0, top)));
  const firstUnreachable = anchors.findIndex((anchor) => anchor > maximumY);
  if (firstUnreachable === -1) {
    return anchors;
  }
  const from = anchors[firstUnreachable - 1] ?? 0;
  const count = anchors.length - firstUnreachable;
  return anchors.map((anchor, index) =>
    index < firstUnreachable
      ? anchor
      : from + ((maximumY - from) * (index - firstUnreachable + 1)) / count,
  );
}

function getTopLevelChapterElements(): readonly HTMLElement[] {
  // The swipe preview renders a second page, which is inert and must not add chapters.
  return [...document.querySelectorAll<HTMLElement>(`[${CHAPTER_ATTRIBUTE}]`)].filter(
    (element) =>
      element.closest('[inert]') === null &&
      element.parentElement?.closest(`[${CHAPTER_ATTRIBUTE}]`) === null,
  );
}

function toChapterElements(element: HTMLElement): readonly ChapterElement[] {
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
