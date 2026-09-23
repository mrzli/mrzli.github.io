import type { MetaDescriptor } from 'react-router';

import profileImage from '../assets/profile.jpg';
import { PROFILE } from '../content/profile';
import { PAGE_PATHS, type IndexablePagePath } from './page-paths';

interface PageMetadata {
  readonly title: string;
  readonly description: string;
}

const PAGE_METADATA = {
  [PAGE_PATHS.home]: {
    title: `${PROFILE.name} | ${PROFILE.title}`,
    description: `${PROFILE.name}, ${PROFILE.title.toLowerCase()} in ${PROFILE.location}. React, TypeScript, and Node.js development. Available for remote B2B contracts.`,
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
  const socialImage = new URL('/social-preview.png', PROFILE.website).href;
  const socialImageAlt = `${PROFILE.name} | ${PROFILE.title} | ${PROFILE.location}`;

  const metadata: MetaDescriptor[] = [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: url },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: socialImage },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: socialImageAlt },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: socialImage },
    { name: 'twitter:image:alt', content: socialImageAlt },
  ];

  if (path === PAGE_PATHS.home) {
    metadata.push({
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        '@id': `${url}#profile`,
        url,
        name: title,
        description,
        mainEntity: {
          '@type': 'Person',
          '@id': `${url}#person`,
          name: PROFILE.name,
          jobTitle: PROFILE.title,
          description: PROFILE.lead,
          url,
          image: new URL(profileImage, PROFILE.website).href,
          sameAs: [PROFILE.linkedin, PROFILE.github, PROFILE.stackOverflow],
        },
      },
    });
  }

  return metadata;
}
