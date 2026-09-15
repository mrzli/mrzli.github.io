# PCE-003: Shorten the Oracle Eloqua entry

Status: complete

Depends on: PCE-002

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Keep ownership and asynchronous system complexity clear in a shorter account.

## Likely files

src/app/pages/experience/data.ts and stories/components/display/project-details.stories.tsx if its existing data usage is affected.

## Acceptance checklist

- [x] Edit only the Oracle Eloqua entry, initially aiming for roughly 180–220 words across context and contributions, with justified flexibility.
- [x] Preserve independent implementation, requirements clarification, end-to-end ownership, campaign scale, race conditions, authentication, and testing. The user's review edit omits the separate CI/deployment sentence.
- [x] Use Oracle Eloqua in the description and describe hundreds of thousands of messages in asynchronous campaign flows without a throughput or exact time claim.
- [x] Remove repeated technology/setup explanations, favorite-project commentary, and the extended Prisma anecdote. Preserve useful factual qualifiers.
- [x] Preserve tags, dates, explicit anchor, and the approved homepage highlight. Record the proposed copy and any material compression for review.

## Verification

Run application checks and inspect the entry in both themes at narrow and wide widths. Check the homepage anchor still reaches it. Review the shared ProjectDetails story if it consumes the changed data; no artificial story rewrite is needed.

Run applicable checks from the task index and record actual results below.
Stop for user review. Do not commit or begin the next task without authorization.

## Completion record

Implemented on 2026-09-15. Reviewed and approved for commit by the user.

- Condensed the platform introduction and contributions, retaining ownership, campaign scale, asynchronous coordination, race conditions, testing, and authentication.
- Removed repeated stack/setup explanations, favorite-project commentary, and the long Prisma debugging anecdote. Preserved tags, dates, explicit anchor, other projects, and homepage copy.
- The initial draft was 181 words. During verification, the user revised and staged the entry, expanding the autonomy paragraph, changing the concurrency emphasis, and omitting the CI/deployment sentence. Those edits were preserved.
- Lint, production build, scoped formatting, and staged diff whitespace checks passed against the current copy.
- Storybook built successfully. Its existing LongExperience example imports the entry directly, so no story source change was needed. Existing deprecation, empty MDX glob, and bundle-size warnings remain.
- Verified the homepage link and entry in local Chromium at 375px and 1280px in both themes, with no horizontal overflow and the heading clear of sticky navigation. Visually inspected the revised entry in screenshots.
- PCE-004 has not started. The source entry is staged by the user; this task's documentation remains uncommitted.

Review revision: tightened the user-expanded autonomy paragraph while retaining the
JavaScript/MySQL constraints and independent decision-making. Expanded authentication
with the direction of each OAuth flow, messaging API keys, frontend/backend JWT,
and the original qualified recollection about Basic Auth on incoming webhooks.
