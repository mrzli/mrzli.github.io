# SEO-002: Migrate routing and static output

Status: complete

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

- [x] Verify compatible framework package versions and build engine requirements.
      Add only required tooling, retaining Bun and the existing lockfile workflow.
- [x] Introduce the framework document, context provider, route modules, and
      hydration. Remove superseded browser startup code and preserve styles/assets.
- [x] Configure `ssr: false` plus explicit prerender paths for all six existing
      pages. Publish only the client artifact, preferably packaged under `dist`.
- [x] Produce directory-index HTML per the spec and retain required route data
      and assets. Serialize the initial year and integrate early theme initialization.
- [x] Normalize internal page URLs to canonical slash forms while preserving
      existing slashless links, fragments, queries, and history behavior.
- [x] Preserve swipe previews using presentational components and keep a single
      scroll-restoration owner. Do not remove gestures to simplify migration.
- [x] Generate a standalone `404.html` with a Home link and `noindex`. Replace
      wildcard Home redirection with not-found content on client navigation.
- [x] Keep Values out of navigation and mark its generated HTML `noindex`.
- [x] Retain dev/build/preview command names, full TypeScript coverage including
      stories, and working Storybook. Preview real static files without SPA fallback.
- [x] Align CI artifact paths and any engine setup. Preserve deployment triggers.
- [x] Update current-behavior instructions for startup, routing, framework export
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

Implemented and locally verified on 2026-09-23. SEO-001 was committed as
`aa6ca51` on `seo-prerendering`. SEO-002 remains uncommitted for review.

- Added React Router Framework Mode with `ssr: false`, six explicit prerender
  paths, and initial route discovery. Framework tooling and the Node build
  adapter are pinned to 8.3.1, matching the installed router. The default build
  entry also requires `isbot`. These replace manual startup without adding a
  deployed server. Router 8.3.1 supports the installed Vite 8 and requires Node
  22.22.0 or newer. CI now explicitly installs Node 24.
- The root document owns styles, metadata slots, hydration scripts, and scroll
  restoration. Its loader serializes the initial year. The application provider
  holds that value for hydration, and the existing hook updates to the browser
  year afterward. The static root loader does not revalidate during navigation.
- An early inline script restores the saved/system theme before hydration.
  Only the document root suppresses the expected theme-class mismatch.
- Route modules wrap existing page components. Canonical links end in `/`.
  Swipe previews render those components directly, without mounting route
  metadata. No professional content, shared export data, or downloads changed.
- Packaging copies only the client artifact to `dist` and removes the framework
  SPA fallback. Each page has `index.html` and `_.data`: root, `experience/`,
  `skills/`, `projects/`, `background/`, and `values/`. Assets, icons, and downloads
  are retained. Server build files stay outside the deployment artifact.
- A standalone `404.html` and a client wildcard page show not-found content and
  a Home link. Both are `noindex`, as is Values. Unknown URLs no longer redirect
  to Home. Without JavaScript, mobile navigation uses ordinary links and hides
  inactive buttons that would cover them.
- `dev`, `build`, and `preview` retain their command names. Build includes route
  type generation and full application/story TypeScript checking. Preview serves
  actual files, directory redirects, and 404 responses. Storybook has a separate
  Vite configuration. CI continues uploading `dist` with unchanged deployment
  triggers. Updated README and reviewed all seven instruction files.

Verification:

- `bun install --frozen-lockfile` passed without changes. Local versions were
  Node 26.9.0, Bun 1.4.2, React Router 8.3.1, and Vite 8.3.0.
- Production build, lint without warnings, scoped formatting, and
  `git diff --check` passed. Build was repeated after the no-JavaScript fix.
- Storybook built successfully. Existing Node deprecation, unmatched MDX glob,
  and large-chunk warnings remain.
- Full-repository formatting found pre-existing issues in `.oxfmtrc.json` and
  `public/data/linkedin.md`. Those unrelated files were not changed.
- Inspected all six generated page bodies before JavaScript execution. Checked
  their route data and referenced assets, directory redirects preserving queries,
  direct entries, and refreshes against the static preview. Unknown paths and
  missing assets returned 404. No SPA fallback or server bundle was published.
- In Chromium at 375×900 and 1280×900, checked hydrated navigation, Back,
  selected-project fragment scrolling, restored dark theme, menu/Escape, and a
  mobile swipe including its preview. Client unknown-route navigation showed
  not-found content with `noindex`; Values stayed out of navigation.
- Checked early theme restoration with application bundles blocked, theme
  cycling, and storage-denied behavior. No hydration or runtime errors occurred.
  Iconify icons populated after their existing network request.
- With JavaScript disabled, Experience content and all five mobile navigation
  links remained visible. Reviewed screenshots and corrected overlapping inactive
  controls. Browser scripts and screenshots are in ignored `tmp/seo-002/`.
- `bun run dev --port 5176` started successfully and served Experience with 200.
  Sandbox restrictions required approved local build/server/browser commands.

No deployment or public GitHub Pages response checks were performed. Full
interaction regression coverage remains SEO-004 and deployed verification remains
SEO-006. Titles, descriptions, canonicals, sitemap, and robots.txt remain SEO-003.
