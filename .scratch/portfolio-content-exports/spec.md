# Portfolio content and exports

Status: in progress

Created: 2026-09-15

Implementation tasks: [Ordered task index](./tasks.md)

## Purpose

Make the website copy more direct and produce a concise CV, a detailed CV, and
copy-ready LinkedIn Markdown from shared professional facts. Keep the website as
the fullest account of the work and the source of truth when existing CV content
conflicts with it.

This uses the previous site-readability-navigation planning structure: a spec,
an ordered task index, and individual tasks with acceptance and verification
records. This document captures the approved discussion. Creating it does not
start implementation.

## Findings

- The README is a React/Vite template rather than practical portfolio documentation.
- The homepage title is "Senior full-stack web developer". The approved replacement
  is "Senior software developer", retaining web specialization in the introduction.
- Navigation already says Home. Keep that label and the existing layout.
- Skills has useful experience groupings, but its definitions overgeneralize
  project ownership and its closing commentary sounds defensive.
- The Oracle Eloqua entry contains substantial repetition and implementation detail.
  The dictated references to other names meant this single entry.
- The existing seven-page CV has stale facts and skill classifications, omits newer
  work, and repeats overview/detail content. Its single-column source uses US Letter.
- The current CV uses a resume class not tracked in the repository. The replacement
  needs a self-contained layout using documented standard LaTeX dependencies.
- The existing build:cv script compiles public/data/CV.tex into tmp/cv and copies
  the PDF back. The ordinary website build does not generate the CV.

## Approved content decisions

### README scope after review

Keep the README short: website purpose, bun run dev, and automatic deployment to
GitHub Pages on pushes to master. Omit command catalogs, content-file maps, and
export implementation details. This supersedes the original broader README task.
Once exports are implemented, add a short README section explaining generation
of the TeX text files and LinkedIn Markdown, and compilation of the TeX files
into the concise and detailed CV PDFs. Include only the relevant usage commands.
Keep deeper maintenance details in project instructions or separate workflow
documentation. Do not describe future generation features as available now.

### Audience and website copy

Write primarily for technical leads and prospective clients, while making the
site and concise CV easy for recruiters to scan. Preserve availability for
frontend-only, backend-only, and full-stack work.

Use "Senior software developer" as the professional headline. Keep Home as the
navigation label. Preserve the agreed Hire me wording, delivery/team/technical
direction/mentoring positioning, and experience with both agent-assisted and
unassisted development.

Keep the Skills opening sentence and short neutral definitions:

- Extensive experience: "Substantial hands-on experience through regular use."
- Limited experience: "Shorter exploration or use for specific tasks."

Remove the repeated limited-experience caveat and explanations about recruiter
lookup, assumed HTML/CSS knowledge, and technology learning versus onboarding.
Shorten the operating-system paragraph while preserving its factual meaning,
below the skill lists. Preserve categories, ordering, classifications, and the
existing recency grouping. Do not invent a numerical recency cutoff.

### Oracle Eloqua

Aim initially for about 180–220 words across project context and contributions,
with flexibility for useful information. Preserve independent implementation
apart from CI/deployment, requirements clarification, end-to-end ownership,
campaign scale, asynchronous coordination, race-condition handling,
authentication, and testing.

Describe hundreds of thousands of messages in campaign flows without inventing
a per-minute throughput or a precise completion-time promise. Prioritize system
complexity and correctness. Remove repeated stack descriptions, excessive setup
details, favorite-project commentary, and the long Prisma debugging anecdote.
Retain useful scale facts only where they improve the account.

This is one Experience-entry edit, not a general rewrite of other projects.
The existing selected-work choices and homepage summaries remain approved.

## Shared content and generation design

### Shared facts, tailored wording

Keep names, dates, roles, companies, project identities, contact details, and
technology facts in typed source modules consumed by the website and exports.
Reuse existing structures where suitable and extract only genuinely shared data.
Keep stable project IDs and anchors.

The website retains its fuller wording. Concise CV, detailed CV, and LinkedIn
may each have separately authored descriptions and selections next to the
relevant content. Reuse suitable wording rather than creating a mandatory fourth
description for every item. Shared facts are not copied into independent documents.

Generation formats approved content deterministically. It does not use an AI
service to summarize text at build time. A factual edit may still require review
of separately worded summaries. Document that maintenance step and that generated
files should not be edited as the authoritative source.

Establish the shared facts and website integration first. Add each export's
wording during its own task, rather than drafting all versions during migration.
Keep export-only dependencies and templates out of the browser application.

### CV generation

Retain LaTeX with one repository-owned layout and a small generator supporting
concise and detailed selections. Use standard, documented LaTeX packages.
Do not rely on an untracked personal class or introduce a general document framework.

Extend the existing Bun/script workflow. Keep ordinary website builds independent
of a local LaTeX installation. Document the commands to regenerate all exports
and individual formats as implemented. A failed generation must exit with an
error and must not replace a good public export with incomplete output.

Use tmp/cv for LaTeX intermediates. Finished public/data outputs are:

- CV.tex and CV.pdf for the primary concise CV.
- CV-detailed.tex and CV-detailed.pdf for the secondary detailed CV.
- LinkedIn.md for the manual profile update.

Each exported .tex must be compilable with the documented standard dependencies
without private source fragments. Keep templates and scripts elsewhere in the
repository. Public text files are acceptable, even without visible website links.
Do not put logs, auxiliary files, caches, or intermediate PDFs in public.
Existing unrelated public assets stay in place.

### CV content and layout

Use the original `public/data/CV.pdf` and `public/data/CV.tex` at commit
`c37ee5b` as the visual baseline. The website remains authoritative for facts.
Inspect the original PDF before designing the replacement. Preserve or improve
its typography, hierarchy, spacing, alignment, and scanning rhythm. Recreating
its visual strengths with standard LaTeX dependencies is preferable to replacing
it with a generic document layout.

Before implementing the generator, complete PCE-004A: prepare a representative
PDF layout using real content and compare it visually with the original. Include
the opening page and a continuation page with experience entries. Keep the
prototype outside public and obtain user review of the layout before PCE-005.
Build the generator around the approved design. Do not restore the rejected
generator or CV layout by default.

Page count and successful compilation are not measures of design quality.
Avoid dense paragraph dumps, excessive bold headings, and repetitive stacked
employer/role blocks. Assess hierarchy, balance, and ease of scanning against
the original and the approved prototype throughout both CV content tasks.

Use single-column A4, restrained color, readable type, and clear headings.
Do not add a broad sidebar. Include contact details with website/GitHub links,
a brief summary, core skills, experience, and education. Give experience most space.

The concise CV is the primary download, aiming for approximately two pages.
Select the strongest work while keeping the career timeline understandable.
Omit driving-license categories unless relevant. Do not shrink text to force a fit.

The detailed CV contains the timeline and significant projects, with more context
and contributions. Four or five pages is a useful expectation, not a minimum or
hard maximum. Remove information because it is repetitive or unhelpful, not only
to hit a page count. It need not copy every website paragraph.

Reconcile old CV claims against the site, including newer HVAC/robotics work,
Oracle Eloqua concurrency wording, graveyard-project tests, and current skills.
Keep qualifications, dates, and outcomes grounded in existing information.
Calculate experience from the current year minus 2008 and independent contracting
from the current year minus 2016, without a plus. Static exports update on regeneration.

### LinkedIn Markdown

Generate one Markdown file with clearly labeled fields and plain text ready to
copy. Include headline, About, experience, education, a prioritized skills
selection, existing language/contact facts, and useful Featured link suggestions.
Avoid empty optional sections or invented qualifications.

Present independent contracting as one ongoing Experience entry from 2016,
containing compact highlights of selected client projects and a website link.
Keep earlier employment as separate entries. Do not make separate client roles
or rely on LinkedIn's separate Projects section for the default presentation.
Review the actual draft before reconsidering whether its limit is too restrictive.

Headline and About should communicate the same professional positioning as the
site in wording appropriate to LinkedIn. Include delivery alone or in a team,
technical direction, mentoring, and frontend/backend/full-stack availability.
Use relevant technology terms naturally rather than filling every field to its limit.

Check copyable text against field-specific limits, excluding Markdown labels and
count annotations. Initial working limits are 220 characters for Headline,
2,600 for About, and 2,000 for each Experience description. Verify any additional
constrained fields when implementing. Report overflow and edit the content.
Never silently truncate it. Mark unverified limits rather than claiming account
validation. No LinkedIn API, account updates, blog, or publishing is involved.

## Preserve and scope limits

- Preserve the approved visual design, shared components, theme behavior, compact
  tags, responsive hero, project anchors, navigation, and routing.
- Preserve the GitHub destination https://github.com/mrzli/repos.
- Preserve year calculations, professional facts, and role preferences.
- Do not revisit selected-work choices or rewrite unrelated Experience entries.
- Do not introduce a CMS, backend, generic export framework, or new test framework.
- Do not change unrelated configuration or deploy the site.
- The previous spec's CV exclusion applied to that completed work. CV changes are
  now explicitly in scope, beginning with the relevant tasks here.

## Execution and validation

Implement one task at a time in order. Leave each task working and independently
reviewable, update its record, and stop for review. Do not commit until the user
requests it. A request to commit does not itself authorize the next task.
PCE-001 through PCE-004 are complete. PCE-004A is the next review checkpoint.
This revision updates planning only. Layout and generator implementation have not started.

Documentation-only tasks need formatting, link/path checks, and consistency
review. Application changes need applicable formatting, lint, and production
build checks. Inspect affected UI in light/dark themes at narrow and wide widths.
Update/build Storybook when shared behavior or examples require it.

Generator verification must cover real output, non-ASCII names, LaTeX escaping,
dates, content selection, failure behavior, and absence of public intermediates.
Inspect every page of each final PDF, text extraction/reading order, links,
page breaks, and readable type. Compile the exported TeX independently from
project-local templates to establish portability.

Check LinkedIn field counts against the actual copyable text and exercise an
overflow case. Verify Markdown preview and plain-text copying. Record local
validation separately from anything requiring LinkedIn account access.

Reuse successful checks when later tasks do not affect them. Record actual results
and limitations rather than marking unperformed checks passed. Update README and
relevant lasting project instructions as the implemented workflow becomes concrete.

## Completion criteria

All eleven tasks satisfy their checklists and have review records. Both PDFs and
TeX files regenerate from shared source content, LinkedIn Markdown covers the
agreed fields, public contains no new intermediates, and website download links
clearly distinguish concise and detailed CVs. Mark complete only after the final
verification and user review.

## Research references

These informed the discussion on 2026-09-15. They are not evidence of verification
inside the user's LinkedIn account.

- [LinkedIn introduction fields](https://www.linkedin.com/help/linkedin/answer/a548203).
- [LinkedIn Projects fields](https://www.linkedin.com/help/linkedin/answer/a8064614).
  This is a separate section and is not the chosen contracting presentation.
- [LinkedIn position grouping](https://www.linkedin.com/help/linkedin/answer/a548226/position-grouping-in-your-profile-s-experience-section?lang=en).
- [Headline and About working limits](https://wordlimit.ai/blog/linkedin-character-limits).
- [Profile guide including Experience limits](https://cdn.uconnectlabs.com/wp-content/uploads/sites/565/2025/04/elcs-linkedin-profile-guide-updated-9.23.pdf).
  Do not assume every other limit in this older guide is current.
