# PCE-003: Shorten the Oracle Eloqua entry

Status: planned

Depends on: PCE-002

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Keep ownership and asynchronous system complexity clear in a shorter account.

## Likely files

src/app/pages/experience/data.ts and stories/components/display/project-details.stories.tsx if its existing data usage is affected.

## Acceptance checklist

- [ ] Edit only the Oracle Eloqua entry, initially aiming for roughly 180–220 words across context and contributions, with justified flexibility.
- [ ] Preserve independent implementation except CI/deployment, requirements clarification, end-to-end ownership, campaign scale, race conditions, authentication, and testing.
- [ ] Use Oracle Eloqua in the description and describe hundreds of thousands of messages in asynchronous campaign flows without a throughput or exact time claim.
- [ ] Remove repeated technology/setup explanations, favorite-project commentary, and the extended Prisma anecdote. Preserve useful factual qualifiers.
- [ ] Preserve tags, dates, explicit anchor, and the approved homepage highlight. Record the proposed copy and any material compression for review.

## Verification

Run application checks and inspect the entry in both themes at narrow and wide widths. Check the homepage anchor still reaches it. Review the shared ProjectDetails story if it consumes the changed data; no artificial story rewrite is needed.

Run applicable checks from the task index and record actual results below.
Stop for user review. Do not commit or begin the next task without authorization.

## Completion record

Not started.
