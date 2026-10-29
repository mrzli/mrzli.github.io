import { Card, ProseParagraphs } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: ProseParagraphs,
  decorators: [
    (Story) => (
      <Card padding='large'>
        <Story />
      </Card>
    ),
  ],
} satisfies Meta<typeof ProseParagraphs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    paragraphs: [
      'The first paragraph introduces the topic in a sentence or two.',
      'The second paragraph continues it, separated by the standard paragraph spacing.',
    ],
  },
};
