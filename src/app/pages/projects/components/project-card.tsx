import { Card, ExternalLink, TagList, Typography } from '@components';
import type { ReactNode } from 'react';

import type { LinkItem } from '../../../types';

export interface ProjectCardProps {
  readonly title: string;
  readonly text: readonly string[];
  readonly tags: readonly string[];
  readonly roleText: readonly string[];
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
        <Typography variant='body'>
          <div className='flex flex-col gap-2'>
            {text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Typography>
        <TagList tags={tags} />

        <Card variant='inner' padding='small'>
          <Typography variant='body'>
            <div className='flex flex-col gap-2'>
              {roleText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Typography>
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
