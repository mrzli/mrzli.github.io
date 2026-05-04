import type { FC } from 'react';

import { Typography } from '../../../components';
import { Card } from '../../../components/layout/card';

export interface HighlightCardProps {
  readonly title: string;
  readonly description: string;
}

export const HighlightCard: FC<HighlightCardProps> = ({
  title,
  description,
}) => {
  return (
    <Card as={'article'}>
      <Typography variant='card-title'>{title}</Typography>
      <Typography variant='body' className='mt-2'>
        {description}
      </Typography>
    </Card>
  );
};
