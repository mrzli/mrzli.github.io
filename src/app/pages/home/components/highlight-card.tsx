import type { FC } from 'react';

export interface HighlightCardProps {
  readonly title: string;
  readonly description: string;
}

export const HighlightCard: FC<HighlightCardProps> = ({
  title,
  description,
}) => {
  return (
    <article className='rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900'>
      <p className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
        {title}
      </p>
      <p className='mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300'>
        {description}
      </p>
    </article>
  );
};
