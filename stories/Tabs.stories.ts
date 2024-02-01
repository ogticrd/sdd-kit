import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "../components/tabs";
import React from "react";

const meta = {
  title: "Example/Tabs",
  tags: ["autodocs"],
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

const tab1Content = React.createElement("div", null, "Contenido pestaña 1");
const tab2Content = React.createElement("div", null, "Contenido pestaña 2");
const tab3Content = React.createElement("div", null, "Contenido pestaña 3");

export const playground: Story = {
  args: {
    titles: ["Pestaña 1", "Pestaña 2", "Pestaña 3"],
    children: [tab1Content, tab2Content, tab3Content],
  },
};
