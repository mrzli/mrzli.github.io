import { Icon } from '@iconify/react';
import type { ReactNode } from 'react';

import { useTheme } from '@/hooks';

import { themeToIcon } from './helpers';

export function ThemeToggle(): ReactNode {
  const { theme, cycleTheme } = useTheme();

  return (
    <button
      type='button'
      onClick={cycleTheme}
      className='flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white dark:focus-visible:outline-cyan-300'
      aria-label={`Switch theme (current: ${theme})`}
      title={`Current: ${theme} (click to cycle)`}
    >
      <Icon icon={themeToIcon(theme)} className='h-5 w-5' />
    </button>
  );
}
