import { MainContainer, Nav, type NavItem } from '@components';
import type { ReactNode } from 'react';
import { Outlet } from 'react-router';

import { useSwipeNavigation } from '@/hooks';
import { PAGE_PATHS } from '@/routing/page-paths';
import { SwipePreview } from '@/routing/swipe-preview';

export function App(): ReactNode {
  const { handlers, preview } = useSwipeNavigation(NAV_ITEMS);
  return (
    <MainContainer>
      <Nav items={NAV_ITEMS} />
      <noscript>
        <style>{'nav[aria-label="Main navigation"] button { display: none; }'}</style>
        <nav
          aria-label='Main navigation without JavaScript'
          className='flex flex-wrap gap-4 p-4 md:hidden'
        >
          {NAV_ITEMS.map((item) => (
            <a key={item.to} href={item.to}>
              {item.label}
            </a>
          ))}
        </nav>
      </noscript>
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
    </MainContainer>
  );
}

const NAV_ITEMS: readonly NavItem[] = [
  { to: PAGE_PATHS.home, label: 'Home' },
  { to: PAGE_PATHS.experience, label: 'Experience' },
  { to: PAGE_PATHS.skills, label: 'Skills' },
  { to: PAGE_PATHS.projects, label: 'Projects' },
  { to: PAGE_PATHS.background, label: 'Background' },
  // { to: PAGE_PATHS.values, label: 'Values' },
];
