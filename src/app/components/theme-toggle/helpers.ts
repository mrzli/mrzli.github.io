import type { Theme, ThemeIcon } from './types';

export const THEME_STORAGE_KEY = 'theme';
export const DARK_MODE_MEDIA_QUERY = '(prefers-color-scheme: dark)';

export const getInitialTheme = (): Theme => {
  return getStoredTheme() ?? 'system';
};

const getStoredTheme = (): Theme | undefined => {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) ?? undefined;
  return isTheme(storedTheme) ? storedTheme : undefined;
};

const isTheme = (value: string | undefined): value is Theme => {
  return value === 'light' || value === 'dark' || value === 'system';
};

export const applyTheme = (theme: Theme): void => {
  document.documentElement.classList.toggle('dark', isDarkTheme(theme));
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

export const getNextTheme = (theme: Theme): Theme => {
  if (theme === 'light') {
    return 'dark';
  }

  if (theme === 'dark') {
    return 'system';
  }

  return 'light';
};

export const themeToIcon = (theme: Theme): ThemeIcon => {
  return THEME_ICON_BY_THEME[theme];
};

const THEME_ICON_BY_THEME: Readonly<Record<Theme, ThemeIcon>> = {
  light: 'mdi:weather-sunny',
  dark: 'mdi:weather-night',
  system: 'mdi:monitor',
};
