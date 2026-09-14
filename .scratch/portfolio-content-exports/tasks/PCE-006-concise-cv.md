# PCE-006: Write and render the concise CV

Status: planned

Depends on: PCE-005

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Produce the primary CV for a quick recruiter or client review.

## Likely files

Shared content and CV-specific summaries/selections, shared LaTeX template as necessary, public/data/CV.tex and CV.pdf.

## Acceptance checklist

- [ ] Author the concise selection from the website facts, aiming for approximately two readable A4 pages rather than forcing an exact count.
- [ ] Include contact details with website/GitHub, a brief summary, core skills, an understandable career timeline with selected contributions, and education.
- [ ] Preserve frontend/backend/full-stack openness and accurately describe independent contracting. Omit irrelevant driving-license detail.
- [ ] Reconcile stale CV information against the website, including newer HVAC/robotics work, Eloqua concurrency, graveyard tests, and current skills.
- [ ] Use the shared template, restrained color, clear single-column hierarchy, and readable type. Avoid a wide sidebar, duplicated overview/details, or padding.
- [ ] Generate the final primary CV.tex and CV.pdf using the script and record the page count and editorial decisions for review.

## Verification

Inspect every PDF page, extracted text/reading order, Unicode, dates/year totals, contact links, page breaks, clipping, and font size. Regenerate and independently compile exported TeX. Run applicable checks and review the diff for invented or stale claims.

Run applicable checks from the task index and record actual results below.
Stop for user review. Do not commit or begin the next task without authorization.

## Completion record

Not started.
