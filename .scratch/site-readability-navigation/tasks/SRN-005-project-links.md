# SRN-005: Link homepage highlights to Experience entries

Status: complete

Depends on: SRN-001, SRN-002

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Let visitors open the detailed account of each selected project directly.

## Likely files

Start with `src/app/pages/home/data.ts`, `src/app/pages/home/home-page.tsx`, `src/app/pages/experience/data.ts`, its project card props and rendering, and the existing routing/layout boundary if needed.

## Acceptance checklist

- [x] Assign stable explicit IDs to the three highlighted Experience projects: Oracle Eloqua, warehouse robotics, and mobile fueling. Keep IDs independent of display titles and ordering.
- [x] Connect each homepage highlight to the matching Experience fragment with React Router links, descriptive accessible names, and visible focus. Preserve the current selection, order, and descriptions.
- [x] Scroll to the target once its route content is rendered and keep the heading visible below sticky navigation. Avoid nested links and repeated scrolling on unrelated renders.
- [x] Support clicking from Home, direct URL entry, refresh, and history navigation. Preserve router basename behavior and ordinary navigation without fragments.
- [x] Use existing routing and browser APIs without a new dependency or general scrolling framework.

## Verification

For each highlight, verify keyboard and pointer navigation, the exact target, visible heading, refresh, direct entry, back/forward, and both themes. Test at mobile and desktop widths. Confirm `dist/404.html` is produced and document whether deployed GitHub Pages fragment entry was verified. Do not deploy merely to validate this task.

Run the applicable commands in the task index and record actual results here.
Stop for the user's review and manual commit before starting another task.

## Completion record

Implemented and reviewed on 2026-09-15. The user authorized committing this task.

- Added explicit shared anchor constants for Oracle Eloqua, warehouse robotics, and mobile fueling. Experience entries store these IDs independently of their titles and array positions.
- Linked each selected-work title to its Experience fragment, with an arrow, hover treatment, and visible keyboard focus. Selection, order, and descriptions are unchanged.
- Added React Router's existing ScrollRestoration at the application boundary. It handles rendered fragment targets, ordinary navigation to the top, and saved history positions. Existing document scroll padding keeps headings below sticky navigation.
- Disabled browser scroll anchoring so it does not override React Router's restored positions after route changes. Browser checks initially exposed a 68px shift on mobile Back navigation; the corrected behavior restores the saved position.
- Passed scoped formatting, lint, production build, Storybook build, and diff whitespace checks. Storybook retained its non-blocking Node deprecation, empty MDX glob, and bundle-size warnings. Existing stories did not need changes.
- Browser verification covered all three links at 375px and 1280px in both themes, using pointer and keyboard activation. Checked exact target titles, header clearance, direct entry, reload, Back to the homepage's saved position, and Forward to the entry. Theme changes after manual scrolling did not trigger another jump. Ordinary navigation without a fragment starts at the top.
- Confirmed dist/404.html exists and matches dist/index.html. Router basename and Vite base configuration are unchanged. Browser checks used the local root deployment; a non-root deployment and deployed GitHub Pages fragment entry were not tested. Nothing was deployed.

SRN-006 has not started. Stop for review before continuing.
