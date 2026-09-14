import { Icon, type IconifyIcon } from '@iconify/react';
import type { ReactNode } from 'react';

export interface IconLinkProps {
  readonly to: string;
  readonly icon: string | IconifyIcon;
  readonly label: string;
}

export function IconLink({ to, icon, label }: IconLinkProps): ReactNode {
  return (
    <a
      href={to}
      target='_blank'
      rel='noreferrer'
      className='rounded-sm text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600 dark:text-slate-300 dark:hover:text-white'
      aria-label={label}
    >
      <Icon icon={icon} width='28' height='28' aria-hidden='true' />
    </a>
  );
}
