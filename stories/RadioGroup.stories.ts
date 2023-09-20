import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup } from "../components/radioGroup";

const meta = {
  title: "Example/RadioGroup",
  tags: ["autodocs"],
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {},
};
