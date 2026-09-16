# PCE-006: Write and render the concise CV

Status: complete

Depends on: PCE-005

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Produce the primary CV for a quick recruiter or client review.

## Likely files

Shared content and CV-specific summaries/selections, shared LaTeX template as necessary, public/data/CV.tex and CV.pdf.

## Acceptance checklist

- [x] Author the concise selection from the website facts, aiming for approximately two readable A4 pages rather than forcing an exact count.
- [x] Include contact details with website/GitHub, a brief summary, core skills, an understandable career timeline with selected contributions, and education.
- [x] Preserve frontend/backend/full-stack openness and accurately describe independent contracting. Omit irrelevant driving-license detail.
- [x] Reconcile stale CV information against the website, including newer HVAC/robotics work, Eloqua concurrency, graveyard tests, and current skills.
- [x] Use the shared template implementing the reviewed PCE-004A design. Compare the complete CV with the original baseline and prototype for typography, hierarchy, spacing, balance, and scanning. Avoid dense paragraph dumps, repetitive employer/role blocks, a wide sidebar, duplicated overview/details, or padding.
- [x] Generate the final primary CV.tex and CV.pdf using the script and record the page count and editorial decisions for review.

## Verification

Compare every page visually against the original CV and reviewed layout. A two-page count or successful compilation does not establish design quality. Inspect every PDF page, extracted text/reading order, Unicode, dates/year totals, contact links, page breaks, clipping, and font size. Regenerate and independently compile exported TeX. Run applicable checks and review the diff for invented or stale claims.

Run applicable checks from the task index and record actual results below.
Stop for user review. Do not commit or begin the next task without authorization.

## Completion record

Implemented the complete concise selection and generated public/data/CV.tex and
CV.pdf with `bun run build:cv concise --publish`. Output is two A4 pages. The
source build is tmp/cv/build_20260916-073619. Nothing is committed or deployed.

Editorial decisions:

- Selected HVAC, warehouse robotics, Oracle Eloqua, mobile fueling, and graveyard
  management to cover recent frontend work, modernization, integration complexity,
  backend ownership, mentoring, and independent application delivery.
- Kept every professional employer back to 2008, with one brief contribution per
  role. Omitted the student project and other contracting projects from this
  concise selection. Insurance and other work remain available on the website
  and for the detailed CV task.
- Kept frontend/backend/full-stack openness, team and independent delivery,
  architecture, AI-assisted/unassisted work, B2B preferences, core tools, and education.
  Totals calculate from 2008 and 2016. No driving-license detail.
- Concise descriptions live alongside shared experience records. Profile copy
  and tool selection live in src/content/cv-concise.ts. Website prose is unchanged.
- Preserved Palatino, navy rules/links, charcoal secondary text, 11-point body,
  margins, aligned dates, and project/bullet hierarchy. Reduced paragraph spacing
  from 5 to 4 points for concise only, and placed the continuation break after
  the first three projects. Detailed sample rendering is unchanged.

Verification:

- Inspected both PDF pages, extracted text, Unicode, dates, year totals, and links.
  No clipping, orphaned headings, or compilation warnings/overfull boxes.
- Independently compiled the exported public TeX in a fresh temporary directory.
- `bun scripts/cv/verify.ts`, production build, lint, scoped formatting, and
  `git diff --check` passed.
- Compared website experience data with HEAD after excluding the new concise
  fields: identical. No website components or Storybook stories changed.
- Regenerated the detailed draft and compared its TeX with the previous output:
  byte-identical, so its previous visual review still applies.
- Updated README, content editing notes, and generation documentation.

Approved for commit. PCE-007 is authorized next.
