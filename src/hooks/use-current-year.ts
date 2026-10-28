import { useSyncExternalStore } from 'react';

import { useAppContext } from '@/setup/app-context';

export function useCurrentYear(): number {
  const { initialYear } = useAppContext();

  return useSyncExternalStore(subscribe, getClientSnapshot, () => initialYear);
}

function subscribe(): () => void {
  return () => {};
}

function getClientSnapshot(): number {
  return new Date().getFullYear();
}
