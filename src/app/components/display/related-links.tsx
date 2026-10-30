import type { ReactNode } from 'react';

import { cn } from '../../util';
import { LinkList, type LinkListItem } from '../controls/link-list';
import { SPLIT_LAYOUT_CLASS_NAME } from '../layout/split-layout';
import { Typography } from './typography';

export interface RelatedLinksProps {
  readonly links: readonly LinkListItem[];
  readonly split?: boolean;
}

export function RelatedLinks({ links, split = false }: RelatedLinksProps): ReactNode {
  return (
    <section
      className={cn(
        'flex flex-col gap-3 border-t border-slate-200 pt-5 dark:border-slate-800',
        split && cn('pt-8', SPLIT_LAYOUT_CLASS_NAME),
      )}
    >
      <Typography variant='heading-3'>Related links</Typography>
      <LinkList links={links} />
    </section>
  );
}
