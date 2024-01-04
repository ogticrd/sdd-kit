import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from '../components/alert';

const meta = {
  title: 'Example/Alert',
  tags: ['autodocs'],
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    text: 'This is an alert',
  },
};
