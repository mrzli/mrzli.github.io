import { PageContainer, Typography } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: PageContainer,
} satisfies Meta<typeof PageContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Page Title',
    children: (
      <Typography variant='body'>This is the default page content.</Typography>
    ),
  },
};
