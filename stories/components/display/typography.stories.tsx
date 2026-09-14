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

export const Prose: Story = {
  args: {
    variant: 'prose',
    children:
      'The integration coordinated asynchronous campaign flows between Oracle Eloqua and a messaging platform. Campaigns involved hundreds of thousands of messages, with delivery reports arriving through webhooks. Careful handling of concurrent operations and race conditions kept those flows reliable. Backend tests covered endpoints and complex asynchronous scenarios, while logging supported debugging and monitoring.',
  },
};

export const ProseParagraphs: Story = {
  args: {
    variant: 'prose',
    as: 'div',
    className: 'space-y-4',
    children: (
      <>
        <p>
          I joined an existing frontend project to improve its structure and development workflow.
          The work ranged from application-wide typing and state management changes to reusable
          components and individual screens.
        </p>
        <p>
          A component library in Storybook helped keep the interface consistent. Tests covered the
          utility code, with basic component coverage and a small number of checks for more complex
          user flows.
        </p>
      </>
    ),
  },
};
