export const PAGE_PATHS = {
  home: '/',
  experience: '/experience/',
  skills: '/skills/',
  projects: '/projects/',
  background: '/background/',
  values: '/values/',
} as const;

export const STATIC_PAGE_PATHS = Object.values(PAGE_PATHS);

export const INDEXABLE_PAGE_PATHS = STATIC_PAGE_PATHS.filter((path) => path !== PAGE_PATHS.values);
export type IndexablePagePath = (typeof INDEXABLE_PAGE_PATHS)[number];
