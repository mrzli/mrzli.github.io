import { Icon } from '@iconify/react';
import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/app/util';

export interface IconButtonProps extends Omit<ComponentProps<'button'>, 'children'> {
  readonly icon: string;
  /** The accessible name, also shown as a tooltip. */
  readonly label: string;
}

/** A small icon-only button, like shadcn/ui's ghost icon button. */
export function IconButton({ icon, label, className, ...props }: IconButtonProps): ReactNode {
  return (
    <button
      type='button'
      aria-label={label}
      title={label}
      className={cn(
        'inline-flex size-8 items-center justify-center rounded-md text-slate-500 outline-none hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-3 focus-visible:ring-cyan-600/40 disabled:pointer-events-none disabled:opacity-30 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100',
        className,
      )}
      {...props}
    >
      <Icon icon={icon} aria-hidden='true' className='size-4' />
    </button>
  );
}
