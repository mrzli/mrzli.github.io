import type { ReactNode } from 'react';

import { UnorderedListBullet } from './unordered-list-bullet';

export interface UnorderedListItemProps {
  readonly children: ReactNode;
}

export function UnorderedListItem({ children }: UnorderedListItemProps): ReactNode {
  return (
    <li className='flex gap-3'>
      <UnorderedListBullet />
      {children}
    </li>
  );
}
