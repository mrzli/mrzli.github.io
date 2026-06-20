import { Card, TagList, Typography } from '@components';
import type { ReactNode } from 'react';

export interface TagCardProps {
  readonly title: string;
  readonly tags: readonly string[];
}

export function TagCard({ title, tags }: TagCardProps): ReactNode {
  return (
    <Card className='lg:col-span-2' padding='medium'>
      <div className='flex flex-col gap-3'>
        <Typography variant='card-title-muted'>{title}</Typography>
        <TagList tags={tags} />
      </div>
    </Card>
  );
}
