import type { ReactNode } from 'react';

import type { ExperienceEntry } from '@/content/types';

import { ExperienceSectionHeader } from './experience-section-header';
import { ProjectCard } from './project-card';

export type ExperienceSectionProps = ExperienceEntry;

export function ExperienceSection({
  title,
  location,
  role,
  from,
  to,
  projects,
}: ExperienceSectionProps): ReactNode {
  return (
    <div className='flex flex-col gap-4'>
      <ExperienceSectionHeader title={title} location={location} role={role} from={from} to={to} />
      <div className='flex flex-col gap-6'>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
