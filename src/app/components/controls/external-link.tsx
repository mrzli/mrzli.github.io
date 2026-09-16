import { Icon } from '@iconify/react';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';

import { cn } from '../../util';

const externalLinkVariants = cva('text-sm font-medium transition flex items-center gap-1', {
  variants: {
    variant: {
      default: 'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100',
      outline:
        'rounded-lg px-4 py-3 text-amber-700 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600 dark:text-cyan-300 dark:ring-slate-600 dark:hover:bg-slate-800 dark:focus-visible:outline-cyan-300',
      highlight:
        'text-amber-700 decoration-amber-400 hover:text-amber-800 hover:decoration-amber-500 dark:text-cyan-300 dark:decoration-cyan-700 dark:hover:text-cyan-200 dark:hover:decoration-cyan-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type ExternalLinkVariantsProps = VariantProps<typeof externalLinkVariants>;

export interface ExternalLinkProps extends ExternalLinkVariantsProps {
  readonly className?: string;
  readonly label: string;
  readonly href: string;
}

export function ExternalLink({ className, variant, label, href }: ExternalLinkProps): ReactNode {
  return (
    <a
      className={cn(externalLinkVariants({ variant }), className)}
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      {label}
      <Icon icon='mdi:arrow-top-right' aria-hidden='true' className='inline-block size-3.5' />
    </a>
  );
}
