import { Card, TagList, Typography } from '@components';
import type { ReactNode } from 'react';

import type { BackgroundGroup } from '@/content/types';

export type TagCardProps = BackgroundGroup;

export function TagCard({ title, tags }: TagCardProps): ReactNode {
  return (
    <Card padding='medium'>
      <div className='flex flex-col gap-3'>
        <Typography variant='card-title-muted'>{title}</Typography>
        <TagList tags={tags} />
      </div>
    </Card>
  );
}
