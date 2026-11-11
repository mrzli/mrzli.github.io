export const PAGE_PATHS = {
  home: '/',
  experience: '/experience/',
  skills: '/skills/',
  projects: '/projects/',
  howIWork: '/how-i-work/',
  background: '/background/',
  values: '/values/',
  calculators: '/calculators/',
} as const;

export const STATIC_PAGE_PATHS = Object.values(PAGE_PATHS);

const UNLISTED_PAGE_PATHS: readonly string[] = [PAGE_PATHS.values, PAGE_PATHS.calculators];

export const INDEXABLE_PAGE_PATHS = STATIC_PAGE_PATHS.filter(
  (path): path is Exclude<typeof path, typeof PAGE_PATHS.values | typeof PAGE_PATHS.calculators> =>
    !UNLISTED_PAGE_PATHS.includes(path),
);
export type IndexablePagePath = (typeof INDEXABLE_PAGE_PATHS)[number];
