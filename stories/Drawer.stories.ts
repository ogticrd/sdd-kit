import type { Meta, StoryObj } from "@storybook/react";

import { Drawer } from "../components/drawer";

const meta = {
  title: "Example/Drawer",
  tags: ["autodocs"],
  component: Drawer,
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {},
};
