# PCE-004: Establish shared professional content

Status: planned

Depends on: PCE-003

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Give the website and future exports one source for reusable facts without changing the site presentation.

## Likely files

src/app/pages/{home,experience,skills,projects,background}/, existing shared types, and a small shared content location selected to fit the repository.

## Acceptance checklist

- [ ] Extract only reusable facts and content into typed modules. Retain names, companies, dates, roles, contact information, skills, and stable project identities without parallel authoritative copies.
- [ ] Connect affected website pages to those modules while preserving text, ordering, appearance, links, anchors, and behavior from the approved preceding tasks.
- [ ] Keep professional experience based on current year minus 2008 and contracting on current year minus 2016, with no plus.
- [ ] Keep the source straightforward and consumable by Bun without React rendering or browser setup. Do not introduce a CMS or generic schema framework.
- [ ] Allow export-specific summaries/selections to be added in later tasks. Do not write all CV and LinkedIn variants here.
- [ ] Document authoritative editing locations and update relevant lasting architecture instructions to reflect the shared content convention.

## Verification

Compare visible content and data before/after migration, including stable IDs and calculated years. Run application checks and inspect affected routes at narrow/wide widths in both themes. Check stories/build Storybook if affected by shared imports or behavior.

Run applicable checks from the task index and record actual results below.
Stop for user review. Do not commit or begin the next task without authorization.

## Completion record

Not started.
