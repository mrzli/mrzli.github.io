import { Icon } from '@iconify/react';
import type { FC } from 'react';
import { Link } from 'react-router';

import { Typography } from '../../../components';

export interface RouteCardProps {
  readonly title: string;
  readonly to: string;
  readonly description: string;
}

export const RouteCard: FC<RouteCardProps> = ({ title, to, description }) => {
  return (
    <Link
      to={to}
      className='group rounded-2xl border border-slate-200 p-5 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-800 dark:hover:border-slate-600 dark:hover:bg-slate-950'
    >
      <div className='flex items-center justify-between gap-3'>
        <Typography variant='heading-4'>{title}</Typography>
        <Icon
          icon='mdi:arrow-top-right'
          className='h-5 w-5 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200'
        />
      </div>
      <Typography variant='body' className='mt-2'>
        {description}
      </Typography>
    </Link>
  );
};
