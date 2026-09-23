# SEO and static prerendering

Status: complete, locally and production-verified

Created: 2026-09-22

Implementation tasks: [Ordered task index](./tasks.md)

## Purpose

Deliver complete page content and metadata in the initial HTML while retaining
React, JavaScript interactions, the existing design, and GitHub Pages hosting.
Generate the HTML during the build, then hydrate it in the browser. Content
updates continue to use the existing edit, build, and deployment workflow.

This follows the planning structure in `.scratch/site-readability-navigation/`
and Archon's `.scratch/archon-cli-simplification/`: a spec, an ordered task index,
and individual tasks with acceptance checklists and verification records.
Creating these documents does not start implementation or authorize deployment.

## Initial findings (before migration)

- `index.html` contains an empty root and the title `Portfolio`.
  `src/setup/run.tsx` uses `createRoot`, and `src/routing/router.tsx` creates a
  browser router. Content is rendered in the browser.
- Five substantive pages exist: Home, Experience, Skills, Projects, and
  Background. Values is a stub with no navigation entry. Unknown paths redirect
  to Home in the browser.
- `bun run build` checks TypeScript, runs Vite, and copies `dist/index.html` to
  `dist/404.html`. The workflow uploads `dist` to GitHub Pages. This fallback
  displays client routes but does not make their initial HTTP response successful.
- The source has no page-specific document metadata, sitemap, or robots.txt.
- The theme toggle reads `localStorage` in a state initializer. Home calculates
  experience from the browser's current year. Both need deterministic initial
  rendering when HTML is generated earlier on another machine.
- `App` renders adjacent pages with `useRoutes(PAGE_ROUTES, path)` during swipe
  previews. Route migration must preserve previews without letting them own
  document metadata or duplicate framework routing.
- Shared content is already independent of React and browser APIs. CV and
  LinkedIn exports consume it separately and must remain usable.
- Storybook uses the React Vite integration. Its build must remain independent
  of the application framework's route generation.

These are source observations. No live indexing, HTTP, or performance audit was
performed for this specification.

## Architecture choice

Use React Router Framework Mode with `ssr: false` and explicit prerendered paths.
Keep React, TypeScript, Vite, Tailwind, Bun, and the existing page components.
There is no deployed rendering server and no request-time backend.

React Router supports static deployment with prerendering. Setting `ssr: false`
alone only produces SPA behavior, so the route list is required.
See [React Router prerendering](https://reactrouter.com/how-to/pre-rendering).

Alternatives considered:

| Option                      | Benefit                                                                | Tradeoff                                                                  |
| --------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Framework Mode prerendering | Supported rendering and hydration within the existing router ecosystem | Changes route entry points and build tooling                              |
| Custom prerender script     | Can retain more startup code                                           | The project owns HTML generation, hydration, and routing integration      |
| Request-time SSR            | Supports request-specific content                                      | Requires new hosting and an operating server with no current content need |

Add compatible React Router build tooling, primarily `@react-router/dev`, and
only the build-time runtime adapter required by the selected version. Match
related package versions and verify engine requirements against the actual
lockfile and CI environment. Avoid an unrelated dependency upgrade. No SEO
library, replacement UI framework, or general content framework is needed.

## Design

### 1. Framework integration

Introduce the framework root document, route configuration, and thin route
modules around the existing pages. Keep reusable components as named exports.
Allow default exports only where framework entry contracts require them.
Keep application context wiring under `src/setup/` and mount its provider from
the framework root. Do not nest the old `RouterProvider` inside the new router.

Keep route declarations and route metadata under `src/routing/`, using thin
framework entry files where necessary. Preserve `src/app/app.tsx` as the shared
layout. Move document markup, global stylesheet loading, favicons, and manifest
links into the framework document. Remove superseded startup code only when
its replacement works.

Use a small explicit route definition shared where practical by prerendering,
metadata, and sitemap generation. Avoid a general route registry. Swipe previews
render presentational page components without framework route loaders or head
metadata. Keep one framework scroll-restoration owner.

### 2. Route and hosting contract

The production origin remains `https://mrzli.github.io/`, already recorded in
`PROFILE.website`. The deployment base remains `/`.

| Route          | Generated HTML          | Indexing                                       |
| -------------- | ----------------------- | ---------------------------------------------- |
| `/`            | `index.html`            | Indexable                                      |
| `/experience/` | `experience/index.html` | Indexable                                      |
| `/skills/`     | `skills/index.html`     | Indexable                                      |
| `/projects/`   | `projects/index.html`   | Indexable                                      |
| `/background/` | `background/index.html` | Indexable                                      |
| `/values/`     | `values/index.html`     | `noindex`, omitted from sitemap and navigation |
| Unknown path   | `404.html`              | `noindex`, HTTP 404 on direct requests         |

Use trailing slashes for canonical page URLs and generated internal page links
to match directory-index hosting. Existing slashless URLs and fragment links
must continue to reach the same content, allowing a host redirect to the slash
form. Preserve fragment IDs, query strings, and browser history behavior.
Normalize portfolio page links in current generated documents, especially the
LinkedIn export, through SEO-003A. Preserve fragments, queries, external links,
and static download URLs. Regenerate affected current artifacts from their
sources. Do not rewrite historical exports.

Publish only the static client artifact, including any framework data files
needed for client navigation. Prefer retaining `dist` as the published artifact
directory through framework configuration or a small explicit packaging step.
Keep the workflow's artifact path aligned with the actual output. Never publish
a server bundle. Preserve automatic deployment on `master` and manual dispatch.

Generate a useful standalone `404.html` with a Home link and `noindex`. Show
equivalent not-found content for unmatched client navigation. A standalone static
404 need not hydrate. Do not copy prerendered Home into the 404 file or redirect
unknown URLs to Home. GitHub Pages supports a custom
[404 file](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site).

This proposal replaces the current instruction to copy `index.html` to
`404.html`. When the migration is authorized and implemented, update that rule
along with the startup, routing, and build instructions. Leave current-behavior
instructions unchanged during planning.

### 3. Hydration and existing functionality

The generated body and the browser's first React render must agree. Browser APIs
belong in browser initialization, effects, or event handlers. Do not hide all
content until mount or use broad hydration-warning suppression.

Preserve light, dark, and system themes, the existing storage key, and system
preference changes. Apply the resolved theme early enough to avoid a visible
wrong-theme flash. Keep initial React markup deterministic and do not overwrite
a stored preference before reading it. Handle unavailable storage gracefully.
If early initialization changes the root class, keep any hydration exception
limited to that known root attribute.

Supply the initial year once through the application context. Home consumes
`useCurrentYear()` without receiving a year prop or checking hydration.
ThemeToggle consumes `useTheme()` for the theme and cycle action. Keep storage
failures in the small preference-storage adapter and browser synchronization
inside the hooks. Components do not import the internal hydration hook.

Serialize a build-time year for the initial experience count. After hydration,
the browser may update it to its current year, preserving the existing behavior
without a New Year or timezone hydration mismatch. Static HTML reflects the
build date until the next deployment. Keep the underlying start years unchanged.

Preserve client navigation, active links, mobile menu and focus behavior,
hide-on-scroll navigation, swipe previews and cancellation, reduced-motion
behavior, fragment scrolling, back/forward restoration, external links, contact
links, and both CV downloads. Keep accessible labels even if an icon is populated
only after hydration.

With JavaScript disabled, substantive content, headings, ordinary links, and
downloads must remain available. JavaScript-dependent controls and gestures are
not required to work without JavaScript. Ensure narrow-screen visitors still
have a usable route navigation path without depending on the menu toggle.

### 4. Metadata and discovery

Every indexable page must have exactly one useful title, description, and
absolute canonical link in its generated HTML. Use
`Goran Mržljak | Senior software developer` for Home and
`<Page> | Goran Mržljak` for the other pages. Write concise descriptions from
existing content without new professional claims or keyword stuffing.

Add Open Graph title, description, URL, and website type, plus basic social-card
metadata. A new preview image is outside scope. Only include image metadata if
an existing suitable asset is chosen and its absolute URL works publicly.
Preserve `lang="en"`, viewport configuration, and existing icons.

Metadata must update on committed client navigation, including browser history.
Rendering or cancelling a swipe preview must not change the current page's title,
canonical, or indexing directives. Values and not-found content must not leak
`noindex` into substantive pages.

Generate `sitemap.xml` containing exactly the five indexable canonical page URLs.
Do not include fragments, query variants, Values, error pages, or downloadable
exports. Omit `lastmod` unless backed by a meaningful content modification date.
Generate robots.txt allowing public page crawling and referencing the absolute
sitemap URL. Do not disallow Values, since crawlers need to see its `noindex`.

Google can render JavaScript but recommends prerendering and meaningful response
codes. Metadata and rendering improve crawlability, not guaranteed rankings.
See [Google's JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

### 5. Development and maintenance

Keep the public command names `bun run dev`, `bun run build`, and
`bun run preview`. Adapt their implementations to framework development,
type generation, TypeScript checking, static generation, and static preview.
Production builds must still type-check application code and stories.
The preview must serve the generated files without silently resolving every
unknown URL to Home.

Keep Storybook's Vite configuration working separately where the framework
plugin would interfere. Ignore generated route types and build artifacts.
Shared content and export commands must not require a router or browser runtime.

Document where to add routes and metadata, how to inspect generated HTML, the
static hosting layout, and post-deployment verification. Keep the README concise
and place detailed maintenance guidance in a dedicated document.

## Scope limits

- No redesign, content rewrite, Values content, new project pages, or changed
  professional claims.
- No hosting migration, backend, CMS, React Server Components, analytics,
  scheduled rebuilds, or Search Console account setup.
- Export changes are limited to canonical portfolio page links in SEO-003A,
  resulting character counts, and regeneration of affected current documents.
  No professional content or export layout changes, new social image, or
  structured-data expansion.
- No promise of ranking, indexing speed, social preview appearance, or a specific
  performance score. Investigate regressions without adding unrelated optimization.
- No commits, push, or deployment as part of writing or implementing this plan
  unless separately requested.

## Execution and validation

Implement the ordered tasks after authorization. They are reviewable work units
and can run sequentially within one session if the user requests the complete
migration. The older specs' mandatory manual commit stops do not apply here.
Record actual checks and limitations in each task before updating its status.

Verify generated HTML directly, then serve the static artifact without SPA
fallback and inspect it in a browser. Check successful content responses,
unknown-route 404 responses, framework data/assets, no-JavaScript content,
hydration, interactions, themes, and narrow/wide layouts. Development server
behavior alone does not establish the GitHub Pages contract.

After a separately authorized deployment, check actual public responses and
redirects, metadata, sitemap, and assets. URL Inspection and sitemap submission
in Search Console are a user/account follow-up. Do not mark them done based on
local checks or wait for search rankings to declare implementation complete.

## Completion criteria

Tasks SEO-001 through SEO-005, including SEO-003A, establish a locally verified implementation with
all required acceptance checks passed or explicitly unresolved. SEO-006 records
production verification only after deployment. Use `locally verified, deployment
verification pending` when local work is finished but production is unverified.
Mark the complete spec verified only after production checks pass. Search engine
indexing remains an external outcome, not a completion prerequisite.

## Planning record

Drafted from the source and migration discussion before implementation. Planning
alone made no application, dependency, deployment, or project-instruction changes.

## Implementation progress

Planning was committed as `a7fe5aa`, SEO-001 as `aa6ca51`, SEO-002 as `9511188`,
and SEO-003 as `f7fb665`. The export-link plan was committed as `e333a61`,
SEO-003A as `456f68e`, SEO-004 records as `b5d4ad7`, and SEO-005 as `3affb44`.

The user deployed `3affb44`, and SEO-006 verified that revision on GitHub Pages
on 2026-09-23. Required implementation, local checks, and production checks have
passed. The production-verification record remains uncommitted for review.
See [SEO-006](./tasks/SEO-006-production.md) for evidence and limitations, and
[Rendering and SEO](../../docs/rendering-and-seo.md) for maintenance. Search
Console actions, indexing, and rankings remain separate external follow-ups.
