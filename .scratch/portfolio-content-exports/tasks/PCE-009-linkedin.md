# PCE-009: Generate the LinkedIn Markdown export

Status: planned

Depends on: PCE-004, PCE-008

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Provide ready-to-copy profile text with field-specific length checks.

## Likely files

Shared content and LinkedIn-specific copy, a small Markdown generator, package.json, README.md, and public/data/LinkedIn.md.

## Acceptance checklist

- [ ] Include headline, About, experience, education, prioritized skills, existing language/contact facts, and useful Featured link suggestions. Omit empty optional sections.
- [ ] Use one ongoing independent-contractor Experience entry from 2016 with compact project highlights and a website link. Keep earlier employment separate. Do not create separate client roles or a separate Projects section by default.
- [ ] Write LinkedIn-specific prose reflecting delivery alone/in a team, technical direction, mentoring, and frontend/backend/full-stack work. Avoid filler, unsupported claims, and keyword stuffing.
- [ ] Separate Markdown field labels and count notes from the actual copyable text. Make titles, company, dates, and descriptions easy to identify.
- [ ] Validate Headline at 220 characters, About at 2,600, and each Experience description at 2,000 as initial working limits. Verify any other constrained fields against current evidence and record sources/date and unverified assumptions.
- [ ] Fail/report over-limit content without silent truncation. Keep the validation small, with limits maintained in code rather than a configurable framework.
- [ ] Once implemented, extend the short README export section with the LinkedIn Markdown generation command and its purpose: manually copying profile text into LinkedIn.
- [ ] Generate LinkedIn.md deterministically from source and document the command, editing workflow, and manual copy step. No API, account access, publishing, or blog.
- [ ] Record whether the single contracting entry remains useful within its limit. If the draft needs a structural change, bring the concrete copy to review before splitting entries.

## Verification

Check all copyable field lengths, exercise an overflow case and non-ASCII content, preview Markdown, and verify plain-text copying does not include labels/counts. Regenerate from source and compare facts with the website/CVs. Run applicable checks; do not claim verification in the user's LinkedIn account.

Run applicable checks from the task index and record actual results below.
Stop for user review. Do not commit or begin the next task without authorization.

## Completion record

Not started.
