import { Tag } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Some label',
  },
};
