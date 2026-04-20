import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { router } from '../routing/router';

export const run = async () => {
  const root = document.getElementById('root');

  if (!root) {
    throw new Error('Root element not found');
  }

  const content = (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );

  createRoot(root).render(content);
};
