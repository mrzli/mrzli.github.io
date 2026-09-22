import { MainContainer, Nav, type NavItem } from '@components';
import type { ReactNode } from 'react';
import { Outlet, ScrollRestoration, useRoutes } from 'react-router';

import { useSwipeNavigation } from '@/hooks';
import { PAGE_ROUTES } from '@/routing/page-routes';

export function App(): ReactNode {
  const { handlers, preview } = useSwipeNavigation(NAV_ITEMS);
  return (
    <MainContainer>
      <Nav items={NAV_ITEMS} />
      <div {...handlers} className={`${handlers.className} relative overflow-clip`}>
        <div
          style={{
            transform: preview ? `translateX(${preview.distance}px)` : undefined,
            transition: preview?.transition,
          }}
        >
          <Outlet />
        </div>
        {preview && (
          <div
            aria-hidden='true'
            inert
            className='pointer-events-none absolute left-0 w-full'
            style={{
              top: preview.top,
              transform: `translateX(${preview.distance + preview.side * preview.travelDistance}px)`,
              transition: preview.transition,
            }}
          >
            <SwipePreview path={preview.path} />
          </div>
        )}
      </div>
      <ScrollRestoration />
    </MainContainer>
  );
}

function SwipePreview({ path }: { readonly path: string }): ReactNode {
  return useRoutes(PAGE_ROUTES, path);
}

const NAV_ITEMS: readonly NavItem[] = [
  { to: '', label: 'Home' },
  { to: 'experience', label: 'Experience' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'background', label: 'Background' },
  // { to: 'values', label: 'Values' },
];
