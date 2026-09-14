import type { ReactNode } from 'react';

export interface TagProps {
  readonly label: string;
}

export function Tag({ label }: TagProps): ReactNode {
  return (
    <span className='rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-xs leading-5 font-medium text-slate-600 dark:border-slate-700/60 dark:bg-slate-800/60 dark:text-slate-300'>
      {label}
    </span>
  );
}
