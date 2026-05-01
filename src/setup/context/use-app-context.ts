import { useContext } from 'react';

import { AppContext } from './app-context';
import type { AppContextValue } from './app-context-value';

export const useAppContext = (): AppContextValue => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};
