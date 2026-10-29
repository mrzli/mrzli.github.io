import type { ReactNode } from 'react';

import { ProseParagraphs } from './prose-paragraphs';
import { Typography } from './typography';

export interface SubsectionProps {
  readonly title: string;
  readonly paragraphs: readonly string[];
}

export function Subsection({ title, paragraphs }: SubsectionProps): ReactNode {
  return (
    <section className='flex flex-col gap-2'>
      <Typography variant='heading-3'>{title}</Typography>
      <ProseParagraphs paragraphs={paragraphs} />
    </section>
  );
}
