import { Tag } from '@components';
import type { ReactNode } from 'react';

export interface TagListProps {
  readonly tags: readonly string[];
}

export function TagList({ tags }: TagListProps): ReactNode {
  return (
    <div className='flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <Tag key={tag} label={tag} />
      ))}
    </div>
  );
}
