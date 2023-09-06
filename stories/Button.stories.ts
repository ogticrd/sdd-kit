import type { Meta, StoryObj } from "@storybook/react";

import { ButtonApp } from "../components/button";

const meta = {
  title: "Example/Button",
  tags: ["autodocs"],
  component: ButtonApp,
} satisfies Meta<typeof ButtonApp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    children: "Button",
  },
};
