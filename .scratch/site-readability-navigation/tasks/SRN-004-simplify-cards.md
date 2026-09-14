# SRN-004: Simplify Projects and Background cards

Status: complete

Depends on: SRN-001, SRN-002

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Make content hierarchy clear through headings and spacing with fewer nested boxes.

## Likely files

Start with `src/app/pages/projects/components/project-card.tsx` and `src/app/pages/background/background-page.tsx`.

## Acceptance checklist

- [x] Keep Projects outer cards and use readable sentence-case project headings, preserving names and acronyms.
- [x] Replace inner role cards with contribution paragraphs distinguished by a subtle left border and inset spacing, without repeating a My role label. Replace separate link cards with a simple bottom row that wraps on mobile.
- [x] Simplify Background learning subsections and related links with headings and spacing while retaining the outer education and learning groups.
- [x] Preserve all descriptions, education details, personal information, tags, and link destinations.
- [x] Keep heading levels meaningful and use valid list markup for link collections. Retain descriptive links, external-link behavior, and keyboard focus.
- [x] Reuse existing shared components. Remove only page-specific wrappers made redundant by this change.

## Verification

Inspect both pages at narrow and wide widths in both themes. Verify long titles, tag wrapping, role separation, and link alignment. Tab through links and check that each destination is preserved. Build Storybook only if shared component behavior or stories change.

Run the applicable commands in the task index and record actual results here.
Stop for the user's review and manual commit before starting another task.

## Completion record

Implemented and reviewed on 2026-09-14. The user authorized committing this task and requested a pause before the next task.

- Kept Projects outer cards, with amber h2 project headings, contribution paragraphs with a subtle left border and inset spacing, and a wrapping bottom link row separated by a subtle border. Converted Personal website to sentence case, preserving the named games.
- Removed Background's nested related-links and learning cards. Used headings, spacing, and separators inside the existing education and learning cards. Personal information cards are unchanged.
- Corrected Projects link collections to use li children and added visible keyboard focus styles through the existing ExternalLink className prop. Link labels, destinations, new-tab behavior, and rel attributes are preserved.
- Passed scoped formatting, lint, production build, and diff whitespace checks. No shared component or story behavior changed, and no stories reference these page-specific components, so a Storybook build was not needed.
- Inspected both pages at 375px, 768px, and 1280px in light and dark themes. Checked title and tag wrapping, role separation, bottom link alignment, and valid list markup, with no horizontal page overflow.
- Compared rendered paragraph text, tags, and all five links on each page with the pre-change versions. Verified link tab order and visibility below the sticky navigation. Background education data and personal information are unchanged.

Review adjustment: removed the repeated My role heading and used a left border to distinguish contribution text. Kept the horizontal separator for links. Rechecked Projects in both themes at mobile, tablet, and desktop widths.

SRN-005 has not started.
