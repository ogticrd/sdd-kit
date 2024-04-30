import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "../components/table";

const meta = {
  title: "Example/Table",
  tags: ["autodocs"],
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {},
};
