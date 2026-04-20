import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GmLink } from './GmLink';

const STORIES_META: ComponentMeta<typeof GmLink> = {
  component: GmLink,
  title: 'Components/Reusable/GmLink',
};

export default STORIES_META;

const Template: ComponentStory<typeof GmLink> = (args) => <GmLink {...args} />;

export const Primary: ComponentStory<typeof GmLink> = Template.bind({});
Primary.args = {
  href: 'https://google.com',
  openInNewTab: false,
  children: 'Link',
};
