# General Project Instructions

## Purpose

- This is Goran Mržljak's personal portfolio and online CV, published to GitHub Pages.
- It is a static site prerendered at build time and hydrated by React in the browser. Portfolio content lives in TypeScript data files and React components. There is no backend, database, or CMS.

## Tech Stack

- React with TypeScript and ECMAScript modules.
- React Router Framework Mode for routing and static prerendering.
- Vite for development and production builds.
- Tailwind CSS through the Vite plugin, Class Variance Authority for component variants, and `clsx` with `tailwind-merge` for class composition.
- Iconify for icons.
- Bun for package management and scripts, with `bun.lock` as the lockfile.
- Oxfmt for formatting, Oxlint for linting, and Storybook for component examples.

## Configuration

- Preserve `bunfig.toml` and `.vscode/settings.json`, if present, unless the user explicitly requests changing them.
- Use the actual source and `package.json` to establish current behavior.
