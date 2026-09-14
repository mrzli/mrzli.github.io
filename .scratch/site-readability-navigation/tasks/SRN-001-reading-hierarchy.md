# SRN-001: Improve reading hierarchy and Experience

Status: pending

Depends on: none

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Make long descriptions comfortable to read and project titles easy to scan.

## Likely files

Start with `src/app/components/display/typography.tsx`, `src/app/pages/experience/`, the prose wrappers on the other detailed pages, and `stories/components/display/typography.stories.tsx`.

## Acceptance checklist

- [ ] Use shared Typography styling for 16px detailed prose with comfortable line height and a desktop reading measure of roughly 65–75 characters. Preserve compact homepage descriptions, metadata, and the shared tags.
- [ ] Apply detailed prose styling to Experience and the explanatory prose on Skills, Projects, and Background. Keep card/grid widths and tag wrapping independent of the prose measure.
- [ ] Use sentence-case project headings on Experience, preserving names and acronyms. Separate employer, role, location, and dates with page h1, employer h2, and project h3 semantics.
- [ ] Use valid HTML containers for touched prose blocks and preserve every paragraph and professional claim.
- [ ] Update Typography stories to demonstrate the reading style. Include realistic long text so line length and wrapping can be inspected.

## Verification

Inspect long Experience entries, especially Eloqua, at 375px, 768px, and 1280px in both themes. Check title wrapping, readable line length, and heading order. Check all pages using changed shared typography. Build Storybook after updating its examples.

Run the applicable commands in the task index and record actual results here.
Stop for the user's review and manual commit before starting another task.

## Completion record

Not started.
