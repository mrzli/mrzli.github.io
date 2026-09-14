# PCE-008: Expose concise and detailed CV downloads

Status: planned

Depends on: PCE-006, PCE-007

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Make the concise CV primary and the detailed alternative easy to find.

## Likely files

Existing CV links in src/, relevant shared link components/stories only if needed, and public/data/.

## Acceptance checklist

- [ ] Locate existing CV download links and keep CV.pdf as the primary destination so existing URLs remain useful.
- [ ] Add a clearly labeled detailed CV download with the concise version visually primary and both options discoverable.
- [ ] Reuse existing link/components and preserve light/dark styling, keyboard focus, responsive layout, and base URL behavior.
- [ ] Do not add unnecessary visible links to TeX or Markdown sources. Those files may remain publicly accessible.
- [ ] Keep selected-work links, navigation, and existing contact destinations intact.

## Verification

Run application checks. Verify both downloads from relevant pages at narrow/wide widths and in both themes, keyboard access, descriptive link names, and correct final PDF files in the production output. Update/build Storybook only when shared behavior or examples change.

Run applicable checks from the task index and record actual results below.
Stop for user review. Do not commit or begin the next task without authorization.

## Completion record

Not started.
