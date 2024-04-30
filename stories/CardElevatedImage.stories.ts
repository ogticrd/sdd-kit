import type { Meta, StoryObj } from "@storybook/react";

import { CardElevatedImage } from "../components/cardElevatedImage";

const meta = {
  title: "Example/CardElevatedImage",
  tags: ["autodocs"],
  component: CardElevatedImage,
} satisfies Meta<typeof CardElevatedImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    title: "Texto de Ejemplo",
    description: "Otro Texto de Ejemplo",
    img: "https://coetic.gob.do/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEllipse1.f7aead5e.png&w=1920&q=75",
  },
};
