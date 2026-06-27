import type { ReactNode } from 'react';

import { type DateRangeBound, ExperienceSectionHeader } from './experience-section-header';
import { ProjectCard } from './project-card';

export interface ProjectItem {
  readonly title: string;
  readonly text: readonly string[];
  readonly tags: readonly string[];
  readonly roleText: readonly string[];
}

export interface ExperienceSectionProps {
  readonly title: string;
  readonly location: string;
  readonly role: string;
  readonly from: DateRangeBound;
  readonly to: DateRangeBound;
  readonly projects: readonly ProjectItem[];
}

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
