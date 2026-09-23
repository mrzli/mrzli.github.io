import type { Theme } from '@/app/types/theme';

import type { ThemeIcon } from './types';

export const themeToIcon = (theme: Theme): ThemeIcon => {
  return THEME_ICON_BY_THEME[theme];
};

const THEME_ICON_BY_THEME: Readonly<Record<Theme, ThemeIcon>> = {
  light: 'mdi:weather-sunny',
  dark: 'mdi:weather-night',
  system: 'mdi:monitor',
};
