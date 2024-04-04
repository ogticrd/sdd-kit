import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/button";
import { Header } from "../components/header";
import Logo from "./assets/logoOGTIC.png";

const meta = {
  title: "Example/Header",
  tags: ["autodocs"],
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

const customLinks1 = Button({
  variant: "text",
  color: "info",
  children: "Link 1",
});
const customLinks2 = Button({
  variant: "text",
  color: "info",
  children: "Link 2",
});

export const base: Story = {
  args: {
    logo: Logo.src,
    customLinks: [customLinks1, customLinks2],
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
  color: "inherit",
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
