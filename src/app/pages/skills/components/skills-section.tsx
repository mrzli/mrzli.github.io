import { Typography } from '@components';
import type { ReactNode } from 'react';

import { SkillsCard } from './skills-card';

export interface SkillsSectionGroup {
  readonly title: string;
  readonly skills: readonly string[];
}

export interface SkillsSectionProps {
  readonly title: string;
  readonly groups: readonly SkillsSectionGroup[];
}

export function SkillsSection({
  title,
  groups,
}: SkillsSectionProps): ReactNode {
  return (
    <div className='flex flex-col gap-4'>
      <Typography variant='heading-4'>{title}</Typography>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3'>
        {groups.map((group) => (
          <SkillsCard
            key={group.title}
            title={group.title}
            tags={group.skills}
          />
        ))}
      </div>
    </div>
  );
}
