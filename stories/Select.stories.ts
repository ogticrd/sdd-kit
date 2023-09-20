import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "../components/select";

const meta = {
  title: "Example/Select",
  tags: ["autodocs"],
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    // id: "id",
    // label: "Nombre",
    // variant: "outlined",
    // color: "primary",
    // args: {
    //   size: "small",
    // },
  },
};
