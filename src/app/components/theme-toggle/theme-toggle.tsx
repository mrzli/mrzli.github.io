import { Icon } from '@iconify/react';
import { type ReactNode, useEffect, useLayoutEffect, useState } from 'react';

import {
  applyTheme,
  DARK_MODE_MEDIA_QUERY,
  getInitialTheme,
  getNextTheme,
  THEME_STORAGE_KEY,
  themeToIcon,
} from './helpers';
import type { Theme } from './types';

export function ThemeToggle(): ReactNode {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useLayoutEffect(() => {
    applyTheme(theme);

    if (theme !== 'system') {
      return undefined;
    }

    const mediaQueryList = window.matchMedia(DARK_MODE_MEDIA_QUERY);
    const handleChange = (): void => {
      applyTheme('system');
    };

    mediaQueryList.addEventListener('change', handleChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const cycleTheme = (): void => {
    setTheme((currentTheme) => {
      return getNextTheme(currentTheme);
    });
  };

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
