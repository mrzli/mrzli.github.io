import { Card, InlineMarkdown, Typography } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';

const meta = {
  component: InlineMarkdown,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Card padding='large'>
          <Typography variant='prose'>
            <Story />
          </Typography>
        </Card>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof InlineMarkdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Links: Story = {
  args: {
    text: 'An [external link](https://www.example.com) opens in a new tab, and an [internal link](/projects/) stays on the site.',
  },
};

export const Formatting: Story = {
  args: {
    text: 'Inline formatting includes **bold**, *italics*, and `code`.',
  },
};
