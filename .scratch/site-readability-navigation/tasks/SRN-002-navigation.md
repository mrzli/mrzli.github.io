# SRN-002: Improve navigation and keyboard access

Status: pending

Depends on: SRN-001

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Keep visitors oriented and make navigation usable throughout long pages.

## Likely files

Start with `src/app/components/nav-link.tsx`, `src/app/components/layout/nav.tsx`, `src/app/components/theme-toggle/theme-toggle.tsx`, and their existing stories.

## Acceptance checklist

- [ ] Show the active page through React Router route matching and aria-current. Home is active only on the home route.
- [ ] Give every navigation link a clearly visible keyboard focus style in light and dark themes.
- [ ] Increase menu and theme control hit areas to at least 44 by 44 CSS pixels while retaining compact icons.
- [ ] Make navigation sticky with a suitable background and stacking order. It must remain usable on small screens and short viewports without hiding focused content.
- [ ] Preserve mobile menu open/close behavior, route selection, and theme cycling, persistence, and system preference handling.
- [ ] Update navigation and theme-control Storybook examples where needed for the changed behavior.

## Verification

Navigate all routes by mouse and keyboard. Check mobile menu focus and dismissal after route selection, active Home matching, scrolling, and light/dark/system themes. Inspect narrow and short viewports. Verify browser back/forward navigation and reload. Build Storybook for changed examples.

Run the applicable commands in the task index and record actual results here.
Stop for the user's review and manual commit before starting another task.

## Completion record

Not started.
