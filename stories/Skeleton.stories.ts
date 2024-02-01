import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "../components/skeleton";

const meta = {
  title: "Example/Skeleton",
  tags: ["autodocs"],
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {},
};
