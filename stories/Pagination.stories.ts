import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "../components/pagination";

const meta = {
  title: "Example/Pagination",
  tags: ["autodocs"],
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {},
};
