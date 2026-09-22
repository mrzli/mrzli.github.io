# SEO-006: Verify deployed GitHub Pages

Status: not started

Depends on: SEO-005 and deployment of the implementation

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Confirm the real host serves the intended static pages and discovery files.
This task does not itself authorize a commit, push, or deployment.

## Acceptance checklist

- [ ] Record the deployed revision and verification date so results apply to the
      migrated site, not the previous production version.
- [ ] Request all six page URLs directly. Canonical routes return HTTP 200 with
      the correct content and metadata. Existing slashless URLs resolve successfully
      with a consistent redirect policy and preserved query strings/fragments.
- [ ] Request an unknown path and verify an HTTP 404 with useful not-found content
      and `noindex`, without a client redirect to Home.
- [ ] Verify generated assets and framework data files, client navigation, direct
      fragment entry, refresh, theme initialization, and both CV downloads publicly.
- [ ] Fetch sitemap.xml and robots.txt and confirm the five canonical URLs match
      successful public pages. Values remains `noindex` and absent from the sitemap.
- [ ] Record Search Console URL Inspection and sitemap submission as an optional
      account follow-up. Do not claim indexing, rankings, or submission without evidence.
- [ ] Close the spec only after the required production checks pass. If they fail,
      record the defect and return to the relevant implementation task.

## Verification

Inspect public HTTP responses and HTML, then verify navigation in a browser.
Do not substitute Vite behavior or local static output for host verification.
Account tools are used only if access and authorization are available. Search
engine indexing is not a condition for finishing this verification task.

## Completion record

Not started. Requires the migrated site to be deployed first.
