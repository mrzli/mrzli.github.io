import { cva, type VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';

import { cn } from '../../util';

const externalLinkVariants = cva('text-sm font-medium underline underline-offset-4 transition', {
  variants: {
    variant: {
      default: 'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100',
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
      {label} ↗
    </a>
  );
}
