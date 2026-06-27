import { createContext, useContext } from 'react';

import { type AppDependencies, createAppDependencies } from './app-dependencies';

export interface AppContextValue {
  readonly appName: string;
  readonly dependencies: AppDependencies;
}

export const AppContext = createContext<AppContextValue | undefined>(undefined);

export const useAppContext = (): AppContextValue => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

export const createAppContextValue = (): AppContextValue => {
  const dependencies = createAppDependencies();

  return {
    appName: 'Goran Mržljak - CV',
    dependencies,
  };
};
