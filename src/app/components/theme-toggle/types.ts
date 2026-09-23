export const THEME_ICONS = ['mdi:weather-sunny', 'mdi:weather-night', 'mdi:monitor'] as const;

export type ThemeIcon = (typeof THEME_ICONS)[number];
