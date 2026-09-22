# SEO-003: Add metadata and discovery files

Status: not started

Depends on: SEO-002

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Give each substantive page accurate initial metadata and one canonical URL.

## Likely files

Route metadata under `src/routing/`, framework document/route modules, a small
build-time discovery-file generator if needed, and `package.json` build wiring.
Reuse `src/content/profile.ts` for the production origin and existing facts.

## Acceptance checklist

- [ ] Generate one title, description, and absolute canonical per indexable page
      using the spec's title patterns and descriptions grounded in existing content.
- [ ] Add Open Graph and basic social-card metadata. Include no nonexistent image
      or invented professional claims. Preserve language, viewport, and favicons.
- [ ] Keep metadata at the active route boundary, outside swipe-preview page
      bodies. Update it after committed navigation and history changes.
- [ ] Retain `noindex` on Values and not-found content without carrying it into
      subsequent indexable routes. Error pages must not canonicalize to Home.
- [ ] Generate sitemap.xml with exactly five absolute canonical page URLs and
      no fragments, query variants, Values, errors, or exports. Omit invented dates.
- [ ] Generate robots.txt allowing public crawling and referencing the sitemap.
      Do not disallow the routes whose HTML contains `noindex`.
- [ ] Keep metadata, sitemap paths, and generated route output consistent without
      duplicating professional facts or creating a general SEO framework.

## Verification

Run applicable task-index checks. Inspect the head of each built document and
parse sitemap XML. Verify files are served from the static artifact. Navigate
between every page and use back/forward while inspecting metadata. Start and
cancel a swipe preview, then complete a swipe, confirming metadata changes only
on committed navigation. Navigate from Values/not-found to Home and verify
`noindex` is removed.

## Completion record

Not started.
