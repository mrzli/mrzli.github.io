export const THEME_STORAGE_KEY = 'theme';
export const DARK_MODE_MEDIA_QUERY = '(prefers-color-scheme: dark)';

export const THEME_INITIALIZATION_SCRIPT = `(() => {
  let theme = 'system';
  try {
    const storedTheme = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    if (storedTheme === 'light' || storedTheme === 'dark') {
      theme = storedTheme;
    }
  } catch {}
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia(${JSON.stringify(DARK_MODE_MEDIA_QUERY)}).matches);
  document.documentElement.classList.toggle('dark', isDark);
})();`;
