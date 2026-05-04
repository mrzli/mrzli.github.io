import { cva, type VariantProps } from 'class-variance-authority';
import type { ElementType, ReactNode } from 'react';

import { cn } from '../util/styles';

const typographyVariants = cva('', {
  variants: {
    variant: {
      'page-title':
        'text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-100',
      'section-title':
        'text-xl font-semibold text-slate-900 dark:text-slate-100',
      'card-title': 'text-lg font-semibold text-slate-900 dark:text-slate-100',
      'item-title': 'font-medium text-slate-900 dark:text-slate-100',
      lead: 'text-lg leading-8 text-slate-600 dark:text-slate-300',
      body: 'text-sm leading-6 text-slate-600 dark:text-slate-300',
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
  'page-title': 'h1',
  'section-title': 'h2',
  'card-title': 'p',
  'item-title': 'h3',
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
