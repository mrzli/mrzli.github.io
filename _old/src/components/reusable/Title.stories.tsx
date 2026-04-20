import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Title } from './Title';

export default {
  title: 'Components/Reusable/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Simple: ComponentStory<typeof Title> = Template.bind({});
Simple.args = {
  children: 'Title',
};
