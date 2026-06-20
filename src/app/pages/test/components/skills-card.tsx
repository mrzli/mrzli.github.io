import { Card, TagList, Typography } from '@components';
import type { ReactNode } from 'react';

export interface SkillsCardProps {
  readonly title: string;
  readonly tags: readonly string[];
}

export function SkillsCard({ title, tags }: SkillsCardProps): ReactNode {
  return (
    <Card padding='small'>
      <div className='flex flex-col gap-4'>
        <Typography variant='card-title-muted'>{title}</Typography>
        <TagList tags={tags} />
      </div>
    </Card>
  );
}
