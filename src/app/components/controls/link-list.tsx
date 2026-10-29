import { cva, type VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';

import { cn } from '../../util';
import { ExternalLink } from './external-link';

const linkListVariants = cva('flex', {
  variants: {
    layout: {
      column: 'flex-col gap-2',
      row: 'flex-wrap gap-x-6 gap-y-3',
    },
  },
  defaultVariants: {
    layout: 'column',
  },
});

type LinkListVariantsProps = VariantProps<typeof linkListVariants>;

export interface LinkListItem {
  readonly label: string;
  readonly href: string;
}

export interface LinkListProps extends LinkListVariantsProps {
  readonly className?: string;
  readonly links: readonly LinkListItem[];
}

export function LinkList({ className, layout, links }: LinkListProps): ReactNode {
  return (
    <ul className={cn(linkListVariants({ layout }), className)}>
      {links.map((link) => {
        return (
          <li key={link.href}>
            <ExternalLink
              variant='highlight'
              href={link.href}
              label={link.label}
              className='rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700 dark:focus-visible:outline-cyan-300'
            />
          </li>
        );
      })}
    </ul>
  );
}
