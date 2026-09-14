# PCE-005: Implement shared LaTeX and PDF generation

Status: planned

Depends on: PCE-004

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Provide a small portable generation workflow that both CV selections can use.

## Likely files

package.json, shared content, new generation scripts and LaTeX template files, README.md, and public/data/CV.tex and CV.pdf when ready.

## Acceptance checklist

- [ ] Implement one repository-owned LaTeX layout and a small deterministic generator that supports concise and detailed selections. Use standard documented dependencies instead of an untracked resume class.
- [ ] Generate TeX from shared content with correct escaping, Unicode name handling, dates, and configurable selection through ordinary code. No build-time AI or generic export framework.
- [ ] Extend the existing build:cv workflow. Keep the ordinary website build independent of LaTeX and document real commands/prerequisites.
- [ ] Compile into tmp/cv and publish only complete successful outputs. A failure must exit unsuccessfully without replacing a good public export.
- [ ] Make exported TeX self-contained apart from standard dependencies. Keep templates, logs, auxiliary files, and intermediate PDFs outside public.
- [ ] Demonstrate generation using real shared content, without treating this task as approval of final CV wording. Keep review drafts in tmp/cv until the relevant final outputs are ready.

## Verification

Generate and inspect a real draft. Exercise escaping/non-ASCII text and compilation failure. Compile an exported TeX file from a temporary directory without project template files. Check public for intermediates. Run relevant script/application checks and record the exact generation commands.

Run applicable checks from the task index and record actual results below.
Stop for user review. Do not commit or begin the next task without authorization.

## Completion record

Not started.
