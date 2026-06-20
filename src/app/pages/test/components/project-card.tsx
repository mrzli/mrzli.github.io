import { Card, ExternalLink, TagList, Typography } from '@components';
import type { ReactNode } from 'react';

import type { LinkItem } from '../../../types';

export interface ProjectCardProps {
  readonly title: string;
  readonly text: string;
  readonly tags: readonly string[];
  readonly roleText: string;
  readonly links: readonly LinkItem[];
}

export function ProjectCard({
  title,
  text,
  tags,
  roleText,
  links,
}: ProjectCardProps): ReactNode {
  return (
    <Card padding='large'>
      <div className='flex flex-col gap-4'>
        <Typography variant='card-title-accent'>{title}</Typography>
        <Typography variant='body'>{text}</Typography>
        <TagList tags={tags} />

        <Card variant='inner' padding='small'>
          <div className='flex flex-col gap-2'>
            <Typography variant='heading-4'>My role</Typography>
            <Typography variant='body'>{roleText}</Typography>
          </div>
        </Card>

        <Card variant='highlight' padding='small'>
          <ul className='flex flex-col gap-2'>
            {links.map((link) => {
              return (
                <div key={link.href} className='flex'>
                  <ExternalLink
                    variant='highlight'
                    href={link.href}
                    label={link.label}
                  />
                </div>
              );
            })}
          </ul>
        </Card>
      </div>
    </Card>
  );
}
