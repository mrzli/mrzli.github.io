import { Card, ProjectDetails } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { EXPERIENCE_SECTIONS } from '@/content/experience';
import { PROJECT_ITEMS } from '@/content/projects';

const meta = {
  component: ProjectDetails,
  decorators: [
    (Story) => (
      <Card padding='large'>
        <div className='flex flex-col gap-4'>
          <Story />
        </div>
      </Card>
    ),
  ],
} satisfies Meta<typeof ProjectDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

const personalProject = PROJECT_ITEMS[0];

export const PersonalProject: Story = {
  args: {
    title: personalProject.title,
    headingAs: 'h2',
    text: personalProject.text,
    tags: personalProject.tags,
    roleText: personalProject.roleText,
  },
};

const integration = EXPERIENCE_SECTIONS.flatMap((section) => section.projects).find(
  (project) => project.title === 'Oracle Eloqua to mobile messaging integration',
)!;

export const LongExperience: Story = {
  args: {
    title: integration.title,
    headingAs: 'h3',
    text: integration.text,
    tags: integration.tags,
    roleText: integration.roleText,
  },
};
