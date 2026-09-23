import { useAppContext } from '@/setup/app-context';

import { useHydrated } from './use-hydrated';

export function useCurrentYear(): number {
  const { initialYear } = useAppContext();
  const isHydrated = useHydrated();

  return isHydrated ? new Date().getFullYear() : initialYear;
}
