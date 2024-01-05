import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../components/typography';

const meta = {
  title: 'Example/Typography',
  tags: ['autodocs'],
  component: Typography,
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    children: 'Some text',
    variant: 'h1',
    gutterBottom: true,
  },
};
