# SRN-001: Improve reading hierarchy and Experience

Status: complete

Depends on: none

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Make long descriptions comfortable to read and project titles easy to scan.

## Likely files

Start with `src/app/components/display/typography.tsx`, `src/app/pages/experience/`, the prose wrappers on the other detailed pages, and `stories/components/display/typography.stories.tsx`.

## Acceptance checklist

- [x] Use shared Typography styling for 16px detailed prose with comfortable line height and text that fills its containing card. Preserve compact homepage descriptions, metadata, and the shared tags.
- [x] Apply detailed prose styling to Experience and the explanatory prose on Skills, Projects, and Background. Preserve card/grid widths and tag wrapping.
- [x] Use sentence-case amber project headings on Experience, preserving names and acronyms. Separate employer, role, location, and dates with page h1, employer h2, and project h3 semantics.
- [x] Use valid HTML containers for touched prose blocks and preserve every paragraph and professional claim.
- [x] Update Typography stories to demonstrate the reading style. Include realistic long text so line length and wrapping can be inspected.

## Verification

Inspect long Experience entries, especially Eloqua, at 375px, 768px, and 1280px in both themes. Check title wrapping, readable line length, and heading order. Check all pages using changed shared typography. Build Storybook after updating its examples.

Run the applicable commands in the task index and record actual results here.
Stop for the user's review and manual commit before starting another task.

## Completion record

Implemented and reviewed on 2026-09-14. The user authorized committing this task.

- Added a shared prose variant with 16px text, 28px line height, and no independent width limit. Applied it to detailed prose on Experience, Skills, Projects, and Background.
- Changed Experience project titles to sentence case and h3 headings. Employer headings now use h2, with role, location, and dates in separate positions.
- Corrected touched paragraph containers and increased paragraph spacing. Preserved paragraph content, dates, tags, and professional claims.
- Added realistic single-paragraph and multiple-paragraph Typography stories.
- Passed scoped formatting, lint, production build, Storybook build, and `git diff --check`. Storybook reported non-blocking warnings about Node's deprecated registration API, the empty MDX story glob, and large bundles.
- Checked all five pages at 375px, 768px, and 1280px in light and dark themes: no horizontal overflow. Checked computed prose size, line height, and Experience heading order. Visually reviewed Experience and the long Oracle Eloqua entry across those layouts.

Review adjustment: removed the prose width limit because it left empty space inside full-width cards. Restored amber project headings while retaining sentence case and the larger heading size. Rechecked formatting, lint, production and Storybook builds, and responsive layouts in both themes.

Review checkpoint complete. SRN-002 is authorized as a separate, uncommitted step.
