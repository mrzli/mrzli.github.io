import { Card, Typography } from '@components';
import type { ReactNode } from 'react';

export interface CalculatorSectionProps {
  readonly title: string;
  readonly description: string;
  readonly children: ReactNode;
}

export function CalculatorSection({
  title,
  description,
  children,
}: CalculatorSectionProps): ReactNode {
  return (
    <Card as='section' className='flex flex-col gap-5'>
      <div className='flex flex-col gap-2'>
        <Typography variant='heading-2'>{title}</Typography>
        <Typography variant='body'>{description}</Typography>
      </div>
      {children}
    </Card>
  );
}
