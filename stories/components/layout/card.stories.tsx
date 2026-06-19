import { Card, Typography } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    padding: 'large',
    children: (
      <div className='flex flex-col gap-2'>
        <Typography variant='card-title-accent'>Title</Typography>
        <Typography variant='heading-2'>Subtitle</Typography>
        <Typography variant='body'>Some content</Typography>
      </div>
    ),
  },
};

export const Inner: Story = {
  args: {
    variant: 'inner',
    padding: 'small',
    children: (
      <div className='flex flex-col gap-2'>
        <Typography variant='heading-4'>Title</Typography>
        <Typography variant='body'>This is some text</Typography>
      </div>
    ),
  },
};

export const Highlight: Story = {
  args: {
    variant: 'highlight',
    padding: 'medium',
    children: (
      <div className='flex flex-col gap-2'>
        <Typography variant='heading-3'>Highlighted card</Typography>
        <Typography variant='body'>This card is highlighted</Typography>
      </div>
    ),
  },
};
