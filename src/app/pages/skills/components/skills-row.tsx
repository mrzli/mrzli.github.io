import { TagList, Typography } from '@components';
import type { ReactNode } from 'react';

export interface SkillsRowProps {
  readonly title: string;
  readonly tags: readonly string[];
}

export function SkillsRow({ title, tags }: SkillsRowProps): ReactNode {
  return (
    <div className='grid gap-3 py-4 first:pt-0 last:pb-0 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-6'>
      <Typography variant='body' as='h3' className='font-medium'>
        {title}
      </Typography>
      <TagList tags={tags} />
    </div>
  );
}
