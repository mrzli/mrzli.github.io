import { ToggleGroup as ToggleGroupPrimitive } from 'radix-ui';
import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/app/util';

export function ToggleGroup({
  className,
  ...props
}: ComponentProps<typeof ToggleGroupPrimitive.Root>): ReactNode {
  return (
    <ToggleGroupPrimitive.Root
      className={cn(
        'inline-flex w-fit items-center gap-1 rounded-lg bg-slate-200/70 p-1 dark:bg-slate-800/70',
        className,
      )}
      {...props}
    />
  );
}

export function ToggleGroupItem({
  className,
  ...props
}: ComponentProps<typeof ToggleGroupPrimitive.Item>): ReactNode {
  return (
    <ToggleGroupPrimitive.Item
      className={cn(
        'rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap text-slate-600 outline-none focus-visible:ring-3 focus-visible:ring-cyan-600/40 data-[state=on]:bg-white data-[state=on]:text-slate-900 data-[state=on]:shadow-xs dark:text-slate-300 dark:data-[state=on]:bg-slate-950 dark:data-[state=on]:text-slate-100',
        className,
      )}
      {...props}
    />
  );
}
