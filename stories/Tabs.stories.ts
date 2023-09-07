import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "../components/tabs";

const meta = {
  title: "Example/Tabs",
  tags: ["autodocs"],
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {},
};
