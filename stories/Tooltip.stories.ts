import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "../components/tooltip";
import { Button } from "../components/button";

const meta = {
  title: "Example/Tooltip",
  tags: ["autodocs"],
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

const customButton = Button({
  children: "Botón",
});

export const playground: Story = {
  args: {
    title: "Ejemplo de Tooltip",
    children: customButton,
  },
};
