import { Typography } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: Typography,
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: 'heading-1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'heading-2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'heading-3',
    children: 'Heading 3',
  },
};

export const Heading4: Story = {
  args: {
    variant: 'heading-4',
    children: 'Heading 4',
  },
};

export const PageTitle: Story = {
  args: {
    variant: 'page-title',
    children: 'Page Title',
  },
};

export const CardTitleAccent: Story = {
  args: {
    variant: 'card-title-accent',
    children: 'Card Title Accent',
  },
};

export const CardTitleMuted: Story = {
  args: {
    variant: 'card-title-muted',
    children: 'Card Title Muted',
  },
};

export const Lead: Story = {
  args: {
    variant: 'lead',
    children: 'Lead text used for introductory paragraphs.',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Body text used for general content.',
  },
};
