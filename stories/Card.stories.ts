import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../components/card";

const meta = {
  title: "Example/Card",
  tags: ["autodocs"],
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    title: "Texto de Ejemplo",
    subTitle: "Otro Texto de Ejemplo",
    children: "",
  },
};
