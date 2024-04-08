import type { Meta, StoryObj } from "@storybook/react";

import { Image } from "../components/image";

const meta = {
  title: "Example/Image",
  tags: ["autodocs"],
  component: Image,
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {},
};
