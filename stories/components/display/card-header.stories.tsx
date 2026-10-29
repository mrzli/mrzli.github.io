import { Card, CardHeader } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { EDUCATION } from '@/content/background';

const meta = {
  component: CardHeader,
  decorators: [
    (Story) => (
      <Card padding='large'>
        <Story />
      </Card>
    ),
  ],
} satisfies Meta<typeof CardHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Workstation',
    title: 'A workstation defined as code',
  },
};

export const WithSubtitle: Story = {
  args: {
    label: 'Formal Education',
    title: EDUCATION.institution,
    subtitle: EDUCATION.qualification,
  },
};
