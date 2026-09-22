# SEO-004: Verify behavior and static delivery

Status: not started

Depends on: SEO-002, SEO-003

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Establish that generated HTML is complete and the existing interactive site still
works. Fix migration regressions found here before local closure.

## Acceptance checklist

- [ ] Inspect every substantive route's HTML for its actual page content, semantic
      headings, links, and correct metadata before JavaScript executes.
- [ ] With JavaScript disabled, verify readable pages, route navigation at mobile
      and desktop widths, external/contact links, and both CV downloads.
- [ ] Use a static server without SPA fallback to verify valid route files,
      redirects or resolution for slashless paths, query strings, and unknown-path
      404 responses. Check framework assets/data are successful responses.
- [ ] Verify hydration without warnings or duplicate content on all routes,
      including a build-year/browser-year difference and saved theme preferences.
- [ ] Inspect Home, Experience, Skills, Projects, and Background at narrow and
      wide widths in light and dark themes. Check system theme and reduced motion.
- [ ] Check active navigation, keyboard focus, mobile menu opening/closing and
      Escape, hide-on-scroll behavior, and ordinary client navigation without reloads.
- [ ] Check swipe direction, wraparound, adjacent previews, cancellation,
      interactive-element exclusions, vertical scrolling, and reduced-motion behavior.
- [ ] Check all three homepage project fragments through clicking, direct entry,
      refresh, and back/forward. Preserve header clearance and scroll restoration.
- [ ] Verify metadata throughout client navigation and preview cancellation,
      Values exclusion, and not-found handling.
- [ ] Confirm export sources and public downloads are unchanged and no browser or
      router dependency was introduced into shared content modules.
- [ ] Record actual commands, viewport sizes, browsers, failures, fixes, and
      limitations. Distinguish local static checks from deployed GitHub Pages checks.

## Verification

Use the task-index checks appropriate to fixes. Reuse successful checks when no
relevant code changed. Add focused artifact assertions only where they protect
meaningful output behavior. A build, HTML snapshot, or development-server visit
alone is insufficient evidence for this task.

## Completion record

Not started.
