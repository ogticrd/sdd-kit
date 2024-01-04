import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '../components/tabs';
import React from 'react';

const meta = {
  title: 'Example/Tabs',
  tags: ['autodocs'],
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

const tab1Content = React.createElement('div', null, 'Tab 1 content');
const tab2Content = React.createElement('div', null, 'Tab 2 content');
const tab3Content = React.createElement('div', null, 'Tab 3 content');

export const playground: Story = {
  args: {
    titles: ['Tab 1', 'Tab 2', 'Tab 3'],
    children: [tab1Content, tab2Content, tab3Content],
  },
};
