import { Card, Typography } from '@components';
import { Icon } from '@iconify/react';
import type { ReactNode } from 'react';
import { Link } from 'react-router';

export interface RouteCardProps {
  readonly title: string;
  readonly to: string;
  readonly description: string;
}

export function RouteCard({ title, to, description }: RouteCardProps): ReactNode {
  return (
    <Link
      to={to}
      className='group rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600'
    >
      <Card className='h-full transition-colors group-hover:border-amber-600 dark:group-hover:border-cyan-700'>
        <div className='flex items-center justify-between gap-3'>
          <Typography variant='heading-4' as='h3'>
            {title}
          </Typography>
          <Icon
            icon='mdi:arrow-top-right'
            aria-hidden='true'
            className='h-5 w-5 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200'
          />
        </div>
        <Typography variant='body' className='mt-2'>
          {description}
        </Typography>
      </Card>
    </Link>
  );
}
