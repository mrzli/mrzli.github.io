import { Tabs as TabsPrimitive } from 'radix-ui';
import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/app/util';

export const Tabs = TabsPrimitive.Root;

export function TabsList({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.List>): ReactNode {
  return (
    <TabsPrimitive.List
      className={cn(
        'inline-flex w-fit max-w-full flex-wrap items-center gap-1 rounded-lg bg-slate-200/70 p-1 dark:bg-slate-800/70',
        className,
      )}
      {...props}
    />
  );
}

export function TabsTrigger({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Trigger>): ReactNode {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        'rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap text-slate-600 outline-none focus-visible:ring-3 focus-visible:ring-cyan-600/40 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-xs dark:text-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-100',
        className,
      )}
      {...props}
    />
  );
}

export function TabsContent({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Content>): ReactNode {
  return (
    <TabsPrimitive.Content
      className={cn('outline-none focus-visible:ring-3 focus-visible:ring-cyan-600/40', className)}
      {...props}
    />
  );
}
