import { Typography, UnorderedListItem } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: UnorderedListItem,
} satisfies Meta<typeof UnorderedListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Typography variant='body'>This is a list item</Typography>,
  },
};
