# Portfolio content

Edit reusable professional facts and website prose in `src/content/`:

| File                      | Content                                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------------------- |
| `profile.ts`              | Name, professional title, contacts, introduction, work preferences, and experience start years. |
| `experience.ts`           | Employment dates, roles, client projects, technologies, and contributions.                      |
| `linkedin.ts`             | LinkedIn profile wording, field selection, working limits, and skill order.                     |
| `cv-detailed.ts`          | Detailed CV profile, skill selection, languages, and thesis links.                              |
| `cv-concise.ts`           | Concise CV introduction, work preferences, and selected tools.                                  |
| `skills.ts`               | Skill classifications and operating-system experience.                                          |
| `primary-technologies.ts` | The selected technologies shown on Home.                                                        |
| `projects.ts`             | Personal projects and their links.                                                              |
| `background.ts`           | Education, learning, languages, and other background facts.                                     |
| `project-anchors.ts`      | Stable IDs for the three homepage project links.                                                |
| `types.ts`                | Content types shared by the website and exports.                                                |

These are plain TypeScript modules. They do not depend on React, browser globals,
or component props, so Bun scripts can import them directly. Pages and Storybook
read the same content. Page-specific navigation labels, Skills definitions, and
homepage highlight wording remain beside their views.

Keep existing project anchors stable when editing titles. Experience totals use
the current year minus 2008 for professional work and minus 2016 for contracting.
These summary years do not replace the more precise employment dates.

The website facts take precedence over the older CV. The [CV generator](./cv-generation.md)
consumes shared records. Concise project copy lives in each project's optional
`concise` field in `experience.ts`. Earlier employers use `conciseTitle` and
`conciseSummary`. These fields select entries without changing website wording.
The concise introduction and tool selection live in `cv-concise.ts`. Projects
selected for the detailed CV have a `detailed` field. It can override the display
title, technology selection, context, or contributions. Omitted fields reuse
website wording. Detailed profile, skills, languages, and thesis links are selected
in `cv-detailed.ts`, reusing the shared source and its skill classifications.
The [LinkedIn generator](./linkedin-generation.md) uses `linkedin.ts` and each
selected contract project's `linkedinHighlight`. Earlier employment reuses concise
summaries. A change to a shared fact
still requires checking any summaries that mention it in prose.
