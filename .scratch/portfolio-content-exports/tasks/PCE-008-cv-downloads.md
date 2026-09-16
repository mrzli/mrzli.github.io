# PCE-008: Expose concise and detailed CV downloads

Status: complete

Depends on: PCE-006, PCE-007

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Make the concise CV primary and the detailed alternative easy to find.

## Likely files

Existing CV links in src/, relevant shared link components/stories only if needed, and public/data/.

## Acceptance checklist

- [x] Locate existing CV download links and update destinations to the named, lowercase kebab-case files. Do not retain duplicate files at the old URLs.
- [x] Add a clearly labeled detailed CV download with the concise version listed first and both options discoverable.
- [x] Reuse existing link/components and preserve light/dark styling, keyboard focus, responsive layout, and base URL behavior.
- [x] Do not add unnecessary visible links to TeX or Markdown sources. Those files may remain publicly accessible.
- [x] Keep selected-work links, navigation, and existing contact destinations intact.

## Verification

Run application checks. Verify both downloads from relevant pages at narrow/wide widths and in both themes, keyboard access, descriptive link names, and correct final PDF files in the production output. Update/build Storybook only when shared behavior or examples change.

Run applicable checks from the task index and record actual results below.
Stop for user review. Do not commit or begin the next task without authorization.

## Completion record

Added the two PDF links together in the home hero using the existing ExternalLink
component with an outlined variant. Short CV comes before Detailed CV. Both use
the same accent color throughout, including “· PDF”. The experience action stays
filled. All three actions use matching heights, stack full width on narrow screens,
and form one row from the sm breakpoint. Navigation, contacts, and selected work
remain unchanged. Both paths retain BASE_URL handling, and the new filenames include the owner and variant. The generator, verification
script, and documentation use matching PDF and TeX names. No source-file links were added.

Verification:

- Scoped formatting, lint, production build, and diff checks passed.
- Checked the production preview from 320 to 1280 pixels in both themes, including
  either side of the sm breakpoint. All three actions measure 44 pixels high.
  Narrow layouts have equal full-width targets; wider layouts fit one aligned row.
  No horizontal overflow. Visually inspected the mobile and desktop presentation.
- Keyboard Tab reaches the concise link and then the detailed link, each with a
  visible focus outline.
- Both PDF URLs return HTTP 200 and application/pdf from the production preview.
  Production copies match their public source files byte for byte.
- ExternalLink retains its original string label. Added an outlined
  link story to cover this presentation. Storybook build passed.

- Re-ran generator verification and generated both variants with the new names.
  Generated TeX matches the public source. Renamed public files are byte-identical
  to the previously approved files. No old filenames remain in public or dist.
- Rechecked matching link colors, PDF responses, keyboard focus, and responsive
  light/dark layouts after the label and filename changes.

Approved by the user. PCE-009 is next.
