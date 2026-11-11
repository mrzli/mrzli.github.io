import { useCallback, useMemo, useState } from 'react';

import { preferenceStorage } from '@/app/util/preference-storage';
import { useHydrated } from '@/hooks/use-hydrated';

import { decodeStoredFields, type FieldValidators } from './stored-fields';

export interface StoredSettings<T> {
  readonly settings: T;
  readonly update: (changes: Partial<T>) => void;
}

/**
 * Settings saved in local storage. Prerendered output and the first browser render use the
 * defaults, and stored values apply after hydration.
 */
export function useStoredSettings<T extends object>(
  storageKey: string,
  defaults: T,
  validators: FieldValidators<T>,
): StoredSettings<T> {
  const isHydrated = useHydrated();
  const [changedSettings, setChangedSettings] = useState<T>();
  const storedSettings = useMemo(
    () => (isHydrated ? readStoredSettings(storageKey, validators) : {}),
    [isHydrated, storageKey, validators],
  );
  const settings = useMemo(
    () => changedSettings ?? { ...defaults, ...storedSettings },
    [changedSettings, defaults, storedSettings],
  );

  const update = useCallback(
    (changes: Partial<T>): void => {
      const nextSettings = { ...settings, ...changes };
      setChangedSettings(nextSettings);
      preferenceStorage.write(storageKey, JSON.stringify(nextSettings));
    },
    [settings, storageKey],
  );

  return { settings, update };
}

function readStoredSettings<T extends object>(
  storageKey: string,
  validators: FieldValidators<T>,
): Partial<T> {
  const text = preferenceStorage.read(storageKey);
  if (text === undefined) {
    return {};
  }
  try {
    return decodeStoredFields(JSON.parse(text), validators);
  } catch {
    return {};
  }
}
