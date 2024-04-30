import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/carousel";

const meta = {
  title: "Example/Carousel",
  tags: ["autodocs"],
  component: Carousel,
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

const content = React.createElement("div", null, [
  React.createElement("h1", null, "Título"),
  React.createElement("h1", null, "Título"),
  React.createElement("h1", null, "Título"),
]);

export const playground: Story = {
  args: {
    childrens: [
      content,
      content,
      content,
      content,
      content,
      content,
      content,
      content,
      content,
      content,
    ],
    delayAutoplay: 2500,
  },
};
