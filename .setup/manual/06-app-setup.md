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

- Update `run.tsx` to wrap the app in the context provider.
- Add an example file for context, with the necessary route and links.

### Finalize Step

- Format using `bun run format`.
- Commit with "setup app context".
