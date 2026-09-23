# Rendering and SEO

The site uses React Router Framework Mode to render HTML during the build.
GitHub Pages serves the generated files. React hydrates that HTML in the browser,
attaching menus, theme controls, navigation, and swipe behavior to the content.
There is no deployed rendering server.

## Build and preview

Use Node.js 24, as configured in CI, and Bun for dependencies and scripts:

```bash
bun install
bun run dev
```

Development provides live updates. To inspect the files that will be deployed:

```bash
bun run build
bun run preview
```

Build generates route types, checks application and Storybook TypeScript, then
prerenders the configured routes and packages the static output into `dist/`.
Preview serves those files at `http://127.0.0.1:4173`. It redirects directory URLs
without a trailing slash and returns a real 404 for missing files. Rebuild after
source edits before checking preview. Use `bun run preview --port 5175` if needed.

[react-router.config.ts](../react-router.config.ts) sets `ssr: false` and explicit
prerender paths. Temporary types and framework output live under the ignored
`.react-router/` directory. [package-site.ts](../scripts/package-site.ts) copies
only the client output into `dist/`, removes the framework SPA fallback, and
generates sitemap.xml and robots.txt. Keep the generated route data and assets.

Storybook uses its own [Vite configuration](../.storybook/vite.config.ts), without
the React Router plugin. Its commands remain `bun run storybook` and
`bun run build-storybook`.

## Routes and metadata

| Purpose                                              | Source                                                |
| ---------------------------------------------------- | ----------------------------------------------------- |
| Document head, styles, hydration, scroll restoration | [src/root.tsx](../src/root.tsx)                       |
| Canonical paths and indexable paths                  | [page-paths.ts](../src/routing/page-paths.ts)         |
| Route declarations                                   | [routes.ts](../src/routing/routes.ts)                 |
| Route modules                                        | [src/routing/pages/](../src/routing/pages/)           |
| Titles, descriptions, social tags, canonicals        | [page-metadata.ts](../src/routing/page-metadata.ts)   |
| Shared layout and navigation                         | [app.tsx](../src/app/app.tsx)                         |
| Presentational swipe previews                        | [swipe-preview.tsx](../src/routing/swipe-preview.tsx) |
| Production origin and professional profile           | [profile.ts](../src/content/profile.ts)               |

To add a page:

1. Add its named component under `src/app/pages/` and its trailing-slash path to
   `PAGE_PATHS`. `STATIC_PAGE_PATHS` automatically includes it for prerendering.
2. Add a thin route module under `src/routing/pages/`, following an existing one.
   Its default export is the page component. Add the route to
   `src/routing/routes.ts`, which is exposed by `src/routes.ts`.
3. For an indexable page, add its title and description to `PAGE_METADATA` and
   return `getPageMetadata(PAGE_PATHS.yourPage)` from the route's `meta()` export.
   `INDEXABLE_PAGE_PATHS` includes every page except Values. Exclude any additional
   non-indexable page there and give its route an explicit `noindex` meta export.
4. If the page belongs in navigation, add it to `NAV_ITEMS` and the swipe-preview
   switch. A route can exist without a navigation entry.
5. Build and check direct entry, refresh, navigation, metadata, and any new swipe
   previews against the static preview.

React Router calls the active route's `meta()` export. The root's `<Meta />`
renders those tags in the head during the build and on browser navigation.
Keep metadata outside page components so swipe previews do not change the active
page's title or indexing policy.

Edit metadata in `page-metadata.ts`. Titles and descriptions use existing content
and profile facts. Canonical and Open Graph URLs use `PROFILE.website`, including
in local builds. Query strings and fragments do not become part of the canonical.
The site currently supplies summary-card metadata without a social image.

## Static hosting contract

| URL            | HTML in dist            | Indexing          |
| -------------- | ----------------------- | ----------------- |
| `/`            | `index.html`            | Indexable         |
| `/experience/` | `experience/index.html` | Indexable         |
| `/skills/`     | `skills/index.html`     | Indexable         |
| `/projects/`   | `projects/index.html`   | Indexable         |
| `/background/` | `background/index.html` | Indexable         |
| `/values/`     | `values/index.html`     | noindex           |
| Unknown path   | `404.html`              | noindex, HTTP 404 |

Each generated page directory also contains `_.data` for framework data. `dist/`
includes assets, favicons, downloads under `data/`, sitemap.xml, and robots.txt.
No server bundle is included in the deployment artifact.

Internal page links use trailing slashes, including before fragments:
`/experience/#contracting`. Existing slashless links rely on the host's directory
redirect, with query strings and fragments preserved. Public behavior must be
checked after deployment, separately from the local preview.

Values is a stub, excluded from navigation and the five-page sitemap. robots.txt
allows crawling, including Values, so crawlers can read its `noindex` directive.
The sitemap is generated from indexable paths, with no invented modification dates.

[public/404.html](../public/404.html) is a standalone error page with a Home link.
Unknown client navigation shows the corresponding React not-found page. Neither
canonicalizes or redirects to Home. Do not replace the 404 with a copy of Home.

## Hydration and generated documents

The root loader records the build year in serialized route data. `AppProvider`
supplies it through context so the initial browser render matches the HTML.
`useCurrentYear()` then uses the browser year. Static HTML retains the build-year
value until the next build and deployment.

`useTheme()` manages saved preferences and system-theme changes. An early document
script applies the theme before hydration. The document root alone suppresses
the expected theme-class difference. Keep other initial markup deterministic.
Browser API access belongs in browser initialization, effects, or event handlers.
Components consume the focused hooks without implementing hydration checks.

Portfolio content remains in shared TypeScript data and React components. See
[Content](./content.md) for editing locations. CV and LinkedIn generation retain
their existing commands and do not run as part of the site build:

```bash
bun run build:cv
bun run build:linkedin
```

Generated documents use canonical portfolio page links, including the slash
before `#`. Preserve static file paths such as `.pdf` and external/contact URLs.
Edit the export source and regenerate rather than editing generated files.
See [CV generation](./cv-generation.md) and
[LinkedIn generation](./linkedin-generation.md) for publication and verification.

## Verification and deployment

Inspect `dist/experience/index.html` directly or use View Source in the static
preview. Page content and head tags must already exist before JavaScript runs.
Disable JavaScript to check readable content, navigation, and downloads. With
JavaScript enabled, check hydration warnings, themes, client navigation, gestures,
project fragments, and history restoration at narrow and wide widths.

Run `bun run fmt:check` and `bun run lint` for source checks, and `bun run build`
for type checking and the production artifact. Use `bun run build-storybook`
when its configuration or shared component behavior changes.

[GitHub Actions](../.github/workflows/main.yml) builds and uploads `dist/` on
pushes to `master` or manual dispatch. After an authorized deployment, record
the deployed revision and verify all six public page URLs, slashless redirects,
unknown-path 404 status/content, metadata, route data/assets, both CV downloads,
sitemap.xml, robots.txt, direct fragments, and browser interactions.

Local verification does not establish deployed responses. The migration's local
checks are recorded in [SEO-004](../.scratch/seo-prerendering/tasks/SEO-004-verification.md).
Production verification is recorded in
[SEO-006](../.scratch/seo-prerendering/tasks/SEO-006-production.md), including the
deployed revision and verification date. Search Console inspection and
sitemap submission are optional account follow-ups. Indexing and rankings are
not guaranteed by the build or metadata.
