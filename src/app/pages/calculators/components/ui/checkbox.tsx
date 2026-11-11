import { Icon } from '@iconify/react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/app/util';

import { FOCUS_RING_CLASS } from './styles';

export function Checkbox({
  className,
  ...props
}: ComponentProps<typeof CheckboxPrimitive.Root>): ReactNode {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        'peer size-4 shrink-0 rounded-[4px] border border-slate-400 shadow-xs data-[state=checked]:border-cyan-700 data-[state=checked]:bg-cyan-700 data-[state=checked]:text-white dark:border-slate-600 dark:data-[state=checked]:border-cyan-500 dark:data-[state=checked]:bg-cyan-500 dark:data-[state=checked]:text-slate-950',
        FOCUS_RING_CLASS,
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className='flex items-center justify-center'>
        <Icon icon='mdi:check' aria-hidden='true' className='size-3.5' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
