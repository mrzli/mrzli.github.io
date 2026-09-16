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

Generate the concise and detailed CVs as TeX text files and PDFs:

```bash
bun run build:cv
```

The command prints their directory under `tmp/cv/`. Use `bun run build:cv --tex-only`
for text files alone. PDF compilation requires LaTeX and `latexmk`. Both CVs
are available in `public/data/`.
See [CV generation](./docs/cv-generation.md) for prerequisites and updating downloads.

## LinkedIn text

Generate a Markdown file with profile text to copy into LinkedIn manually:

```bash
bun run build:linkedin
```

The file is `public/data/linkedin.md`. It includes field labels and length checks.
See [LinkedIn generation](./docs/linkedin-generation.md) for editing and copying it.
