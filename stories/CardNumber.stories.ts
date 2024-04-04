import type { Meta, StoryObj } from "@storybook/react";

import { CardNumber } from "../components/cardNumber";

const meta = {
  title: "Example/CardNumber",
  tags: ["autodocs"],
  component: CardNumber,
} satisfies Meta<typeof CardNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    number: "1",
    description: "Texto de Ejemplo",
  },
};
