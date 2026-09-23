# SEO and static prerendering tasks

Status: locally verified, deployment verification pending

Source: [Spec](./spec.md)

Tasks are ordered by dependency. Each implementation task should leave a working,
reviewable site. Once the user authorizes the complete migration, continue through
local tasks without mandatory commit checkpoints. Do not commit or deploy unless
requested. Production verification is a separate follow-up.

| Order | Task                                                                                 | Scope                                                                  | Status      |
| ----- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- | ----------- |
| 1     | [SEO-001: Prepare deterministic rendering](./tasks/SEO-001-rendering.md)             | Browser APIs, theme initialization, time-dependent content             | Complete    |
| 2     | [SEO-002: Migrate routing and static output](./tasks/SEO-002-framework.md)           | Framework Mode, hydration, route files, GitHub Pages packaging         | Complete    |
| 3     | [SEO-003: Add metadata and discovery files](./tasks/SEO-003-metadata.md)             | Titles, descriptions, canonical URLs, social tags, sitemap, robots     | Complete    |
| 4     | [SEO-003A: Update links in generated documents](./tasks/SEO-003A-export-links.md)    | Canonical page links in LinkedIn and affected CV exports               | Complete    |
| 5     | [SEO-004: Verify behavior and static delivery](./tasks/SEO-004-verification.md)      | HTML checks, browser regression review, response codes                 | Complete    |
| 6     | [SEO-005: Document and close local implementation](./tasks/SEO-005-documentation.md) | Maintenance guidance, instruction consistency, local completion record | Complete    |
| 7     | [SEO-006: Verify deployed GitHub Pages](./tasks/SEO-006-production.md)               | Public responses and discovery after deployment                        | Not started |

## Working rules

- Read project instructions before each task. Use the writing-text skill for prose.
- Preserve page content, visual design, shared exports, and the interactions
  listed in the spec. Fix migration regressions before marking a task complete.
- Keep framework-specific exports and dependencies at their required boundaries.
- Update lasting project instructions alongside the implementation that changes
  them. Do not describe planned behavior as already implemented.
- Record commands, results, browser coverage, unresolved failures, and unavailable
  checks in the relevant task. Do not check acceptance boxes based on a plan.
- Keep local and deployed verification distinct. No deployment or account access
  is implied by authorization to implement locally.

## Checks

Use direct commands with actual changed paths replacing the placeholder:

```bash
bun run fmt:check <changed-paths>
bun run lint
bun run build
git diff --check
```

Build includes type generation when required, TypeScript checking, prerendering,
and static packaging after SEO-002. Do not add a separate assumed `typecheck` or
`test` command. Use focused artifact checks with existing tools or Bun. Add a
small reusable check only when it protects meaningful output behavior, without
introducing a general test framework.

Run `bun run build-storybook` when shared component behavior, Vite integration,
or Storybook configuration changes. Update relevant stories when useful. Use
`bun run dev`, `bun run preview`, or `bun run storybook` for applicable browser
checks. Local static preview must not mask missing route files with SPA fallback.

Documentation-only changes require scoped formatting, path/link checks, and
consistency review. Do not repeat passing builds without a new change or concern.

## Progress record

Planning documents were committed as `a7fe5aa` on `seo-prerendering`. SEO-001 was
committed as `aa6ca51`, SEO-002 as `9511188`, and SEO-003 as `f7fb665`.
The export-link plan was committed as `e333a61`, SEO-003A as `456f68e`, and
SEO-004 records as `b5d4ad7`. SEO-005 documentation and local closure are complete
and remain uncommitted for review. SEO-006 is pending deployment of the migrated
site. No push or deployment was performed. See the task records for checks and
limitations and [Rendering and SEO](../../docs/rendering-and-seo.md) for maintenance.
