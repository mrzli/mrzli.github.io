# Portfolio content and export tasks

Status: in progress

Source: [Spec](./spec.md)

Implement in the listed order. Each task is a separate review checkpoint.
Dependencies describe prerequisites, not permission to combine tasks.
PCE-001 is implemented and awaiting review. Later tasks remain unstarted.

| Order | Task                                                                                      | Status          |
| ----- | ----------------------------------------------------------------------------------------- | --------------- |
| 1     | [PCE-001: Replace the template README](./tasks/PCE-001-readme.md)                         | Awaiting review |
| 2     | [PCE-002: Refine the professional title and Skills copy](./tasks/PCE-002-title-skills.md) | Planned         |
| 3     | [PCE-003: Shorten the Oracle Eloqua entry](./tasks/PCE-003-eloqua.md)                     | Planned         |
| 4     | [PCE-004: Establish shared professional content](./tasks/PCE-004-shared-content.md)       | Planned         |
| 5     | [PCE-005: Implement shared LaTeX and PDF generation](./tasks/PCE-005-cv-generation.md)    | Planned         |
| 6     | [PCE-006: Write and render the concise CV](./tasks/PCE-006-concise-cv.md)                 | Planned         |
| 7     | [PCE-007: Write and render the detailed CV](./tasks/PCE-007-detailed-cv.md)               | Planned         |
| 8     | [PCE-008: Expose concise and detailed CV downloads](./tasks/PCE-008-cv-downloads.md)      | Planned         |
| 9     | [PCE-009: Generate the LinkedIn Markdown export](./tasks/PCE-009-linkedin.md)             | Planned         |
| 10    | [PCE-010: Verify consistency and close the spec](./tasks/PCE-010-verify-close.md)         | Planned         |

## Working rules

- Read the project instructions before each task and use writing-text for prose.
- Treat website facts as authoritative over the old CV. Preserve the decisions in the spec.
- Implement one task, record checks and outstanding issues, update this index,
  and stop for review. Commit only when requested. Continue only when authorized.
- Keep shared facts separate from the task-specific work of authoring export copy.
  Use one LaTeX generator/template for both CVs and a separate small Markdown exporter.
- Do not silently expand the copy/layout scope or split LinkedIn contracting into
  separate roles. Bring a concrete draft to review if a constraint warrants reconsideration.
- Update documentation when new commands or editing locations become available.

## Checks

For documentation-only tasks, check scoped formatting, paths/links, and consistency.
An application build is unnecessary. For application changes, use relevant direct commands:

```bash
bun run fmt:check <changed-paths>
bun run lint
bun run build
git diff --check
```

The formatting argument is a placeholder for the actual supported paths.
Update relevant stories and run `bun run build-storybook` when shared component
behavior or examples change. Inspect affected pages in light/dark themes at
narrow and wide widths. Builds alone do not establish visual correctness.

Use the implemented export commands for generator tasks and record them in each
task. Check real PDF/Markdown output and failure/overflow behavior. Use existing
tools or focused checks without introducing a test framework for this work.
Keep logs, rendered inspection images, and other intermediates outside public.

## Progress record

Planning files were committed as de7b621. PCE-001 is implemented and awaiting
review. No implementation task has been committed. Export generation and
PCE-002 through PCE-010 have not started.
