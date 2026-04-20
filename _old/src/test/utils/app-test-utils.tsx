import React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { AppContextData } from '../../app-setup/app-context';
import { wrapComponent } from '../../app-setup/create-app-utils';

export function testAppRender(
  component: React.ReactElement,
  appContextValue: AppContextData,
  initialLocationForMemoryRouter: string,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult {
  const wrappedComponent: React.ReactElement = testComponentWrapper(
    component,
    appContextValue,
    initialLocationForMemoryRouter
  );
  return render(wrappedComponent, options);
}

function testComponentWrapper(
  component: React.ReactElement,
  appContextValue: AppContextData,
  initialLocationForMemoryRouter: string
): React.ReactElement {
  return wrapComponent(
    component,
    appContextValue,
    true,
    initialLocationForMemoryRouter
  );
}

export function testStandaloneComponentRender(
  component: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult {
  return render(component, options);
}
