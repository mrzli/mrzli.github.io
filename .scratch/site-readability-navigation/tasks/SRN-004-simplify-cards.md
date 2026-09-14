# SRN-004: Simplify Projects and Background cards

Status: pending

Depends on: SRN-001, SRN-002

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Make content hierarchy clear through headings and spacing with fewer nested boxes.

## Likely files

Start with `src/app/pages/projects/components/project-card.tsx` and `src/app/pages/background/background-page.tsx`.

## Acceptance checklist

- [ ] Keep Projects outer cards and use readable sentence-case project headings, preserving names and acronyms.
- [ ] Replace inner role cards with a My role subsection and clear spacing. Replace separate link cards with a simple bottom row that wraps on mobile.
- [ ] Simplify Background learning subsections and related links with headings and spacing while retaining the outer education and learning groups.
- [ ] Preserve all descriptions, education details, personal information, tags, and link destinations.
- [ ] Keep heading levels meaningful and use valid list markup for link collections. Retain descriptive links, external-link behavior, and keyboard focus.
- [ ] Reuse existing shared components. Remove only page-specific wrappers made redundant by this change.

## Verification

Inspect both pages at narrow and wide widths in both themes. Verify long titles, tag wrapping, role separation, and link alignment. Tab through links and check that each destination is preserved. Build Storybook only if shared component behavior or stories change.

Run the applicable commands in the task index and record actual results here.
Stop for the user's review and manual commit before starting another task.

## Completion record

Not started.
