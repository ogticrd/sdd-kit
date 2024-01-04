import type { Meta, StoryObj } from '@storybook/react';

import { GridItem } from '../components/grid';

const meta = {
  title: 'Example/GridItem',
  tags: ['autodocs'],
  component: GridItem,
} satisfies Meta<typeof GridItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    children: 'Some text',
  },
};
