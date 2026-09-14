# Site readability and navigation tasks

Status: in progress

Source: [Spec](./spec.md)

Tasks are ordered to establish typography and navigation before changing page
layouts or adding fragment links. Each task leaves the site working and ends at
a separate user review and manual commit checkpoint. Dependencies indicate
implementation prerequisites, not permission to combine tasks.

| Order | Task                                                                                        | Scope                                          | Status   |
| ----- | ------------------------------------------------------------------------------------------- | ---------------------------------------------- | -------- |
| 1     | [SRN-001: Improve reading hierarchy and Experience](./tasks/SRN-001-reading-hierarchy.md)   | Shared prose styling and Experience headings   | Complete |
| 2     | [SRN-002: Improve navigation and keyboard access](./tasks/SRN-002-navigation.md)            | Active routes, focus, hit areas, sticky header | Complete |
| 3     | [SRN-003: Make Skills quicker to scan](./tasks/SRN-003-skills-layout.md)                    | Content order and compact category rows        | Complete |
| 4     | [SRN-004: Simplify Projects and Background cards](./tasks/SRN-004-simplify-cards.md)        | Reduced nesting and clear subsections          | Pending  |
| 5     | [SRN-005: Link homepage highlights to Experience entries](./tasks/SRN-005-project-links.md) | Stable project anchors and route scrolling     | Pending  |
| 6     | [SRN-006: Review consistency and close the spec](./tasks/SRN-006-verify-close.md)           | Combined review and verification record        | Pending  |

## Working rules

- Read the project instructions before each task and the writing-text skill when
  editing prose. Treat the website as the content source of truth.
- Implement one task at a time. Record completion and verification in that task,
  update this index, then stop for user review and manual commit. Do not commit
  or deploy on the user's behalf.
- Reuse existing components and Storybook examples. Do not add dependencies or a
  test framework solely for this work.
- Do not edit CV.tex, rebuild the PDF, or change professional claims.
- Keep the existing single tag treatment and light/dark/system themes.
- Record specific implementation details here rather than adding one-off rules
  to AGENTS.md or the project instructions.

## Checks for implementation tasks

Run direct commands, using scoped paths for formatting where possible:

```bash
bun run fmt:check <changed-paths>
bun run lint
bun run build
git diff --check
```

`<changed-paths>` is a placeholder for the actual files or directories changed.
When shared component behavior or variants change, update relevant stories and
run:

```bash
bun run build-storybook
```

Use `bun run dev`, `bun run preview`, or `bun run storybook` for browser checks.
Verify affected pages in both themes at narrow and wide widths. Check keyboard
access and affected interactions. A build or Storybook build alone does not
verify the browser experience. Record unavailable checks and pre-existing
failures separately, without changing unrelated files to make checks pass.

Documentation-only updates require formatting, link/path checks, and consistency
review. They do not require an application build.

## Completion

SRN-001 was committed as `b4d1f58`. SRN-002 was committed as `23c4b4d`. SRN-003 is implemented, verified, and approved for commit. SRN-004 through SRN-006 have not started. SRN-006 will record the final review and verification limits.
