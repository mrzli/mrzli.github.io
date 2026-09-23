# Frontend

## React

- Prefer functional components and hooks, with typed props and clear component contracts.
- Use composition to keep components focused. Extract reusable pieces when there is a concrete need.
- Follow the Rules of Hooks. Clean up event listeners and other subscriptions in effects.
- Memoize only when there is a clear rendering or performance reason.
- Use stable keys for rendered collections.

## Styling and Interaction

- Prefer Tailwind utilities. Keep custom CSS in `src/index.css` for global setup or cases that utilities do not cover well.
- Reuse existing `Card`, `Typography`, layout, tag, list, and link components before introducing new variants or primitives.
- Use Class Variance Authority for component variants and the existing `cn` helper for merging classes.
- Preserve responsive layouts and check navigation and content at narrow and wide viewport sizes.
- Support light, dark, and system themes. The theme toggle stores the preference in local storage and applies the `dark` class to the document root. The document initializes this class before paint. Keep hydration-warning suppression limited to that root attribute difference.
- Use semantic HTML, appropriate heading levels, accessible names for icon-only controls, descriptive image alt text, and keyboard-accessible interactions with visible focus.
- Choose `Typography`'s `as` prop when needed to keep HTML nesting valid, especially when wrapping block content.

## Portfolio Content

- Keep professional claims, dates, project descriptions, and contact details grounded in user-provided information or existing content. Do not invent qualifications or experience.
- Keep related page content and static assets consistent when the task affects them.
- A route's existence does not imply it belongs in navigation. The Values route is currently a stub, its navigation entry is disabled, and its prerendered HTML is marked `noindex`.
