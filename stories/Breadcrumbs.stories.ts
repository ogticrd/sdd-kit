import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumbs } from "../components/breadcrumbs";

const meta = {
  title: "Example/Breadcrumbs",
  tags: ["autodocs"],
  component: Breadcrumbs,
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {},
};
