import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../components/card";
import React from "react";
import { Button } from "../components/button";

const meta = {
  title: "Example/Card",
  tags: ["autodocs"],
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

const content = [
  React.createElement("div", null, "Card content 1"),
  React.createElement("div", null, "Card content 2"),
  React.createElement("div", null, "Card content 3"),
];

const actions = [Button.call(null, { children: "Action 1" })];

export const playground: Story = {
  args: {
    content,
    actions,
  },
};
