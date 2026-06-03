# Storybook

## Notes

- For reference, you can see what needs to be done by executing:
  ```bash
   bun create storybook@latest --features docs
   ```

## Setup Storybook

- Add dependencies:
  ```bash
  bun add -d @storybook/react @storybook/addon-essentials @storybook/builder-vite @storybook/addon-interactions
  ```

- Initialize storybook with `npx storybook init --builder @storybook/builder-vite`.
- Add a sample story for `Button` component:
  - Create `src/stories/Button.stories.tsx` file.
  - Add a simple button component and a story for it.
- Run storybook with `bun run storybook`.
- Commit the changes with a message like "setup Storybook and add sample story".