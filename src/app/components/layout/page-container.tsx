import { Typography } from '@components';
import type { ReactNode } from 'react';

export interface PageContainerProps {
  readonly title: string;
  readonly children: ReactNode;
}

export function PageContainer({ title, children }: PageContainerProps): ReactNode {
  return (
    <div className='flex flex-col gap-6 pt-6 pb-12'>
      <Typography variant='page-title'>{title}</Typography>
      {children}
    </div>
  );
}
