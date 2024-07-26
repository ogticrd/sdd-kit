import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "../components/accordion";
import { Button } from "../components/button";

const meta = {
  title: "Example/Accordion",
  tags: ["autodocs"],
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

const btn = Button({
  children: "Acción",
});

const el = React.createElement("div", null, [
  React.createElement("h1", null, "Título"),
  React.createElement("p", null, "Contenido"),
  btn,
]);

const options = [
  {
    title: "Titulo 1",
    subtitle: "Subtitulo 1",
    content: "Contenido 1",
  },
  {
    title: "Titulo 2",
    subtitle: "Con elementos",
    content: el,
  },
  {
    title: "Titulo 3",
    subtitle: "Subtitulo 3",
    content: "Contenido 3",
  },
  {
    title: "Titulo 4",
    subtitle: "Subtitulo 4",
    content: "Contenido 4",
  },
];

export const playground: Story = {
  args: {
    elements: options,
  },
};
