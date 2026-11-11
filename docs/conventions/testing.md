# Testing

## Current Setup

- Storybook contains component examples.
- `bun run test` runs Bun's built-in test runner over `test/`. The tests use `bun:test` and are type-checked by `tsconfig.test.json` during `bun run build`.
- Add or update Storybook stories when shared component behavior or variants change and an example would help verify them. Follow the corresponding component path under `stories/components/`.
- Stories and successful builds alone do not verify browser behavior. For UI changes, inspect the affected route or story in a browser when available, using `bun run dev`, `bun run preview`, or `bun run storybook`.

## Meaningful Coverage

- Verify affected interactions, keyboard access, responsive layouts, and light/dark themes as relevant to the change.
- For routing changes, check navigation within the app and direct entry or refresh on the affected route. Inspect generated HTML without JavaScript and check the static artifact using `bun run preview`, which serves the built files with real 404 responses and no SPA fallback. Local behavior alone does not establish deployed GitHub Pages responses.
- Add or update automated tests for meaningful logic changes. A small content or styling edit needs none.
- Prefer user-visible behavior over implementation details. Do not write tests that merely restate the implementation.
- Put tests under `test/`, mirroring the path of the code under test in `src/`, such as `test/app/pages/calculators/model/payroll.test.ts` for `src/app/pages/calculators/model/payroll.ts`. Put shared test helpers under `test/` too.
- Use table-driven tests for cases sharing setup, action, and assertions. Use typed readonly case collections with `input` and `expected` fields, and a description when needed. Keep materially different scenarios as individually named tests.
- Report which checks ran and any relevant verification that could not be performed.
