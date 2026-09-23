# Architecture

## Application Structure

- `src/main.tsx` imports global styles and invokes `src/setup/run.tsx` to mount React, the application context, and the router.
- Keep startup and dependency wiring under `src/setup/`. The dependency container is currently empty. Add services only when required by a feature.
- Supply the initial year once through `AppContext` at startup. Keep browser values and hydration handling inside focused hooks under `src/hooks/`, such as `useCurrentYear` and `useTheme`. Components consume these hooks without hydration checks.
- Define routes in `src/routing/router.tsx`. `src/app/app.tsx` owns the shared layout, navigation items, and route outlet.
- Keep pages under `src/app/pages/<page>/` and page-specific components under that page's `components/`. Keep page-specific navigation and presentation copy in the page or its `data.ts`.
- Keep reusable professional facts, descriptions, and content types under `src/content/`. These modules must be usable by Bun scripts without React, browser globals, or component imports. Pages, stories, and exports consume this shared source. See `docs/content.md` for editing locations.
- Keep CV and LinkedIn content, selections, overrides, and export-specific types under `src/content/exports/`. Reference shared experience records by stable `contentKey` values. Export modules may import shared content, but shared website content must not import export modules. Keep rendering and file generation under `scripts/`.
- Keep reusable UI under `src/app/components/`, shared application types under `src/app/types/`, and shared utilities under `src/app/util/`.
- Keep imported assets under `src/assets/` and directly served files, including the downloadable CV, under `public/`.
- Keep component examples under `stories/` and Storybook configuration under `.storybook/`.

## State and Dependencies

- Keep state local and lift it only when needed. Introduce global state only for shared cross-route concerns that require it.
- Use the existing application context when application-wide dependencies are needed.
- Minimize dependencies. Favor lightweight, maintained libraries and existing project or browser APIs when sufficient.
- When proposing a dependency, include a short justification and tradeoff.
- If environment configuration is needed, use `import.meta.env`. Only expose client-safe variables through the `VITE_` prefix. Frontend bundles must not contain secrets.

## Routing and Deployment

- Use React Router links for internal navigation and anchors for external URLs, contact links, and static downloads.
- Keep the router basename aligned with Vite's base URL.
- The build copies `dist/index.html` to `dist/404.html` to support direct navigation on GitHub Pages. Preserve this behavior when changing build or routing configuration.
- `.github/workflows/main.yml` builds and deploys to GitHub Pages on pushes to `master` or manual dispatch.
