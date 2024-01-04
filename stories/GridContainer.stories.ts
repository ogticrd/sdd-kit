import type { Meta, StoryObj } from '@storybook/react';

import { GridContainer } from '../components/grid';

const meta = {
  title: 'Example/GridContainer',
  tags: ['autodocs'],
  component: GridContainer,
} satisfies Meta<typeof GridContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    children: 'Some text',
  },
};
