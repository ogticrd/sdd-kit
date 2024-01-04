import type { Meta, StoryObj } from '@storybook/react';

import { Stepper } from '../components/stepper';

const meta = {
  title: 'Example/Stepper',
  tags: ['autodocs'],
  component: Stepper,
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {},
};
