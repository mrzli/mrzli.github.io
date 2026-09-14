# PCE-002: Refine the professional title and Skills copy

Status: planned

Depends on: PCE-001

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Use direct professional wording without defensive explanations.

## Likely files

src/app/pages/home/home-page.tsx, src/app/pages/skills/skills-page.tsx, and directly related title metadata if present.

## Acceptance checklist

- [ ] Use "Senior software developer" for the professional headline while retaining web specialization and frontend/backend/full-stack availability.
- [ ] Keep Home as the navigation label and preserve Hire me, selected work, and the approved hero layout.
- [ ] Keep the Skills opening and use the two neutral definitions recorded in the spec. Remove the redundant caveat and recruiter/fundamentals/onboarding defense.
- [ ] Shorten the operating-system paragraph below the lists without losing its meaning. Adjust its heading if the old heading no longer fits.
- [ ] Preserve all skill classifications and recency groups, including existing Codex/Copilot and limited Claude/Cursor entries.

## Verification

Run application checks. Inspect Home and Skills at narrow and wide widths in both themes. Confirm prose changes do not require component/story changes unless shared behavior actually changes.

Run applicable checks from the task index and record actual results below.
Stop for user review. Do not commit or begin the next task without authorization.

## Completion record

Not started.
