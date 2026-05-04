import { Icon } from '@iconify/react';
import type { FC } from 'react';
import { Link } from 'react-router';

export interface RouteCardProps {
  readonly title: string;
  readonly to: string;
  readonly description: string;
}

export const RouteCard: FC<RouteCardProps> = ({ title, to, description }) => {
  return (
    <Link
      to={to}
      className='group rounded-2xl border border-slate-200 p-5 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-800 dark:hover:border-slate-600 dark:hover:bg-slate-950'
    >
      <div className='flex items-center justify-between gap-3'>
        <h3 className='font-medium text-slate-900 dark:text-slate-100'>
          {title}
        </h3>
        <Icon
          icon='mdi:arrow-top-right'
          className='h-5 w-5 text-slate-400 transition-colors group-hover:text-slate-700 dark:group-hover:text-slate-200'
        />
      </div>
      <p className='mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300'>
        {description}
      </p>
    </Link>
  );
};
