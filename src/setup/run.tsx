import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { router } from '../routing/router';
import { AppContext, type AppContextValue } from './app-context';

export const run = async () => {
  const root = document.getElementById('root');

  if (!root) {
    throw new Error('Root element not found');
  }

  const value: AppContextValue = {
    appName: 'Goran Mržljak - CV',
  };

  const content = (
    <StrictMode>
      <AppContext.Provider value={value}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </StrictMode>
  );

  createRoot(root).render(content);
};
