import { Card, ProjectDetails } from '@components';
import type { ReactNode } from 'react';

import { getExperienceProjectAnchor } from '@/content/project-anchors';
import type { ExperienceProject } from '@/content/types';

export type ProjectCardProps = ExperienceProject;

export function ProjectCard({
  id,
  contentKey,
  title,
  text,
  roleText,
  tags,
}: ProjectCardProps): ReactNode {
  const anchor = getExperienceProjectAnchor({ id, contentKey });
  return (
    <Card padding='large'>
      <div id={anchor} className='flex scroll-mt-24 flex-col gap-4'>
        <ProjectDetails
          titleHref={`#${anchor}`}
          title={title}
          headingAs='h3'
          text={text}
          roleText={roleText}
          tags={tags}
        />
      </div>
    </Card>
  );
}
