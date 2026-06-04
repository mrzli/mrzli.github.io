# Storybook

## Notes

- For reference, you can see what needs to be done by executing:
  ```bash
   bun create storybook@latest --features docs
  ```

## Setup Storybook

- Add dependencies:
  ```bash
  bun add -d \
    storybook \
    @storybook/react-vite \
    @storybook/addon-docs \
    eslint-plugin-storybook
  ```

### Update `package.json`

- Add the following scripts:
  ```json
  "scripts": {
    // other scripts...
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "backport": "..."
  }
  ```

### Update Configurations

- This refers to `eslint.config.js`.
- Add required import and config:
  ```js
  // ...
  import storybook from 'eslint-plugin-storybook';
  // ...

  export default defineConfig([
    // other configs...
    ...storybook.configs['flat/recommended'],
  ]);
  ```

### Add Storybook Config Files

- Create `.storybook/` directory in the root of the project.

#### `main.ts`

- Create `.storybook/main.ts` file with the following content:
  ```ts
  import type { StorybookConfig } from '@storybook/react-vite';

  const config: StorybookConfig = {
    stories: [
      '../stories/**/*.mdx',
      '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: ['@storybook/addon-docs'],
    framework: '@storybook/react-vite',
  };

  export default config;
  ```

#### `preview.ts`

- Create `.storybook/preview.ts` file with the following content:

  ```ts
  import type { Preview } from '@storybook/react-vite';

  const preview: Preview = {
    parameters: {
      actions: {
        argTypesRegex: '^on.*',
      },
      controls: {
        matchers: {
          color: /(background|color)$/i,
          date: /Date$/i,
        },
      },
    },
  };

  export default preview;
  ```

- Add a sample story for `Button` component:
  - Create `stories/example/example-button.stories.tsx` file.
  - Use `fn()` from `storybook/test` for click handlers that should appear in the Actions panel.

### Finalize Step

- Format using `bun run format`.
- Commit with "setup storybook".
