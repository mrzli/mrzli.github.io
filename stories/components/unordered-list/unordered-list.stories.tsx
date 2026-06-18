import {
  Typography,
  UnorderedList,
  type UnorderedListProps,
} from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

const TypedUnorderedList = UnorderedList as ComponentType<
  UnorderedListProps<string>
>;

const meta = {
  component: TypedUnorderedList,
} satisfies Meta<typeof TypedUnorderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: ['Item 1', 'Item 2', 'Item 3'],
    renderItem: (item) => <Typography variant='body'>{item}</Typography>,
  },
};
