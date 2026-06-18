import { UnorderedListBullet } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: UnorderedListBullet,
  decorators: [
    (Story) => (
      <li className='flex'>
        <Story />
      </li>
    ),
  ],
} satisfies Meta<typeof UnorderedListBullet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
