# SRN-004a: Share project details and simplify Experience contributions

Status: complete

Depends on: SRN-004

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Apply the approved contribution styling to Experience without duplicating Projects rendering code.

## Acceptance checklist

- [x] Share the title, description paragraphs, tags, and contribution text between Experience and Projects.
- [x] Replace Experience's inner contribution cards with the same left border and inset spacing used on Projects.
- [x] Preserve each page's heading levels and card layout. Keep the link row specific to Projects.
- [x] Preserve all content, tags, dates, employer details, and link behavior.
- [x] Add Storybook examples for short project details and a long Experience entry.

## Completion record

Implemented and reviewed on 2026-09-15. The user authorized committing this task.

- Added shared ProjectDetails using Typography and TagList. Both page-specific cards compose it, retaining their spacing, semantic heading levels, and optional page-specific content outside the shared block.
- Added stories using the personal website and Oracle Eloqua content to demonstrate short and long descriptions.
- Passed lint, production build, and Storybook build. Storybook retained its non-blocking Node deprecation, empty MDX glob, and bundle-size warnings.
- Browser checks covered Experience and Projects at 375px, 768px, and 1280px in both themes, including the long Eloqua contribution. No horizontal overflow occurred. Experience project paragraphs matched their source data, and Projects paragraphs, tags, and link attributes matched the recorded baseline. Projects link tab order and visibility below the sticky header passed.
- Scoped formatting and diff whitespace checks passed.

SRN-005 has not started. Stop for review before continuing.
