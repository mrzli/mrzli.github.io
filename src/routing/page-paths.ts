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

const UNLISTED_PAGE_PATHS = [PAGE_PATHS.values, PAGE_PATHS.calculators] as const;
type UnlistedPagePath = (typeof UNLISTED_PAGE_PATHS)[number];

export const INDEXABLE_PAGE_PATHS = STATIC_PAGE_PATHS.filter(
  (path): path is Exclude<typeof path, UnlistedPagePath> =>
    !(UNLISTED_PAGE_PATHS as readonly string[]).includes(path),
);
export type IndexablePagePath = (typeof INDEXABLE_PAGE_PATHS)[number];
