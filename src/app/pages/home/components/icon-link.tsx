import { Icon, type IconifyIcon } from '@iconify/react';
import type { FC } from 'react';

export interface IconLinkProps {
  readonly to: string;
  readonly icon: string | IconifyIcon;
}

export const IconLink: FC<IconLinkProps> = ({ to, icon }: IconLinkProps) => {
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
};
