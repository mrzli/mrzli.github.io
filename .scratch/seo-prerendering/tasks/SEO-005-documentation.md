# SEO-005: Document and close local implementation

Status: complete

Depends on: SEO-004

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Document the implemented workflow and leave a concrete review record with
production verification clearly separated.

## Likely files

`README.md`, a dedicated document under `docs/`, affected `.agents/` files,
and this spec/task set.

## Acceptance checklist

- [x] Explain adding a route, editing metadata, regenerating static output,
      inspecting HTML, and using the static preview in dedicated documentation.
- [x] Document canonical slash URLs, Values indexing policy, 404 behavior, the
      static artifact layout, build-date content, and post-deployment checks.
- [x] Keep the README concise and its commands accurate. Document the export-link convention from SEO-003A, retain the generation
      commands, and explain that JavaScript interactions still hydrate normally.
- [x] Review all project instructions for consistency with implemented startup,
      routing, exports, validation, and deployment. Remove superseded fallback rules
      without rewriting historical completed specs.
- [x] Review the diff for unintended content, design, dependency, and generated
      export changes. Record anything unresolved instead of marking it passed.
- [x] Update local task records with evidence and set the spec/index to
      `locally verified, deployment verification pending` when SEO-001–005, including SEO-003A, pass.
- [x] Leave SEO-006 pending until the implementation is deployed and inspected.
      Record that no commit, push, or deployment was performed unless requested.

## Verification

Check scoped formatting, Markdown links, paths, commands, and instruction
consistency. Reuse application checks from SEO-004 unless implementation changes
make them stale. Do not run a production build for prose-only edits.

## Completion record

Completed on 2026-09-23 after committing SEO-004 records as `b5d4ad7`.
SEO-005 changes remain uncommitted for review. The implementation is
`locally verified, deployment verification pending`.

- Added `docs/rendering-and-seo.md` covering build-time HTML and browser hydration,
  commands, route creation, metadata ownership, indexing policy, static artifact
  layout, canonical links, 404 behavior, build-year data, themes, exports, and
  post-deployment verification.
- Kept the README concise with its existing development, deployment, and export
  commands. The dedicated guide covers Node/Bun setup, build/preview commands,
  rendering, and the canonical-link convention without changing export workflows.
- Reviewed all seven instruction files against the implemented startup, routing,
  metadata, exports, validation, and deployment. Earlier tasks already updated
  the affected rules. No further instruction edits were needed. Searched current
  instructions and documentation for obsolete startup paths and copied-Home
  fallback references. None remained.
- Reviewed the migration diff against planning commit `a7fe5aa`. Changes match
  the rendering, routing, metadata, static packaging, and approved LinkedIn-link
  scope. SEO-004 verified unchanged shared professional content and CV PDFs.
  No new dependency, application behavior, design, or generated export changed
  in this documentation task.
- Updated spec and task index to local completion. SEO-006 remains not started
  and requires the migrated revision to be deployed first. Prior requested
  commits are recorded in the task history. No push or deployment was performed.

Verification:

- Scoped `bun run fmt:check`, Markdown-link/path checks, named Bun-script checks,
  and `git diff --check` passed.
- Reused SEO-004's static-delivery, hydration, layout, gesture, history, theme,
  metadata, no-JavaScript, and download checks. Application and Storybook builds
  were not repeated for documentation-only changes.

Remaining limitations:

- Public GitHub Pages responses and redirects are unverified until SEO-006.
- Browser verification used Chromium with desktop/mobile emulation, not physical
  devices, Firefox, or WebKit.
- Existing repository-wide formatting discrepancies in `.oxfmtrc.json` and the
  generator-owned LinkedIn Markdown remain outside the migration fixes. Changed
  source and documentation pass scoped formatting. Storybook's previously
  recorded deprecation, empty MDX glob, and chunk-size warnings remain.
- Search Console actions and indexing/ranking outcomes are separate external
  follow-ups, not completed by this local work.
