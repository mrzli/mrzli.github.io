# LinkedIn profile export

Run `bun run build:linkedin` to generate `public/data/linkedin.md`. It requires Bun,
not LaTeX. Open the Markdown preview. Short fields appear in tables, two per row,
so titles, companies, dates, locations, and skills take less vertical space.
Copy each table value into its matching LinkedIn field. Longer fields retain
code blocks with copy buttons. Do not copy the headings, counts, notes, or fences.
About and all descriptions use code blocks with a non-breaking space (U+00A0)
on each otherwise empty line. Use their copy buttons in VS Code's Markdown preview.
These spaces count toward the character limit and are intended to preserve
paragraph gaps in LinkedIn. This workaround still needs verification in the
user's account. The command does not access LinkedIn or update an account.

Edit `src/content/exports/linkedin.ts` for the headline, About composition, field
selection, project skills, and project highlights. About reuses the CV profile. Six
Projects entries reuse the short CV titles and descriptions through their stable
`contentKey`. The contracting description contains shorter highlights. Earlier employment reuses the summaries
in `src/content/exports/experience.ts`. Export types live in
`src/content/exports/types.ts`. Names, dates, contacts, education, and languages
come from the shared source. Review tailored summaries when a fact changes.

The contracting entry stays a single ongoing role. Its dates intentionally retain
the overlap with APIS IT. The student project appears in Education. Education dates
are absent from the shared source and are not inferred. Skills are suggestions to
match against LinkedIn's selector, not claims that every spelling exists there.
Each project suggests up to five of its technology tags as skills. Add these in
the project's Skills field using LinkedIn's available names. They also appear in
the profile Skills section. Technologies from earlier projects do not change the
website's experience classifications.

Create the Self-employed experience entry before adding the six projects. In each
project's Associated with field, select that experience entry. Project dates are
not recorded in the source and are not inferred from the overall employment dates.
These are manual instructions, not account updates. LinkedIn's
[Projects help](https://www.linkedin.com/help/linkedin/answer/a8064614), checked on
2026-09-22, documents association and up to five skills per project. It does not
state text limits for projects, so project names and descriptions show counts
without claiming a verified limit. The website retains the full project history.

Generation is deterministic for the same source and year. About totals use the
current year minus the shared start years. Long fields display character counts. Short fields are still limit-checked without
showing counts in the tables. Counts include spaces and newlines,
using JavaScript UTF-16 length. This counts non-BMP characters such as emoji as
two units, conservatively. Croatian characters such as ž count as one.

Validation reports every field exceeding its working limit and stops before
writing the public file. It never truncates text. Staging stays under tmp/linkedin.
Only the final Markdown is published locally; there are no public intermediates.

## Working limits and evidence

Researched on 2026-09-16. None of these limits was tested in the user's account.
The numeric limits below are working assumptions supported by secondary references,
not current guarantees from LinkedIn. Review them if LinkedIn rejects a field.
Fields without a supported numeric limit show counts only, not a pass claim.

| Field                   | Working limit |
| ----------------------- | ------------: |
| Headline                |           220 |
| About                   |         2,600 |
| Experience description  |         2,000 |
| Position title, company |      100 each |
| School, degree          |      100 each |
| Education description   |         1,000 |
| Individual skill        |            80 |

[LinkedIn introduction help](https://www.linkedin.com/help/linkedin/answer/a548203)
and [headline help](https://www.linkedin.com/help/linkedin/answer/a542926/editing-your-headline?lang=en)
confirm the relevant fields but do not state these numeric caps.
[LinkedIn education accessibility help](https://www.linkedin.com/help/linkedin/answer/a1441968?lang=de-DE)
describes the education description field.

[Wordlimit's current guide](https://wordlimit.ai/blog/linkedin-character-limits)
supports the headline and About budgets.
[Post Road Consulting's 2023 reference](https://www.postroadconsulting.com/tools-and-resources/blog/linkedin-character-counts-and-image-specs)
provides corroboration for the 2,000-character position description budget.
[Better Word Counter](https://betterwordcounter.com/linkedin-character-counter/)
lists position title, company, degree, education description, and individual skill
limits. [Texas Tech's profile guide](https://www.depts.ttu.edu/rawlsbusiness/about/cmc/documents/LinkedIn-Profile.pdf)
lists 100 characters per school. Sources differ in age and do not establish every
current UI constraint. Location, dates, languages, contact, and Featured URL fields
are counted but not length-validated. Proficiency and selector choices need manual
review. There is no generated employment type for earlier employers because the
source does not specify one.

## Verification

Run `bun scripts/linkedin/verify.ts` for deterministic output, field boundaries,
Unicode, overflow reporting, preservation of the previous file on validation
failure, and exact table values and code-block contents. Application build and lint also
cover the generator. Review the resulting prose before copying it into LinkedIn.
