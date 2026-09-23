import { useCallback, useLayoutEffect, useState } from 'react';

import type { Theme } from '@/app/types/theme';
import { preferenceStorage } from '@/app/util/preference-storage';

import { useHydrated } from './use-hydrated';

export interface ThemeControls {
  readonly theme: Theme;
  readonly cycleTheme: () => void;
}

const THEME_STORAGE_KEY = 'theme';
const DARK_MODE_MEDIA_QUERY = '(prefers-color-scheme: dark)';

export function useTheme(): ThemeControls {
  const isHydrated = useHydrated();
  const [selectedTheme, setSelectedTheme] = useState<Theme>();
  const theme = selectedTheme ?? (isHydrated ? getInitialTheme() : 'system');

  useLayoutEffect(() => {
    const currentTheme = isHydrated ? theme : getInitialTheme();
    applyTheme(currentTheme);

    if (currentTheme !== 'system') {
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
  }, [isHydrated, theme]);

  const cycleTheme = useCallback((): void => {
    const nextTheme = getNextTheme(theme);
    setSelectedTheme(nextTheme);
    preferenceStorage.write(THEME_STORAGE_KEY, nextTheme);
  }, [theme]);

  return { theme, cycleTheme };
}

function getInitialTheme(): Theme {
  const storedTheme = preferenceStorage.read(THEME_STORAGE_KEY);
  return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'system';
}

function applyTheme(theme: Theme): void {
  const isDark =
    theme === 'dark' || (theme === 'system' && window.matchMedia(DARK_MODE_MEDIA_QUERY).matches);
  document.documentElement.classList.toggle('dark', isDark);
}

function getNextTheme(theme: Theme): Theme {
  if (theme === 'light') {
    return 'dark';
  }

  if (theme === 'dark') {
    return 'system';
  }

  return 'light';
}
