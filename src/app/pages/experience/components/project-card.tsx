import { Card, ProjectDetails } from '@components';
import type { ReactNode } from 'react';

export interface ProjectCardProps {
  readonly id?: string;
  readonly title: string;
  readonly text: readonly string[];
  readonly tags: readonly string[];
  readonly roleText: readonly string[];
}

export function ProjectCard({ id, title, text, tags, roleText }: ProjectCardProps): ReactNode {
  return (
    <Card padding='large'>
      <div id={id} className='flex flex-col gap-4'>
        <ProjectDetails title={title} headingAs='h3' text={text} tags={tags} roleText={roleText} />
      </div>
    </Card>
  );
}
