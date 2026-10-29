import type { ReactNode } from 'react';

import { Typography } from './typography';

export interface ProseParagraphsProps {
  readonly paragraphs: readonly string[];
}

export function ProseParagraphs({ paragraphs }: ProseParagraphsProps): ReactNode {
  return (
    <Typography variant='prose' as='div' className='space-y-4'>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </Typography>
  );
}
