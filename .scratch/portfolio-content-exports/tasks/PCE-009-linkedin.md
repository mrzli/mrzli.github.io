# PCE-009: Generate the LinkedIn Markdown export

Status: complete

Depends on: PCE-004, PCE-008

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Provide ready-to-copy profile text with field-specific length checks.

## Likely files

Shared content and LinkedIn-specific copy, a small Markdown generator, package.json, README.md, and public/data/linkedin.md.

## Acceptance checklist

- [x] Include headline, About, experience, education, prioritized skills, existing language/contact facts, and useful Featured link suggestions. Omit empty optional sections.
- [x] Use one ongoing independent-contractor Experience entry from 2016 with compact project highlights and a website link. Keep earlier employment separate. Do not create separate client roles or a separate Projects section by default.
- [x] Write LinkedIn-specific prose reflecting delivery alone/in a team, technical direction, mentoring, and frontend/backend/full-stack work. Avoid filler, unsupported claims, and keyword stuffing.
- [x] Separate Markdown field labels and count notes from the actual copyable text. Make titles, company, dates, and descriptions easy to identify.
- [x] Validate Headline at 220 characters, About at 2,600, and each Experience description at 2,000 as initial working limits. Verify any other constrained fields against current evidence and record sources/date and unverified assumptions.
- [x] Fail/report over-limit content without silent truncation. Keep the validation small, with limits maintained in code rather than a configurable framework.
- [x] Once implemented, extend the short README export section with the LinkedIn Markdown generation command and its purpose: manually copying profile text into LinkedIn.
- [x] Generate linkedin.md deterministically from source and document the command, editing workflow, and manual copy step. No API, account access, publishing, or blog.
- [x] Record whether the single contracting entry remains useful within its limit. If the draft needs a structural change, bring the concrete copy to review before splitting entries.

## Verification

Check all copyable field lengths, exercise an overflow case and non-ASCII content, preview Markdown, and verify plain-text copying does not include labels/counts. Regenerate from source and compare facts with the website/CVs. Run applicable checks; do not claim verification in the user's LinkedIn account.

Run applicable checks from the task index and record actual results below.
Stop for user review. Do not commit or begin the next task without authorization.

## Completion record

Implemented `bun run build:linkedin`, producing public/data/linkedin.md from shared
facts and tailored copy. The command validates before replacing the previous
file, stages under tmp/linkedin, and does not access LinkedIn.

The draft includes a 99-character headline, 1,222-character About section, and one
1,357-character contracting description against the 2,000-character working limit.
Five project highlights fit comfortably without splitting the role. Earlier
employers remain separate. The student project is included in Education. The
export also includes 20 prioritized skills, languages, contacts, and portfolio
and GitHub Featured suggestions. Unknown education dates are explicitly omitted.

Working limits, evidence checked on 2026-09-16, and unverified UI assumptions are
recorded in docs/linkedin-generation.md. Numeric caps are secondary-source working
limits, not a claim of verification inside the user's account. Fields without
supported caps report counts only. Updated README and content editing notes.

Verification:

- `bun scripts/linkedin/verify.ts` passed: deterministic output, exact copy blocks,
  Unicode, dates, selection, each limit boundary, overflow reporting, literal code
  fences, and preservation of the previous export on validation failure.
- Generated Markdown was rendered for local browser inspection. All 72 rendered
  code blocks matched the original field values exactly, excluding labels/counts.
- Regeneration matched public/data/linkedin.md and the production copy byte for byte.
- Website/CV source is identical to HEAD apart from the new LinkedIn highlights.
  Both CV TeX outputs remain byte-identical to their public sources.
- Production build, lint, scoped formatting, and diff checks passed. No UI or
  Storybook changes were needed in this task.

Approved by the user. The final filename is lowercase linkedin.md. PCE-010 has not started.
