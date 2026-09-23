# SEO-001: Prepare deterministic rendering

Status: complete

Depends on: none

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Make shared rendering safe outside the browser while retaining current behavior.

## Likely files

`src/app/components/theme-toggle/`, `src/app/pages/home/home-page.tsx`,
`src/hooks/`, and relevant Storybook examples. Framework serialization of the
initial year is completed in SEO-002.

## Acceptance checklist

- [x] Audit module initialization and rendering for browser APIs and changing
      values. Keep event-handler and effect access where already safe.
- [x] Use deterministic initial theme markup. Restore saved light/dark/system
      preferences without prematurely overwriting storage. Preserve system changes
      and handle unavailable storage.
- [x] Prepare early theme application for framework integration without a
      visible wrong-theme flash or broad hydration-warning suppression.
- [x] Make the homepage's initial year supplyable from the build and support a
      browser-year update after mount. Preserve the current start year and wording.
- [x] Preserve swipe, scrolling, menu, icon labels, and theme behavior. Do not
      gate the page body behind a mounted flag.

## Verification

Run applicable task-index checks. Inspect theme cycling, reload with each saved
preference, system preference changes, and storage-denied behavior at narrow and
wide widths. Check a supplied previous-year value updates after mount without
changing the factual calculation. Full prerender/hydration checks follow in
SEO-002. Record relevant Storybook checks if shared behavior changes.

## Completion record

Implemented on 2026-09-22. Planning documents were committed as `a7fe5aa` on
`seo-prerendering`. SEO-001 implementation and this record remain uncommitted
for user review. SEO-002 has not started.

- A shared useHydrated hook uses React's useSyncExternalStore server/client
  snapshots. Server rendering and the first hydration pass use deterministic
  values. Subsequent browser renders derive the saved theme and current year
  without copying them into state through effects.
- ThemeToggle consumes useTheme() and contains presentation only. The hook owns
  local state for user selections, document theme application, and system
  preference listeners. Its layout effect does not call a state setter.
- A small preferenceStorage adapter handles local-storage reads and writes. It
  returns undefined for unavailable reads and tolerates failed writes.
- Storage writes happen only when the user cycles the theme. Reads and writes
  tolerate unavailable storage, and initial mounting does not replace an existing
  preference. SEO-002 will integrate
  early document initialization with the theme hook. That pre-hydration document script is not part
  of this task, since the current app still has an empty initial HTML root.
- Home consumes useCurrentYear() with no year prop or hydration checks. Startup
  supplies the initial year once through the existing AppContext. The hook uses
  that year during server rendering and hydration, then the browser year. The
  current client startup supplies the current year. Serializing the build year
  into framework data remains SEO-002.
- Audited browser access in the swipe and hide-on-scroll hooks, navigation,
  startup, and shared content. Existing hook browser access is inside effects or
  handlers. The browser router and document mount remain browser-only startup
  responsibilities until SEO-002. Shared content and export files are unchanged.
- Updated the existing theme story's documentation. No new dependency, rendering
  framework, hydration-warning suppression, or test framework was added.

Verification:

- Scoped `bun run fmt:check`, `bun run build`, `bun run build-storybook`, and
  `git diff --check` passed.
- After review identified the effect-based state updates, replaced both with
  the shared hydration snapshot hook. `bun run lint` now passes with no warnings
  or suppressions. Production and Storybook builds were rerun successfully.
- Storybook retained its Node deprecation, empty MDX glob, and bundle-size
  warnings. Its build completed successfully.
- A temporary Vite server-render fixture rendered ThemeToggle and Home with
  storage access configured to throw. Initial HTML contained the system-theme
  label and 17 years of experience for the supplied year 2025.
- In isolated headless Chromium, hydrated that HTML under StrictMode with a saved
  dark theme and browser year 2026. The theme restored and the experience count
  became 18 without recoverable hydration errors or uncaught browser exceptions.
- At 375×900 and 1280×900, checked saved light/dark/system preferences against
  light and dark system settings, cycling and persistence, live system changes,
  and storage-denied reads/writes. Reviewed light and dark screenshots.
- Checked mobile menu opening, Escape with keyboard focus, a selected-project
  fragment link, reduced-motion touch swipe from Experience to Skills, and Back.
  Full route, gesture, and hosting regression coverage remains SEO-004/SEO-006.
- Browser fixtures and screenshots are under ignored `tmp/seo-001/`. The initial
  verification harness invalidated Vite's dependency cache and omitted its own
  UTF-8 declaration. Refreshing that cache and correcting the fixture resolved
  those harness failures. Those checks passed after correcting the harness.

The sandbox blocked development/browser sockets, so local browser verification
used approved commands outside the sandbox. No deployment or production hosting
check was performed. The current client-rendered build and copied 404 fallback
remain unchanged until SEO-002.

### Hook interface follow-up (2026-09-23)

At the user's request, moved hydration and browser-value handling out of the
components into useTheme() and useCurrentYear(). Added the preference-storage
adapter and moved the initial year from Home props into AppContext. The internal
useHydrated helper is no longer exported by the hooks barrel. Updated the
architecture instructions and the hydration fixture to use the root context.
Follow-up verification passed: scoped formatting, clean lint, production build,
Storybook build, and staged/unstaged diff whitespace checks. The updated fixture
rendered Home using AppContext with year 2025 and hydrated it with the same root
value before displaying the browser year. No recoverable hydration errors or
uncaught browser exceptions occurred. Rechecked saved light/dark/system themes,
cycling, system changes, and denied storage at 375px and 1280px, plus the mobile
menu, Escape, and a project fragment link. Reviewed all seven instruction files
for consistency. No dependencies or deployment behavior changed. Changes remain
uncommitted. Existing staged changes were left staged, and this follow-up was
not staged or committed.

### Approval (2026-09-23)

The user approved committing SEO-001 and starting SEO-002. cycleTheme now uses
useCallback with theme as its dependency. Scoped formatting, lint, and the
production build passed after that follow-up.
