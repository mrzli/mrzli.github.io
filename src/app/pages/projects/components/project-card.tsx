import { Card, ExternalLink, ProjectDetails } from '@components';
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
        <ProjectDetails title={title} headingAs='h2' text={text} tags={tags} roleText={roleText} />

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
