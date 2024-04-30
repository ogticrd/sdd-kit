import type { Meta, StoryObj } from "@storybook/react";

import { CssBaseline } from "../components/cssBaseline";

const meta = {
  title: "Example/CssBaseline",
  tags: ["autodocs"],
  component: CssBaseline,
} satisfies Meta<typeof CssBaseline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {};
