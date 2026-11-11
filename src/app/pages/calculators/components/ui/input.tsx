import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/app/util';

import { CONTROL_BORDER_CLASS, FOCUS_RING_CLASS } from './styles';

export function Input({ className, ...props }: ComponentProps<'input'>): ReactNode {
  return (
    <input
      className={cn(
        'h-9 w-full min-w-0 rounded-md px-3 py-1 text-sm tabular-nums placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-50',
        CONTROL_BORDER_CLASS,
        FOCUS_RING_CLASS,
        className,
      )}
      {...props}
    />
  );
}
