# Site readability and navigation

Status: in progress

Created: 2026-09-14

Implementation tasks: [Ordered task index](./tasks.md)

## Purpose

Make the portfolio easier to read, scan, and navigate while retaining its current
visual identity. Improve the detailed pages and connect the homepage highlights
to the work they describe.

This specification follows the structure of Archon's
`.scratch/archon-cli-simplification/` planning records: a spec, an ordered task
index, and individual tasks with acceptance checklists and verification records.
Creating these documents does not start implementation.

## Findings

The review covered Home, Experience, Skills, Projects, and Background at mobile
and desktop widths in light and dark themes.

- The homepage hierarchy and recent tag styling work well. Keep the introduction,
  portrait, experience totals, selected work, and Hire me section.
- Experience project titles use 12px uppercase text with wide letter spacing,
  even for long names. Employer, location, and role share one crowded heading.
- Detailed body text is 14px and can span nearly the full desktop container.
- On a 375px viewport, the first Skills tags appeared about 830px down the page.
  The introduction delays access to the primary content.
- The Skills grid stretches small categories to match larger cards in each row,
  leaving large empty areas.
- Projects and Background use nested bordered cards for short contributions,
  links, and subsections, giving supporting material too much visual weight.
- Navigation has no active-page indication. Navigation links suppress their
  focus outline, and the mobile menu and theme controls have 28px hit areas.
- The long Experience page has no persistent navigation. Homepage highlights
  have no direct links to their corresponding project entries.

These are observations from the review, not a requirement to preserve exact
pixel measurements or current wording.

## Design

### 1. Reading hierarchy and typography

Use 16px text with approximately 1.75 line height for detailed prose. Let prose fill its containing card. A separate narrow text measure left
the current full-width cards visually unbalanced during user review. Use the existing Typography
component, adding a prose variant only where needed to keep compact descriptions
and metadata distinct. Keep the homepage's compact card copy and 12px tags.

On Experience, render project names as sentence-case headings around 18–20px.
Use the existing amber palette for Experience project headings. Preserve acronyms, product names, and proper nouns. Reserve small uppercase labels
for short categories. Give employer, role, location, and dates distinct positions
with a clear semantic hierarchy: page h1, employer h2, project h3.

Use the same treatment for project headings on Projects. Make Skills experience
groups clear section headings. When editing prose wrappers, use valid block
containers instead of placing divs or paragraphs inside a paragraph.

### 2. Navigation

Show the active route with a restrained persistent treatment and `aria-current`.
Home must be active only at the home route. Provide visible keyboard focus and
at least 44px hit areas for the menu and theme controls while keeping icons small.

Make the navigation sticky with an opaque theme-appropriate surface and a subtle
boundary when needed. Keep it compact, keyboard accessible, and usable at small
viewport heights. Preserve mobile menu behavior and light/dark/system preference
storage. Sticky navigation must not cover focused controls or anchored headings.

### 3. Skills layout

Keep the short introduction and concise definitions of the experience levels
above the skills. Move the longer commentary below the lists without deleting
its information.

Within each experience group, replace the equal-height card grid with compact
category rows. Use a category label and wrapping tags side by side where space
allows, and stack them on narrow screens. Let content determine row height. Keep
one shared tag style, existing categories, their order, and skill classifications.
Use light separators or grouping surfaces where useful, avoiding a bordered box
for each small category.

### 4. Projects and Background cards

Keep outer cards but reduce nested borders. On Projects, use a clear project
heading, description, tags, contribution text distinguished by a subtle left border and inset spacing, and a bottom row of links.
Use spacing and a separator if needed rather than separate cards for the role and
links. Preserve link labels, destinations, and external-link behavior.

On Background, retain the education and learning groups. Present their smaller
subsections with headings and spacing instead of individual inner cards. Keep
related links recognizable and retain the personal information groups.

Use the same contribution treatment on Experience. Share the common title, description, tags, and contribution rendering between both pages, while retaining their heading levels and keeping Projects links in its page-specific card. This follow-up is tracked as SRN-004a.

### 5. Homepage links to experience

Give the three highlighted Experience projects stable explicit IDs and connect
homepage highlights to `/experience#<id>` with React Router links. Do not derive
IDs from editable display titles or array positions. Give links descriptive names
and visible keyboard focus without nested interactive elements.

Handle navigation to a fragment after the route content renders, direct entry,
refresh, and history navigation. Account for the sticky header when scrolling.
Keep ordinary page navigation sensible and avoid re-scrolling on unrelated
renders. Do not introduce a general scrolling framework or new dependency.

## Preserve

- Slate surfaces, amber headings, cyan links in dark mode, rounded outer cards,
  and the shared compact neutral tags.
- Existing professional claims, dates, technology lists, role preferences,
  contact information, and project ordering except for display-only casing.
- The homepage's selected projects and their agreed descriptions.
- Year calculations using the current year minus 2008 and 2016, without a plus.
- Existing responsive breakpoints and the hero's behavior below `lg`: stacked
  experience facts and contact information beside the portrait.
- Routes, router basename, Vite base URL, and the GitHub Pages fallback build.

## Scope limits

- Do not edit `public/data/CV.tex` or rebuild the PDF.
- Do not add a new theme, font dependency, animation system, screenshot gallery,
  search/filter feature, or Values content.
- Do not rewrite the portfolio content or reselect featured projects.
- Do not introduce a test framework for these UI changes.
- Keep unrelated code, configuration, and project instructions unchanged.

## Execution and validation

Implement one task at a time in the task index's order. Each task must leave the
site working and be reviewable independently. The user reviews and commits each
step manually. Report the result and stop at that checkpoint before starting the
next task. Do not create commits or deploy the site.

For each implementation task, run scoped formatting checks, lint, and the
production build. Update relevant Storybook examples when shared components or
variants change, then build Storybook. Inspect the affected pages in a browser
at narrow and wide widths and in both themes. Check system theme behavior when
changing navigation or theme controls. Record actual results and limitations in
the task file rather than treating a build as browser verification.

The final task checks consistency across all five pages, keyboard navigation,
responsive layout, and direct project links. GitHub Pages fallback behavior must
be distinguished from Vite's local fallback. Local checks can verify the build
artifact and route handling but do not prove deployed hosting behavior.

## Completion criteria

All task checklists pass, the user has had a review checkpoint for each step,
and the final task records verification and any unresolved limitations. Mark the
spec complete only when implementation and required verification are finished.

## Completion record

SRN-001 was committed as `b4d1f58`. SRN-002 was committed as `23c4b4d`. SRN-003 was committed as `505920f`. SRN-004 was committed as `8a23f80`. SRN-004a adds the user-requested Experience follow-up and is implemented, verified, and approved for commit. SRN-005 and SRN-006 have not started. See the task index for progress and the individual task records for verification details.
