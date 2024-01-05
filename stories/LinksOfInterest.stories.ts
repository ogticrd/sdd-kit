import type { Meta, StoryObj } from '@storybook/react';

import LinksOfInterest from '../components/links-of-interest';

const meta = {
  title: 'Example/LinksOfInterest',
  tags: ['autodocs'],
  component: LinksOfInterest,
} satisfies Meta<typeof LinksOfInterest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {},
};
