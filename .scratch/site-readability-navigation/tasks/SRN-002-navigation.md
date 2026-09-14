# SRN-002: Improve navigation and keyboard access

Status: complete

Depends on: SRN-001

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Keep visitors oriented and make navigation usable throughout long pages.

## Likely files

Start with `src/app/components/nav-link.tsx`, `src/app/components/layout/nav.tsx`, `src/app/components/theme-toggle/theme-toggle.tsx`, and their existing stories.

## Acceptance checklist

- [x] Show the active page through React Router route matching and aria-current. Home is active only on the home route.
- [x] Give every navigation link a clearly visible keyboard focus style in light and dark themes.
- [x] Increase menu and theme control hit areas to at least 44 by 44 CSS pixels while retaining compact icons.
- [x] Make navigation sticky with a suitable background and stacking order. It must remain usable on small screens and short viewports without hiding focused content.
- [x] Preserve mobile menu open/close behavior, route selection, and theme cycling, persistence, and system preference handling.
- [x] Update navigation and theme-control Storybook examples where needed for the changed behavior.

## Verification

Navigate all routes by mouse and keyboard. Check mobile menu focus and dismissal after route selection, active Home matching, scrolling, and light/dark/system themes. Inspect narrow and short viewports. Verify browser back/forward navigation and reload. Build Storybook for changed examples.

Run the applicable commands in the task index and record actual results here.
Stop for the user's review and manual commit before starting another task.

## Completion record

Implemented and reviewed on 2026-09-14. The user authorized committing this task.

- Switched shared navigation links to React Router's active matching with `aria-current`, exact route matching, amber highlighting, and an underline.
- Added visible cyan keyboard focus outlines and 44px menu and theme buttons. Navigation links also have a minimum height of 44px.
- Made the navigation sticky with an opaque slate background and a subtle border. Added document scroll padding to keep scrolled headings clear of the header.
- Made the mobile menu an independently scrolling dropdown bounded by viewport height. Escape and route selection close it and return focus to the menu button. Moving focus outside navigation dismisses it.
- Added active Home, active Experience, and long-page navigation stories. The existing theme story uses the updated control.
- Passed scoped formatting, lint, production build, Storybook build, and diff whitespace checks. Storybook retained its non-blocking Node deprecation, empty MDX glob, and bundle-size warnings.
- Browser checks covered all five routes at 375px, 768px, and 1280px in both themes, active matching, sticky positioning, control sizes, focus outlines, and horizontal overflow. A 375px by 240px viewport kept the last mobile menu item reachable.
- Verified keyboard activation of all five routes on mobile and desktop, Tab dismissal of the mobile menu, and heading clearance below the sticky bar. The keyboard script required bringing the headless browser tab to the foreground.
- Verified theme cycling, persisted selection after reload, live system preference changes, and active routes after browser back, forward, and reload.

SRN-003 has not started.
