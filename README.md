# Goran Mržljak's portfolio

A personal website presenting my software development experience, projects, skills,
and background.

## Development

With Bun and the project dependencies installed, start the development server:

```bash
bun run dev
```

## Deployment

Pushing to `master` on GitHub automatically builds and deploys the website to
GitHub Pages through [GitHub Actions](./.github/workflows/main.yml).

## CV generation

Generate the concise and detailed CV drafts as TeX text files and PDFs:

```bash
bun run build:cv
```

The command prints their directory under `tmp/cv/`. Use `bun run build:cv --tex-only`
for text files alone. PDF compilation requires LaTeX and `latexmk`. These are
layout samples pending the final CV content tasks.
See [CV generation](./docs/cv-generation.md) for prerequisites and updating downloads.
