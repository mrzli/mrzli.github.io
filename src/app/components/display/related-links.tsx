import type { ReactNode } from 'react';

import { LinkList, type LinkListItem } from '../controls/link-list';
import { Typography } from './typography';

export interface RelatedLinksProps {
  readonly links: readonly LinkListItem[];
}

export function RelatedLinks({ links }: RelatedLinksProps): ReactNode {
  return (
    <section className='flex flex-col gap-3 border-t border-slate-200 pt-5 dark:border-slate-800'>
      <Typography variant='heading-3'>Related links</Typography>
      <LinkList links={links} />
    </section>
  );
}
