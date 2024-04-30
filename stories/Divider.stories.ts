import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "../components/divider";

const meta = {
  title: "Example/Divider",
  tags: ["autodocs"],
  component: Divider,
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    children: "Texto o componente",
  },
};
