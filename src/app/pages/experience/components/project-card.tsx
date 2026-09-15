import { Card, ProjectDetails } from '@components';
import type { ReactNode } from 'react';

import type { ProjectDescription } from '@/content/types';

export type ProjectCardProps = ProjectDescription;

export function ProjectCard({ id, title, text, tags, roleText }: ProjectCardProps): ReactNode {
  return (
    <Card padding='large'>
      <div id={id} className='flex flex-col gap-4'>
        <ProjectDetails title={title} headingAs='h3' text={text} tags={tags} roleText={roleText} />
      </div>
    </Card>
  );
}
