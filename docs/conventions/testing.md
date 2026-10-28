# Testing

## Current Setup

- Storybook contains component examples. There is currently no automated test runner or `test` script in this repository.
- Add or update Storybook stories when shared component behavior or variants change and an example would help verify them. Follow the corresponding component path under `stories/components/`.
- Stories and successful builds alone do not verify browser behavior. For UI changes, inspect the affected route or story in a browser when available, using `bun run dev`, `bun run preview`, or `bun run storybook`.

## Meaningful Coverage

- Verify affected interactions, keyboard access, responsive layouts, and light/dark themes as relevant to the change.
- For routing changes, check navigation within the app and direct entry or refresh on the affected route. Inspect generated HTML without JavaScript and check the static artifact using `bun run preview`, which serves the built files with real 404 responses and no SPA fallback. Local behavior alone does not establish deployed GitHub Pages responses.
- Add or update automated tests for meaningful logic changes when test infrastructure exists. Do not introduce a test framework solely for a small content or styling edit.
- Prefer user-visible behavior over implementation details. Do not write tests that merely restate the implementation.
- If automated tests are introduced, co-locate component-specific tests where practical and place shared test helpers under `test/`.
- Use table-driven tests for cases sharing setup, action, and assertions. Use typed readonly case collections with `input` and `expected` fields, and a description when needed. Keep materially different scenarios as individually named tests.
- Report which checks ran and any relevant verification that could not be performed.
