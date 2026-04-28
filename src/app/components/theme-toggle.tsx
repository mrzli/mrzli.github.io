import { Icon } from '@iconify/react';
import { type FC, useLayoutEffect, useState } from 'react';

export const ThemeToggle: FC = () => {
  const [isDark, setIsDark] = useState(getInitialDark);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      onClick={() => {
        setIsDark((prev) => !prev);
      }}
      className='gm-nav-link ml-auto'
      aria-label='Toggle theme'
    >
      <Icon
        icon={isDark ? 'mdi:weather-sunny' : 'mdi:weather-night'}
        width='20'
        height='20'
      />
    </button>
  );
};

const getInitialDark = (): boolean => {
  const stored = localStorage.getItem('theme');
  if (stored !== null) {
    return stored === 'dark';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};
