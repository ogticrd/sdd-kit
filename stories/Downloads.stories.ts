import type { Meta, StoryObj } from "@storybook/react";

import { Downloads } from "../components/downloads";

const meta = {
  title: "Example/Downloads",
  tags: ["autodocs"],
  component: Downloads,
} satisfies Meta<typeof Downloads>;

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
        name: "Ejemplo 2 con alerta",
        onClick: () => alert("Ejemplo 2 con alerta")
      },
      {
        name: "Ejemplo 3",
      },
    ],
  },
};
