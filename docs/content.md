# Portfolio content

Edit reusable professional facts and website prose in `src/content/`:

| File                      | Content                                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------------------- |
| `profile.ts`              | Name, professional title, contacts, introduction, work preferences, and experience start years. |
| `experience.ts`           | Employment dates, roles, client projects, technologies, and contributions.                      |
| `skills.ts`               | Skill classifications and operating-system experience.                                          |
| `primary-technologies.ts` | The selected technologies shown on Home.                                                        |
| `projects.ts`             | Personal projects and their links.                                                              |
| `background.ts`           | Education, learning, languages, and other background facts.                                     |
| `project-anchors.ts`      | Stable IDs for the three homepage project links.                                                |
| `types.ts`                | Content types shared by the website and future exports.                                         |

These are plain TypeScript modules. They do not depend on React, browser globals,
or component props, so Bun scripts can import them directly. Pages and Storybook
read the same content. Page-specific navigation labels, Skills definitions, and
homepage highlight wording remain beside their views.

Keep existing project anchors stable when editing titles. Experience totals use
the current year minus 2008 for professional work and minus 2016 for contracting.
These summary years do not replace the more precise employment dates.

The website facts take precedence over the older CV. The [CV generator](./cv-generation.md)
now consumes shared records using temporary layout-review selections. Final CV
summaries and LinkedIn generation will follow in their separate tasks. A change to a shared fact will still
require checking any summaries that mention it in prose.
