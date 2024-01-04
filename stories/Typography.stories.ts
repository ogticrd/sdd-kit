import type { Meta, StoryObj } from '@storybook/react';

import { TypographyApp } from '../components/typography';

const meta = {
  title: 'Example/Typography',
  tags: ['autodocs'],
  component: TypographyApp,
} satisfies Meta<typeof TypographyApp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    children: 'Some text',
    variant: 'h1',
    gutterBottom: true,
  },
};
