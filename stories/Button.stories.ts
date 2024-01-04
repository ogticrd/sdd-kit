import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/button';

const meta = {
  title: 'Example/Button',
  tags: ['autodocs'],
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    children: 'Button',
  },
};
