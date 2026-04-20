import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SubTitle } from './SubTitle';

export default {
  title: 'Components/Reusable/Sub-Title',
  component: SubTitle,
} as ComponentMeta<typeof SubTitle>;

const Template: ComponentStory<typeof SubTitle> = (args) => (
  <SubTitle {...args} />
);

export const Simple: ComponentStory<typeof SubTitle> = Template.bind({});
Simple.args = {
  children: 'SubTitle',
};
