import { Card, Subsection } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: Subsection,
  decorators: [
    (Story) => (
      <Card padding='large'>
        <Story />
      </Card>
    ),
  ],
} satisfies Meta<typeof Subsection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Quality controls',
    paragraphs: [
      'Each project states which checks each kind of change requires.',
      'Changes are reviewed before they are merged.',
    ],
  },
};
