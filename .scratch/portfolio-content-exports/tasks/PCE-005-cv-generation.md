# PCE-005: Implement shared LaTeX and PDF generation

Status: complete

Depends on: PCE-004A (reviewed CV layout)

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Provide a small portable generation workflow that reproduces the reviewed
PCE-004A layout for both CV selections.

## Likely files

package.json, shared content, new generation scripts and LaTeX template files, README.md, and public/data/CV.tex and CV.pdf when ready.

## Acceptance checklist

- [x] Reproduce the reviewed PCE-004A design, using the original CV as the visual baseline. Do not substitute a new generic layout while implementing generation.
- [x] Implement one repository-owned LaTeX layout and a small deterministic generator that supports concise and detailed selections. Use standard documented dependencies instead of an untracked resume class.
- [x] Generate TeX from shared content with correct escaping, Unicode name handling, dates, and configurable selection through ordinary code. No build-time AI or generic export framework.
- [x] Once implemented, add a brief README explanation and usage command for generating TeX text files and compiling them into CV PDFs. Keep internal implementation details out of the README.
- [x] Extend the existing build:cv workflow. Keep the ordinary website build independent of LaTeX and document real commands/prerequisites.
- [x] Compile into tmp/cv and publish only complete successful outputs. A failure must exit unsuccessfully without replacing a good public export.
- [x] Make exported TeX self-contained apart from standard dependencies. Keep templates, logs, auxiliary files, and intermediate PDFs outside public.
- [x] Demonstrate generation using real shared content, without treating this task as approval of final CV wording. Keep review drafts in tmp/cv until the relevant final outputs are ready.

## Verification

Generate and inspect a real draft against the reviewed prototype and original CV. Verify that automation preserves the approved typography, spacing, hierarchy, and page behavior. Exercise escaping/non-ASCII text and compilation failure. Compile an exported TeX file from a temporary directory without project template files. Check public for intermediates. Run relevant script/application checks and record the exact generation commands.

Run applicable checks from the task index and record actual results below.
Stop for user review. Do not commit or begin the next task without authorization.

## Completion record

Implemented a Bun CLI that builds both variants, either variant separately,
or TeX alone. Optional publication compiles every requested PDF before copying
finished files into public/data. Every build uses a fresh temporary directory named `build_YYYYMMDD-HHMMSS` in local time.
Only collisions receive a numeric suffix (`-01`, `-02`, and so on).
The ordinary site build remains independent of LaTeX.

The shared template retains the approved Palatino type, navy links and rules,
charcoal secondary text, 11-point body, A4 margins, centered header, aligned dates,
and project context/contribution structure. Temporary sample wording lives in
scripts/cv/draft-content.ts and references shared experience records. Dates,
contacts, education, profile facts, and year calculations come from shared content.
The concise draft retains the prototype's continuation break. Detailed uses
longer website text with automatic flow. These are generation samples, not final
CV content selections. Public CV files remain untouched.

Reused the reviewed compilation/CLI plumbing from the earlier attempt, but rebuilt
the document model, renderer, and template around the approved design. No rejected
visual layout or final concise CV content was restored.

Added a short README usage section and docs/cv-generation.md. Scripts are included
in the existing TypeScript build. No new package dependencies or test framework.

Verification:

- `bun run build:cv` produced a two-page concise and three-page detailed sample
  in tmp/cv/build-LYxRR9. Inspected every page against the reviewed design.
- `bun scripts/cv/verify.ts` passed Unicode/escaping, year totals, content selection,
  standalone exported-TeX compilation, TeX-only output, and publication tests.
  An invalid second document preserved all existing destination files.
- Confirmed PDF contact annotations, including the requested GitHub repositories URL.
- No overfull/underfull boxes or compilation warnings in either sample log.
- `bun run build`, `bun run lint`, scoped formatting, and `git diff --check` passed.
- Public exports and website content/components are unchanged. Storybook changes
  and browser interaction tests are unnecessary for this generator task.

Approved for commit. PCE-006 has not started. The user requested no further progress.
