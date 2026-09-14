# SRN-003: Make Skills quicker to scan

Status: complete

Depends on: SRN-001, SRN-002

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Put the skills near the top and reduce space spent on empty card areas.

## Likely files

Start with `src/app/pages/skills/skills-page.tsx` and its page-specific components. Change data only if structure requires it, preserving its values.

## Acceptance checklist

- [x] Keep the short introduction and concise level definitions above the skills. Move the longer explanatory paragraphs below without losing information.
- [x] Render experience groups as semantic section headings and categories as compact rows of labels and wrapping tags.
- [x] Use side-by-side labels and tags where they fit, with stacked rows on narrow screens. Row height follows its content.
- [x] Preserve category order, all technologies, experience classifications, and the single shared tag style.
- [x] Use minimal grouping surfaces or separators instead of a bordered card around every small category.

## Verification

Inspect all experience groups at 375px, 768px, and 1280px in both themes. Verify that skills appear earlier than the review baseline and that large categories do not create empty areas in unrelated categories. Check long labels and technology names for wrapping and overflow.

Run the applicable commands in the task index and record actual results here.
Stop for the user's review and manual commit before starting another task.

## Completion record

Implemented and reviewed on 2026-09-14. The user authorized committing this task.

- Kept the introduction and level definitions above the skills. Moved longer commentary and the qualification about limited familiarity below the lists, preserving their information.
- Replaced individual category cards with compact rows inside one shared Card per experience group. Labels and tags sit side by side from the existing sm breakpoint and stack below it. Row heights follow their content, with subtle separators.
- Used h2 experience headings and h3 category labels. Renamed the page-specific SkillsCard component to SkillsRow to match its role.
- Preserved all 23 categories across three experience groups, all technology values and their order, and the shared tag styling. The skills data file is unchanged.
- Passed scoped formatting, lint, production build, and `git diff --check`. Shared component behavior and stories did not change, so no Storybook build was needed for this task.
- Checked all three groups at 375px, 768px, and 1280px in both themes. Browser checks confirmed that rendered categories and technologies match the data, with no page or row overflow and unchanged 12px tags. Reviewed wrapping, separators, and content-driven row heights visually.
- The first mobile skill tag now appears at about 570px from the top, compared with roughly 830px in the original review. At 768px and 1280px, it appears at 422px and 366px respectively.

SRN-004 has not started.
