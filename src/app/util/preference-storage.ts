export interface PreferenceStorage {
  read(key: string): string | undefined;
  write(key: string, value: string): void;
}

export const preferenceStorage: PreferenceStorage = {
  read(key) {
    try {
      return localStorage.getItem(key) ?? undefined;
    } catch {
      return undefined;
    }
  },
  write(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      return;
    }
  },
};
