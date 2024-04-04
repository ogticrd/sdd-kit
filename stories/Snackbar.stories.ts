import type { Meta, StoryObj } from "@storybook/react";

import { Snackbar } from "../components/snackbar";

const meta = {
  title: "Example/Snackbar",
  tags: ["autodocs"],
  component: Snackbar,
} satisfies Meta<typeof Snackbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {},
};
