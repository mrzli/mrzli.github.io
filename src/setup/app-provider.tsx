import { useState, type ReactNode } from 'react';

import { AppContext, createAppContextValue } from './app-context';

export interface AppProviderProps {
  readonly initialYear: number;
  readonly children: ReactNode;
}

export function AppProvider({ initialYear, children }: AppProviderProps): ReactNode {
  const [value] = useState(() => createAppContextValue(initialYear));

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
