# Code Style and Quality

## General Style

- Use TypeScript-first patterns and keep types explicit at module boundaries, including component props.
- Avoid one-letter variable names. Avoid inline comments unless requested.
- Match the existing style in touched files. Let Oxfmt handle formatting and import ordering.

## Declaration Order

- Use an empty line to separate function definitions.
- Order functions top-down by use, with the main entry point followed by the functions it calls, recursively.
- For related non-union types in one file, put container or composite types before the types referenced by their fields, recursively. Object unions follow the rules below.

## Union Types

- For every enum-like closed union, declare a pluralized `SCREAMING_SNAKE_CASE` constant list of its values. Derive the singular union type immediately below it.
- Give a discriminated union a base interface named `<UnionName>Base`. Prefer `type` or `kind` for the discriminating field unless another name better expresses the domain.
- Declare member interfaces explicitly, normally one per union value, named `<UnionName><PascalCaseDiscriminantValue>`.
- A member may represent a meaningful sub-union when several values serve the same semantic role. Prefer explicit members otherwise.
- Put member-specific nested object types immediately below their member. Put nested types shared by multiple members after all members. This ordering does not apply to types in another file.
- Define the final object-union alias after its base, members, and nested types.

## Control Flow and Functions

- Use blocks for every switch case, branch, and loop, even when optional.
- Use block bodies for lambdas returning `void` or `Promise<void>`, and when a return value is intentionally ignored, such as event handlers.

## Type Usage

- Use `readonly` fields, arrays, and tuples when possible.
- Prefer `undefined` for optional application values. Keep `null` where required by React or browser APIs, including refs and render results, and handle it at those boundaries.
- Prefer interfaces when either interfaces or types are appropriate. If interface inheritance would be needed, prefer a type with an intersection.
- Use type-only imports for dependencies needed only as types.

## Files and Imports

- Use kebab-case for TypeScript and TSX filenames, and named exports for components and hooks. Framework route modules and configuration files use required default exports. Keep framework loader, metadata, and document exports at those boundaries.
- Keep relative imports extensionless, following this project's Vite convention.
- Use the existing `@/*`, `@components`, and `@components/*` aliases where appropriate. Follow nearby imports and existing barrel exports.
