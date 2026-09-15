# PCE-004A: Review the CV layout against the original

Status: complete

Depends on: PCE-004

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Establish a CV design the user approves before implementing the generator.
Use the original CV as the visual baseline and minimum quality standard.

## Likely files

Original public/data/CV.pdf and CV.tex for inspection, a prototype TeX/PDF under
tmp/cv, and this task's review record. Do not replace public exports in this task.

## Acceptance checklist

- [x] Inspect the original PDF and TeX at c37ee5b. Record which typography, hierarchy, spacing, alignment, and entry treatments should be retained or improved.
- [x] Prepare a representative A4 PDF with real website-grounded content, including the opening page and a continuation page with experience entries. A small standalone LaTeX prototype is sufficient. Do not implement the generator yet.
- [x] Adapt the original design to the agreed single-column layout with readable type and restrained color. Avoid a generic paragraph dump, excessive bold headings, and repetitive stacked employer/role blocks.
- [x] Compare the prototype with the original at a comparable viewing scale. Review balance, density, scanning, contact placement, and page transitions. Do not optimize for page count at the expense of appearance.
- [x] Keep prototype files outside public. Record their paths and the design decisions so PCE-005 can reproduce the reviewed layout.
- [x] Obtain user review of the actual PDF before beginning PCE-005. Revise the prototype if needed. Approval of this layout does not approve final CV wording.

## Verification

Inspect every prototype page and compare it visually with the original. Check
text extraction, Unicode, links, clipping, and readable type. Compilation alone
does not establish visual quality. Record actual checks and review feedback.

Stop for user review. Do not commit or begin the next task without authorization.

## Completion record

Created `tmp/cv/layout-review/CV-layout.pdf` and `CV-layout.tex`.
The reproducible prototype source is also retained beside this task as
[PCE-004a-layout-prototype.tex](./PCE-004a-layout-prototype.tex).

Preserved the original's centered identity block,
section rules, right-aligned dates, italic role lines, and single-column structure.
After layout approval, revised the font to Palatino (`mathpazo`, standard PSNFSS)
and secondary text to dark charcoal (#292524), replacing the pale grey treatment.
Headings use bold title case. Adapted to A4 with 23 mm side margins, 11-point body text, and deep navy (#243B53) only
for rules and links. Project headings, separate technology lines, short context,
and contribution bullets make the entries easier to scan. Removed the duplicated
overview/details structure from this sample.

The sample contains four contracting projects, two earlier employers, and education.
It demonstrates opening and continuation pages, not the final concise selection
or full career timeline. Its explicit page break is for prototype composition,
not a proposed automatic pagination algorithm. The professional-year total uses
LaTeX's current year minus 2008. The generator will use shared source values.

Verification:

- Compiled with `latexmk -norc -pdf -interaction=nonstopmode -halt-on-error -no-shell-escape CV-layout.tex` from `tmp/cv/layout-review`.
- Inspected both A4 pages and compared them with the original's first two pages
  rendered at the same 1300-pixel maximum dimension.
- Checked extracted text, Unicode, links, headings, and page transitions.
- No overfull/underfull boxes or warnings in the final compilation log.
- Checked planning formatting, relative links, and `git diff --check`.
- Public CV files, website source, and the existing generation command are unchanged.
  Application and Storybook builds are unnecessary for this standalone prototype.

The user approved the layout structure and requested color/font refinements.
The user approved Palatino. The brown links and section rules have been changed
to deep navy and approved. The previous font sample remains at
`tmp/cv/layout-review/CV-layout-original-font.pdf` for comparison.
Layout, Palatino font, and navy accents approved. PCE-005 is authorized next.
