# PCE-007: Write and render the detailed CV

Status: complete

Depends on: PCE-006

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Provide a fuller account for readers who want project and contribution detail.

## Likely files

Shared content and detailed CV summaries/selections, shared LaTeX template if needed, public/data/CV-detailed.tex and CV-detailed.pdf.

## Acceptance checklist

- [x] Cover the career timeline and significant projects with more context and contributions than the concise CV. Reuse suitable wording and shared facts.
- [x] Allow seven or eight pages when useful content warrants it, without treating that as a target or hard limit. Do not force four or five pages or shrink text to fit. Remove repetition and low-value detail rather than useful content solely for page count.
- [x] Use the same generator and layout as the concise CV, with appropriate content-driven page breaks. Do not create a second template or separate fact store.
- [x] Preserve the reviewed design and the original CV's visual strengths across the longer document. Check density, hierarchy, and continuation pages, rather than simply adding more paragraphs.
- [x] Keep the website the fullest account. Do not copy every paragraph automatically or duplicate overview/detail sections.
- [x] Produce self-contained CV-detailed.tex and the final PDF, with no public intermediates. Document the generation command.
- [x] Recheck the concise output if template or shared facts change.

## Verification

Inspect every detailed PDF page and extracted text, links, dates, page breaks, headings, and readability. Independently compile exported TeX and compare shared facts between both CVs and the site. Run applicable checks.

Run applicable checks from the task index and record actual results below.
Stop for user review. Do not commit or begin the next task without authorization.

## Completion record

Generated the seven-page detailed CV with
`bun run build:cv detailed --publish`. The self-contained TeX and finished PDF
are public/data/CV-detailed.tex and CV-detailed.pdf. The source build is
`tmp/cv/build_20260916-075015`. The user approved the result. Nothing is deployed.

Content decisions:

- Included thirteen contracting projects, all earlier employers, and the clearly
  labeled student project. Omitted the miscellaneous short assignments and minor
  maintenance lists, which remain on the website.
- Added detailed project context and contributions alongside shared experience
  records. Retained scale, architecture, concurrency, authentication, testing,
  migrations, and mentoring details where relevant. Removed repeated setup,
  personal anecdotes, and defensive commentary. Reused suitable earlier-role text.
- Included education, thesis links, languages, and selected skills. Skill depth and
  recency labels come directly from the website. Codex/Copilot remain extensive
  and recent; Claude/Cursor remain limited. Omitted exhaustive IDE, source-hosting,
  and exploratory technology lists.
- Replaced the temporary draft-content module with shared detailed content.
  Both variants still use the same renderer and visual template.

Layout and verification:

- Kept the approved A4 layout, 11-point Palatino, navy rules/links, charcoal
  secondary text, margins, and aligned dates. Added detailed-only heading space
  reservations and a page break before earlier employment. Skill lists use compact
  paragraph spacing without reducing type size. Seven pages emerged from the
  content and layout; it was not a required limit.
- Inspected all seven pages, extracted text, dates/year totals, Unicode, and link
  annotations. Corrected isolated headings and overfull lines. Final logs have
  no compilation warnings or overfull/underfull boxes.
- Independently compiled exported TeX in a fresh temporary directory.
- `bun scripts/cv/verify.ts`, production build, lint, scoped formatting, and diff
  checks passed. The concise regenerated TeX is byte-identical to its committed
  source, and both concise public files are unchanged.
- Compared website/concise content against HEAD after removing only the new
  detailed fields: identical. No site components or Storybook stories changed.
- Updated README, content editing notes, and generation documentation.

Approved by the user. PCE-008 is next.
