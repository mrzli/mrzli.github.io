import { Icon } from '@iconify/react';
import { type FC, useEffect, useLayoutEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ThemeIcon = 'mdi:weather-sunny' | 'mdi:weather-night' | 'mdi:monitor';

const THEME_STORAGE_KEY = 'theme';
const DARK_MODE_MEDIA_QUERY = '(prefers-color-scheme: dark)';

const THEME_ICON_BY_THEME: Readonly<Record<Theme, ThemeIcon>> = {
  light: 'mdi:weather-sunny',
  dark: 'mdi:weather-night',
  system: 'mdi:monitor',
};

const isTheme = (value: string | undefined): value is Theme => {
  return value === 'light' || value === 'dark' || value === 'system';
};

const getStoredTheme = (): Theme | undefined => {
  if (typeof window === 'undefined') {
    return undefined;
  }

  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) ?? undefined;

  if (storedTheme === undefined) {
    return undefined;
  }

  if (isTheme(storedTheme)) {
    return storedTheme;
  }

  return undefined;
};

const isDarkTheme = (theme: Theme): boolean => {
  if (theme === 'dark') {
    return true;
  }

  if (theme === 'light') {
    return false;
  }

  return window.matchMedia(DARK_MODE_MEDIA_QUERY).matches;
};

const applyTheme = (theme: Theme): void => {
  if (typeof document === 'undefined') {
    return;
  }

  document.documentElement.classList.toggle('dark', isDarkTheme(theme));
};

const getNextTheme = (theme: Theme): Theme => {
  if (theme === 'light') {
    return 'dark';
  }

  if (theme === 'dark') {
    return 'system';
  }

  return 'light';
};

export const ThemeToggle: FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    return getStoredTheme() ?? 'system';
  });

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
      className='ml-auto cursor-pointer bg-transparent p-1 text-(--gm-nav) hover:text-(--gm-nav-hover)'
      aria-label={`Switch theme (current: ${theme})`}
      title={`Current: ${theme} (click to cycle)`}
    >
      <Icon icon={THEME_ICON_BY_THEME[theme]} className='h-5 w-5' />
    </button>
  );
};
