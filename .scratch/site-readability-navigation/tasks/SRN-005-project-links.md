# SRN-005: Link homepage highlights to Experience entries

Status: pending

Depends on: SRN-001, SRN-002

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Let visitors open the detailed account of each selected project directly.

## Likely files

Start with `src/app/pages/home/data.ts`, `src/app/pages/home/home-page.tsx`, `src/app/pages/experience/data.ts`, its project card props and rendering, and the existing routing/layout boundary if needed.

## Acceptance checklist

- [ ] Assign stable explicit IDs to the three highlighted Experience projects: Oracle Eloqua, warehouse robotics, and mobile fueling. Keep IDs independent of display titles and ordering.
- [ ] Connect each homepage highlight to the matching Experience fragment with React Router links, descriptive accessible names, and visible focus. Preserve the current selection, order, and descriptions.
- [ ] Scroll to the target once its route content is rendered and keep the heading visible below sticky navigation. Avoid nested links and repeated scrolling on unrelated renders.
- [ ] Support clicking from Home, direct URL entry, refresh, and history navigation. Preserve router basename behavior and ordinary navigation without fragments.
- [ ] Use existing routing and browser APIs without a new dependency or general scrolling framework.

## Verification

For each highlight, verify keyboard and pointer navigation, the exact target, visible heading, refresh, direct entry, back/forward, and both themes. Test at mobile and desktop widths. Confirm `dist/404.html` is produced and document whether deployed GitHub Pages fragment entry was verified. Do not deploy merely to validate this task.

Run the applicable commands in the task index and record actual results here.
Stop for the user's review and manual commit before starting another task.

## Completion record

Not started.
