import type { Meta, StoryObj } from "@storybook/react";

import { Uploads } from "../components/uploads";

const meta = {
  title: "Example/Uploads",
  tags: ["autodocs"],
  component: Uploads,
} satisfies Meta<typeof Uploads>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {},
};
