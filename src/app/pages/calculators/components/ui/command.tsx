import { Icon } from '@iconify/react';
import { Command as CommandPrimitive } from 'cmdk';
import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/app/util';

export function Command({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive>): ReactNode {
  return (
    <CommandPrimitive
      className={cn('flex h-full w-full flex-col overflow-hidden rounded-lg', className)}
      {...props}
    />
  );
}

export function CommandInput({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive.Input>): ReactNode {
  return (
    <div className='flex h-9 items-center gap-2 border-b border-slate-200 px-3 dark:border-slate-800'>
      <Icon icon='mdi:magnify' aria-hidden='true' className='size-4 shrink-0 opacity-50' />
      <CommandPrimitive.Input
        className={cn(
          'flex h-9 w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-400',
          className,
        )}
        {...props}
      />
    </div>
  );
}

export function CommandList({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive.List>): ReactNode {
  return (
    <CommandPrimitive.List
      className={cn('max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto p-1', className)}
      {...props}
    />
  );
}

export function CommandEmpty(props: ComponentProps<typeof CommandPrimitive.Empty>): ReactNode {
  return <CommandPrimitive.Empty className='py-6 text-center text-sm' {...props} />;
}

export function CommandItem({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive.Item>): ReactNode {
  return (
    <CommandPrimitive.Item
      className={cn(
        'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[selected=true]:bg-slate-100 dark:data-[selected=true]:bg-slate-800',
        className,
      )}
      {...props}
    />
  );
}
