import type { MetaDescriptor } from 'react-router';

import { PROFILE } from '../content/profile';
import { PAGE_PATHS, type IndexablePagePath } from './page-paths';

interface PageMetadata {
  readonly title: string;
  readonly description: string;
}

const PAGE_METADATA = {
  [PAGE_PATHS.home]: {
    title: `${PROFILE.name} | ${PROFILE.title}`,
    description: `${PROFILE.name}, ${PROFILE.title.toLowerCase()} based in ${PROFILE.location}. Explore professional experience, technical skills, personal projects, and background.`,
  },
  [PAGE_PATHS.experience]: {
    title: `Experience | ${PROFILE.name}`,
    description: `Selected paid client projects from ${PROFILE.name}'s software development career, with project details, contributions, and technologies used.`,
  },
  [PAGE_PATHS.skills]: {
    title: `Skills | ${PROFILE.name}`,
    description: `${PROFILE.name}'s programming languages, frameworks, platforms, and tools, grouped by depth and recency of experience.`,
  },
  [PAGE_PATHS.projects]: {
    title: `Projects | ${PROFILE.name}`,
    description: `Personal software projects by ${PROFILE.name}, including this portfolio website and games for Android and desktop, with source code links.`,
  },
  [PAGE_PATHS.background]: {
    title: `Background | ${PROFILE.name}`,
    description: `${PROFILE.name}'s formal education, additional learning, and interests beyond professional software development.`,
  },
} satisfies Record<IndexablePagePath, PageMetadata>;

export function getPageMetadata(path: IndexablePagePath): MetaDescriptor[] {
  const { title, description } = PAGE_METADATA[path];
  const url = new URL(path, PROFILE.website).href;

  return [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: url },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
  ];
}
