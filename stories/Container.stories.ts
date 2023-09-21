import type { Meta, StoryObj } from "@storybook/react";

import { Container } from "../components/container";

const meta = {
  title: "Example/Container",
  tags: ["autodocs"],
  component: Container,
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    children: "This is a Container",
    maxWidth: "lg",
  },
};
