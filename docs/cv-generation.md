# CV generation

Run `bun run build:cv` to generate concise and detailed CV drafts from shared
portfolio content. Both use the reviewed Palatino layout with navy rules and links.
The command prints a fresh output directory such as
`tmp/cv/build_20260915-213005`. The timestamp uses local time to the second.
Sort the timestamped folder names to find the latest run. If a folder already
exists, the new folder gets `-01`, then `-02`, and so on. The first has no suffix.

These are generation samples, not complete CVs. The concise sample reproduces
four contracting projects and two earlier employers from the layout review.
The detailed sample uses the fuller website text for those entries. Final
selections and wording belong to the separate concise and detailed CV tasks.
The existing public downloads remain unchanged until those tasks.

## Commands

```bash
bun run build:cv
bun run build:cv concise
bun run build:cv detailed
bun run build:cv --tex-only
```

Outputs are `CV.tex` and `CV.pdf`, or `CV-detailed.tex` and `CV-detailed.pdf`.
TeX-only mode needs Bun. PDF builds also need `latexmk` and pdfLaTeX, with:

- Standard `article`, T1 font encoding, and UTF-8 input support.
- `mathpazo` (PSNFSS) and the Palatino font files.
- `geometry`, `xcolor`, and `hyperref`.
- `glyphtounicode.tex` for text extraction.

Exported TeX is self-contained apart from those standard dependencies. Copy it
to another directory or machine and compile it without repository templates or
`resume.cls`:

```bash
latexmk -norc -pdf -interaction=nonstopmode -halt-on-error -no-shell-escape CV.tex
```

## Update downloads after content review

```bash
bun run build:cv concise --publish
bun run build:cv detailed --publish
```

Omit the variant to update both. Publication is a local file operation into
`public/data/`. Every requested PDF must compile successfully before any public
file is replaced. A compilation failure exits unsuccessfully and reports the
location of the diagnostic logs, leaving existing downloads intact. `--tex-only`
cannot be combined with `--publish`. Only finished TeX and PDF files are copied.

The website and GitHub Pages builds use the checked-in downloads. They do not
invoke LaTeX. Intermediates stay under `tmp/cv/` and can be removed when no longer
needed. Every build uses a fresh directory to avoid stale output masking failures.

## Editing

- Professional facts: [shared content](./content.md).
- Temporary layout-review copy and selected entries: `scripts/cv/draft-content.ts`.
  Selections reference the shared experience records. Review these references if
  entries are reordered. This sample is not the final export content model.
- Variant selection and year calculations: `scripts/cv/document.ts`.
- TeX rendering: `scripts/cv/render.ts`.
- Shared visual template: `scripts/cv/template.tex`, based on the approved
  `.scratch/portfolio-content-exports/tasks/PCE-004a-layout-prototype.tex`.
- Compilation and publication: `scripts/cv/build.ts`.

The concise sample retains the prototype's explicit continuation-page break.
The detailed sample flows automatically. Final pagination will be reviewed with
each variant's actual content. Do not shrink text to force a target page count.

Edit source content and regenerate. Generated TeX and PDFs are not authoritative.
Experience totals use the current year minus 2008 and 2016. The same content and
year produce identical TeX. PDF metadata may include the compilation time.
Review separately authored summaries when the facts they describe change.

## Verification

```bash
bun scripts/cv/verify.ts
```

This focused script needs the LaTeX dependencies above and Poppler's `pdftotext`.
It checks Unicode, LaTeX escaping, experience totals, selections, standalone TeX
compilation, TeX-only output, and publication in a temporary directory. It also
compiles an intentionally invalid second document and verifies that existing
outputs remain unchanged. It does not write to the repository's public directory.

`bun run build` type-checks the scripts, and `bun run lint` checks them. Inspect
real PDF pages against the approved prototype. Compilation and page counts alone
do not establish design quality or readiness to share.
