# Project instructions

This is Goran Mržljak's portfolio and online CV, a static site prerendered at
build time, hydrated by React, and published to GitHub Pages. It has no
backend, database, or CMS.

Read these before the work they cover:

- [The code style guide](docs/conventions/code-style.md) before editing
  TypeScript or TSX.
- [The frontend guide](docs/conventions/frontend.md) before changing
  components, pages, styling, or interaction.
- [The architecture](docs/architecture.md) before adding files, routes,
  content, dependencies, or build and deployment changes.
- [The testing guide](docs/conventions/testing.md) before verifying a UI,
  routing, or logic change.
- [The documentation guide](docs/conventions/documentation.md) before writing
  or changing docs or comments.
- [The content guide](docs/content.md) before editing professional content,
  and the [CV](docs/cv-generation.md) and
  [LinkedIn](docs/linkedin-generation.md) guides before changing those exports.

# Constraints

- Keep professional claims, dates, project descriptions, and contact details
  grounded in information the user gave or in existing content. Do not invent
  qualifications or experience.
- Preserve `bunfig.toml` and `.vscode/settings.json`, if present, unless the
  user asks to change them.
- Use Bun and the scripts in `package.json`, not npm, pnpm, or Yarn.

# Required checks

Run the checks for the strictest kind of change, the one furthest down, before
committing or handing back:

- **Docs only** (`.md` files): `bun run fmt:check`. Also check that referenced
  paths and commands exist.
- **Code, configuration, or build files**: `bun run check` (formatting and
  Oxlint) and `bun run build` (route types, TypeScript for `src/` and
  `stories/`, prerendering, and packaging).
- **Stories or Storybook configuration**: also `bun run build-storybook`.

The repository has no `test`, `typecheck`, or `preflight` scripts, so never
report those as run. Browser checks are in
[the testing guide](docs/conventions/testing.md).

`bun run fmt`, `bun run lint:fix`, and `bun run fix` modify files. Limit their
scope when possible and review the diff for unrelated changes.
