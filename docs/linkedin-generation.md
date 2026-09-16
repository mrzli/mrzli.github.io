# LinkedIn profile export

Run `bun run build:linkedin` to generate `public/data/linkedin.md`. It requires Bun,
not LaTeX. Open the Markdown preview, then copy the contents of each text block
into its named LinkedIn field. Do not copy the headings, counts, notes, or fences.
The command does not access LinkedIn or update an account.

Edit `src/content/linkedin.ts` for the headline, About composition, field selection,
and skill order. Contract project highlights live in `linkedinHighlight` beside
the corresponding projects in `src/content/experience.ts`. Earlier employment
reuses suitable concise summaries. Names, dates, contacts, education, and languages
come from the shared source. Review tailored summaries when a fact changes.

The contracting entry stays a single ongoing role. Its dates intentionally retain
the overlap with APIS IT. The student project appears in Education. Education dates
are absent from the shared source and are not inferred. Skills are suggestions to
match against LinkedIn's selector, not claims that every spelling exists there.
The website retains the fuller skill classifications and project details.

Generation is deterministic for the same source and year. About totals use the
current year minus the shared start years. Counts include spaces and newlines,
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
failure, and exact Markdown code-block contents. Application build and lint also
cover the generator. Review the resulting prose before copying it into LinkedIn.
