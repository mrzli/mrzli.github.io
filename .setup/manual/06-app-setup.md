# App Setup

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

- Update `run.tsx` to wrap the app in the context provider:
  ```tsx
  // ...
  import { AppContextProvider, type AppContextValue } from './context';

  export const run = async () => {
    // ...

    const value: AppContextValue = {
      // ...
    };

    const content = (
      <StrictMode>
        <AppContextProvider value={value}>
          // ....
        </AppContextProvider>
      </StrictMode>
    );

    // ...
  };
  ```

### Add Context Example File

- Call it `context-page.tsx`, under examples directory.
- Have it display the `appName` from the context.
- Example:
  ```tsx
  // ...

  export const ContextPage: FC = () => {
    const { appName } = useAppContext();

    return <div>App name from context: {appName}</div>;
  };
  ```

### Finalize Step

- Format using `bun run format`.
- Commit with "setup app context".

## Setup Envinronment Handling

- Add `zod` dependency if not already added:
  ```bash
  bun add zod
  ```

### Create `.env` Files

- Create `.env.local` and `.env.sample` files in the root of the project.
- Both should have this sample content:
  ```txt
  VITE_EXAMPLE_VAR=example
  VITE_BACKEND_BASE_URL=http://localhost:3000
  ```

### Create Env Code

- Create `app-env.ts` in `src/setup` directory:
  ```ts
  import { z } from 'zod';

  export type AppEnvMode = 'development' | 'production' | string;

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
    return envRawToEnv(APP_ENV_RAW);
  };

  interface AppEnvRaw {
    readonly MODE: AppEnvMode;
    readonly BASE_URL: string;
    readonly PROD: boolean;
    readonly DEV: boolean;
    readonly SSR: boolean;
    readonly VITE_EXAMPLE_VAR: string;
    readonly VITE_BACKEND_BASE_URL: string;
  }

  const APP_ENV_RAW: AppEnvRaw = {
    MODE: import.meta.env.MODE,
    BASE_URL: import.meta.env.BASE_URL,
    PROD: import.meta.env.PROD,
    DEV: import.meta.env.DEV,
    SSR: import.meta.env.SSR,
    VITE_EXAMPLE_VAR: import.meta.env.VITE_EXAMPLE_VAR,
    VITE_BACKEND_BASE_URL: import.meta.env.VITE_BACKEND_BASE_URL,
  };

  const APP_ENV_SCHEMA = z.object({
    MODE: z.string(),
    BASE_URL: z.string(),
    PROD: z.boolean(),
    DEV: z.boolean(),
    SSR: z.boolean(),
    VITE_EXAMPLE_VAR: z.string(),
    VITE_BACKEND_BASE_URL: z.url(),
  });

  const envRawToEnv = (raw: AppEnvRaw): AppEnv => {
    const parsed = APP_ENV_SCHEMA.parse(raw);

    return {
      mode: parsed.MODE,
      baseUrl: parsed.BASE_URL,
      prod: parsed.PROD,
      dev: parsed.DEV,
      ssr: parsed.SSR,
      exampleVar: parsed.VITE_EXAMPLE_VAR,
      backendBaseUrl: parsed.VITE_BACKEND_BASE_URL,
    };
  };
  ```
- Export it in the `index.ts` file.

### Setup Usage in App

- Add to `AppContextValue` interface:
  ```ts
  readonly env: AppEnv;
  ```
- In file that initialized the context value:
  - Import `appEnv` function.
  - Call to create env, use it in the context value.

### Example Usage

- Display one of the env variables in the `context-page.tsx`.

### Finalize Step

- Format using `bun run format`.
- Commit with "setup env".
