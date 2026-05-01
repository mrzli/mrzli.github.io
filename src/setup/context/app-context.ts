import { createContext } from 'react';

import type { AppContextValue } from './app-context-value';

export const AppContext = createContext<AppContextValue | undefined>(undefined);
