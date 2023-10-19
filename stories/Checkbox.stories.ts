import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "../components/checkbox";

const meta = {
  title: "Example/Checkbox",
  tags: ["autodocs"],
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    checked: true,
    onChange: (v) => {
      console.log(v);
    },
  },
};
