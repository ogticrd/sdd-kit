import type { Meta, StoryObj } from "@storybook/react";

import { Banner } from "../components/banner";

const meta = {
  title: "Example/Banner",
  tags: ["autodocs"],
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    img: "https://estaticos-cdn.prensaiberica.es/clip/42eda20f-8178-42bb-b8c9-b811551273e3_alta-aspect-ratio_default_0.jpg",
    children: "Contenido",
  },
};
