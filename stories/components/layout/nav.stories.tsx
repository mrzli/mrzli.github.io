import { Nav } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';

const meta = {
  component: Nav,
  decorators: [
    (Story, context) => (
      <MemoryRouter initialEntries={[context.parameters.route ?? '/']}>
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

export const ExperienceActive: Story = {
  args: Default.args,
  parameters: { route: '/experience' },
};

export const LongPage: Story = {
  args: Default.args,
  render: (args) => (
    <div className='min-h-[200vh]'>
      <Nav {...args} />
      <p className='py-8'>Scroll to check sticky navigation. Resize to inspect the mobile menu.</p>
      <a href='#page-end' className='text-cyan-700 underline dark:text-cyan-300'>
        Jump to the final section
      </a>
      <div className='h-screen' />
      <h2 id='page-end' className='py-8'>
        Final section
      </h2>
    </div>
  ),
};
