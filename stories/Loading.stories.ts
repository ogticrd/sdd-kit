import type { Meta, StoryObj } from "@storybook/react";

import { Loading } from "../components/loading";

const meta = {
  title: "Example/Loading",
  tags: ["autodocs"],
  component: Loading,
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {},
};
