import { cva, type VariantProps } from 'class-variance-authority';
import type { ElementType, ReactNode } from 'react';

import { cn } from '../../util';

const cardVariants = cva('rounded-2xl', {
  variants: {
    variant: {
      default:
        'border border-slate-200 bg-white shadow-xs dark:border-slate-800 dark:bg-slate-900',
      inner: 'bg-slate-50 p-4 dark:bg-slate-950',
    },
    padding: {
      small: 'p-4',
      medium: 'p-5',
      large: 'p-6',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'medium',
  },
});

type CardVariantsProps = VariantProps<typeof cardVariants>;

export interface CardProps extends CardVariantsProps {
  readonly as?: ElementType;
  readonly className?: string;
  readonly children: ReactNode;
}

export const Card = ({
  as: Tag = 'div',
  className,
  children,
  variant,
  padding,
}: CardProps) => {
  return (
    <Tag className={cn(cardVariants({ variant, padding }), className)}>
      {children}
    </Tag>
  );
};
