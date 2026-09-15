# PCE-004: Establish shared professional content

Status: complete

Depends on: PCE-003

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Give the website and future exports one source for reusable facts without changing the site presentation.

## Likely files

src/app/pages/{home,experience,skills,projects,background}/, existing shared types, and a small shared content location selected to fit the repository.

## Acceptance checklist

- [x] Extract only reusable facts and content into typed modules. Retain names, companies, dates, roles, contact information, skills, and stable project identities without parallel authoritative copies.
- [x] Connect affected website pages to those modules while preserving text, ordering, appearance, links, anchors, and behavior from the approved preceding tasks.
- [x] Keep professional experience based on current year minus 2008 and contracting on current year minus 2016, with no plus.
- [x] Keep the source straightforward and consumable by Bun without React rendering or browser setup. Do not introduce a CMS or generic schema framework.
- [x] Allow export-specific summaries/selections to be added in later tasks. Do not write all CV and LinkedIn variants here.
- [x] Document authoritative editing locations and update relevant lasting architecture instructions to reflect the shared content convention.

## Verification

Compare visible content and data before/after migration, including stable IDs and calculated years. Run application checks and inspect affected routes at narrow/wide widths in both themes. Check stories/build Storybook if affected by shared imports or behavior.

Run applicable checks from the task index and record actual results below.
Stop for user review. Do not commit or begin the next task without authorization.

## Completion record

Implemented on 2026-09-15. Reviewed and approved for commit by the user.

- Moved experience, skills, personal projects, background, and stable project anchors into src/content. Extracted profile/contact details, homepage professional prose, education headings, operating-system experience, and primary technologies into the same shared source.
- Defined content types independently of component props. Page components and Storybook consume those records and types. Kept page-specific navigation and selected-work copy in Home data.
- Centralized professional and contracting start years, retaining year subtraction and exact employment dates. Background and project links reuse relevant profile fields.
- Added docs/content.md and updated architecture instructions. No CV/LinkedIn copy, generation scripts, dependencies, or public assets changed.
- Direct Bun imports succeeded. Compared all migrated experience, skills, project, and background records with a pre-migration JSON baseline: identical.
- Compared rendered text, links, and IDs on all five pages with the browser baseline: identical. Checked each route at 375px and 1280px in light/dark themes without horizontal overflow, and visually reviewed Home and Background screenshots.
- Lint, production build, Storybook build, scoped formatting, and diff whitespace checks passed. Storybook retained its existing non-blocking deprecation, empty MDX glob, and bundle-size warnings.
- Reviewed all project instructions for consistency after updating the shared-content convention. Browser checks used local Chromium, not deployed hosting.
- PCE-005 has not started.
