import type { Meta, StoryObj } from "@storybook/react";

import { CardImage } from "../components/cardImage";

const meta = {
  title: "Example/CardImage",
  tags: ["autodocs"],
  component: CardImage,
} satisfies Meta<typeof CardImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    title: "Texto de Ejemplo",
    subTitle: "Otro Texto de Ejemplo",
    children: "",
  },
};
