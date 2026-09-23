# SEO-006: Verify deployed GitHub Pages

Status: complete

Depends on: SEO-005 and deployment of the implementation

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Confirm the real host serves the intended static pages and discovery files.
This task does not itself authorize a commit, push, or deployment.

## Acceptance checklist

- [x] Record the deployed revision and verification date so results apply to the
      migrated site, not the previous production version.
- [x] Request all six page URLs directly. Canonical routes return HTTP 200 with
      the correct content and metadata. Existing slashless URLs resolve successfully
      with a consistent redirect policy and preserved query strings/fragments.
- [x] Request an unknown path and verify an HTTP 404 with useful not-found content
      and `noindex`, without a client redirect to Home.
- [x] Verify generated assets and framework data files, client navigation, direct
      fragment entry, refresh, theme initialization, and both CV downloads publicly.
- [x] Fetch sitemap.xml and robots.txt and confirm the five canonical URLs match
      successful public pages. Values remains `noindex` and absent from the sitemap.
- [x] Record Search Console URL Inspection and sitemap submission as an optional
      account follow-up. Do not claim indexing, rankings, or submission without evidence.
- [x] Close the spec only after the required production checks pass. If they fail,
      record the defect and return to the relevant implementation task.

## Verification

Inspect public HTTP responses and HTML, then verify navigation in a browser.
Do not substitute Vite behavior or local static output for host verification.
Account tools are used only if access and authorization are available. Search
engine indexing is not a condition for finishing this verification task.

## Completion record

Verified on 2026-09-23 after the user pushed the migration to production.
Deployed revision: `3affb448c315295ce0d79d542596fb8a7fd55b91`.
[Main workflow run 35812819976](https://github.com/mrzli/mrzli.github.io/actions/runs/35812819976)
completed both build and deploy successfully. Deployment finished at 03:04 UTC.
The production site is `https://mrzli.github.io/`.

Public HTTP checks:

- All six canonical page URLs returned HTTP 200 with their correct initial
  content and metadata. The five substantive pages each had one h1, title,
  description, and absolute canonical, plus expected social tags. Values retained
  `noindex` and no canonical.
- Every non-root slashless page returned HTTP 301 to its trailing-slash URL,
  preserving the test query string. Following the redirect returned 200.
- Unknown and nested unknown paths returned HTTP 404 with the standalone
  not-found content, Home link, and `noindex`, without a Home canonical.
- sitemap.xml and robots.txt returned 200. Parsed the sitemap and verified
  exactly the five canonical indexable URLs, excluding Values and modification
  dates. robots.txt allows crawling and references the absolute sitemap URL.
- Checked 34 unique asset, route-data, icon/manifest, and download URLs. All
  returned 200. Every route data response contained serialized loader data, both
  CV responses contained PDF data, and the LinkedIn download contained the new
  canonical Experience fragment links.

Public browser checks:

- Used isolated Chromium 152.0.7977.82 with 375×900 and 1280×900 viewports.
  Direct entry and navigation across every substantive page passed. Client
  navigation retained the document, and Back/Forward updated content and metadata.
- Values stayed out of navigation. Values and client not-found retained
  `noindex`, which cleared on returning to Home. Neither inherited a canonical
  or description from the previous page.
- Active/cancelled swipe previews preserved current metadata. A completed swipe
  updated it to the destination page.
- All three Home project fragments passed clicking, direct slashless entry with
  a query, refresh, Back/Forward, and header clearance at both widths. The browser
  retained fragments through the public redirects. Returning from Skills restored
  the prior Experience scroll position.
- Stored dark theme applied with application bundles blocked, before hydration.
  Hydration, theme cycling, mobile menu/Escape, and JavaScript-disabled Projects
  content passed. Reviewed mobile and desktop production screenshots.
- Direct entry to the public unknown URL remained on that URL with the standalone
  not-found page and `noindex`. No client redirect to Home occurred.
- No hydration warnings or application runtime errors occurred.

Evidence and closure:

- Read deployment information using `gh run list` and `gh run view`. HTTP and
  browser checks are under ignored `tmp/seo-006/`, including saved page HTML,
  `http-results.json`, and screenshots. Network/browser checks used approved
  execution outside the sandbox. No source fix or additional deployment was needed.
- Updated spec/index to production-verified and removed the guide's stale pending
  verification wording. Scoped formatting, local Markdown-link checks, and
  `git diff --check` passed. These record changes remain uncommitted for review.
- Search Console URL Inspection and sitemap submission remain optional manual
  account follow-ups. Neither was performed. No indexing or ranking claim is made.
- This verifies the deployed revision above in Chromium, not every browser or
  device. The implementation and required local/production verification are complete.
