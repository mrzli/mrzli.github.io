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

export function ProjectCard({ title, text, tags, roleText, links }: ProjectCardProps): ReactNode {
  return (
    <Card as='article' padding='large' className='flex flex-col'>
      <div className='flex flex-1 flex-col gap-5'>
        <Typography variant='heading-3' as='h2' className='text-amber-700 dark:text-amber-300'>
          {title}
        </Typography>
        <Typography variant='prose' as='div'>
          <div className='flex flex-col gap-4'>
            {text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
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

        <ul className='mt-auto flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-4 dark:border-slate-800'>
          {links.map((link) => {
            return (
              <li key={link.href}>
                <ExternalLink
                  variant='highlight'
                  href={link.href}
                  label={link.label}
                  className='rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700 dark:focus-visible:outline-cyan-300'
                />
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
}
