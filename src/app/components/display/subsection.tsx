import type { ReactNode } from 'react';

import { cn } from '../../util';
import { SPLIT_LAYOUT_CLASS_NAME } from '../layout/split-layout';
import { ProseParagraphs } from './prose-paragraphs';
import { Typography } from './typography';

export interface SubsectionProps {
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly split?: boolean;
}

export function Subsection({ title, paragraphs, split = false }: SubsectionProps): ReactNode {
  return (
    <section className={cn('flex flex-col gap-2', split && SPLIT_LAYOUT_CLASS_NAME)}>
      <Typography variant='heading-3'>{title}</Typography>
      <ProseParagraphs paragraphs={paragraphs} />
    </section>
  );
}
