# SRN-003: Make Skills quicker to scan

Status: pending

Depends on: SRN-001, SRN-002

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Put the skills near the top and reduce space spent on empty card areas.

## Likely files

Start with `src/app/pages/skills/skills-page.tsx` and its page-specific components. Change data only if structure requires it, preserving its values.

## Acceptance checklist

- [ ] Keep the short introduction and concise level definitions above the skills. Move the longer explanatory paragraphs below without losing information.
- [ ] Render experience groups as semantic section headings and categories as compact rows of labels and wrapping tags.
- [ ] Use side-by-side labels and tags where they fit, with stacked rows on narrow screens. Row height follows its content.
- [ ] Preserve category order, all technologies, experience classifications, and the single shared tag style.
- [ ] Use minimal grouping surfaces or separators instead of a bordered card around every small category.

## Verification

Inspect all experience groups at 375px, 768px, and 1280px in both themes. Verify that skills appear earlier than the review baseline and that large categories do not create empty areas in unrelated categories. Check long labels and technology names for wrapping and overflow.

Run the applicable commands in the task index and record actual results here.
Stop for the user's review and manual commit before starting another task.

## Completion record

Not started.
