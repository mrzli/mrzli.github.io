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

The generator uses the current short CV document from `scripts/cv/document.ts`
for the introduction, About, dates, grouped earlier experience, education, and
personal and contact information. The contracting description uses a project-focused list with one sentence for each of the 13 named contracting projects in `src/content/exports/linkedin.ts`.

The export contains two experience entries: Senior software developer for
independent contracting, and C# Software Developer for the combined earlier
roles. The earlier entry is not presented as one real employer, so no company
name is supplied. Each entry includes a direct website URL, also placed at the
end of its description. The earlier-role description explains that the link
opens at APIS IT and that the other roles follow below. Contracting links to `experience/#contracting`; earlier
work links to `experience/#apis-it`, the first employment in that group.

Each experience includes a selected skills list to add individually to that
experience in LinkedIn. Contracting skills are curated from the short CV project
tags. Earlier-role skills use the short CV group’s technology list. These lists
are separate from the description and are not capped at five skills.

Separate Projects, project reference lists, and standalone Skills sections are
omitted. Education, personal information, contact details, and general links
remain available. Nothing is posted to LinkedIn automatically.

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
