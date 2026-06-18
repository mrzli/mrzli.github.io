import type { ReactNode } from 'react';

import { UnorderedListItem } from './unordered-list-item';

export interface UnorderedListProps<T> {
  readonly items: readonly T[];
  readonly renderItem?: (item: T) => ReactNode;
}

export function UnorderedList<T>({ items, renderItem }: UnorderedListProps<T>) {
  const renderItemFinal = renderItem ?? DEFAULT_RENDER_FUNCTION;

  return (
    <ul className='flex flex-col gap-3'>
      {items.map((item, index) => (
        <UnorderedListItem key={index}>
          {renderItemFinal(item)}
        </UnorderedListItem>
      ))}
    </ul>
  );
}

const DEFAULT_RENDER_FUNCTION = <T,>(item: T) => item as ReactNode;

