# SEO-002: Migrate routing and static output

Status: not started

Depends on: SEO-001

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

Build a hydratable static React site whose real route files work on GitHub Pages.
Keep framework migration and deployment packaging together so this task leaves
a deployable artifact rather than an intermediate broken build.

## Likely files

`package.json`, `bun.lock`, `vite.config.ts`, TypeScript configuration,
`src/main.tsx`, `src/setup/`, `src/routing/`, `src/app/app.tsx`, `index.html`,
new framework entry/configuration files, `.storybook/main.ts`, `.gitignore`,
`.github/workflows/main.yml`, and affected `.agents/` instructions.

## Acceptance checklist

- [ ] Verify compatible framework package versions and build engine requirements.
      Add only required tooling, retaining Bun and the existing lockfile workflow.
- [ ] Introduce the framework document, context provider, route modules, and
      hydration. Remove superseded browser startup code and preserve styles/assets.
- [ ] Configure `ssr: false` plus explicit prerender paths for all six existing
      pages. Publish only the client artifact, preferably packaged under `dist`.
- [ ] Produce directory-index HTML per the spec and retain required route data
      and assets. Serialize the initial year and integrate early theme initialization.
- [ ] Normalize internal page URLs to canonical slash forms while preserving
      existing slashless links, fragments, queries, and history behavior.
- [ ] Preserve swipe previews using presentational components and keep a single
      scroll-restoration owner. Do not remove gestures to simplify migration.
- [ ] Generate a standalone `404.html` with a Home link and `noindex`. Replace
      wildcard Home redirection with not-found content on client navigation.
- [ ] Keep Values out of navigation and mark its generated HTML `noindex`.
- [ ] Retain dev/build/preview command names, full TypeScript coverage including
      stories, and working Storybook. Preview real static files without SPA fallback.
- [ ] Align CI artifact paths and any engine setup. Preserve deployment triggers.
- [ ] Update current-behavior instructions for startup, routing, framework export
      exceptions, and replacement of the copied-Home fallback. Review all seven
      instruction files for consistency when doing so.

## Verification

Run applicable task-index checks and build Storybook because Vite integration
changes. Inspect all six generated bodies before executing JavaScript. Serve the
artifact as static files and test direct entry and refresh, both slash forms,
assets/data, one fragment link, and an unknown path. Check hydrated navigation,
theme restoration, and console errors. Ensure the 404 file is not a Home copy
and valid pages do not rely on it. Record the actual artifact layout and runtime
versions. SEO-004 performs the complete interaction matrix.

## Completion record

Not started.
