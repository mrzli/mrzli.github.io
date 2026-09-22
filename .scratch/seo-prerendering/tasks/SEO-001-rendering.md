# SEO-001: Prepare deterministic rendering

Status: not started

Depends on: none

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Make shared rendering safe outside the browser while retaining current behavior.

## Likely files

`src/app/components/theme-toggle/`, `src/app/pages/home/home-page.tsx`,
`src/hooks/`, and relevant Storybook examples. Framework serialization of the
initial year is completed in SEO-002.

## Acceptance checklist

- [ ] Audit module initialization and rendering for browser APIs and changing
      values. Keep event-handler and effect access where already safe.
- [ ] Use deterministic initial theme markup. Restore saved light/dark/system
      preferences without prematurely overwriting storage. Preserve system changes
      and handle unavailable storage.
- [ ] Prepare early theme application for framework integration without a
      visible wrong-theme flash or broad hydration-warning suppression.
- [ ] Make the homepage's initial year supplyable from the build and support a
      browser-year update after mount. Preserve the current start year and wording.
- [ ] Preserve swipe, scrolling, menu, icon labels, and theme behavior. Do not
      gate the page body behind a mounted flag.

## Verification

Run applicable task-index checks. Inspect theme cycling, reload with each saved
preference, system preference changes, and storage-denied behavior at narrow and
wide widths. Check a supplied previous-year value updates after mount without
changing the factual calculation. Full prerender/hydration checks follow in
SEO-002. Record relevant Storybook checks if shared behavior changes.

## Completion record

Not started.
