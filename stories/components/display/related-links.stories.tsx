import { Card, RelatedLinks } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: RelatedLinks,
  decorators: [
    (Story) => (
      <Card padding='large'>
        <Story />
      </Card>
    ),
  ],
} satisfies Meta<typeof RelatedLinks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      { label: 'Source Code', href: 'https://www.example.com/source' },
      { label: 'Website', href: 'https://www.example.com' },
    ],
  },
};
