import type { FC, ReactNode } from 'react';

import { AppContext } from './app-context';
import type { AppContextValue } from './app-context-value';

export interface AppContextProviderProps {
  readonly value: AppContextValue;
  readonly children: ReactNode;
}

export const AppContextProvider: FC<AppContextProviderProps> = ({
  value,
  children,
}) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
