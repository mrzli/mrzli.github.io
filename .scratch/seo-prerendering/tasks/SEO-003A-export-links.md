# SEO-003A: Update links in generated documents

Status: not started

Depends on: SEO-002, SEO-003

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Make links to portfolio pages in generated documents use the canonical trailing
slash, including before fragments. For example, generate
`https://mrzli.github.io/experience/#contracting` instead of
`https://mrzli.github.io/experience#contracting`.

## Likely files

`src/content/exports/linkedin.ts`, `scripts/linkedin/verify.ts`,
`public/data/linkedin.md`, `docs/linkedin-generation.md`, and any affected CV
sources or generated downloads discovered during the audit.

## Acceptance checklist

- [ ] Audit portfolio page links in export sources, generators, verification
      scripts, documentation, and current generated documents, including both CVs.
- [ ] Update source URL construction, especially LinkedIn's contracting and
      earlier-role links. Preserve fragment IDs and query strings. Keep shared
      content and generators independent of React and browser/router runtimes.
- [ ] Update LinkedIn verification expectations and documentation to match
      `experience/#contracting` and `experience/#apis-it`.
- [ ] Run `bun run build:linkedin` to regenerate the Markdown. Confirm both
      Website URL fields and description links use canonical URLs and that the
      additional characters remain within existing field limits.
- [ ] Regenerate and replace current CV TeX/PDF downloads only if their page
      links need changing, following `docs/cv-generation.md`. If no changes are
      needed, record that finding. Do not rewrite historical exports.
- [ ] Preserve professional content, layout, external/contact URLs, and static
      file URLs such as `.pdf`. Do not append slashes to download paths.
- [ ] Verify generated page links and their fragment targets against the static
      site. Record any PDF tooling or validation limitation explicitly.
- [ ] Review generated diffs for link changes and resulting character counts.
      Nothing is posted to LinkedIn or deployed as part of this task.

## Verification

Run scoped formatting, `bun run lint`, `bun run build`, and
`bun scripts/linkedin/verify.ts` when the corresponding sources change. Generate
LinkedIn output with `bun run build:linkedin` and inspect its actual URLs, field
counts, and copyable text. Inspect CV link destinations, including PDF link
annotations when available, before deciding whether regeneration is needed.

Use the built static preview to verify canonical page responses and fragment
targets. Public GitHub Pages checks remain SEO-006. Updating an existing LinkedIn
profile is a separate manual action, not part of generating the document.

## Planning record

Added on 2026-09-23 at the user's request after SEO-003 was committed as
`f7fb665`. Confirmed slashless Experience links in the LinkedIn source,
verification script, documentation, and generated Markdown. The CV audit and
all implementation remain pending.
