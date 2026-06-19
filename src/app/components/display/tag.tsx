import type { ReactNode } from 'react';

export interface TagProps {
  readonly label: string;
}

export function Tag({ label }: TagProps): ReactNode {
  return (
    <span className='rounded-full border border-amber-600 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-200'>
      {label}
    </span>
  );
}
