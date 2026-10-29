import { LinkList } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: LinkList,
} satisfies Meta<typeof LinkList>;

export default meta;

type Story = StoryObj<typeof meta>;

const LINKS = [
  { label: 'Source Code', href: 'https://www.example.com/source' },
  { label: 'Website', href: 'https://www.example.com' },
];

export const Column: Story = {
  args: {
    layout: 'column',
    links: LINKS,
  },
};

export const Row: Story = {
  args: {
    layout: 'row',
    links: LINKS,
  },
};
