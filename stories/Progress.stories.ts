import type { Meta, StoryObj } from '@storybook/react';

import { Progress } from '../components/progress';

const meta = {
  title: 'Example/Progress',
  tags: ['autodocs'],
  component: Progress,
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {},
};
