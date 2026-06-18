import { Nav } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';

const meta = {
  component: Nav,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Nav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { to: '', label: 'Home' },
      { to: 'experience', label: 'Experience' },
      { to: 'skills', label: 'Skills' },
      { to: 'projects', label: 'Projects' },
      { to: 'background', label: 'Background' },
    ],
  },
};
