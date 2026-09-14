import type { ReactNode } from 'react';

import { TagList } from '../layout/tag-list';
import { Typography } from './typography';

const PROJECT_HEADING_ELEMENTS = ['h2', 'h3'] as const;
type ProjectHeadingElement = (typeof PROJECT_HEADING_ELEMENTS)[number];

export interface ProjectDetailsProps {
  readonly title: string;
  readonly headingAs: ProjectHeadingElement;
  readonly text: readonly string[];
  readonly tags: readonly string[];
  readonly roleText: readonly string[];
}

export function ProjectDetails({
  title,
  headingAs,
  text,
  tags,
  roleText,
}: ProjectDetailsProps): ReactNode {
  return (
    <>
      <Typography variant='heading-3' as={headingAs} className='text-amber-700 dark:text-amber-300'>
        {title}
      </Typography>
      <Typography variant='prose' as='div' className='space-y-4'>
        {text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </Typography>
      <TagList tags={tags} />
      <Typography
        variant='prose'
        as='div'
        className='space-y-4 border-l-2 border-slate-300 pl-4 dark:border-slate-600'
      >
        {roleText.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </Typography>
    </>
  );
}
