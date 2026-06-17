import { cva, type VariantProps } from 'class-variance-authority';
import type { ElementType, ReactNode } from 'react';

import { cn } from '../util';

const typographyVariants = cva('', {
  variants: {
    variant: {
      'heading-1':
        'text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-100',
      'heading-2': 'text-xl font-semibold text-slate-900 dark:text-slate-100',
      'heading-3': 'text-lg font-semibold text-slate-900 dark:text-slate-100',
      'heading-4': 'font-medium text-slate-900 dark:text-slate-100',
      'page-title':
        'border-l-4 border-amber-600 pl-3 text-xl font-semibold tracking-tight text-slate-800 uppercase dark:border-amber-300 dark:text-slate-100',
      'card-title-accent':
        'text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase dark:text-amber-300',
      'card-title-muted':
        'text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400',
      lead: 'text-lg leading-8 text-slate-700 dark:text-slate-300',
      body: 'text-sm leading-6 text-slate-700 dark:text-slate-300',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

type TypographyVariantsProps = VariantProps<typeof typographyVariants>;

const DEFAULT_ELEMENTS: Record<
  NonNullable<TypographyVariantsProps['variant']>,
  ElementType
> = {
  'heading-1': 'h1',
  'heading-2': 'h2',
  'heading-3': 'h3',
  'heading-4': 'h4',
  'page-title': 'h1',
  'card-title-accent': 'span',
  'card-title-muted': 'span',
  lead: 'p',
  body: 'p',
};

export interface TypographyProps extends TypographyVariantsProps {
  readonly as?: ElementType;
  readonly className?: string;
  readonly children: ReactNode;
}

export const Typography = ({
  as,
  variant = 'body',
  className,
  children,
}: TypographyProps) => {
  const Tag = as ?? DEFAULT_ELEMENTS[variant!];

  return (
    <Tag className={cn(typographyVariants({ variant }), className)}>
      {children}
    </Tag>
  );
};
