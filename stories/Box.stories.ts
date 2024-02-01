import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "../components/box";

const meta = {
  title: "Example/Box",
  tags: ["autodocs"],
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    children: "Esto es una caja",
  },
};
