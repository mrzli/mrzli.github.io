# PCE-004A: Review the CV layout against the original

Status: planned

Depends on: PCE-004

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Establish a CV design the user approves before implementing the generator.
Use the original CV as the visual baseline and minimum quality standard.

## Likely files

Original public/data/CV.pdf and CV.tex for inspection, a prototype TeX/PDF under
tmp/cv, and this task's review record. Do not replace public exports in this task.

## Acceptance checklist

- [ ] Inspect the original PDF and TeX at c37ee5b. Record which typography, hierarchy, spacing, alignment, and entry treatments should be retained or improved.
- [ ] Prepare a representative A4 PDF with real website-grounded content, including the opening page and a continuation page with experience entries. A small standalone LaTeX prototype is sufficient. Do not implement the generator yet.
- [ ] Adapt the original design to the agreed single-column layout with readable type and restrained color. Avoid a generic paragraph dump, excessive bold headings, and repetitive stacked employer/role blocks.
- [ ] Compare the prototype with the original at a comparable viewing scale. Review balance, density, scanning, contact placement, and page transitions. Do not optimize for page count at the expense of appearance.
- [ ] Keep prototype files outside public. Record their paths and the design decisions so PCE-005 can reproduce the reviewed layout.
- [ ] Obtain user review of the actual PDF before beginning PCE-005. Revise the prototype if needed. Approval of this layout does not approve final CV wording.

## Verification

Inspect every prototype page and compare it visually with the original. Check
text extraction, Unicode, links, clipping, and readable type. Compilation alone
does not establish visual quality. Record actual checks and review feedback.

Stop for user review. Do not commit or begin the next task without authorization.

## Completion record

Not started.
