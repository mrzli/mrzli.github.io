import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { AppContextData, AppContext } from './app-context';

export function wrapComponent(
  component: React.ReactElement,
  appContextData: AppContextData,
  isMemoryRouter: boolean,
  initialLocationForMemoryRouter: string
): React.ReactElement {
  const routerWrappedComponent = getRouterWrappedComponent(
    component,
    isMemoryRouter,
    initialLocationForMemoryRouter
  );

  return (
    <React.StrictMode>
      <AppContext.Provider value={appContextData}>
        {routerWrappedComponent}
      </AppContext.Provider>
    </React.StrictMode>
  );
}

function getRouterWrappedComponent(
  component: React.ReactElement,
  isMemoryRouter: boolean,
  initialLocationForMemoryRouter: string
): React.ReactElement {
  if (isMemoryRouter) {
    return (
      <MemoryRouter initialEntries={[initialLocationForMemoryRouter]}>
        {component}
      </MemoryRouter>
    );
  } else {
    return <BrowserRouter>{component}</BrowserRouter>;
  }
}
