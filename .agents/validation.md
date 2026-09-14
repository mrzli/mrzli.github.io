# Validation

- Use Bun and scripts actually defined in `package.json`. Do not substitute npm, pnpm, or Yarn unless requested. Other tools may be used when appropriate.
- Invoke checks as direct commands so approval prefixes can match. Avoid redirection, pipes, environment assignments, and command chaining. Capture output through the execution tool.
- Run the smallest relevant checks first. Broaden checks when the change or a failure warrants it, and avoid repeating successful checks without a reason.
- Use `bun run fmt:check` for formatting, `bun run lint` for linting, or `bun run check` for both.
- Use `bun run build` for TypeScript checking and the production build, including the GitHub Pages fallback file. The application TypeScript project includes `src/` and `stories/`.
- Use `bun run build-storybook` when changing stories or Storybook configuration.
- Use `bun run dev`, `bun run preview`, or `bun run storybook` for relevant browser checks.
- `bun run fmt`, `bun run lint:fix`, and `bun run fix` modify files. Limit their scope when possible and review the diff for unrelated changes.
- For instruction-only changes, check formatting, referenced paths and commands, and consistency across all instruction files. A production build is unnecessary unless application or build files also change.
- There are no `test`, `typecheck`, or `preflight` scripts. Do not claim these checks ran.
- Report which checks ran and any relevant verification that could not be performed.
