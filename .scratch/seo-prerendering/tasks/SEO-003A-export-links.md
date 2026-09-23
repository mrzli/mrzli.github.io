# SEO-003A: Update links in generated documents

Status: complete

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

- [x] Audit portfolio page links in export sources, generators, verification
      scripts, documentation, and current generated documents, including both CVs.
- [x] Update source URL construction, especially LinkedIn's contracting and
      earlier-role links. Preserve fragment IDs and query strings. Keep shared
      content and generators independent of React and browser/router runtimes.
- [x] Update LinkedIn verification expectations and documentation to match
      `experience/#contracting` and `experience/#apis-it`.
- [x] Run `bun run build:linkedin` to regenerate the Markdown. Confirm both
      Website URL fields and description links use canonical URLs and that the
      additional characters remain within existing field limits.
- [x] Regenerate and replace current CV TeX/PDF downloads only if their page
      links need changing, following `docs/cv-generation.md`. If no changes are
      needed, record that finding. Do not rewrite historical exports.
- [x] Preserve professional content, layout, external/contact URLs, and static
      file URLs such as `.pdf`. Do not append slashes to download paths.
- [x] Verify generated page links and their fragment targets against the static
      site. Record any PDF tooling or validation limitation explicitly.
- [x] Review generated diffs for link changes and resulting character counts.
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

## Completion record

Implemented and locally verified on 2026-09-23 after committing the task/spec
updates as `e333a61`. Implementation remains uncommitted for review.

- Updated LinkedIn URL construction, existing verification expectations, and
  documentation to use `experience/#contracting` and `experience/#apis-it`.
- Regenerated `public/data/linkedin.md` through `bun run build:linkedin`.
  Both Website URL fields and both description links use the canonical paths.
  The descriptions now contain 1791 and 552 characters, each below the existing
  2000-character working limit.
- Audited export sources, generators, documentation, current TeX, and actual PDF
  link annotations using `pdfinfo -url`. Both CVs link only to the canonical
  homepage, PDF downloads, and external/contact destinations. No CV source or
  artifact changes were needed, and no PDFs were regenerated.
- Verified the generated Markdown equals the previous version with exactly four
  slash insertions and two character-count updates. Professional content,
  formatting, external/contact links, and download URLs are unchanged. All four
  CV TeX/PDF files are byte-identical to the committed versions.

Verification:

- `bun scripts/linkedin/verify.ts`, `bun run build:linkedin`, `bun run lint`,
  `bun run build`, scoped formatting for changed source/docs/task files, and
  `git diff --check` passed.
- Static preview returned 200 without redirects for every portfolio URL found
  in the LinkedIn output and CV PDFs. Parsed the Experience HTML and confirmed
  both fragment IDs exist and the canonical URL matches. Both downloads returned
  PDF data successfully. The audit script is in ignored `tmp/seo-003a/`.
- Generated Markdown retains its generator-owned table layout and the previously
  recorded formatter discrepancy. It was checked against exact generator output
  instead of being reformatted independently.
- No shared UI, routing behavior, or Storybook configuration changed. Existing
  browser checks remain applicable. No browser/router dependency was added to
  shared content. No PDF tooling limitation was encountered during the audit.

Nothing was posted to LinkedIn or deployed. Public hosting verification remains
SEO-006. SEO-004 is the next implementation task.
