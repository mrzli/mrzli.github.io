import React from 'react';
import { AppGlobals, createAppGlobals } from './app-globals';

export interface AppContextData {
  readonly globals: AppGlobals;
}

export function createAppContextData(globals: AppGlobals): AppContextData {
  return {
    globals,
  };
}

const defaultAppContextData = createAppContextData(createAppGlobals());

export const AppContext = React.createContext(defaultAppContextData);
