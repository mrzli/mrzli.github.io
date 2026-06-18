import { ThemeToggle } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: ThemeToggle,
} satisfies Meta<typeof ThemeToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
