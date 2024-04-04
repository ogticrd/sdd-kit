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
  args: {
    links: [
      {
        link: "Breadcrumbs 1",
        name: "Breadcrumbs 1",
      },
      {
        link: "Breadcrumbs 2",
        name: "Breadcrumbs 2",
      },
      {
        link: "Breadcrumbs 3",
        name: "Breadcrumbs 3",
      },
    ],
  },
};
