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
| `experience-keys.ts`      | Stable keys connecting experience records with tailored export content.                         |
| `project-anchors.ts`      | Stable IDs for the three homepage project links.                                                |
| `types/`                  | Content types shared by the website and exports.                                                |

Shared types are grouped under `types/`, with `index.ts` exporting every type:
`date.ts` for `MonthYear`, `experience.ts` for experience entries, projects, and
date ranges, `personal-projects.ts` for personal projects, `project.ts` for the
shared project description, `links.ts` for shared links, and `skills.ts` and
`background.ts` for their page content. Import shared types through
`src/content/types`. Export-specific types stay in `exports/types.ts`.

These are plain TypeScript modules. They do not depend on React, browser globals,
or component props, so Bun scripts can import them directly. Pages and Storybook
read the same content. Page-specific navigation labels, Skills definitions, and
homepage highlight wording remain beside their views.

Keep existing project anchors stable when editing titles. Experience totals use
the current year minus 2008 for professional work and minus 2016 for contracting.
These summary years do not replace the more precise employment dates.

The website facts take precedence over the older CV. Export-specific content and
types live in `src/content/exports/`:

| File             | Content                                                                                      |
| ---------------- | -------------------------------------------------------------------------------------------- |
| `cv-concise.ts`  | Earlier short CV profile and project wording, retained but currently unused.                 |
| `cv-detailed.ts` | Detailed CV profile, skills, languages, thesis links, and retained unused project overrides. |
| `linkedin.ts`    | LinkedIn profile composition, project highlights, field limits, and skill order.             |
| `experience.ts`  | Employer display titles and summaries shared by CV and LinkedIn exports.                     |
| `types.ts`       | Export-specific content, document, field, and build types, plus CV variants.                 |

Experience entries and their projects have a stable `contentKey`. Export constants
use these keys rather than display titles or array positions. Keep keys stable
when editing titles. The separate optional project `id` remains a public page
anchor and does not change when export content changes.

The [CV generator](./cv-generation.md) currently gives the short and detailed CVs
the same full content and layout as a starting point for shortening the short version.
The short CV has notes beneath Work experience and Skills linking to the detailed CV.
Its skills include only extensive and recent experience, without the group subtitle.
The detailed CV uses every employment and project from `experience.ts`, including all titles,
roles, tags, descriptions, and contributions, in the shared experience order.
Earlier CV project selections and overrides remain in the codebase but are not used.
The [LinkedIn generator](./linkedin-generation.md) consumes the current short CV
document directly. It retains its project selection, descriptions, technology
lists, education, and combined earlier-roles summary. Standalone Skills sections
are omitted. It does not use the older employer summaries or detailed project text.

Export modules may import shared content. Shared website content must not import
export modules. Shared dates, contacts, education, and professional facts remain
in the parent directory. When a shared fact changes, review tailored export copy
that mentions it. Rendering, compilation, and file publication stay in `scripts/`.

The short CV combines APIS IT and all earlier roles into one entry, covering
January 2007 to May 2016, including the Visage student project. It uses a short
technology list and one paragraph combining project descriptions and contributions.
The detailed CV and website retain each original entry.

The short CV keeps HVAC, warehouse robotics, Eloqua, mobile fueling, insurance,
and graveyard management as individual contracting projects. The remaining
contracting work is summarized in one Other projects entry. Selections and the
combined summary live in `src/content/exports/cv-concise.ts`.
