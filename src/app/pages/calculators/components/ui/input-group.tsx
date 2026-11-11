import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/app/util';

import { CONTROL_BORDER_CLASS } from './styles';

/** An input and its addons inside one shared border, following shadcn/ui's InputGroup. */
export function InputGroup({ className, ...props }: ComponentProps<'div'>): ReactNode {
  return (
    <div
      className={cn(
        'flex h-9 w-full min-w-0 items-center rounded-md has-disabled:opacity-50 has-[input:focus-visible]:border-cyan-600 has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-cyan-600/30',
        CONTROL_BORDER_CLASS,
        className,
      )}
      {...props}
    />
  );
}

export function InputGroupInput({ className, ...props }: ComponentProps<'input'>): ReactNode {
  return (
    <input
      className={cn(
        'h-full w-full min-w-0 flex-1 rounded-md bg-transparent px-3 py-1 text-sm tabular-nums outline-none placeholder:text-slate-400 disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    />
  );
}

export function InputGroupAddon({ className, ...props }: ComponentProps<'span'>): ReactNode {
  return (
    <span
      className={cn(
        'flex h-full shrink-0 items-center border-l border-slate-200 px-3 text-sm text-slate-500 select-none dark:border-slate-800 dark:text-slate-400',
        className,
      )}
      {...props}
    />
  );
}
