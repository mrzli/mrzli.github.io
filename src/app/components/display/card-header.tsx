import type { ReactNode } from 'react';

import { Typography } from './typography';

export interface CardHeaderProps {
  readonly label: string;
  readonly title: string;
  readonly subtitle?: string;
}

export function CardHeader({ label, title, subtitle }: CardHeaderProps): ReactNode {
  return (
    <div className='flex flex-col gap-3'>
      <Typography variant='card-title-accent' as='p'>
        {label}
      </Typography>
      <Typography variant='heading-2'>{title}</Typography>
      {subtitle !== undefined && <Typography variant='body'>{subtitle}</Typography>}
    </div>
  );
}
