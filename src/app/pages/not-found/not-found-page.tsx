import { PageContainer, Typography } from '@components';
import type { ReactNode } from 'react';
import { Link } from 'react-router';

export function NotFoundPage(): ReactNode {
  return (
    <PageContainer title='Page not found'>
      <Typography>The page you requested does not exist.</Typography>
      <Link
        className='rounded text-amber-700 underline focus-visible:outline-2 dark:text-cyan-300'
        to='/'
      >
        Return to Home
      </Link>
    </PageContainer>
  );
}
