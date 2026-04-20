import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SimpleText } from './SimpleText';

export default {
  title: 'Components/Reusable/Simple Text',
  component: SimpleText,
} as ComponentMeta<typeof SimpleText>;

const Template: ComponentStory<typeof SimpleText> = (args) => (
  <SimpleText {...args} />
);

export const Simple: ComponentStory<typeof SimpleText> = Template.bind({});
Simple.args = {
  children: 'SimpleText',
};
