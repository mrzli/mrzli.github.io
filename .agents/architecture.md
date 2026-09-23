# Architecture

## Application Structure

- `src/root.tsx` owns the framework document, global styles, hydration scripts, and scroll restoration. React Router supplies the browser entry. `src/setup/app-provider.tsx` creates the application context.
- Keep startup and dependency wiring under `src/setup/`. The dependency container is currently empty. Add services only when required by a feature.
- Serialize the initial year from the root build-time loader and supply it through `AppContext` for matching prerendered and initial browser output. Keep browser values and hydration handling inside focused hooks under `src/hooks/`, such as `useCurrentYear` and `useTheme`. Components consume these hooks without hydration checks.
- Define routes in `src/routing/routes.ts`, exposed through `src/routes.ts`, and prerender paths in `src/routing/page-paths.ts`. Route modules wrap named page components. `src/app/app.tsx` owns the shared layout, navigation items, and route outlet. Swipe previews render page components without mounting route modules.
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
- Keep page metadata in `src/routing/page-metadata.ts` and expose it through route-module `meta` exports, outside page bodies and swipe previews. Use `PROFILE.website` for the production origin and `INDEXABLE_PAGE_PATHS` for indexable routes. The packaging script generates sitemap.xml and robots.txt from those shared values.
- Keep the router basename aligned with Vite's base URL. Internal page URLs use trailing slashes. Preserve fragments and queries through navigation and static directory redirects.
- Use `ssr: false` with explicit prerender paths in `react-router.config.ts`. The build packages only `.react-router/build/client/` into `dist/`, excluding the generated SPA fallback. Serve each page from its directory-index HTML and retain its route data and assets. Keep the standalone `public/404.html` and client not-found route marked `noindex`.
- Use `bun run preview` to serve the built files with real 404 responses and no SPA fallback. Storybook uses `.storybook/vite.config.ts` without the React Router plugin.
- `.github/workflows/main.yml` builds and deploys to GitHub Pages on pushes to `master` or manual dispatch.
