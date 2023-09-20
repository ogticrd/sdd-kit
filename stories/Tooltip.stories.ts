import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "../components/tooltip";

const meta = {
  title: "Example/Tooltip",
  tags: ["autodocs"],
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {},
};
