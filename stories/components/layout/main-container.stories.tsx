import { MainContainer } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: MainContainer,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MainContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className='h-screen bg-slate-300 dark:bg-slate-800'>Main container content.</div>
    ),
  },
};
