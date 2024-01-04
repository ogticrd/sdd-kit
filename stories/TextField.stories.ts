import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '../components/textField';

const meta = {
  title: 'Example/TextField',
  tags: ['autodocs'],
  component: TextField,
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    id: 'id',
    label: 'Nombre',
    variant: 'outlined',
    color: 'primary',
    args: {
      size: 'small',
    },
  },
};
