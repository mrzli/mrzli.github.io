# SEO-005: Document and close local implementation

Status: not started

Depends on: SEO-004

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Document the implemented workflow and leave a concrete review record with
production verification clearly separated.

## Likely files

`README.md`, a dedicated document under `docs/`, affected `.agents/` files,
and this spec/task set.

## Acceptance checklist

- [ ] Explain adding a route, editing metadata, regenerating static output,
      inspecting HTML, and using the static preview in dedicated documentation.
- [ ] Document canonical slash URLs, Values indexing policy, 404 behavior, the
      static artifact layout, build-date content, and post-deployment checks.
- [ ] Keep the README concise and its commands accurate. Document the export-link convention from SEO-003A, retain the generation
      commands, and explain that JavaScript interactions still hydrate normally.
- [ ] Review all project instructions for consistency with implemented startup,
      routing, exports, validation, and deployment. Remove superseded fallback rules
      without rewriting historical completed specs.
- [ ] Review the diff for unintended content, design, dependency, and generated
      export changes. Record anything unresolved instead of marking it passed.
- [ ] Update local task records with evidence and set the spec/index to
      `locally verified, deployment verification pending` when SEO-001–005, including SEO-003A, pass.
- [ ] Leave SEO-006 pending until the implementation is deployed and inspected.
      Record that no commit, push, or deployment was performed unless requested.

## Verification

Check scoped formatting, Markdown links, paths, commands, and instruction
consistency. Reuse application checks from SEO-004 unless implementation changes
make them stale. Do not run a production build for prose-only edits.

## Completion record

Not started.
