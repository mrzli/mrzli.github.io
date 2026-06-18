import { Icon, type IconifyIcon } from '@iconify/react';
import type { ReactNode } from 'react';

export interface IconLinkProps {
  readonly to: string;
  readonly icon: string | IconifyIcon;
}

export function IconLink({ to, icon }: IconLinkProps): ReactNode {
  return (
    <a
      href={to}
      target='_blank'
      rel='noreferrer'
      className='text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
      aria-label='LinkedIn'
    >
      <Icon icon={icon} width='28' height='28' />
    </a>
  );
}
