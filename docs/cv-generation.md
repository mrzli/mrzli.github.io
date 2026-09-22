# CV generation

Run `bun run build:cv` to generate the concise and detailed CVs from shared
portfolio content. Both use a TeX Gyre Heros sans-serif template with navy rules and links.
The command prints a fresh output directory such as
`tmp/cv/build_20260915-213005`. The timestamp uses local time to the second.
Sort the timestamped folder names to find the latest run. If a folder already
exists, the new folder gets `-01`, then `-02`, and so on. The first has no suffix.

The short CV currently starts from exactly the same content and layout as the detailed
CV, ready for later trimming. Only the short CV adds notes beneath Work experience
and Skills linking to the detailed CV. Retained contracting projects are being shortened individually. Graveyard management and insurance each use a single paragraph combining the description and contribution, with selected technologies. The short CV includes only extensive and recent
skills, with category labels but no group subtitle. The detailed CV includes every employment and project from the
website, with all technology tags, descriptions, and contributions, followed by
education, skills, and personal information. The detailed CV retains the full website skills list. Their TeX and
PDF files are available in `public/data/`. Page counts follow the content rather
than a hard limit.

## Commands

```bash
bun run build:cv
bun run build:cv concise
bun run build:cv detailed
bun run build:cv --tex-only
```

The `concise` command generates the short CV. Outputs are `cv-goran-mrzljak-short.tex` and `cv-goran-mrzljak-short.pdf`, or `cv-goran-mrzljak-detailed.tex` and `cv-goran-mrzljak-detailed.pdf`.
TeX-only mode needs Bun. PDF builds also need `latexmk` and pdfLaTeX, with:

- Standard `article`, T1 font encoding, and UTF-8 input support.
- `tgheros` and the TeX Gyre Heros font files.
- `geometry`, `xcolor`, and `hyperref`.
- `array` and `longtable` for contribution borders that continue across pages.
- `glyphtounicode.tex` for text extraction.

Exported TeX is self-contained apart from those standard dependencies. Copy it
to another directory or machine and compile it without repository templates or
`resume.cls`:

```bash
latexmk -norc -pdf -interaction=nonstopmode -halt-on-error -no-shell-escape cv-goran-mrzljak-short.tex
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

Location, phone, and email appear in the centered header. A separate Links section
after the profile uses a compact, borderless table with aligned labels and
clickable full URLs for the personal website, GitHub, LinkedIn, Short CV, and
Detailed CV. Both CV links appear in either variant and point to the published
downloads, so readers can find newer versions. The addresses are also readable in print.

Section headings use larger navy text and a rule. Employer headings are one size
smaller, with project headings in bold body-sized text beneath them. Technologies
appear under individual projects and in the detailed skills section, without a
separate Core technologies section.

Roles and project technologies use upright text. Dates and locations stay
right-aligned in smaller text, and technology lists use smaller, left-aligned text.
Technology names use a muted gray and centered dot separators.
Skills use borderless tables with upright, muted-gray category labels on the left and aligned skill lists
on the right, grouped by depth and recency of experience. All categories and skills
come from the website. Its separate operating-system experience paragraph is omitted.
Thin light-gray rules separate employers. Projects within an employer use whitespace.
Project contributions use an indented block with a small uppercase
"MY CONTRIBUTION" label and a gray border along the full left edge. Blocks can
continue across pages between paragraphs without repeating the label.
Contribution blocks have slightly more space above them than ordinary paragraphs,
with a substantially larger gap before the next project heading.
The profile's work preferences and contract details form a compact inset block with a thin gray
left border, without a label or bullet markers.
Section rules sit close to their headings, with extra space before headings
to distinguish successive sections, employers, and projects.

- Professional facts: [shared content](./content.md).
- Earlier short CV wording and project selection: `src/content/exports/cv-concise.ts`,
  retained but currently unused. This file also holds the active short CV section notes.
- Work experience for both variants: `src/content/experience.ts`, shared with the website in full.
- Profile, skills, and personal information for both variants: `src/content/exports/cv-detailed.ts`.
  Its earlier project selections and overrides remain available but are not used.
- Earlier CV employer titles and summaries: `src/content/exports/experience.ts`, still used by LinkedIn.
- Export types and CV variants: `src/content/exports/types.ts`.
- Stable record keys: `src/content/experience-keys.ts` and each record's `contentKey`.
- Variant selection and year calculations: `scripts/cv/document.ts`.
- TeX rendering: `scripts/cv/render.ts`.
- Shared visual template: `scripts/cv/template.tex`, based on the approved
  `.scratch/portfolio-content-exports/tasks/PCE-004a-layout-prototype.tex`.
- Compilation and publication: `scripts/cv/build.ts`.

Both variants use 11-point TeX Gyre Heros body text, default line spacing, and standard
LaTeX font-size commands and spacing presets. Paragraphs remain unindented with a
small gap. Headings reserve enough room for the following text. Earlier employers follow contracting projects within Work experience,
without a separate section or forced page break. Review pagination
when content changes. Do not shrink text
to force a target page count.

Edit source content and regenerate. Generated TeX and PDFs are not authoritative.
Experience totals use the current year minus 2008 and 2016. The same content and
year produce identical TeX. PDF metadata may include the compilation time.
Review separately authored summaries when the facts they describe change.

Education currently shows the institution and the first qualification paragraph only.
Thesis details and thesis links are omitted from the CV. Their source data remains
available. A Personal information section after Skills uses the website data for
name, location, nationality, languages, and driving-licence categories in a borderless table.

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

The short CV combines APIS IT and all earlier roles into one entry, covering
January 2007 to May 2016, including the Visage student project. It uses a short
technology list and one paragraph combining project descriptions and contributions.
The detailed CV and website retain each original entry.

The short CV keeps HVAC, warehouse robotics, Eloqua, mobile fueling, insurance,
and graveyard management as individual contracting projects. The remaining
contracting work is summarized in one Other projects entry. Selections and the
combined summary live in `src/content/exports/cv-concise.ts`.
