import type { ElementType, ReactNode } from 'react';

export interface CardProps {
  readonly as?: ElementType;
  readonly children: ReactNode;
}

export const Card = ({ as: Tag = 'div', children }: CardProps) => {
  return (
    <Tag className='rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900'>
      {children}
    </Tag>
  );
};
