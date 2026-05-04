import type { FC } from 'react';

import { Typography } from '../../../components';

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
      <Typography variant='card-title'>{title}</Typography>
      <Typography variant='body' className='mt-2'>
        {description}
      </Typography>
    </article>
  );
};
