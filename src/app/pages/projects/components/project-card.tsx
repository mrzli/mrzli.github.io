import { Card, LinkList, ProjectDetails } from '@components';
import type { ReactNode } from 'react';

import type { PersonalProject } from '@/content/types';

export type ProjectCardProps = PersonalProject;

export function ProjectCard({ title, text, roleText, tags, links }: ProjectCardProps): ReactNode {
  return (
    <Card as='article' padding='large' className='flex flex-col'>
      <div className='flex flex-1 flex-col gap-5'>
        <ProjectDetails title={title} headingAs='h2' text={text} roleText={roleText} tags={tags} />

        <LinkList
          layout='row'
          links={links}
          className='mt-auto border-t border-slate-200 pt-4 dark:border-slate-800'
        />
      </div>
    </Card>
  );
}
