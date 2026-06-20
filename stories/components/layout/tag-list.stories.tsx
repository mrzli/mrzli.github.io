import { TagList } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: TagList,
} satisfies Meta<typeof TagList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Storybook'],
  },
};
