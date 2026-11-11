import { Popover as PopoverPrimitive } from 'radix-ui';
import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/app/util';

import { POPUP_CLASS } from './styles';

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;

export function PopoverContent({
  className,
  ...props
}: ComponentProps<typeof PopoverPrimitive.Content>): ReactNode {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align='start'
        sideOffset={4}
        className={cn('z-50 outline-none', POPUP_CLASS, className)}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}
