import type { ReactNode } from 'react';
import { Link } from 'react-router';

import { cn } from '../../util';
import { SPLIT_LAYOUT_CLASS_NAME } from '../layout/split-layout';
import { TagList } from '../layout/tag-list';
import { Typography } from './typography';

const PROJECT_HEADING_ELEMENTS = ['h2', 'h3'] as const;
type ProjectHeadingElement = (typeof PROJECT_HEADING_ELEMENTS)[number];

export interface ProjectDetailsProps {
  readonly title: string;
  readonly titleHref?: string;
  readonly headingAs: ProjectHeadingElement;
  readonly text: readonly string[];
  readonly roleText: readonly string[];
  readonly tags: readonly string[];
  readonly split?: boolean;
}

export function ProjectDetails({
  title,
  titleHref,
  headingAs,
  text,
  roleText,
  tags,
  split = false,
}: ProjectDetailsProps): ReactNode {
  const heading = (
    <Typography variant='heading-3' as={headingAs} className='text-amber-700 dark:text-amber-300'>
      {titleHref ? (
        <Link
          to={titleHref}
          className='rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-4'
        >
          {title}
        </Link>
      ) : (
        title
      )}
    </Typography>
  );
  const body = (
    <>
      <Typography variant='prose' as='div' className='space-y-4'>
        {text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </Typography>
      <div className='space-y-2 border-l-2 border-slate-300 pl-4 dark:border-slate-600'>
        <Typography variant='card-title-muted' as={headingAs === 'h2' ? 'h3' : 'h4'}>
          My contribution
        </Typography>
        <Typography variant='prose' as='div' className='space-y-4'>
          {roleText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Typography>
      </div>
    </>
  );
  const tagList = <TagList tags={tags} />;

  if (split) {
    return (
      <div className={cn('flex flex-col gap-4', SPLIT_LAYOUT_CLASS_NAME)}>
        <div className='flex flex-col gap-4'>
          {heading}
          {tagList}
        </div>
        <div className='flex flex-col gap-4'>{body}</div>
      </div>
    );
  }

  return (
    <>
      {heading}
      {body}
      {tagList}
    </>
  );
}
