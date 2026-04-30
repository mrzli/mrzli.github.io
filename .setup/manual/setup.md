# Steps

## Clean Up Files

- Remove any invalid `.git` directory already present in repo root.

## Setup React + Vite Project

- Create a dir called `tmp/` inside repo root.
- Navigate into `tmp/`.
- Run script to create the project files:
  ```bash
  bun create vite trading-web --template react-ts --no-interactive
  ```
- Navigate back to repo root.
- Copy newly created project files into repo root using:
  ```bash
  cp -a tmp/trading-web/. .
  ```
- Remove the `tmp/` directory with:
  ```bash
  rm -rf tmp
  ```

### Finalize Step

- Commit with "initial project setup with React + Vite".

## Copy Setup Files

- Copy files from `.setup/files/` into project root using:
  ```bash
  cp -a .setup/files/. .
  ```

### Add Script for Backporting Setup Files

- Add the following script to `package.json`:
  ```json
  "scripts": {
    // other scripts...
    "backport": "./.setup/backport.sh . ../../templates/template-react"
  }
  ```
- Adjust target path if necessary, to point to `template-react` repo location.

### Finalize Step

- Commit with "copy setup files".

## Install Dependencies

- Change `minimumReleasaseAge` in `bunfig.toml` if necessary.
- Install dependencies using `bun install`.

### Finalize Step

- Commit with "install dependencies".

## Setup Linting and Formatting

- Install missing dependencies:
  ```bash
  bun add -d eslint-plugin-simple-import-sort prettier
  ```

### Update Lint Config File

- This refers to `eslint.config.js`.
- You need to setup `eslint-plugin-simple-import-sort` to sort imports and exports.
- Add required import and add (or update) `plugins` and `rules` in the config file:
  ```js
  // ...
  import simpleImportSort from 'eslint-plugin-simple-import-sort';
  // ...

  // ...
    {
      // rest of the main config
       plugins: {
         // other plugins...
         'simple-import-sort': simpleImportSort,
       },
       rules: {
         // other rules...
         'simple-import-sort/imports': 'error',
         'simple-import-sort/exports': 'error',
       },
    }
  // ...
  ```

### Update `package.json`

- Remove any existing `lint` and `format` scripts.
- Add the following scripts:
  ```json
  "scripts": {
    // other scripts...
    "pretty": "prettier --write .",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "bun run pretty && bun run lint:fix",
    "backport": "..."
  }
  ```

### Finalize Step

- Commit with "setup linting and formatting".

## Format Project Files

- Do the initial formatting of project files with `bun run format`.

### Finalize Step

- Commit with "format project files".

## Clean Up Basic App Code

### CSS Updates

- Keep `index.css` file, but delete all its content.
- Remove all other CSS files and their imports.

### Image Updates

- Make sure there is exactly one image in `src/assets/` and one image in `public/`.
- Add, remove, replace images as necessary.
- For example, have `react.svg` in `src/assets/` and `vite.svg` in `public/`.
- Update imports and uses accordingly.
- Images in `src/assets/` should be imported as modules, usually using a relative path.
- Images in `public/` are imported by starting the path with `/`, where the subsequent path is relative to `public/`.
  - For example, if you have `vite.svg` directly under `public/`, you can import it with `/vite.svg`.

### Update `App.tsx`

- Create `src/app/` directory if it does not already exist.
- Rename to `app.tsx` (uncapitalize) and move to `src/app/` directory.
- Update all imports inside `app.tsx` to reflect the new location.
- Update all imports that referenced previous `App.tsx` file to reference the new location and name.
- Update component to be exported explicitly as a named export, at the definition point.
- Remove any remaining default exports.
- Update imports that reference the component to import the named export.
- Change the component definition to a lambda. Variable type shoule be `FC`, imported from `react`.
- Simplify the component by following the subsequent instructions.
- Remove all code related to state, effects, event handlers, or any other logic. Convert it to a simple presentational component.
- Make root element a `div` with no class or styles.
- Have some text, maybe a `h1` and a `p` element.
- Leave two image elements referencing one image from `src/assets/` and one from `public/`.
- Add some basic inline styles typed as `CSSProperties`. These need to imported a as `import type { CSSProperties } from 'react';`.
- In the end it should look something like this:
  ```tsx
  import type { CSSProperties, FC } from 'react';

  import viteLogo from '/vite.svg';

  import reactLogo from '../assets/react.svg';

  const imageContainerStyle: CSSProperties = {
    height: '4rem',
  };

  const imageStyle: CSSProperties = {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
  };

  export const App: FC = () => {
    return (
      <div>
        <h1>template-react</h1>
        <p>App is running.</p>
        <div style={imageContainerStyle}>
          <img alt='Vite logo' src={viteLogo} style={imageStyle} />
          <img alt='React logo' src={reactLogo} style={imageStyle} />
        </div>
      </div>
    );
  };

### Finalize Step

- Format using `bun run format`.
- Commit with "cleanup basic app code".

## Create Basic App Setup Structure

- Create `src/setup/` directory if it does not already exist.

### Create `run.tsx` File

- Create `run.tsx` file under `src/setup/` directory.
- Move the logic from `src/main.tsx` to `src/setup/run.tsx`.
- Create an async function called `run` that contains the logic.
- Make it look something like this:
  ```tsx
  import { StrictMode } from 'react';
  import { createRoot } from 'react-dom/client';

  import { App } from '../app/app';

  export const run = async () => {
    const root = document.getElementById('root');

    if (!root) {
      throw new Error('Root element not found');
    }

    const content = (
      <StrictMode>
        <App />
      </StrictMode>
    );

    createRoot(root).render(content);
  };
  ```

### Create `index.ts` File

- Create `index.ts` file under `src/setup/` directory.
- Export everything from `run.tsx` in that file.

### Update `main.tsx`

- It should retain import for `index.css`.
- Other than that, it should only import and execute the `run` function.
- It should look like this:
  ```tsx
  import './index.css';

  import { run } from './setup';

  run();
  ```

### Finalize Step

- Format using `bun run format`.
- Commit with "create basic app setup structure".

## Create Pages Structure for Examples

- This section will provide the structure for files and comoponents showcasing the features described in subsequent steps.
- Create `src/app/examples/` directory if it does not already exist.

### Stub Page Structure

- Nothing to do here, this is just for reference for future steps.
- This is the structure of any new page where no content was defined:
- Component name should be in `PascalCase` of the file name.
- Content should be a single `div`, with the `kebab-case` of the file name as its text content.
- Example for a file named `home-page.tsx`:
  ```tsx
  import type { FC } from 'react';

  export const HomePage: FC = () => {
    return <div>home-page</div>;
  };
  ```

### Create `home-page.tsx` File in `app` Directory

- This will be a starting page for the app.
- It will not be accessible until routing is set up.
- Create `home-page.tsx` file under `src/app/` directory.
- It should be a stub page.

### Create `home-page.tsx` File in `examples` Directory

- This will be starting page for the examples section.
- This page is separate from the `home-page.tsx` in `app` directory.
- Create `home-page.tsx` file under `src/app/examples/` directory.
- Simply copy the content of `App` component into `home-page.tsx` file.
- Rename the component to `HomePage`.

### Create `examples-page.tsx` File in `examples` Directory

- This will be the root page for the examples section.
- Create `examples-page.tsx` file under `src/app/examples/` directory.
- It should be same as a stub page, but instead of the text inside `div`, it should contain the `<HomePage />`.

### Update `App` Component

- The `App` component should simply render `div` and `<ExamplesPage />` inside it, for now.
- Remove all unnecessary code outside of that, including imports.

### Finalize Step

- Format using `bun run format`.
- Commit with "create examples pages structure".

## Basic Routing

- Add react-router dependency with:
  ```bash
  bun add react-router
  ```

### Create About Page

- Create `about-page.tsx` file under `src/app/examples/` directory.
- It should just be a stub page.
- It is needed to be able to showcase routing.

### Create Router File

- Create `src/routing/` directory if it does not already exist.
- Create `router.tsx` file under that directory.
- Use 'data mode' routing.
- Initially, create an empty router file:
  ```tsx
  import { createBrowserRouter } from 'react-router';

  export const router = createBrowserRouter([]);
  ```
- Add the hierarchy of components to the router configuration.
- Use `index` routes for default subpages.
- This is the structure:
  ```tsx
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'examples',
        element: <ExamplesPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: 'about',
            element: <AboutPage />,
          },
        ],
      },
    ]
  }
  ```

### Use Router in the Application

- Update the `run.tsx` file.
- Add imports:
  ```tsx
  import { RouterProvider } from 'react-router';
  import { router } from '../routing/router';
  ```
- Replace `<App />` with:
  ```tsx
  <RouterProvider router={router} />
  ```
- Remove import for `App` component, since it is now rendered through the router.

### Update `ExamplesPage` Component

- Add imports:
  ```tsx
  import type { CSSProperties, FC } from 'react';
  import { Link, Outlet } from 'react-router';
  ```
- Add styles, as module variables outside of the component:
  ```tsx
  const navStyle: CSSProperties = {
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
  };

  const linkStyle: CSSProperties = {
    textDecoration: 'none',
    color: '#2563eb',
  };
  ```
- Add content inside `div`, links, and `<Outlet />` for rendering child routes:
  ```tsx
  <nav style={navStyle}>
    <Link style={linkStyle} to=''>
      Home
    </Link>
    <Link style={linkStyle} to='about'>
      About
    </Link>
  </nav>
  <Outlet />
  ```

### Update `App` Component

- Update it in same manner as `ExamplesPage`, but use links to root level routes to `HomePage` and `ExamplesPage`.

### Finalize Step

- Format using `bun run format`.
- Commit with "setup basic routing".

## React Router Loader Example

- Create `src/app/examples/loader/` directory.
- Create `loader-page.tsx` under that directory.
- Add stub content.
- Update `router.tsx`, add `/examples/loader` route.
- Update `ExamplesPage` to have a link to `loader` page.

### Create Loader

- Add `src/app/examples/loader/loader.ts` file.
- Add lambda function called `loader` (async and exported).
- Returns a promise which resolves in `200ms` with some string.
- Example code:
  ```ts
  export const loader = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved data');
      }, 200);
    });
  };
  ```
- Add the loader to the `/examples/loader` route in `router.tsx`:
  ```tsx
  {
    path: 'loader',
    element: <LoaderPage />,
    loader: loader,
  }
  ```
### Use Loader

- Update `LoaderPage` to use loader data.
- Add line: `const data = useLoaderData<typeof loader>();`
- Display the data in a page, in a `div` for example.
- Example:
  ```tsx
  import type { FC } from 'react';
  import { useLoaderData } from 'react-router';

  import { loader } from './loader';

  export const LoaderPage: FC = () => {
    const data = useLoaderData<typeof loader>();

    return (
      <div>
        <div>loader-page</div>
        <div>{data}</div>
      </div>
    );
  };
  ```

### Finalize Step

- Format using `bun run format`.
- Commit with "setup react-router loader example".

## App Context

- Create `src/setup/context/` directory.
- You need for things for the context:
  - Type of the entire context value.
  - The context itself.
  - The context provider component.
  - A custom hook for consuming the context.

### Create Context Value Type

- Create `app-context-value.ts` file (under the above directory).
- It should contain the type for the context value.
- For now, it should just have one field `appName` of type string.
- Example:
  ```ts
  export interface AppContextValue {
    readonly appName: string;
  }
  ```
### Create Context

- Create `app-context.ts` file.
  ```tsx
  export const AppContext = createContext<AppContextValue | undefined>(undefined);
  ```

### Create Context Provider

- Create `app-context-provider.tsx` file.
- This is a React component.
- Code:
  ```tsx
  export interface AppContextProviderProps {
    readonly value: AppContextValue;
    readonly children: ReactNode;
  }

  export const AppContextProvider: FC<AppContextProviderProps> = ({
    value,
    children,
  }) => {
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
  };
  ```

### Create App Context Hook

- Create `use-app-context.ts` file.
  ```tsx
  export const useAppContext = (): AppContextValue => {
    const context = useContext(AppContext);
    if (context === undefined) {
      throw new Error('useAppContext must be used within an AppContextProvider');
    }
    return context;
  };
  ```

### Other Context Files

- Add an index file which exports everything from the context directory.

### Setup Context in the App

- Update `run.tsx` to wrap the app in the context provider.
- Add an example file for context, with the necessary route and links.

### Finalize Step

- Format using `bun run format`.
- Commit with "setup app context".

## TODO

- Setup app dependencies:
  - Create `app-dependencies.ts` file under `src/setup/`.
  - For now, just have a stub interface for dependencies, with no actual dependencies in it.
    - Code:
      ```ts
      export interface AppDependencies {
        // Add your app dependencies here
      }
      ```
  - Export the dependencies interface in the `index.ts` file.
  - Add `dependencies` field to context value, remember to initialize it.
  - Run `bun run format` to format the updated files.
  - Commit the changes with a message like "setup app dependencies in context".
- Setup env:
  - Add `zod` dependency with `bun add zod` if not already added.
  - Create `env/` directory under `src/setup/`.
  - Have two example env variables in an env file:
    - `VITE_EXAMPLE_VAR=example`
    - `VITE_BACKEND_BASE_URL=http://localhost:3000`
  - Create files for handling env:
    - `app-env-raw-base.ts`:
      ```ts
      export type AppEnvMode = 'development' | 'production' | string;

      export interface AppEnvRawBase {
        readonly MODE: AppEnvMode;
        readonly BASE_URL: string;
        readonly PROD: boolean;
        readonly DEV: boolean;
        readonly SSR: boolean;
      }
      ```
    - `app-env-raw.ts`:
      ```ts
      export interface AppEnvRawExplicit {
        readonly VITE_EXAMPLE_VAR: string;
        readonly VITE_BACKEND_BASE_URL: string;
      }

      export type AppEnvRaw = AppEnvRawExplicit & AppEnvRawBase;

      export const APP_ENV_RAW: AppEnvRaw = {
        MODE: import.meta.env.MODE,
        // rest of the base env variables...
        VITE_EXAMPLE_VAR: import.meta.env.VITE_EXAMPLE_VAR,
        VITE_BACKEND_BASE_URL: import.meta.env.VITE_BACKEND_BASE_URL,
      };
      ```
    - `app-env-parsed.ts`:
      ```ts
      const APP_ENV_BASE_SCHEMA = z.object({
        MODE: z.string(),
        BASE_URL: z.url(),
        PROD: z.boolean(),
        DEV: z.boolean(),
        SSR: z.boolean(),
      });

      const APP_ENV_SCHEMA = z.object({
        ...APP_ENV_BASE_SCHEMA.shape,
        VITE_EXAMPLE_VAR: z.string(),
        VITE_BACKEND_BASE_URL: z.url(),
      });

      export type AppEnvParsed = z.infer<typeof APP_ENV_SCHEMA>;

      export const appEnvParsed = (): AppEnvParsed => {
        return APP_ENV_SCHEMA.parse(APP_ENV_RAW);
      };
      ```
    - `app-env.ts`:
      ```ts
      export interface AppEnv {
        readonly mode: AppEnvMode;
        readonly baseUrl: string;
        readonly prod: boolean;
        readonly dev: boolean;
        readonly ssr: boolean;
        readonly exampleVar: string;
        readonly backendBaseUrl: string;
      }

      export const appEnv = (): AppEnv => {
        const parsed = appEnvParsed();
        return envRawToEnv(parsed);
      };

      const envRawToEnv = (raw: AppEnvParsed): AppEnv => {
        return {
          mode: raw.MODE,
          baseUrl: raw.BASE_URL,
          prod: raw.PROD,
          dev: raw.DEV,
          ssr: raw.SSR,
          exampleVar: raw.VITE_EXAMPLE_VAR,
          backendBaseUrl: raw.VITE_BACKEND_BASE_URL,
        };
      };
      ```
    - Add an index file.
  - Add `env` field to context, remember to initialize it.
  - Add sample env file `.env.sample` with the two example env variables:
    ```
    VITE_EXAMPLE_VAR=example
    VITE_BACKEND_BASE_URL=http://localhost:3000
    ```
  - Add actual local env variables in `.env.local` file:
    ```
    VITE_EXAMPLE_VAR=example
    VITE_BACKEND_BASE_URL=http://localhost:3000
    ```
  - Display one of the env variables in the context example page.
  - Run `bun run format` to format the updated files.
  - Commit the changes with a message like "setup env handling and example page".
- Setup app dependencies:
  - Just create an empty dopendencies type and creator in `src/setup/app-dependencies.ts`:
    ```ts
    export interface AppDependencies {}

    export const createAppDependencies = (env: AppEnv): AppDependencies => {
      return {};
    };
    ```
  - Add any `index.ts` entries if necessary.
  - Add `dependencies` field to context value, remember to initialize it with the `createAppDependencies` function.
  - Run `bun run format` to format the updated files.
  - Commit the changes with a message like "setup app dependencies and example page".
- Setup api stub:
  - Create `src/api/` directory and `parts/` subdirectory under it.
  - Create sub files:
    - `api-config.ts`:
      ```ts
      export interface ApiConfig {
        readonly backendBaseUrl: string;
      }
      ```
    - `parts/example-api.ts`:
      ```ts
      export interface ExampleApi {
        readonly offline: () => Promise<string>;
      }

      export const createExampleApi = (config: ApiConfig): ExampleApi => {
        return {
          offline: async () => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(`This is an example response. Backend Base URL: ${config.backendBaseUrl}`);
              }, 1000);
            });
          },
        };
      };
      ```
    - Create index files for `parts`.
    - `app-api.ts`:
      ```ts
      export interface AppApi {
        readonly example: ExampleApi;
      }

      export const createAppApi = (config: ApiConfig): AppApi => {
        return {
          example: createExampleApi(config),
        };
      };
      ```
    - Create index file for `api` that exports everything inside it.
  - Update `app-dependencies.ts` to create the api and add it to the dependencies.
  - Add example usage of `offline` api function in the context example page.
  - Run `bun run format` to format the updated files.
  - Commit the changes with a message like "setup api stub and example usage".
- Expand api stub:
  - Add a new function in example api which uses `fetch` to get some data from a public api:
    - Call it `jsonPlaceholder`.
    - It should accept an `id` parameter, which is a number.
    - It should fetch data from `https://jsonplaceholder.typicode.com/posts/:id`.
    - It should return the response as json. Put type in same file.
  - Expan api example page to include that:
    - Display it in `pre` tag, pretty printed with `JSON.stringify(post, undefined, 2)`.
    - Style it with border, padding, and light gray background, and 'auto' overflow for x axis.
    - Use non-tailwind styling for this, with inline styles.
    - Use suspense etc, just like with `offline` function.
  - Run `bun run format` to format the updated files.
  - Commit the changes with a message like "expand api stub and example usage".
- Setup tailwind:
  - Install dependencies:
    - `bun add -d tailwindcss @tailwindcss/vite prettier-plugin-tailwindcss`
  - Update prettier config, add:
    ```json
    "plugins": ["prettier-plugin-tailwindcss"]
    ```
  - Update `vite.config.ts`:
    - Add import: `import tailwindcss from '@tailwindcss/vite';`
    - Add to plugins array: `tailwindcss()`
  - Update `index.css`:
    - Add `@import 'tailwindcss';`
  - Add example for tailwind usage:
    - Add stub `app/examples/tailwind-page.tsx`.
    - Add some tailwind classes to the `div`, for example: `text-2xl text-blue-500 bg-orange-200`.
  - Add route to `router.tsx`.
  - Add link to `ExamplesPage`.
  - Run `bun run format` to format the updated files.
  - Commit the changes with a message like "setup tailwind and example page".
- Setup icons:
  - Install dependencies:
    - `bun add @iconify/react`
  - Add example for icon usage:
    - Add stub `app/examples/icons-page.tsx`.
    - Add some icons to it:
      - Import `import { Icon } from '@iconify/react';`
      - Add these icons to the page:
        ```tsx
        <Icon icon='cif:hr' width='500' height='300' />
        <Icon icon='mdi:linkedin' width='48' height='48' color='#0a66c2' />
        <Icon icon='mdi:github' width='48' height='48' color='#181717' />
        <Icon icon='mdi:stackoverflow' width='48' height='48' color='#f48024' />
        ```
  - Add route to `router.tsx`.
  - Add link to `ExamplesPage`.
  - Run `bun run format` to format the updated files.
  - Commit the changes with a message like "setup icon library and example page".
- Setup storybook:
  - For reference, you can see what needs to be done by executing:
    - `bun create storybook@latest --features docs`
  - Install dependencies:
    - `bun add -d @storybook/react @storybook/addon-essentials @storybook/builder-vite @storybook/addon-interactions`
  - Initialize storybook with `npx storybook init --builder @storybook/builder-vite`.
  - Add a sample story for `Button` component:
    - Create `src/stories/Button.stories.tsx` file.
    - Add a simple button component and a story for it.
  - Run storybook with `bun run storybook`.
  - Commit the changes with a message like "setup Storybook and add sample story".
