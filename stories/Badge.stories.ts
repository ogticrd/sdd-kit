import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "../components/badge";

const meta = {
  title: "Example/Badge",
  tags: ["autodocs"],
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {},
};
