# SEO-004: Verify behavior and static delivery

Status: complete

Depends on: SEO-002, SEO-003, SEO-003A

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Establish that generated HTML is complete and the existing interactive site still
works. Fix migration regressions found here before local closure.

## Acceptance checklist

- [x] Inspect every substantive route's HTML for its actual page content, semantic
      headings, links, and correct metadata before JavaScript executes.
- [x] With JavaScript disabled, verify readable pages, route navigation at mobile
      and desktop widths, external/contact links, and both CV downloads.
- [x] Use a static server without SPA fallback to verify valid route files,
      redirects or resolution for slashless paths, query strings, and unknown-path
      404 responses. Check framework assets/data are successful responses.
- [x] Verify hydration without warnings or duplicate content on all routes,
      including a build-year/browser-year difference and saved theme preferences.
- [x] Inspect Home, Experience, Skills, Projects, and Background at narrow and
      wide widths in light and dark themes. Check system theme and reduced motion.
- [x] Check active navigation, keyboard focus, mobile menu opening/closing and
      Escape, hide-on-scroll behavior, and ordinary client navigation without reloads.
- [x] Check swipe direction, wraparound, adjacent previews, cancellation,
      interactive-element exclusions, vertical scrolling, and reduced-motion behavior.
- [x] Check all three homepage project fragments through clicking, direct entry,
      refresh, and back/forward. Preserve header clearance and scroll restoration.
- [x] Verify metadata throughout client navigation and preview cancellation,
      Values exclusion, and not-found handling.
- [x] Confirm export changes are limited to the canonical-link updates and
      affected artifact regeneration recorded in SEO-003A. Confirm no browser or
      router runtime dependency was introduced into shared content modules.
- [x] Record actual commands, viewport sizes, browsers, failures, fixes, and
      limitations. Distinguish local static checks from deployed GitHub Pages checks.

## Verification

Use the task-index checks appropriate to fixes. Reuse successful checks when no
relevant code changed. Add focused artifact assertions only where they protect
meaningful output behavior. A build, HTML snapshot, or development-server visit
alone is insufficient evidence for this task.

## Completion record

Completed locally on 2026-09-23 after committing SEO-003A as `456f68e`.
No migration regressions required application changes. This verification record
and task/spec progress updates remain uncommitted for review.

Environment and evidence:

- Chromium 152.0.7977.82 on Linux, using an isolated headless profile and CDP.
  Viewports were 375×900 and 1280×900, with touch emulation on mobile.
- Served the existing production artifact using `bun run preview --port 5175`.
  Reused the successful SEO-003A build, lint, LinkedIn verification, and export
  generation because no application/build source changed afterward.
- Temporary scripts and 20 light/dark route screenshots, no-JavaScript captures,
  and visual contact sheets are under ignored `tmp/seo-004/`. Reviewed the
  screenshots for all five substantive pages at both widths and themes.

Static delivery and content:

- Parsed initial HTML for all substantive pages: one h1 per page, substantive
  content, semantic headings, and links. Compared each page's full heading list
  before JavaScript and after hydration to check for missing or duplicated content.
- Reused and reran `tmp/seo-003/check-html.py`: exact titles, descriptions,
  canonicals, social tags, language, viewport, favicons, sitemap XML, and robots
  checks passed. Values and standalone 404 retain `noindex` without a canonical.
- `tmp/seo-004/static-check.py` checked all six route files and 73 unique local
  references, including assets and route data. All returned 200. Slashless routes
  redirected while retaining queries. Unknown and nested unknown routes, missing
  assets, and the excluded SPA fallback returned actual 404 responses.
- With JavaScript disabled, all five pages remained readable at both widths.
  All five navigation links were visible in the appropriate navigation, and
  clicking Experience performed a real document navigation. External/contact
  hrefs remained available. Both CV links returned PDF data successfully.

Hydration, appearance, and themes:

- The five-page light/dark matrix passed at both widths, with no horizontal
  document overflow, duplicate headings, hydration warnings, or runtime errors.
  Active navigation matched each route.
- All six framework routes hydrated with saved light, dark, and system themes.
  Live system preference changes and storage-denied reads/writes passed. Reused
  the earlier early-theme check with bundles blocked, since its source is unchanged.
- Overrode the browser's current year to 2027 while serving the real 2026 build
  and serialized loader data. Home hydrated without warnings and updated from
  the build's 18 years to the browser's 19 years.
- An initial wait for an Iconify SVG timed out. Later captures confirmed icons
  populated normally through the existing asynchronous icon loading. No icon
  implementation change was needed.

Navigation, gestures, and scrolling:

- Mobile menu opening/closing, Tab focus, Escape, and focus return after menu
  navigation passed. The header hid on downward scrolling, reappeared on upward
  scrolling, and stayed visible while the menu was open.
- Tested left and right swipes, Home/Background wraparound, correct adjacent
  preview content, short-gesture cancellation, touch cancellation, link-origin
  exclusion, vertical scrolling, reduced motion without animated previews, and
  desktop swipe exclusion. The initial harness used an interactive origin for
  one swipe. Moving it onto page text verified the intended gesture behavior.
- All three Home project fragments passed clicking, direct slashless entry with
  a query, refresh, Back, and Forward at both widths. Targets retained header
  clearance. The harness accounts for the existing global scroll padding and
  target margins instead of assuming a single 80px offset.
- Navigating from a scrolled Experience page to Skills reset scrolling, and Back
  restored the original position at both widths.
- Reused the SEO-003 checks in `tmp/seo-004/metadata.mjs`: metadata followed every committed route
  and history transition. Active/cancelled swipe previews preserved metadata,
  completed swipes updated it, and Values/client not-found `noindex` cleared on
  return to Home. Client navigation preserved the document without reloading.
  A first run hit a history mismatch in the reused browser session. The rerun
  isolated navigation history and supplied browser user activation, verified the
  expected history entries, and passed Back/Forward checks.

Scope and limitations:

- Compared shared content and public downloads with planning commit `a7fe5aa`.
  Changes are limited to the LinkedIn URL updates recorded in SEO-003A. Both CV
  PDFs remain byte-identical. Shared content has no browser/router runtime imports.
- Scoped task/spec formatting, Markdown-link checks, and `git diff --check`
  passed. No build or Storybook rerun was needed for these record-only changes.
- Browser checks used Chromium emulation, not physical devices, Firefox, or
  WebKit. External/contact hrefs were checked without contacting recipients or
  auditing third-party destinations. No deployment, public response audit, or
  search-engine indexing check was performed. Those hosting checks remain SEO-006.
- SEO-005 documentation and local closure remain pending.

Committed as `b5d4ad7` on 2026-09-23 before starting SEO-005.
