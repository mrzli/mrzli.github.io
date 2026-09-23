# SEO-003: Add metadata and discovery files

Status: complete

Depends on: SEO-002

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Give each substantive page accurate initial metadata and one canonical URL.

## Likely files

Route metadata under `src/routing/`, framework document/route modules, a small
build-time discovery-file generator if needed, and `package.json` build wiring.
Reuse `src/content/profile.ts` for the production origin and existing facts.

## Acceptance checklist

- [x] Generate one title, description, and absolute canonical per indexable page
      using the spec's title patterns and descriptions grounded in existing content.
- [x] Add Open Graph and basic social-card metadata. Include no nonexistent image
      or invented professional claims. Preserve language, viewport, and favicons.
- [x] Keep metadata at the active route boundary, outside swipe-preview page
      bodies. Update it after committed navigation and history changes.
- [x] Retain `noindex` on Values and not-found content without carrying it into
      subsequent indexable routes. Error pages must not canonicalize to Home.
- [x] Generate sitemap.xml with exactly five absolute canonical page URLs and
      no fragments, query variants, Values, errors, or exports. Omit invented dates.
- [x] Generate robots.txt allowing public crawling and referencing the sitemap.
      Do not disallow the routes whose HTML contains `noindex`.
- [x] Keep metadata, sitemap paths, and generated route output consistent without
      duplicating professional facts or creating a general SEO framework.

## Verification

Run applicable task-index checks. Inspect the head of each built document and
parse sitemap XML. Verify files are served from the static artifact. Navigate
between every page and use back/forward while inspecting metadata. Start and
cancel a swipe preview, then complete a swipe, confirming metadata changes only
on committed navigation. Navigate from Values/not-found to Home and verify
`noindex` is removed.

## Completion record

Implemented and locally verified on 2026-09-23. SEO-002 was committed as
`9511188` on `seo-prerendering` before this task. SEO-003 remains uncommitted
for user review.

- Added a small typed metadata map under `src/routing/page-metadata.ts`. Titles
  follow the approved patterns. Descriptions summarize existing page content,
  with name, title, location, and production origin reused from `PROFILE`.
- Each substantive route exports its metadata through React Router. Removed the
  generic root title to avoid duplicates. Added Open Graph title, description,
  canonical URL, and website type, plus summary-card title and description.
  No social image was selected or added.
- Values and client not-found routes have their own titles and retain `noindex`.
  They have no canonical link. The standalone 404 retains its own title and
  `noindex`, without a Home canonical.
- Derived indexable paths from the prerender paths, excluding Values. Metadata
  covers this typed set, and packaging generates sitemap.xml from the same paths
  and origin. The sitemap contains exactly five URLs and no dates. robots.txt
  allows all paths and references the sitemap.
- Static preview now serves XML and text with their correct content types.
  Updated the architecture instructions and reviewed all seven instruction files
  for consistency. No dependencies, visible page content, or exports changed.

Verification:

- `bun run build`, `bun run lint`, scoped `bun run fmt:check`, and
  `git diff --check` passed.
- Parsed every generated page head with Python's HTMLParser. Each indexable page
  has exactly one expected title, description, and absolute canonical. Open Graph
  and social-card values match. Language, viewport, and favicons remain present.
  Values and standalone 404 have `noindex` and no canonical.
- Parsed sitemap.xml with ElementTree and verified its namespace and exact five
  canonical URLs, with no lastmod entries. Verified robots.txt contents and
  successful static HTTP responses for both files with their intended MIME types.
- In isolated Chromium, verified direct entries with query strings and fragments,
  client transitions through every indexable page, and Back/Forward. Canonicals
  exclude queries/fragments and always use the production origin.
- Verified Values and client not-found metadata, then navigated to Home and
  confirmed `noindex` disappeared. Neither non-indexable route inherited a
  canonical or description from the previous page.
- At 375×900, started and cancelled a swipe preview without changing metadata,
  then completed a swipe and verified metadata changed to Experience only after
  navigation. Desktop navigation was checked at 1280×900. No hydration or runtime
  errors occurred.
- Temporary artifact/browser checks are under ignored `tmp/seo-003/`. Local
  build and browser sockets required approved execution outside the sandbox.
  Storybook was not rebuilt because its configuration and shared components did
  not change. Repository-wide formatting has the previously recorded unrelated
  issues; the task's changed files pass formatting.

No deployment or public indexing verification was performed. Broader interaction
coverage remains SEO-004 and deployed verification remains SEO-006.

Committed as `f7fb665` on 2026-09-23 before adding the export-link follow-up task.
