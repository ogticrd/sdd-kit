import type { Meta, StoryObj } from "@storybook/react";

import { Menu } from "../components/menu";

const meta = {
  title: "Example/Menu",
  tags: ["autodocs"],
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    name: "Ejemplo",
    items: [
      {
        name: "Ejemplo 1",
      },
      {
        name: "Ejemplo 2",
      },
      {
        name: "Ejemplo 3",
      },
    ],
  },
};
