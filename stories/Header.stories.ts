import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "../components/header";

const meta = {
  title: "Example/Header",
  tags: ["autodocs"],
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

import Logo from "./assets/logoOGTIC.png";
import React from "react";
import { Button } from "../components/button";
import { Icon } from "@mui/material";

export const base: Story = {
  args: {
    logo: Logo.src,
    menuItems: [
      { name: "Inicio", path: "/" },
      { name: "Servicios", path: "/services" },
      { name: "Contacto", path: "/contact" },
    ],
    searchBox: {
      onSeach: (value) => console.log(value),
    },
  },
};

const customButton = Button({
  children: "Custom button",
});

export const customElements: Story = {
  args: {
    dark: true,
    logo: Logo.src,
    menuItems: [
      { name: "Inicio", path: "/" },
      { name: "Servicios", path: "/services" },
      { name: "Contacto", path: "/contact" },
    ],
    searchBox: {
      onSeach: (value) => console.log(value),
    },
    customElements: [customButton],
  },
};
