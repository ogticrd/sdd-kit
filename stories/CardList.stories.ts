import type { Meta, StoryObj } from "@storybook/react";

import { CardList } from "../components/cardList";

const meta = {
  title: "Example/CardList",
  tags: ["autodocs"],
  component: CardList,
} satisfies Meta<typeof CardList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    image: "https://developer.digital.gob.do/images/logo-ogtic-horizontal-color-black.svg",
    title: "Texto de Ejemplo",
    subTitle: "Otro Texto de Ejemplo",
    status: "Aprobado",
    tags: ["Resoluciones", "Administrativo", "Seguridad Social"]
  },
};
