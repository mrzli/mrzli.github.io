import { Card, Typography } from '@components';
import type { ReactNode } from 'react';

import type { SkillSection } from '@/content/types';

import { SkillsRow } from './skills-row';

export type SkillsSectionProps = SkillSection;

export function SkillsSection({ title, groups }: SkillsSectionProps): ReactNode {
  return (
    <section className='flex flex-col gap-4'>
      <Typography variant='heading-2'>{title}</Typography>
      <Card>
        <div className='divide-y divide-slate-200 dark:divide-slate-800'>
          {groups.map((group) => (
            <SkillsRow key={group.title} title={group.title} tags={group.skills} />
          ))}
        </div>
      </Card>
    </section>
  );
}
