import { ThemeToggle } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: ThemeToggle,
  parameters: {
    docs: {
      description: {
        component:
          'Uses deterministic system-theme markup during server rendering and hydration, then derives the saved preference in the browser. Cycling persists the selection when storage is available. With storage blocked, theme changes still work for the current session.',
      },
    },
  },
} satisfies Meta<typeof ThemeToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
