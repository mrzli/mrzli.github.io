import { ExternalLink } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: ExternalLink,
} satisfies Meta<typeof ExternalLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'External link',
    href: 'https://www.example.com',
  },
};

export const Highlight: Story = {
  args: {
    variant: 'highlight',
    label: 'External link',
    href: 'https://www.example.com',
  },
};
